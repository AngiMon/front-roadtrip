<script>
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import CustomCard from "../../../components/dashboard/CustomCard.svelte";
  import Table from "../../../components/dashboard/Table.svelte";
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
     console.log(segment);
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
</script>

<Breadcrumb class="mb-4">
  <BreadcrumbItem active>{$_('dashboard').title}</BreadcrumbItem>
</Breadcrumb>
<CustomCard cardTitle={$_("dashboard").post.last} cardIcon="fas fa-table">
  <Table {tableData} {tableHeading} />
</CustomCard>
