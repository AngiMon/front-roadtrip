import HeaderService from "./header-service";
import API from "./Api";

const getAllPosts = async() => {
    var token = await HeaderService.getTokenAnonymous();

    let data = await API.get('/post/all', {}, token);
    
    if(data != 500 && data != 401){
        return data;
    }
}
const addPost = (post) => {
    var tokenDashboard = HeaderService.getTokenDashboard();
    return API.post('/post/add', post, tokenDashboard);
}
const getOnePost = async (id) => {
    var token = await HeaderService.getTokenAnonymous();
    return API.get('/post/' + id, {}, token);
}
const updatePost = (post, id) => {
    var tokenDashboard = HeaderService.getTokenDashboard();
    return API.put('/post/' + id, post, tokenDashboard);
}
const deletePost = (id) => {
    var tokenDashboard = HeaderService.getTokenDashboard();
    return API.delete('/post/' + id, {}, tokenDashboard);
}

const PostService={
    getAllPosts,
    addPost,
    getOnePost,
    updatePost,
    deletePost
}

export default PostService;