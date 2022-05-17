import Story from "./Story";
import InputBox from "./InputBox";
import Posts from "./Posts";

function Feed(){
    return(
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
            <div className="mx-auto maw-w-md md:max-w-lg lg:max-w-2xl">
                <Story></Story>
                <InputBox></InputBox>
                <Posts></Posts>
            </div>
        </div>
    )
}
export default Feed;