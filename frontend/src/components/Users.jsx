import { useEffect, useState } from "react"
import { Button } from "./Button"
import { InputBox } from "./Inputbox"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [ usersList, setUsersList ] = useState([
        // {
        //     firstName: "Rohit",
        //     lastName : "Jangid",
        //     _id: 1
        // },
        // {
        //     firstName: "Harkirat",
        //     lastName : "Singh",
        //     _id: 2
        // }
    ]);
    const [filter,setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            .then( res => {
                setUsersList(res.data.user);
            })
    }, [filter]);

    return (
        <div className="flex flex-col m-4">
            <div className="h-14 flex flex-col justify-center font-bold text-lg">Users</div>
            <div className="w-full h-16 border border-gray-300 rounded-md">
                <input onChange={ (e) => {
                    setFilter(e.target.value)
                }} type="search" placeholder="Search users..." className="rounded-md w-full h-full p-2"/>
            </div>
            <div className="flex flex-col w-full py-4">
                {usersList.map( user => <User user={user} key={user._id}/> )}

            </div>
        </div>
    )
}

function User({user}){
    const navigate = useNavigate();
    return (
        <div className="flex justify-between my-2">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-300 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-l">
                        {user.firstName[0]}{user.lastName[0]}
                    </div>
                </div>
                <div className="flex flex-col h-full justify-center">
                    {user.firstName} {user.lastName}
                </div>
            </div>

            <div className="flex h-14 mr-2">
                <Button onClick={() => {
                    const id = user._id;
                    const fname = user.firstName;
                    const lname = user.lastName;
                    
                    navigate("/sendMoney?id="+id+"&fname="+fname+"&lname="+lname);
                }} text={"Send Money"}/>
            </div>
        </div>
    )
}