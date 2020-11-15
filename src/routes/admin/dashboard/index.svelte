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

  let dataTable = {
        columns:['id', 'author', 'location', 'title', 'published'],
        rows:[]
    }

  onMount(async () => {
    API.get('/post/all', {}, CookieMixin.readCookie("token_dashboard")).then(
      data => {
        if(data != 500 && data != 401){
          let rows = []

          data.forEach(element => {
              element.author = element.User.username;
              element.published = element.published ? '<i class="fas fa-check online"></i>' : '<i class="fas fa-times offline"></i>'
              rows.push(element);
              
          });

          dataTable.rows = rows;
        }
      }
    );
  })

	dictionary.set(fr);
  locale.set('fr');
</script>

<Breadcrumb class="mb-4">
  <BreadcrumbItem active>{$_('dashboard').title}</BreadcrumbItem>
</Breadcrumb>
<CustomCard cardTitle={$_("dashboard").post.last} cardIcon="fas fa-table">
  <Table {dataTable} />
</CustomCard>
