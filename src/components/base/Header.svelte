<script>
    import { _ } from 'svelte-i18n';
</script>

<header id="header">
    <h1><a href="/">{ $_("app").title }</a></h1>
    <nav class="links">
        <ul>
            <!-- <li>
                <a href="/">
                    Adipiscing
                </a>
            </li> -->
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
                <a class="fa-bars" href="#menu">
                    {$_('navbar').menu}
                </a>
            </li>
        </ul>
    </nav>
</header>