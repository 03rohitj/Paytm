
const HeadingType = {
    "main-heading" : "text-4xl text-black font-bold pt-6",
    "sub-heading"  : "text-lg text-slate-500 font-semibold pt-1 pb-4"
}


export const Heading = ({type, text}) => {
    const typeClass = HeadingType[type] || HeadingType["main-heading"]
    return (
        <div className="w-full flex justify-center text-center ">
            <div className={`${typeClass}`}>
                {text}
            </div>
        </div>
    )
}