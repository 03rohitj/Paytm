import { Link } from "react-router-dom";
export const Appbar = () => {
    return (  
            <div className="flex justify-between h-14 shadow ">
                <div className=" flex flex-col font-bold justify-center text-2xl ml-4 h-full ">
                    PayTM App
                </div>
                <div className="flex">
                    <div className="flex flex-col h-full justify-center mr-4" >
                        Hello
                    </div>
                    <div className="rounded-full h-12 w-12 bg-slate-300 flex justify-center mt-1 mr-2">
                        <div className="flex flex-col justify-center h-full text-xl">
                            U
                        </div>
                    </div>
                </div>
            </div>
       
    )
}