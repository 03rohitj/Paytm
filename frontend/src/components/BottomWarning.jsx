import { Link } from "react-router-dom"


export const BottomWarning = ({label, linkText, linkTo}) => {
    return (
        <div className="flex text-center py-2 text-black justify-center text-sm">
           <div> {label} </div>
           <Link to={linkTo} className="underline cursor-pointer pl-1">{linkText}</Link>
        </div>
    )
}