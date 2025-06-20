export const Button = ({text}) => {
    return (
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100    font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 w-full">
                {text}
            </button>
        
    )
}