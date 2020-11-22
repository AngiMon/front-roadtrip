<script>
    import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
    import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
    import CustomCard from "../CustomCard.svelte";
    import Post from "../../../models/Post";
    import PostService from "../../../services/post-service"
    import { _ } from 'svelte-i18n';
    import { goto } from '@sapper/app';
    import { onMount } from 'svelte';
    
    //import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

    export let slug;

    let post;
    let readOnly;
    let loading = true;
    let author;
    let ClassicEditor;
    let ckEditor;

    $: checkSlug(slug);
    $: initCkEditor(readOnly)
    

    const initCkEditor = async (readOnly) => {
        if(readOnly === false){
            const module = await import('../../../plugins/ckeditor/build/ckeditor');
            ClassicEditor = module.default;
            ckEditor != undefined ? ckEditor.destroy() : undefined;
            ckEditor = undefined;

            try{
                ckEditor = await ClassicEditor.create( document.getElementById('editor'), {
				ckfinder: {
                    uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
                },
				toolbar: {
					items: [
						'heading',
						'|',
						'bold',
						'italic',
						'link',
						'bulletedList',
						'numberedList',
						'|',
						'indent',
						'outdent',
						'|',
						'imageUpload',
						'blockQuote',
						'insertTable',
						'mediaEmbed',
						'undo',
						'redo',
						'horizontalLine',
						'fontColor',
						'code',
						'imageInsert',
						'CKFinder'
					]
				},
				language: 'fr',
				image: {
					toolbar: [
						'imageTextAlternative',
						'imageStyle:full',
						'imageStyle:side',
						'linkImage'
					]
				},
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells'
					]
				},
				licenseKey: '',
				
			});
                document.querySelector(".ck-content").ckeditorInstance.setData(post.content)
            } catch( error) {
                    console.error( error );
            }
        }
    }
    const init = async () => {
        post = {
            title : "",
            content : "<p></p>",
            location : "",
            published : false
        }

        if(!isNaN(slug)){
            let postData = await PostService.getOnePost(slug);
            post = postData.post;
            author = postData.author;
            readOnly = true;
            loading = false;
        }else{
            loading = false;
            readOnly = false;
        }

        initCkEditor(readOnly);        
    }

    const checkSlug = (slug) => {
        init();
    }

    onMount( async () => {
        init();
    });

    const SubmitAndPublish = async (param) => {
        post.published = param.publishable;
        post.content = ckEditor === undefined ? post.content : document.querySelector(".ck-content").innerHTML;
        console.log(post.content);
        let currentPost = isNaN(slug) ? new Post(post.title, post.location, post.content, post.published) : post;
        let response = isNaN(slug) ? await PostService.addPost(currentPost) : await PostService.updatePost(currentPost, slug)

        if(response.status == 409){
            goto('connexion/authentication/login');
        }else{
            goto('admin/dashboard');
        }
    }

    const Delete = async () => {
        let confirm = window.confirm("Etes-vous sûr de vouloir supprimer cet article définitivement ?");
        
        if(confirm){
            const response = await PostService.deletePost(slug);

            if(response.status == 409){
                goto('connexion/authentication/login');
            }else{
                goto('admin/dashboard');
            }
        }
    }

</script>

{#if !loading}
    <Breadcrumb class="mb-4">
        <BreadcrumbItem>
            <a href="/admin/dashboard">{$_('dashboard').title}</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>{isNaN(slug) ? $_('dashboard').post[slug] : post.title}</BreadcrumbItem>
    </Breadcrumb>

    <CustomCard cardTitle={isNaN(slug) ? $_("dashboard").post.newPost : $_("dashboard").post.consult} cardIcon="fas fa-feather">
        {#if !isNaN(slug)}
            {#if readOnly}
                <button 
                    class="btn-secondary mb-3"
                    on:click={ () => { readOnly = false }}
                >
                    {$_('app').action.activeEdit}
                </button>
            {:else}
                    <button 
                    class="btn-primary mb-3"
                    on:click={ () => {SubmitAndPublish({publishable:post.published})} }
                >
                    {$_('app').action.save}
                </button>
            {/if}
        {/if}
        <div class="form-group">
            <input 
                class="col-12 form-input" 
                name="title" 
                placeholder={$_("dashboard").post.title} 
                type="text"
                bind:value={post.title}
                readonly={readOnly}   
            >        
        </div>
        <div class="row">
            <input 
                class="col-6 form-input" 
                name="location" 
                placeholder={$_("dashboard").post.location} 
                type="text"
                bind:value={post.location}
                readonly={readOnly} 
            >
            <div class="form-group col-6">
                <input class="form-checkbox" type="checkbox" id="geolocation" name="geolocation" readonly={readOnly} disabled={readOnly} >
                <label for="geolocation">
                    <i class="fas fa-map-marker-alt"></i>
                </label>
            </div>
        </div>
        <div class="form-group">
            <textarea 
                id="editor"
                class="col-12 form-input" 
                name="content" 
                placeholder={$_("dashboard").post.content} 
                type="text"
                bind:value={post.content}
                readonly={readOnly} 
            ></textarea>
        </div>
        <div class="form-group">
            {#if isNaN(slug)}
                <button 
                    class="btn-success"
                    on:click={() =>{SubmitAndPublish({publishable: true})}}
                >
                    {$_('app').action.validate_send}
                </button>
                <button 
                    class="btn-info"
                    on:click={() =>{SubmitAndPublish({publishable: false})}}
                >
                    {$_('app').action.saveDraft}
                </button>
            {:else}
                {#if post.published}
                    <button 
                        class="btn-warning"
                        on:click={() =>{SubmitAndPublish({publishable: false})}}
                    >
                        {$_('app').action.unpublish}
                    </button>
                {:else}
                    <button 
                        class="btn-success"
                        on:click={() =>{SubmitAndPublish({publishable: true})}}
                    >
                        {$_('app').action.validate_send}
                    </button>
                {/if}
                <button 
                    class="btn-danger"
                    on:click={Delete}
                >
                    {$_('app').action.delete}
                </button>
            {/if}
        </div>
    </CustomCard>
{/if}