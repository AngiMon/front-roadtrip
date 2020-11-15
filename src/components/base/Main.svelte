<script>
	import { _, date } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import API from '../../services/Api';
	import PostService from '../../services/post-service';

	var articles = [];

	onMount(async () => {
		articles = await PostService.getAllPosts();
	})
</script>
<!-- Main -->
<div id="main">
	<!-- Post -->
	{#if articles.length > 0}
		{#each articles as article}
			{#if article.published}
				<article class="post" data-id={article.id}>
					<header>
						<div class="title">
							<h2>
								<a href="single.html">
									{article.title}
								</a>
							</h2>
							<p>
								{ article.location }
							</p>
						</div>
						<div class="meta">
							<time class="published" datetime={article.createdAt}>
								{$date(new Date(article.createdAt), { format: 'long' })}
							</time>
							<a href="toto" class="author">
								<span class="name">
									{article.User.username}
								</span>
								<img src="images/avatar.jpg" alt="" />
							</a>
						</div>
					</header>
					<a href="single.html" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
					<p>
						{ article.content }
					</p>
					<footer>
						<ul class="actions">
							<li><a href="single.html" class="button large">{$_('app').action.continueReading}</a></li>
						</ul>
						<ul class="stats">
							<li><a href="toto" class="icon solid fa-heart">0</a></li>
							<li><a href="toto" class="icon solid fa-comment">0</a></li>
						</ul>
					</footer>
				</article>
			{/if}
		{/each}
	{/if}
	<!-- Pagination -->
	<ul class="actions pagination">
		<li><a href="toto" class="disabled button large previous">{$_("main").page.previous}</a></li>
		<li><a href="toto" class="button large next">{$_("main").page.next}</a></li>
	</ul>
</div>