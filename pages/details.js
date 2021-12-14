import Head from 'next/head'
import { PencilIcon, DotsHorizontalIcon, ClockIcon, CalendarIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function details() {
    return (
        <>
        <Head> 
            <title>Course Details</title>
        </Head>
        <main className="flex">
            <div className="flex p-5"> 
                <div className="rounded-full w-10 h-10 flex items-center justify-center border-2">  
                <Link href="/">
                    <ChevronLeftIcon className="h-4 cursor-pointer text-gray-400" />
                </Link>
                </div>
                <section className="flex flex-col space-y-4 overflow-y-auto"> 
                    <header className="flex justify-between p-3"> 
                        <h1 className="font-medium text-xl">Course Details</h1>
                        <div className="flex space-x-4"> 
                            <button className="space-x-3 flex p-2 text-gray-400 items-center border-4">
                                <PencilIcon className="text-gray-400 h-4" />
                                Edit Course
                            </button>
                            <button className="flex items-center border-4 justify-center p-3"> 
                                <DotsHorizontalIcon className="text-gray-400 h-4" />
                            </button>
                        </div>
                    </header>
                    <h1 className="text-6xl">Course title</h1>
                    <div className="flex space-x-3 border-b-4 pb-5 justify-between"> 
                        <span className="bg-black text-white p-2">
                            Course Type
                        </span>
                        <div className="flex items-center"> 
                            <ClockIcon className="text-gray-400 h-4" />
                            1 hr
                        </div>
                        <div className="flex items-center">  
                            <CalendarIcon className="text-gray-400 h-4" />
                            Aug, 17th 2021
                        </div>
                    </div>
                    <article className="space-y-3 flex flex-col pb-5 border-b-4"> 
                        <h1 className="text-lg">Course Statistics</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <h2 className="text-blue-500">Read More</h2>
                    </article>
                </section>
            </div>
                <section className="flex flex-col space-y-4 min-h-screen border-l-4 p-5"> 
                <h1>Course Statistics</h1>
                <div className="flex pb-10 border-b-4">  
                    <div className="flex items-center"> 
                        <h1 className="text-green-500 text-6xl">87%</h1>
                        <p className="text-md">Success Rate</p>
                    </div>
                    <div className="flex items-center"> 
                        <h1 className="text-6xl">24</h1>
                        <p className="text-md">People Finished</p>
                    </div>
                </div>
                <div className="flex pb-10 justify-between">  
                    <div className="flex items-center"> 
                        <h1 className="text-6xl">35</h1>
                        <p className="text-md">Questions Asked</p>
                    </div>
                    <button className="text-gray-500 p-3 border-4">View Questions</button>
                </div>
                <div className="flex flex-col">   
                    <h1 className="text-lg font-bold">Taking Now</h1>
                    <ul> 
                        {
                            [...Array(5)].map((index) => (
                                <li key={index} className="flex items-center justify-between mb-5"> 
                                <div className="flex items-center space-x-3">  
                                    <Image className="rounded-full" src="https://via.placeholder.com/50" width={50} height={50}  />
                                    <div className="flex flex-col"> 
                                        <h2 className="text-lg">Student Name</h2>
                                        <p className="text-gray-400">Role at company</p>
                                    </div>  
                                </div>
                                <h3>90%</h3>
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </main>
        </>
    )
}
