import HeaderService from "./header-service";
import API from "./Api";

const getAllPosts = async() => {
    var token = HeaderService.getTokenAnonymous();

    return await API.get('/post/all', {}, token)
		.then(data => {
			if(data != 500 && data != 401){
				return data;
			}
		});
}


const PostService={
    getAllPosts
}

export default PostService;