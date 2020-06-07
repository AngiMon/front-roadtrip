<script>
    import { _ } from 'svelte-i18n';
</script>

<header id="header">
    <h1><a href="toto">{ $_("app").title }</a></h1>
    <nav class="links">
        <ul>
            <li><a href="toto">Lorem</a></li>
            <li><a href="toto">Ipsum</a></li>
            <li><a href="toto">Feugiat</a></li>
            <li><a href="toto">Tempus</a></li>
            <li><a href="toto">Adipiscing</a></li>
        </ul>
    </nav>
    <nav class="main">
        <ul>
            <li class="search">
                <a class="fa-search" href="#search">Search</a>
                <form id="search" method="get" action="#">
                    <input type="text" name="query" placeholder="Search" />
                </form>
            </li>
            <li class="menu">
                <a class="fa-bars" href="#menu">Menu</a>
            </li>
        </ul>
    </nav>
</header>