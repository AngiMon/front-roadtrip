<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;

		return { slug };
	}
</script>
<script>
    import FormPost from '../../../../components/dashboard/post/FormPost.svelte';
    import PostManager from "../../../../components/dashboard/post/PostManager.svelte";
    import PostService from '../../../../services/post-service';
    import { _ } from 'svelte-i18n';

    export let slug;
    export let segment;
    segment = segment;

    let data;
    let loading = true;

</script>
{#if slug == "add" || !isNaN(slug)}
    <FormPost {slug} />
{:else if slug == "manager"}
    <PostManager />
{/if}