<script>
  import Container from "sveltestrap/src/Container.svelte";
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
  import Navbar from "../../../components/dashboard/Navbar.svelte";
  import Sidebar from "../../../components/dashboard/Sidebar.svelte";
  import Footer from "../../../components/dashboard/Footer.svelte";
  import { fr, en } from '../../../../lang/translation';
  import { _ , locale, dictionary } from 'svelte-i18n';
  import "../../../../static/sb-admin.css";
  export let segment;

	dictionary.set(fr);
  locale.set('fr');

  console.log('dashboard');
  console.log("segment = " + segment);

  let theme = "light";
  let color = "dark"; 
  let title = $_('app').title;

</script>

<sapper:styles>
		<!-- <link rel='stylesheet' href='sb-admin.css'> -->
		<!-- <link rel='stylesheet' href='sass/main.scss'> -->

</sapper:styles>
{#if segment !== 'pages'}
  <div class="sb-nav-fixed">
    <Navbar {segment} {color} {title} />
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
            <CustomCard cardTitle="DataTable Example" cardIcon="fas fa-table">
              <Table />
            </CustomCard>
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  </div>
<!-- {:else}
  <body>
    <slot />
  </body>
{/if} -->
{/if}
