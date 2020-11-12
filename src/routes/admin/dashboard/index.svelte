<script>
  import Container from "sveltestrap/src/Container.svelte";
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CustomCard from "../../../components/dashboard/CustomCard.svelte";
  import Table from "../../../components/dashboard/Table.svelte";
  import Navbar from "../../../components/dashboard/Navbar.svelte";
  import Sidebar from "../../../components/dashboard/Sidebar.svelte";
  import Footer from "../../../components/dashboard/Footer.svelte";
  import { fr, en } from '../../../../lang/translation';
  import { _ , locale, dictionary } from 'svelte-i18n';
  import "../../../../static/sb-admin.css";
  import { onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import API from '../../../services/Api';
  import CookieMixin from '../../../mixins/cookies-mixin'

  export let segment;
  let tableData = [];
  let tableHeading = ['number', 'author', 'location', 'title'];

   onMount(async () => {
    //user has already a token to dashboard access
    if(!document.cookie.includes("token_dashboard")){
      goto('connexion/authentication/login');
    }else{
      API.get('/post/all', {}, CookieMixin.readCookie("token_dashboard"))
		.then(data => {
			if(data != 500 && data != 401){
        tableData = data;
			}
		});
    }
  })

	dictionary.set(fr);
  locale.set('fr');

  let theme = "light";
  let color = "dark"; 

</script>

{#if segment !== 'pages'}
  <div class="sb-nav-fixed">
    <Navbar {color} />
    <div id="layoutSidenav">
      <Sidebar {segment} {theme} />
      <div id="layoutSidenav_content">
        <main>
          <Container fluid={true}>
            <sapper:head>
              <title>{$_('dashboard').title}</title>
            </sapper:head>
            <h1 class="mt-4">{$_('dashboard').title}</h1>
            <Breadcrumb class="mb-4">
              <BreadcrumbItem active>{$_('dashboard').title}</BreadcrumbItem>
            </Breadcrumb>
            <CustomCard cardTitle={$_("dashboard").post.last} cardIcon="fas fa-table">
              <Table {tableData} {tableHeading} />
            </CustomCard>
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  </div>
{/if}
