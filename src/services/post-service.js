import HeaderService from "./header-service";
import API from "./Api";

const getAllPosts = async() => {
    var token = await HeaderService.getTokenAnonymous();

    return await API.get('/post/all', {}, token)
		.then(data => {
			if(data != 500 && data != 401){
				return data;
			}
		});
}

const addPost = (post) => {
    var tokenDashboard = HeaderService.getTokenDashboard();
    return API.post('/post/add', post, tokenDashboard);
}

const PostService={
    getAllPosts,
    addPost
}

export default PostService;