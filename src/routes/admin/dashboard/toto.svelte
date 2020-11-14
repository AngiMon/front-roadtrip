<script>
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardText from "sveltestrap/src/CardText.svelte";
  import CardSubtitle from "sveltestrap/src/CardSubtitle.svelte";
  import Row from "sveltestrap/src/Row.svelte";

  import DashboardCard from "../../../components/dashboard/DashboardCard.svelte";
  import CustomCard from "../../../components/dashboard/CustomCard.svelte";
  import Table from "../../../components/dashboard/Table.svelte";
  import AreaChart from "../../../components/Charts/AreaChart.svelte";
  import BarChart from "../../../components/Charts/BarChart.svelte";
	import { _ } from 'svelte-i18n';

</script>

<!-- <sapper:head>
  <title>{$_('dashboard').title}</title>
</sapper:head>
<h1 class="mt-4">{$_('dashboard').title}</h1>
<Breadcrumb class="mb-4">
  <BreadcrumbItem active>{$_('dashboard').title}</BreadcrumbItem>
</Breadcrumb> -->
<CustomCard cardTitle="DataTable Example" cardIcon="fas fa-table">
  <!-- <Table /> -->
</CustomCard>
