import React from 'react'

const Header = () => {
    return (
        <header className="text-gray-600 body-font  ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-[90vw] border-1 border-black">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                
                    <span class="mx-auto text-xl">Agrobuy</span>
                </a>
                <div className="flex items-center justify-center m-auto ">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-l-lg py-1 px-10 focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-black-100 w-[100%]"
                        placeholder="Search.."
                    />
                    <button
                        class="bg-blue-500 text-white py-1 px-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Search
                    </button>
                </div>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                    <a class="mr-5 hover:text-gray-900 mx-20">Home</a>
                    <a class="mr-5 hover:text-gray-900 mx-20">About Us</a>
                    <a class="mr-5 hover:text-gray-900 mx-20">Guidelines</a>
                    <a class="mr-5 hover:text-gray-900 mx-20">Language</a>
                    <a class="mr-5 hover:text-gray-900 mx-20">Login</a>
                </nav>
                
            </div>
        </header>
    )
}

export default Header

