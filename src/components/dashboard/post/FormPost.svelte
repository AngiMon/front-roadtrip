<script>
    import CustomCard from "../CustomCard.svelte";
    import { _ } from 'svelte-i18n';

</script>
<CustomCard cardTitle={$_("dashboard").post.newPost} cardIcon="fas fa-feather">
    <div class="form-group">
        <input class="col-12 form-input" name="title" placeholder={$_("dashboard").post.title} type="text">        
    </div>
    <div class="row">
        <input class="col-6 form-input" name="location" placeholder={$_("dashboard").post.location} type="text">
        
        <div class="form-group col-6">
            <input class="form-checkbox" type="checkbox" id="geolocation" name="geolocation">
            <label for="geolocation">
                <i class="fas fa-map-marker-alt"></i>
            </label>
        </div>
    </div>
    <div class="form-group">
        <textarea class="col-12 form-input" name="content" placeholder={$_("dashboard").post.content} type="text"></textarea>
    </div>
</CustomCard>