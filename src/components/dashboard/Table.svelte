<script>
  import Table from "sveltestrap/src/Table.svelte";
  import { _ } from 'svelte-i18n';

  export let tableHeading;
  export let tableData;
</script>

<Table bordered responsive>
  <thead>
    <tr>
      {#each tableHeading as heading}
        <th>{$_("dashboard").post.table[heading]}</th>
      {/each}
    </tr>
  </thead>
  <tbody>

    {#each tableData as data}
      <tr>
        <th scope="row">#{data.id}</th>
        <td>{data.User.username}</td>
        <td>{data.location}</td>
        <td>{data.title}</td>
      </tr>
    {/each}
  </tbody>
</Table>
