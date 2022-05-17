import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Elon Musk 2",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Elon Musk 3",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Elon Musk 4",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Elon Musk 5",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    }
]

function Story(){
    return(
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(stories => (
                <StoryCard key={stories.name} name={stories.name} src={stories.src} profile={stories.profile}></StoryCard>
            ))}

        </div>
    )
}
export default Story;