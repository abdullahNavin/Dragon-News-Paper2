import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaFacebook } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const LoginS = () => {
    return (
        <div>
            <div className="px-2 py-2">
                <div>

                    <h1 className='text-2xl font-bold'>Login With</h1>

                    <button className="flex gap-2 items-center border-2 border-[#2a81e2] p-2 rounded-full w-full my-5">
                        <FcGoogle className="text-2xl" />
                        <h1 className="text-xl font-bold text-[#2a81e2]">Login with Google</h1>
                    </button>

                    <button className="flex gap-2 items-center border-2 border-gray-600 p-2 rounded-full w-full my-5">
                        <FaGithub className="text-2xl" />
                        <h1 className="text-xl font-bold text-gray-600">Login with GitHub</h1>
                    </button>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Find us on</h1>

                    <div className="flex gap-2 items-center border-2 border-gray-400 p-2 rounded-t-md">
                        <FaTwitter className="text-2xl text-blue-400" />
                        <h1 className="text-xl font-bold">Twitter</h1>
                    </div>

                    <div className="flex gap-2 items-center border-x-2 border-gray-400 p-2">
                        <FaFacebook className="text-2xl text-blue-700" />
                        <h1 className="text-xl font-bold">Facebook</h1>
                    </div>

                    <div className="flex gap-2 items-center rounded-b-md border-2 border-gray-400 p-2">
                        <FaInstagram className="text-2xl text-red-700" />
                        <h1 className="text-xl font-bold">Instragram</h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#f3f3f3] mt-6 grid justify-center">
                <h1 className="text-2xl font-bold p-4">Q-Zone</h1>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>

        </div>
    );
};

export default LoginS;