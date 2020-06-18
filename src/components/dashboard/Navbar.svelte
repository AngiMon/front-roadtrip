<script>
  import Navbar from "sveltestrap/src/Navbar.svelte";
  import NavbarBrand from "sveltestrap/src/NavbarBrand.svelte";
  import NavbarToggler from "sveltestrap/src/NavbarToggler.svelte";
  import Nav from "sveltestrap/src/Nav.svelte";
  import NavItem from "sveltestrap/src/NavItem.svelte";
  import NavLink from "sveltestrap/src/NavLink.svelte";
  import Collapse from "sveltestrap/src/Collapse.svelte";
  import UncontrolledDropdown from "sveltestrap/src/UncontrolledDropdown.svelte";
  import DropdownToggle from "sveltestrap/src/DropdownToggle.svelte";
  import DropdownMenu from "sveltestrap/src/DropdownMenu.svelte";
  import DropdownItem from "sveltestrap/src/DropdownItem.svelte";
  import ListGroup from "sveltestrap/src/ListGroup.svelte";
  import Form from "sveltestrap/src/Form.svelte";
  import InputGroup from "sveltestrap/src/InputGroup.svelte";
  import InputGroupAddon from "sveltestrap/src/InputGroupAddon.svelte";
  import Label from "sveltestrap/src/Label.svelte";
  import Input from "sveltestrap/src/Input.svelte";
  import CustomInput from "sveltestrap/src/CustomInput.svelte";
  import Button from "sveltestrap/src/Button.svelte";

	import { _ } from 'svelte-i18n';

  export let color;

  function searchHandle() {
    event.preventDefault();
  }
</script>

<Navbar class="sb-topnav navbar-expand" {color} dark expand="md">
  <NavbarBrand href="/">
    {$_('app').title}
  </NavbarBrand>
  <Nav class="ml-auto" navbar>
    <ListGroup class="ml-auto ml-md-0">
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <i class="fas fa-user fa-fw ml-3" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <a class="dropdown-item" href="connexion/authentication/logout">
              {$_('navbar').logout}
            </a>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </ListGroup>
  </Nav>
</Navbar>
