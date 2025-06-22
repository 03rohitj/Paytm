
import { Heading } from "../components/Heading"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export const Dashboard = () => {
    return (
        <div className="flex justify-center p-5">
            <div className="flex flex-col w-3/4 h-dvh">
                <Appbar/>
                <Balance value={"10,000"}/>
                <Users />
            </div>
        </div>
    )
}