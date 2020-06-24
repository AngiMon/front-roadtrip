<script>
    import Header from '../components/base/Header.svelte';
	import Navbar from '../components/base/Navbar.svelte';
    import Sidebar from '../components/base/Sidebar.svelte';
    import { fr, en } from '../../lang/translation';
    import { _ , locale, dictionary } from 'svelte-i18n';
    export let segment;

	dictionary.set(fr);
    locale.set('fr');
    
    console.log("segment = " + segment);
</script>

{#if segment === undefined }
    <div id="wrapper">
        <Header />
        <Navbar />
        <slot />
        <Sidebar />
    </div>
{:else}
    <slot />
{/if}