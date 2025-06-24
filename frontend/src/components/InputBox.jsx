export const InputBox = ({label, placeholder, isPassword, onChange}) => {
    return (
        <div className="my-2 w-full">
            <div className="text-black font-medium py-1 gap-1">{label}</div>
            <input type={isPassword?"password":"text"} onChange={onChange} placeholder={placeholder} className="placeholder-gray-400 text-gray-800 px-2 py-1 w-full border rounded border-slate-200"/>
        </div>
    )
}