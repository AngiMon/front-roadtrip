<script>
	import { _ } from 'svelte-i18n';

</script>
<!-- Menu -->
<section id="menu">

	<!-- Search -->
		<section>
			<form class="search" method="get" action="#">
				<input type="text" name="query" placeholder="Search" />
			</form>
		</section>

	<!-- Links -->
		<section>
			<ul class="links">
				<li>
					<a href="toto">
						<h3>Lorem ipsum</h3>
						<p>Feugiat tempus veroeros dolor</p>
					</a>
				</li>
			</ul>
		</section>

	<!-- Actions -->
		<section>
			<ul class="actions stacked">
				<li>
					<a href="/authentication/login" class="button large fit">
						{$_('navbar').connexion}
					</a>
				</li>
			</ul>
		</section>
</section>