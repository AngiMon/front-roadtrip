<script>
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardFooter from "sveltestrap/src/CardFooter.svelte";
  import Form from "sveltestrap/src/Form.svelte";
  import FormGroup from "sveltestrap/src/FormGroup.svelte";
  import Label from "sveltestrap/src/Label.svelte";
  import Input from "sveltestrap/src/Input.svelte";
  import CustomInput from "sveltestrap/src/CustomInput.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  import { _ } from 'svelte-i18n';
  import API from '../../../services/Api';
  import HeaderService from '../../../services/header-service';
  import PostService from '../../../services/post-service';
  import CookieMixin from '../../../mixins/cookies-mixin';
  import { goto } from '@sapper/app';
	import { onMount } from 'svelte';

  var loading = true;

  function Submit(){
    let email = document.getElementsByName('email')[0].value;
    let password = document.getElementsByName('password')[0].value;

    HeaderService.tokenDeliveryForDashboard(email, password).then(
      data => {
        if(data != 500 && data != 401){
          document.cookie = "token_dashboard" +'='+ data.token + '; Path=/';
          goto('admin/dashboard');
        }        
      }
    )
  }
  onMount(async () => {
    let tokenDashboard = HeaderService.getTokenDashboard();
    //user has already a token to dashboard access
    if(tokenDashboard){
      HeaderService.tokenVerify(tokenDashboard).then( response => {
        if(response != null && response.status == 200){
          goto('admin/dashboard');
        }else{
          loading = false;
        }
      })
    }else{
      loading = false;
    }
  })
</script>

<sapper:head>
  <title>{$_('connexion').title}</title>
</sapper:head>
<div class="col-lg-5">
{#if !loading }
  <Card class="shadow-lg border-0 rounded-lg mt-5">
    <CardHeader>
      <h3 class="text-center font-weight-light my-4">{$_('connexion').login.title}</h3>
    </CardHeader>
    <CardBody>
      <Form>
        <FormGroup>
          <Label for="exampleEmail" class="small mb-1">{$_('connexion').form.email}</Label>
          <Input
            class="py-4"
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter email address" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" class="small mb-1">{$_('connexion').form.password}</Label>
          <Input
            class="py-4"
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter password" />
        </FormGroup>
        <FormGroup
          class="d-flex align-items-center justify-content-between mt-4 mb-0">
          <a class="small" href="connexion/authentication/forget_password">
            {$_('connexion').forgotten_password}
          </a>
          <button role="button" class="large button" on:click|preventDefault={Submit}>{$_('connexion').login.submit}</button>
        </FormGroup>
      </Form>
    </CardBody>
    <!-- <CardFooter class="text-center small">
      <a href="connexion/authentication/register">{$_('connexion').need_account}</a>
    </CardFooter> -->
  </Card>
{/if}
</div>
