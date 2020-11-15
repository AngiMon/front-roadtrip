<script>
    import CustomCard from "../CustomCard.svelte";
    import Post from "../../../models/Post";
    import PostService from "../../../services/post-service"
    import { _ } from 'svelte-i18n';
    import { goto } from '@sapper/app';

    let post, title, content, location;
    //export let post; //TODO for update post

    const SubmitAndPublish = () => {
        post = new Post(title, location, content, true);
        PostService.addPost(post).then( 
            response => {
                if(response.status == 409){
                    goto('connexion/authentication/login');
                }else{
                    goto('admin/dashboard');
                }
            }
        );
    }
    const SubmitAsDraft = () => {
        post = new Post(title, location, content);
        PostService.addPost(post).then( 
            response => {
                if(response.status == 409){
                    goto('connexion/authentication/login');
                }else{
                    goto('admin/dashboard');
                }
            }
        );
    }

</script>
<CustomCard cardTitle={$_("dashboard").post.newPost} cardIcon="fas fa-feather">
    <div class="form-group">
        <input 
            class="col-12 form-input" 
            name="title" 
            placeholder={$_("dashboard").post.title} 
            type="text"
            bind:value={title}    
        >        
    </div>
    <div class="row">
        <input 
            class="col-6 form-input" 
            name="location" 
            placeholder={$_("dashboard").post.location} 
            type="text"
            bind:value={location}    
        >
        <div class="form-group col-6">
            <input class="form-checkbox" type="checkbox" id="geolocation" name="geolocation">
            <label for="geolocation">
                <i class="fas fa-map-marker-alt"></i>
            </label>
        </div>
    </div>
    <div class="form-group">
        <textarea 
            class="col-12 form-input" 
            name="content" 
            placeholder={$_("dashboard").post.content} 
            type="text"
            bind:value={content}
        ></textarea>
    </div>
    <div class="form-group">
        <button 
            class="btn-success"
            on:click={SubmitAndPublish}
        >
            {$_('app').action.validate_send}
        </button>
        <button 
            class="btn-info"
            on:click={SubmitAsDraft}
        >
            {$_('app').action.saveDraft}
        </button>
    </div>
</CustomCard>