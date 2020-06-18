<script>
  import Collapse from "sveltestrap/src/Collapse.svelte";
  import Nav from "sveltestrap/src/Nav.svelte";
  import SidebarItem from "./SidebarItem.svelte";
  import { _ } from "svelte-i18n"

  export let segment;
  export let theme;
  export let color;
  console.log(segment);

  $: sidenav_theme = `sb-sidenav-${theme}`;

  let isLayoutOpen = false;
  let isPostsOpen = false;
  let isAuthenticationOpen = false;
  let isErrorOpen = false;
  let activeLink = "Dashboard";

  const updateActiveLink = linkName => (activeLink = linkName);

  const updateTheme = choice => (theme = color = choice);

  const togglePosts = () => {
    isLayoutOpen = false;
    (isPostsOpen === true) ? isPostsOpen = false : isPostsOpen = true ;
  };

  const toggleLayout = () => {
    isPostsOpen = false;
    (isLayoutOpen === true) ? isLayoutOpen = false : isLayoutOpen = true;
  };

  // const toggleAuthentication = () => {
  //   isAuthenticationOpen = !isAuthenticationOpen;
  //   if (isErrorOpen === true) isErrorOpen = false;
  // };

  // const toggleError = () => {
  //   isErrorOpen = !isErrorOpen;
  //   if (isAuthenticationOpen === true) isAuthenticationOpen = false;
  // };
</script>

<div id="layoutSidenav_nav" class="sb-nav-fixed">
  <Nav
    class="sb-sidenav {sidenav_theme} accordion sb-nav-fixed"
    id="sidenavAccordion">
    <div class="sb-sidenav-menu">
      <Nav {segment}>
        <div class="sb-sidenav-menu-heading">
          {$_("dashboard").sidebar.interface}
        </div>
        
<!-- POSTS -->
        <SidebarItem
          on:press={togglePosts}
          class={!isPostsOpen ? 'collapsed' : ''}
          text="{$_('dashboard').sidebar.posts}"
          leftIcon
          rightIcon>
          <i class="far fa-sticky-note" slot="leftIcon" />
          <i class="fas fa-angle-down" slot="rightIcon" />
        </SidebarItem>

        <Collapse isOpen={isPostsOpen}>
          <Nav {segment} class="sb-sidenav-menu-nested">
            <SidebarItem
              on:press={() => {
                updateActiveLink($_('dashboard').post.add);
              }}
              class={segment === $_('dashboard').post.add && activeLink === $_('dashboard').post.add ? 'active' : ''}
              href="dashboard/post/add"
              text="{$_('dashboard').post.add}" />
            <SidebarItem
              on:press={() => {
                updateActiveLink($_('dashboard').post.list);
              }}
              class={segment === $_('dashboard').post.list && activeLink === $_('dashboard').post.list ? 'active' : ''}
              href="dashboard/posts/list"
              text="{$_('dashboard').post.list}" />
          </Nav>
        </Collapse>

<!-- LAYOUT -->
        <SidebarItem
          on:press={toggleLayout}
          class={!isLayoutOpen ? 'collapsed' : ''}
          text="Thèmes"
          leftIcon
          rightIcon>
          <i class="fas fa-columns" slot="leftIcon" />
          <i class="fas fa-angle-down" slot="rightIcon" />
        </SidebarItem>
        
        <Collapse isOpen={isLayoutOpen}>
          <Nav class="sb-sidenav-menu-nested">
            <SidebarItem
              on:press={() => {
                theme = 'dark';
                updateActiveLink('Static Navigation');
                updateTheme(theme);
              }}
              class={segment === 'layouts' && activeLink === 'Static Navigation' ? 'active' : ''}
              text="{$_('dashboard').sidebar.theme.dark}" />
            <SidebarItem
              on:press={() => {
                theme = 'light';
                updateActiveLink('Light Sidenav');
                updateTheme(theme);
              }}
              class={segment === 'layouts' && activeLink === 'Light Sidenav' ? 'active' : ''}
              text="{$_('dashboard').sidebar.theme.light}" />
          </Nav>
        </Collapse>
      </Nav>
    </div>
  </Nav>
</div>
