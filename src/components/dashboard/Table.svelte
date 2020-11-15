<script>
  import Table from "sveltestrap/src/Table.svelte";
  import { _ } from 'svelte-i18n';

  export let dataTable;
</script>

<Table bordered responsive>
  <thead>
    <tr>
      {#each dataTable.columns as heading}
        <th>{$_("dashboard").post.table[heading]}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each dataTable.rows as data}
      <tr>
        {#each dataTable.columns as key}
          <td>
            {@html data[key]}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</Table>
