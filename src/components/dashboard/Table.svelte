<script>
  import Table from "sveltestrap/src/Table.svelte";
  import { _ } from 'svelte-i18n';
  import { Datatable, rows } from 'svelte-simple-datatables';
  import { goto } from '@sapper/app';

  export let columns;
  export let data;
  export let settings;

  const Read = (id) => {
    goto('admin/dashboard/post/' + id)
  }

</script>

<Datatable {settings} {data}>
  <thead>
      <tr>
      {#each columns as heading}
          <th>{$_("dashboard").post.table[heading]}</th>
      {/each}
      </tr>
  </thead>
  <tbody>
      {#each $rows as row}
      <tr on:click={Read(row['id'])}>
          {#each columns as heading}
              <td>{@html row[heading]}</td>
          {/each}
      </tr>
      {/each}
  </tbody>
</Datatable>
