import { Button } from "./Button"
import { InputBox } from "./Inputbox"

export const Users = ({firstName, lastName}) => {
    return (
        <div className="flex flex-col m-4">
            <div className="h-14 flex flex-col justify-center font-bold text-lg">Users</div>
            <div className="w-64 h-8">
                <input type="search" placeholder="Search users..." className="rounded-md w-full h-full p-2"/>
            </div>
            <div className="flex flex-col w-full py-4">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="rounded-full h-12 w-12 bg-slate-300 flex justify-center mt-1 mr-2">
                            <div className="flex flex-col justify-center h-full text-l">
                                RJ
                            </div>
                        </div>
                        <div className="flex flex-col h-full justify-center">
                            {firstName} {lastName}
                        </div>
                    </div>

                    <div className="flex h-14 mr-2">
                        <Button text={"Send Money"}/>
                    </div>
                </div>

            </div>
        </div>
    )
}