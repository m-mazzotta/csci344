import React , {useState , useEffect}  from "react";
import { getDataFromServer } from "../server-requests";


export default function Stories({ token }) {
    const [stories, setStories] = useState([]);

    async function showStories(){
            const responseData = await getDataFromServer(token, "/api/stories/");
            console.log(responseData);
            setStories(responseData);
        }

         useEffect(() => {
                showStories();
            }, []);
    

    function outputStories(storiesObj){

        return (
            <div class="flex flex-col justify-center items-center" key={"stories_" + storiesObj.id}>
                <img src={storiesObj.user.thumb_url} alt="profile photo" class="rounded-full border-4 border-gray-300" />
                <p class="text-xs text-gray-500">{storiesObj.user.username}</p>
            </div>
        );

    }

    return (
        <header class="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
            {
                stories.map(outputStories)
            }
            </header>

    );

}
