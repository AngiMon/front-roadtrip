<script>
    import { _ } from 'svelte-i18n';
</script>
<!-- Sidebar -->
<section id="sidebar">

	<!-- Intro -->
		<section id="intro">
			<a href="toto" class="logo"><img src="images/logo.jpg" alt="" /></a>
			<header>
				<h2>{$_("sidebar").title}</h2>
				<p>{$_("sidebar").description}</p>
			</header>
		</section>

	<!-- Mini Posts -->
		<section>
			<div class="mini-posts">
				<!-- Mini Post -->
				<article class="mini-post">
					<header>
						<h3><a href="single.html">Vitae sed condimentum</a></h3>
						<time class="published" datetime="2015-10-20">October 20, 2015</time>
						<a href="toto" class="author"><img src="images/avatar.jpg" alt="" /></a>
					</header>
					<a href="single.html" class="image"><img src="images/pic04.jpg" alt="" /></a>
				</article>
			</div>
		</section>

	<!-- Posts List -->
		<section>
			<ul class="posts">
				<li>
					<article>
						<header>
							<h3><a href="single.html">Lorem ipsum fermentum ut nisl vitae</a></h3>
							<time class="published" datetime="2015-10-20">October 20, 2015</time>
						</header>
						<a href="single.html" class="image"><img src="images/pic08.jpg" alt="" /></a>
					</article>
				</li>
			</ul>
		</section>

	<!-- About 
		<section class="blurb">
			<h2>About</h2>
			<p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
			<ul class="actions">
				<li><a href="toto" class="button">Learn More</a></li>
			</ul>
		</section>-->

	<!-- Footer -->
		<section id="footer">
			<ul class="icons">
				<li><a href="toto" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
				<li><a href="toto" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
				<li><a href="toto" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
				<li><a href="toto" class="icon solid fa-rss"><span class="label">RSS</span></a></li>
				<li><a href="toto" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
			</ul>
			<p class="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
		</section>

</section>