import { BiSolidLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

import PropTypes from 'prop-types';

const Blog = ({ item }) => {
    const { author, author_image, blog_image, content, date } = item;

    return (
        <div className='space-y-2 bg-white px-10 py-10 rounded-md shadow-md'>
            <div className="flex items-center justify-between pb-4">
                <div className='flex items-center gap-3 pt-2'>
                    <img className='rounded-full h-11 w-11 border border-blue-800 p-1 mt-1' src={author_image} alt="" />
                    <div>
                        <p className='font-bold text-sm'>{author}</p>
                        <p className='text-xs'>{date}</p>
                    </div>
                </div>
                <div className="mr-3 pt-2">
                    <div className="flex items-center gap-2">
                        <PiDotsThreeOutlineFill className="cursor-pointer"></PiDotsThreeOutlineFill>
                        <RxCross2 className="cursor-pointer" size={25}></RxCross2>
                    </div>
                </div>
            </div>
            <div className=' md:py-4'>
                <p className='text-xs md:text-base font-thin'>{content} <span className='text-blue-800 font-medium'>see more </span></p>
            </div>
            <div>
                <img src={blog_image} alt="" />
            </div>

            <div className="flex items-center justify-between pb-8">
                <div className="flex items-center  pt-2 px-2 md:px-4">
                    <p className=" "><BiSolidLike color="blue"></BiSolidLike></p>
                    <p><FcLike></FcLike></p>
                    <p className=" pl-1 text-xs md:text-base">10</p>
                </div>
                <div>
                    <p className="mr-3 text-xs md:text-base"><span>20</span> comments</p>
                </div>
            </div>

            <div className="border px-3"></div>
            <div className='flex items-center justify-between px-2 md:px-40'>
                <div className="flex items-center gap-1 cursor-pointer">
                    <BiLike size={20}></BiLike>
                    <p className="text-xs md:text-base"> Like</p>
                </div>
                <div className="flex items-center gap-1">
                    <FaRegComment size={20} className="pt-1"></FaRegComment>
                    <p className="text-xs md:text-base"> comment</p>
                </div>
            </div>
            <div className="border px-3"></div>

        </div>
    );
};

Blog.propTypes = {
    item: PropTypes.array
};

export default Blog;