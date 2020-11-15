class Post{
    constructor(title, location, content, published=false, id=null, author=null ){
        this.title = title;
        this.location = location;
        this.content = content;
        this.published = published;
        this.id = id;
        this.author = author;
    }
}

export default Post;