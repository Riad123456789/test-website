import { useState } from "react";
import { useEffect } from "react";
import Blog from "./component/Blog";


const App1 = () => {

    const [Blogs, setBlogs] = useState()

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Riad123456789/test-website/main/website-Data")
            .then(res => res.json())
            .then(Data => setBlogs(Data))
    }, [])

    return (
        <div className=" bg-gray-100">
            <div className="h-20 bg-white shadow-sm shadow-slate-300 border sticky top-0">

            </div>
            <div className="  md:grid grid-cols-6 ">
                <div className="col-span-1 "> </div>
                <div className="col-span-4 mx-14 pt-8 space-y-14"> 
                    {
                        Blogs?.map((item , idx) => <Blog key={idx} item={item} ></Blog>)
                    }
                </div>
                <div className="col-span-1 "> </div>
            </div>

        </div>
    );
};

export default App1;