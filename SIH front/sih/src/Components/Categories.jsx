import React from 'react'

const Categories = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20 ">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Buy and Sell Categories</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Find a crop that you're interested in trading for. </p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                            <div class="flex relative rounded-lg ">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://www.cento.com/images/articles/whole_grain_guide/rice.jpg" />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-transparent opacity-0 hover:opacity-100">
                                <h1 class="title-font text-2xl font-medium text-white mb-3">Rice</h1>

                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://media.sciencephoto.com/image/f0211559/800wm/F0211559-Wheat_grains.jpg" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-transparent opacity-0 hover:opacity-100 ">
                                <h1 class="title-font text-2xl font-medium text-white mb-3 mx-auto">Wheat</h1>
                                  
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://images.creativemarket.com/0.1.0/ps/2264009/1360/1024/m1/fpnw/wm1/pvnazstjtuyrsqem4l3zfivhwhtvdweb8wrvoriens0ascmyeihgvnxmzhuy7m76-.jpg?1486773052&s=da3397106c60147bb5387910a202e8b9" />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-transparent opacity-0 hover:opacity-100">
                                <h1 class="title-font text-2xl font-medium text-white mb-3">Coffee</h1>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://1.bp.blogspot.com/-rHIV8LGCPkc/T7edxn8tu_I/AAAAAAAAC94/4arKek8wZ3g/s1600/Coffee+Beans+Images+3.jpg" />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-transparent opacity-0 hover:opacity-100">
                                  
                                    <h1 class="title-font text-2xl font-medium text-white mb-3">Corn</h1>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://fthmb.tqn.com/rkDpfy39SmIM0pz0Pr_U8PX7NJ0=/5616x3744/filters:fill(auto,1)/corn-on-the-cob-170932116-585038e55f9b58a8cde310a9.jpg" />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-transparent opacity-0 hover:opacity-100">
                                   
                                    <h1 class="title-font text-2xl font-medium text-white mb-3">Corn</h1>
                            
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://cabbage.news/wp-content/uploads/2021/03/green-cabbage.jpg" />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-transparent shadow-none opacity-0 hover:opacity-100 ">

                                    <h1 class="title-font text-2xl font-medium text-white mb-3">Cabbage</h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories
