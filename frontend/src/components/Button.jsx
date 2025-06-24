
const ButtonVariant = {
    "dark" : " hover:bg-gray-100 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    "green": "bg-green-600 text-white hover:bg-green-500"
}

const ButtonBasicStyle = " border border-gray-300 focus:outline-none  font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 w-full"
export const Button = ({text, variant, onClick}) => {
    const ButtonStyle = (ButtonVariant[variant] || ButtonVariant["dark"]) + ButtonBasicStyle;
    return (
            <button type="button" className={ButtonStyle} onClick={onClick}>
                {text}
            </button>
        
    )
}