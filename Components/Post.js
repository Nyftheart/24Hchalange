import Image from "next/image";

function Post({src, name, message}){
    return(
        <div className='flex flex-col'>
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-md">
                <p className="font-medium">{name}</p>
                <p className="font-medium">{message}</p>
                <div className="relative h-56 md:h-96 bg-white">
                    <Image src={src} objectFit="cover" layout="fill"/>
                </div>
            </div>

        </div>
    )
}
export default Post;