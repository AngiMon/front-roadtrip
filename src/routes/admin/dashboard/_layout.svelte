<script>

    import Container from "sveltestrap/src/Container.svelte";
    import Card from "sveltestrap/src/Card.svelte";
    import Navbar from "../../../components/dashboard/Navbar.svelte";
    import Sidebar from "../../../components/dashboard/Sidebar.svelte";
    import Footer from "../../../components/dashboard/Footer.svelte";
    import { fr, en } from '../../../../lang/translation';
    import { _ , locale, dictionary } from 'svelte-i18n';

    export let segment;
    dictionary.set(fr);
    locale.set('fr');

    let theme = "dark";
    let color = "dark"; 
</script>

{#if segment !== 'pages'}
    <sapper:head>
        <title>{$_('dashboard').title}</title>
    </sapper:head>
    <div id="dashboard" class="sb-nav-fixed">
        <Navbar {color} />
        <div id="layoutSidenav">
            <Sidebar {segment} {theme} />
            <div id="layoutSidenav_content">
            <main>
                <Container fluid={true}>
                <h1 class="mt-4">{$_('dashboard').title}</h1>
                <slot />
                </Container>
            </main>
            <Footer />
            </div>
        </div>
    </div>
{/if}