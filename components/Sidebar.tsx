import React from 'react';
import Image from "next/image";
import {
    HomeIcon,
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    UserIcon,
    EllipsisHorizontalCircleIcon,

} from "@heroicons/react/24/outline";
import SidebarUserInfo from './modals/SidebarUserInfo';

export default function Sidebar() {


    return (
        <nav className="h-screen hidden sm:flex flex-col sticky top-0 p-4 xl:ml-20 xl:mr-10">

            <div className="flex flex-col h-full items-center">
                {/* Logo */}
                <div className="mb-2 hover:bg-gray-200 rounded-full w-fit cursor-pointer transition flex items-center justify-center">

                    <Image
                        src="/assets/pulse.png"
                        width={56}
                        height={56}
                        alt="logo"
                        className="w-27 h-27"
                    />
                </div>
                {/* Links */}
                <ul>
                    <SidebarLink Icon={HomeIcon} text="Home" />
                    <SidebarLink Icon={HashtagIcon} text="Explore" />
                    <SidebarLink Icon={BellIcon} text="Notifications" />
                    <SidebarLink Icon={InboxIcon} text="Messages" />
                    <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
                    <SidebarLink Icon={UserIcon} text="Profile" />
                    <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
                    <button className="hidden xl:block bg-[#C40E4C] w-[200px] h-[52px]
                    rounded-full text-white font-medium cursor-pointer shadow-md mt-2
                    ">
                        Pulsate
                    </button>
                </ul>

                <SidebarUserInfo />
            </div>
        </nav >
    );
}

interface SidebarLinkProps {
    text: string;
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
    >;
}

function SidebarLink({ text, Icon }: SidebarLinkProps) {
    return (
        <li className="flex items-center text-xl mb-2 cursor-pointer hover:text-blue-500 transition-colors duration-200 space-x-3 p-2.5">
            <Icon className="h-7 w-7" />
            <span className="hidden xl:block ml-2">{text}</span>
        </li>
    );
}