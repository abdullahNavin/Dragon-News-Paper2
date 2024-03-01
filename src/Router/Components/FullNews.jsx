import { useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { useState } from "react";
import LoginS from "./LoginS";


const FullNews = () => {

    // const [news, setnews] = useState([])

    // useEffect(() => {
    //     fetch('../news.json')
    //         .then(res => res.json())
    //         .then(data => setnews(data))
    // }, [])
    // // console.log(news);

    // const validId = news.find(singleNews => singleNews._id === id)

    // console.log(validId.author);

    // const { author, title, details, thumbnail_url, image_url, _id } = validId

    const datas = useLoaderData()
    // console.log(datas);
    const { id } = useParams()

    const validNews = datas.find(data => data._id === id)
    // console.log(validNews._id);
    const { title, author, image_url,details } = validNews

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3 p-5 border border-gray-300 rounded-md">
                    <img className="w-full" src={image_url} alt="" />
                    <h1 className="text-3xl font-bold my-7">{title}</h1>
                    <p className="text-gray-500 font-bold text-xl">{details}</p>
                </div>
                <div>
                    <LoginS></LoginS>
                </div>
            </div>
        </div>
    );
};

export default FullNews;