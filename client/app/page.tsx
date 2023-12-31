"use client"
import GoalDashboard from '@/components/GoalDashboard'
import { GoalsMenu } from '@/components/GoalsMenu'
import { NavigationMenuDemo } from '@/components/NavigationMenuDemo'
import { TabsDemo } from '@/components/TabsDemo'

export default function Home() {
  return (
    <>
    <div className="flex justify-center py-4 border-b-2">
       <NavigationMenuDemo/>
    </div>
    <div className="">
    {/* eslint-disable-next-line @next/next/no-img-element*/}
    <img
    src="https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png"
    alt="banner"
    className="object-cover max-h-96 w-full"
    />
        <div className="justify-center items-center">
            {/* <TabsDemo/> */}
            {/* <GoalsMenu /> */}
            <GoalDashboard/>
        </div>
    </div>
    </>
  )
}
