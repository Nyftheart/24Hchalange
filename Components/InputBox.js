import { EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {useRef} from "react";
import {app} from "../firebase";



function InputBox(){

    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const sendPost = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;

        app.constructor('posts').add({
            message: inputRef.current.value,
            name: "admin",
            email: "admin@admin.com",

        });

        inputRef.current.value = "";
    };



    return(
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4">
                <form className="flex flex-1">
                    <input ref={inputRef} className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder={`Le Nouvelle event, Va s'y partage le`}/>
                    <button hidden type='submit' onClick={sendPost}>Envoyer</button>
                </form>
            </div>
            <div className=" flex justify-evenly p-3 border-t">
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live vidéo</p>
                </div>

                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <CameraIcon className="h-7 text-green-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Vidéo</p>
                    <input  type="file" hidden/>
                </div>

                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <EmojiHappyIcon className="h-7 text-yellow-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Activité</p>
                </div>
            </div>
        </div>
    )
}
export default InputBox;