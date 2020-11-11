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
  import { goto } from '@sapper/app';
	import { onMount } from 'svelte';

  var loading = true;

  function Submit(){
    let email = document.getElementsByName('email')[0].value;
    let password = document.getElementsByName('password')[0].value;

    API.post('auth/token-delivery', {
      email: 'admin@toto.fr',
      password: 'root'
      })
    .then(data => {
      if(data != 500 && data != 401){
          API.post('auth/account/token-delivery', {email: email, password: password}, data.token).then((data) => {
          document.cookie = "token_dashboard="+data.token;
          goto('admin/dashboard');
        })
      }
    })
  }
  onMount(async () => {
    //user has already a token to dashboard access
    if(document.cookie.includes("token_dashboard")){
      goto('admin/dashboard');
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
        <!-- <FormGroup>
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox"
            label="Remember password" />
        </FormGroup> -->
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
