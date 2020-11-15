<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;

		return { slug };
	}
</script>
<script>
    import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
    import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
    import FormPost from '../../../../components/dashboard/post/FormPost.svelte';
    import PostManager from "../../../../components/dashboard/post/PostManager.svelte";
    import { _ } from 'svelte-i18n';

    export let slug;

    let post;

</script>
<Breadcrumb class="mb-4">
  <BreadcrumbItem>
    <a href="/admin/dashboard">{$_('dashboard').title}</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>{$_('dashboard').post[slug]}</BreadcrumbItem>
</Breadcrumb>

{#if slug == "add"}
    <FormPost {post} />
{:else if slug == "manager"}
    <PostManager />
{/if}