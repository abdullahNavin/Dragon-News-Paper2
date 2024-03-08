import { FaBookmark } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const News = ({ news }) => {
    const { author, title, details, image_url, _id } = news
    return (
        <div className="mt-7 border border-gray-300 pb-4 rounded-md">
            <div className="bg-gray-200 flex justify-between p-5">
                <div className="flex gap-4 items-center">
                    <img className="w-[40px] h-[40px] rounded-full" src={author.img} alt="" />
                    <div>
                        <h1 className="text-xl font-semibold">{author.name}</h1>
                        <p className="text-gray-400">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-2xl">
                    <FaBookmark className="text-black" />
                    <BsShareFill className="text-blue-500" />
                </div>
            </div>

            <div className="mt-5 px-2">
                <h1 className="text-2xl font-bold my-5">{title}</h1>
                <img src={image_url} alt="" />
            </div>

            <div className="px-2 text-xl mt-5 text-gray-600">
                <p className="mb-4">{details.slice(0, 200)}...<Link to={`/FullNews/${_id}`}>
                    <span
                        className="text-red-800 font-bold cursor-pointer">Read more
                    </span>
                </Link>
                </p>
                <hr />
                <div className="mt-5">
                    <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />,
                </div>
            </div>
        </div>
    );
};

export default News;