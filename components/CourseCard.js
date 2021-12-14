import { DotsHorizontalIcon } from '@heroicons/react/solid'
import { UserGroupIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function CourseCard() {
    return (
        <Link href="/details">
            <figure className="flex group flex-col justify-between p-4 h-[350px] cursor-pointer rounded-lg bg-white">
                <div className="flex justify-between items-center">
                    <input type="checkbox" className="h-10 cursor-pointer" id="selected" name="selected" value={true} />
                    <DotsHorizontalIcon className="cursor-pointer w-4 text-gray-500" />
                </div>
                <div className="space-y-3">
                    <span className="bg-blue-300 group-hover:bg-blue-600 group-hover:text-white p-2 text-blue-900 rounded-lg capitalize text-sm">course type</span>
                    <h1 className="text-2xl font-medium">title goes here</h1>
                    <div className="flex items-center">
                        <UserGroupIcon className="h-4 text-gray-500 mr-2" />
                        <h3>23</h3>
                    </div>
                </div>
            </figure>
        </Link>
    )
}
