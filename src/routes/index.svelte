
<script>
    import Header from '../components/base/Header.svelte';
	import Navbar from '../components/base/Navbar.svelte';
    import Sidebar from '../components/base/Sidebar.svelte';
	import Main from '../components/base/Main.svelte'
	import { _ } from 'svelte-i18n';	
	import { onMount } from 'svelte';
    import jQuery from '../../static/scripts/fo/jquery';
	import '../../static/fontawesome-all.min.css';
	import '../../static/main.css';

	onMount(async () => {
		if (!window.jQuery) window.jQuery = jQuery
			// js dependencies
			await import("../../static/scripts/fo.js");
      });
</script>

<sapper:head>
  <title>{$_('app').title}</title>
</sapper:head>

<div id="wrapper">
	<Header />
	<Navbar />
	<Main />
	<Sidebar />
</div>