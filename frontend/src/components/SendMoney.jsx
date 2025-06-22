import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./Inputbox"

export const SendMoney = () => {
    return (
        <div className=' flex min-h-[100dvh] bg-slate-300 items-center justify-center'>
            <div className='flex flex-col bg-white w-96  justify-center p-3 rounded-lg'>
                <Heading text={"Send Money"} type={"main-heading"}/>
                <div className="flex mt-10">
                    <div className="rounded-full h-12 w-12 bg-green-600 text-white flex justify-center mt-1 mr-2">
                        <div className="flex flex-col justify-center h-full">
                            RJ
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        Rohit Jangid
                    </div>
                </div>
                <InputBox label={"Amount (in Rs)"} placeholder={"Enter amount"}/> 
                <div>
                    <Button text={"Initiate Transfer"} variant={"green"}/>
                </div>
            </div>
        </div>
    )
}