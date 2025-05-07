import React , {useState , useEffect} from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
     const [profile, setProfile] = useState({});

    async function showProfile(){
        const responseData = await getDataFromServer(token, "/api/profile/");
        console.log(responseData);

        setProfile(responseData);
    }

       //only want to run a function once
        useEffect(() => {
            showProfile();
        }, []);


    return (
            //   {/* profile */}
            //<div class="fixed top-[100px] left-[63vw] w-70 hidden md:block max-w-[300px]">
                <header class="flex gap-4 items-center">
                <img src={profile.thumb_url} alt="profile photo" class="rounded-full w-16" />
                <h2 class="font-Comfortaa font-bold text-2xl">{profile.username}</h2>
                </header>
            //</div>

    );

}
