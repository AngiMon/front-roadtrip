<script>
	import '../../static/fontawesome-all.min.css';
	import '../../static/main.css';
	import { _ } from 'svelte-i18n';
	export let status;

const dev = process.env.NODE_ENV === 'development';
</script>

<sapper:head>
	<title>{$_('app').error[status].title}</title>
</sapper:head>

<div id="notfound">
	<div class="notfound">
		<div class="notfound-404">
			<div></div>
			<h1>{status}</h1>
		</div>
		<h2>{$_('app').error[status].message}</h2>
		<p>{$_('app').error[status].details}</p>
		<a class="button large" href=".">{$_('app').error.goToHome}</a>
	</div>
</div>