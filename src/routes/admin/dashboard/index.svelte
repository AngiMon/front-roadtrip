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
  import PostService from '../../../services/post-service';
  import CookieMixin from '../../../mixins/cookies-mixin'

  const settings = { 
      sortable: true,
      pagination: false,
      scrollY: true,
      rowPerPage: 10,
      columnFilter: false,
      css: false,
      labels: {
          search: 'Search...',    // search input placeholer
          filter: 'Filter',       // filter inputs placeholder
          noRows: 'No entries to found',
          info: '[{start} - {end}] / {rows}',
          previous: '<',
          next: '>',       
      },
      blocks: {
          searchInput: false, 
          paginationButtons: false,
          paginationRowCount: false,
      }
  };
  const columns = ['id', 'author', 'location', 'title', 'published'];
  let data = [];
  let loading = true;

  onMount(async () => {
    const posts = await API.get('/post/all', {}, CookieMixin.readCookie("token_dashboard"))
    if(posts != 500 && posts != 401){
      let rows = []

      for(let i = 0; i < 3; i++){
        let post = posts[i];
        post.author = post.User.username;
        post.published = post.published ? '<i class="fas fa-check online"></i>' : '<i class="fas fa-times offline"></i>'
        data.push(post);
      }

      loading = false;
    }
  });

	dictionary.set(fr);
  locale.set('fr');
</script>

<Breadcrumb class="mb-4">
  <BreadcrumbItem active>{$_('dashboard').title}</BreadcrumbItem>
</Breadcrumb>
<CustomCard cardTitle={$_("dashboard").post.last} cardIcon="fas fa-table">
  {#if !loading}
    <Table {columns} {data} {settings} />
  {/if}
</CustomCard>
