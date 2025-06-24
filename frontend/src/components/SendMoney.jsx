import { useSearchParams } from "react-router-dom"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./Inputbox"
import { useState } from "react"
import axios from "axios"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const fname = searchParams.get("fname");
    const [amount, setAmount] = useState(0);

    return (
        <div className=' flex min-h-[100dvh] bg-slate-300 items-center justify-center'>
            <div className='flex flex-col bg-white w-96  justify-center p-3 rounded-lg'>
                <Heading text={"Send Money"} type={"main-heading"}/>
                <div className="flex mt-10">
                    <div className="rounded-full h-12 w-12 bg-green-600 text-white flex justify-center mt-1 mr-2">
                        <div className="flex flex-col justify-center h-full">
                            {fname[0]}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        {fname}
                    </div>
                </div>
                <InputBox onChange={ e => {
                    setAmount(e.target.value)
                }} label={"Amount (in Rs)"} placeholder={"Enter amount"}/> 
                <div>
                    <Button onClick={async () => {
                        const res = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                            to: id,
                            amount
                        },{
                            headers: {
                                "Authorization": `Bearer ${localStorage.getItem("token")}`
                            }
                        });

                        
                    }} text={"Initiate Transfer"} variant={"green"}/>
                </div>
            </div>
        </div>
    )
}