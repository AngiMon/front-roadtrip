<script>
    import CustomCard from "../CustomCard.svelte";
    import { onMount } from 'svelte';
    import API from '../../../services/Api';
    import CookieMixin from '../../../mixins/cookies-mixin'
    import { _ } from 'svelte-i18n';
    import { Datatable, rows } from 'svelte-simple-datatables';

    const settings = { 
        sortable: true,
        pagination: true,
        scrollY: true,
        rowPerPage: 10,
        columnFilter: false,
        css: false,
        labels: {
            search: 'Search...',    // search input placeholer
            filter: 'Filter',       // filter inputs placeholder
            noRows: 'No entries to found',
            info: '[{start} - {end}] / {rows}',
            previous: '<',
            next: '>',       
        },
        blocks: {
            searchInput: true, 
            paginationButtons: true,
            paginationRowCount: true,
        }
    };
    let loading = true;
    let dataTable = {
        columns:['id', 'author', 'location', 'title', 'published'],
        rows:[]
    };
    let data=[];

    onMount(async () => {
        API.get('/post/all', {}, CookieMixin.readCookie("token_dashboard")).then(
        res => {
            if(res != 500 && res != 401){
                let rows = []

                res.forEach(element => {
                    element.author = element.User.username;
                    element.published = element.published ? '<i class="fas fa-check online"></i>' : '<i class="fas fa-times offline"></i>'
                    rows.push(element);
                    
                });

                dataTable.rows = rows;
                loading = false;
                data = dataTable.rows;
        console.log(data);
            }
        });
        
    })

</script>
{#if !loading}
    <CustomCard cardTitle={$_("dashboard").post.manager} cardIcon="fas fa-feather">
        <Datatable {settings} {data}>
        <thead>
            <tr>
            {#each dataTable.columns as heading}
                <th>{$_("dashboard").post.table[heading]}</th>
            {/each}
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
            <tr>
                <td>{row.id}</td>
                <td>{row.author}</td>
                <td>{row.location}</td>
                <td>{row.title}</td>
                <td>{@html row.published}</td>
            </tr>
            {/each}
        </tbody>
        </Datatable>
    </CustomCard>
{/if}
