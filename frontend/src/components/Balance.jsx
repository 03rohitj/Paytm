export const Balance = ({value}) => {
    return (
        <div className="flex h-14">
            <div className="flex flex-col h-full justify-center ml-4 text-lg">
                You balance :
            </div>
            <div className="flex flex-col h-full justify-center ml-4 text-lg">
                Rs. {value}
            </div>
        </div>
    )
}