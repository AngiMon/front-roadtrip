<script>
  import Container from "sveltestrap/src/Container.svelte";

  import Navbar from "../../components/dashboard/Navbar.svelte";
  import Sidebar from "../../components/dashboard/Sidebar.svelte";
  import Footer from "../../components/dashboard/Footer.svelte";
  import { fr, en } from '../../../lang/translation';
  import { _ , locale, dictionary } from 'svelte-i18n';

	dictionary.set(fr);
  locale.set('fr');

  export let segment;

  let theme = "light";
  let color = "dark";
  let title = $_('app').title;
</script>


{#if segment !== 'pages'}
  <div class="sb-nav-fixed">
    <Navbar {segment} {color} {title} />
    <div id="layoutSidenav">
      <Sidebar {segment} {theme} />
      <div id="layoutSidenav_content">
        <main>
          <Container fluid={true}>
            <slot />
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  </div>
{:else}
  <body>
    <slot />
  </body>
{/if}
