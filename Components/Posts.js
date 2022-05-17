import StoryCard from "./StoryCard";
import Post from "./Post";

const posts = [
    {
        name: "nyft",
        message: "Newpost",
        src: "https://links.papareact.com/4zn",
    },
    {
        name: "Elon",
        message: "Newpost",
        src: "https://links.papareact.com/4zn",
    }
]

function Posts() {
    return(
        <div>
            {posts.map(posts => (
                <Post key={posts.name} name={posts.name} src={posts.src} message={posts.message}></Post>
            ))}
        </div>
    )
}
export default Posts;