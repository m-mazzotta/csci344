import React from "react";
import NavBar from "./NavBar";
import { ColorPicker , Image , Spin , Card } from 'antd'
import MyCalendar from "./MyCalendar";

// custom components:
export default function App() {
    return (
        <>
            <NavBar />


            <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
                <p>Put your design system components in the space below...</p>
                <ColorPicker defaultValue = "#e5c4f4"/>

            <div>
                <Spin />
             </div>

             <div>
            <MyCalendar />
            </div>

             <div>

             <Card style={{ width: 300 }}>
                <p>(づ｡◕‿‿◕｡)づ</p>
                <p>U・ᴥ・U</p>
                <p>(ㅇㅅㅇ❀)</p>
            </Card>
             </div>

                <h2 className="font-Comfortaa my-4 font-bold text-xl">
     Photo Gallery
 </h2>
 <div className="flex flex-wrap content-start">
     <Image
         src="https://picsum.photos/600/600?id=1"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=2"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=3"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=4"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=5"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=6"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=7"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=8"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=9"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=10"
         width={200}
     />
 </div>
            </main>

            <footer className="p-5 bg-white">footer goes here</footer>
        </>
    );
}
