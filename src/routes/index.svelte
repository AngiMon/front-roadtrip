<script>

	import Header from '../components/base/Header.svelte';
	import Main from '../components/base/Main.svelte';
	import Navbar from '../components/base/Navbar.svelte';
	import Sidebar from '../components/base/Sidebar.svelte';
	import { fr, en } from '../../lang/translation';
	import { _ , locale, dictionary } from 'svelte-i18n';

	dictionary.set(fr);
    locale.set('fr');
    
    console.log('index');
	
</script>

<svelte:head>
  <title>{$_('app').title}</title>
  <link rel="stylesheet" href="assets/css/main.css" />
</svelte:head>
<!-- Wrapper -->
<div id="wrapper">
	<Header />
	<Navbar />
	<Main />
	<Sidebar />


	<!-- Template Scripts -->
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/browser.min.js"></script>
	<script src="assets/js/breakpoints.min.js"></script>
	<script src="assets/js/util.js"></script>
	<script src="assets/js/main.js"></script>
</div>