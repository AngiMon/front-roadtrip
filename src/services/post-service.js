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

const getOnePost = async (id) => {
    var token = await HeaderService.getTokenAnonymous();
    return API.get('/post/' + id, {}, token);
}

const PostService={
    getAllPosts,
    addPost,
    getOnePost
}

export default PostService;