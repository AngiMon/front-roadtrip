<script>
	console.log('root');

	import Main from '../components/base/Main.svelte'
	import { _ } from 'svelte-i18n';	
	import { onMount } from 'svelte';
	import jQuery from '../../static/scripts/fo/jquery';
	import '../../static/fontawesome-all.min.css';
	import '../../static/main.css';

	onMount(async () => {
		if (!window.jQuery) window.jQuery = jQuery
			// css and js dependencies
			await import("../../static/scripts/fo.js");
	  console.log('index');

	  });
</script>
<sapper:head>
  <title>{$_('app').title}</title>
</sapper:head>

<Main />