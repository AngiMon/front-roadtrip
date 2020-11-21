<script>
    import CustomCard from "../CustomCard.svelte";
    import { onMount } from 'svelte';
    import API from '../../../services/Api';
    import CookieMixin from '../../../mixins/cookies-mixin'
    import { _ } from 'svelte-i18n';
    import Table from '../Table.svelte';

    const settings = { 
        sortable: true,
        pagination: true,
        scrollY: true,
        rowPerPage: 10,
        columnFilter: false,
        css: false,
        labels: {
            search: 'Search...',
            filter: 'Filter',
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
    let columns = ['id', 'author', 'location', 'title', 'published'];
    let data=[];

    onMount(async () => {
        let posts = await API.get('/post/all', {}, CookieMixin.readCookie("token_dashboard"));
        if(posts != 500 && posts != 401){
            posts.forEach(post => {
                post.author = post.User.username;
                post.published = post.published ? '<i class="fas fa-check online"></i>' : '<i class="fas fa-times offline"></i>'
                data.push(post);
            });
            
            loading = false;
        }
    })

</script>
{#if !loading}
<CustomCard cardTitle={$_("dashboard").post.manager} cardIcon="fas fa-feather">
    <Table {data} {columns} {settings} />
</CustomCard>
{/if}
