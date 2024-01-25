"use client";

import React from "react";
// import { cn } from "@/lib/utils";
// import { Home, Plus, Search, HelpCircle, MessageSquareMore, Settings, LogOut } from "lucide-react";
// import { Button } from '@/components/ui/button';
import {
  Home,
  Plus,
  Search,
  HelpCircle,
  MessageSquareMore,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
// import { FaRegEdit } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import ChatSVG from '@/public/images/chat.svg';
import SearchSVG from "@/public/images/search.svg";
import EditIcon from "@/public/images/create@2x.png";
import FAQIcon from "@/public/images/help-outline.svg";
import SettingsIcon from "@/public/images/group-76.svg";
import ProfilePicture from "@/public/images/Profile.png";
import LogoutIcon from "@/public/images/logout@2x.png";
import LightIcon from "@/public/images/wb-sunny.svg";
import DarkIcon from "@/public/images/moon-and-stars@2x.png";
import type { NextPage } from "next";

const Sidebar: NextPage = () => {
  const pathname = usePathname();
  const title = pathname.split("/")[1];

  console.log(title);
  const router = useRouter();
  const { data: session, status } = useSession();

  const onNavigate = (url: string, pro: boolean) => {
    //TODO: Check if Pro

    return router.push(url);
  };

  return (
    <div className="self-stretch flex-1 bg-gray-100 flex flex-col items-center justify-start pt-[61px] pb-10 pr-[18px] pl-[19px] gap-[71px] text-left text-5xl text-gray-500 font-poppins border-r-[2.5px] border-solid border-ghostwhite mq450:gap-[35px] mq450:pt-[26px] mq450:pb-5 mq450:box-border mq1050:pt-10 mq1050:pb-[26px] mq1050:box-border bottom-0 left-0 top-0 relative">
      <div className="w-[314.5px] relative bg-gray-100 box-border h-[1033px] hidden border-r-[2.5px] border-solid border-ghostwhite" />
      <div className="flex flex-row items-start justify-start py-0 pr-6 pl-5">
        <div className="h-9 relative text-lg font-bold font-small inline-block z-[1] mq450:text-lgi">
          Vendile.com
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[28px]">
        <Link
          style={{
            background: title === "chat" ? "#ed5f78" : "",
          }}
          href="/chat"
          className="cursor-pointer [border:none] py-2.5 px-7 active:bg-indianred-100 self-stretch rounded-11xl flex flex-row items-center justify-start gap-[20px] z-[1] hover:bg-indianred-200 no-underline"
        >
          <div className="h-[47px] w-[273px] relative rounded-11xl bg-indianred-100 hidden text-lightslategray" />
          {/* <Image
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[3] text-lightslategray hover:text-white"
            alt="Chat Icon"
            src={ChatSVG}
          /> */}
          <MessageSquareMore style={{
            color: title === "chat" ? "#fff" : "",
          }}className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[3] text-lightslategray hover:text-white" />
          <div  style={{
            color: title === "chat" ? "#fff" : "",
          }} className="h-[27px] relative text-lg font-semibold text-lightslategray font-poppins text-left inline-block z-[2] hover:text-white">
            Chats
          </div>
        </Link>
        {/* <div className="flex flex-row items-start justify-start py-0 px-7">
          <nav className="m-0 flex flex-col items-start justify-start gap-[38px] text-left text-lg text-lightslategray font-poppins">
            <div className="w-[104px] flex flex-row items-start justify-start gap-[20px]">
              <Image
                className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[3]"
                alt="Search Icon"
                src={SearchSVG}
              />
              <input
                className="w-[calc(100%_-_22px)] [border:none] [outline:none] font-semibold font-poppins text-lg bg-[transparent] h-[27px] flex-1 relative text-lightslategray text-left inline-block min-w-[37px] z-[1]"
                placeholder="Search"
                type="text"
              />
            </div>
          </nav>
        </div> */}
        <Link
          href="/search"
          className="cursor-pointer [border:none] py-2.5 px-7 active:bg-indianred-100 self-stretch rounded-11xl flex flex-row items-center justify-start gap-[20px] z-[1] hover:bg-indianred-200 no-underline"
        >
          <div className="h-[47px] w-[273px] relative rounded-11xl bg-indianred-100 hidden text-lightslategray" />
          <Image
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[3]"
            alt="Search Icon"
            src={SearchSVG}
          />
          <div className="hh-[27px] relative text-lg font-semibold text-lightslategray font-poppins text-left inline-block z-[2] hover:text-white">
            Search
          </div>
        </Link>
        <Link
          href="/companio"
          className="cursor-pointer [border:none] py-2.5 px-7 active:bg-indianred-100 self-stretch rounded-11xl flex flex-row items-center justify-start gap-[20px] z-[1] hover:bg-indianred-200 no-underline"
        >
          <div className="h-[47px] w-[273px] relative rounded-11xl bg-indianred-100 hidden text-lightslategray" />
          <Image
            className="h-[22px] w-[22px] relative object-cover z-[3]"
            loading="eager"
            alt="Edit Icon"
            src={EditIcon}
          />
          <div className="hh-[27px] relative text-lg font-semibold text-lightslategray font-poppins text-left inline-block z-[2] hover:text-white">
            Create
          </div>
        </Link>
        <Link
          href="/faq"
          className="cursor-pointer [border:none] py-2.5 px-7 active:bg-indianred-100 self-stretch rounded-11xl flex flex-row items-center justify-start gap-[20px] z-[1] hover:bg-indianred-200 no-underline"
        >
          <div className="h-[47px] w-[273px] relative rounded-11xl bg-indianred-100 hidden text-lightslategray" />
          <Image
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[3]"
            loading="eager"
            alt="FAQ Icon"
            src={FAQIcon}
          />
          <div className="hh-[27px] relative text-lg font-semibold text-lightslategray font-poppins text-left inline-block z-[2] hover:text-white">
            FAQ
          </div>
        </Link>
        <Link
          href="/settings"
          className="cursor-pointer [border:none] py-2.5 px-7 active:bg-indianred-100 self-stretch rounded-11xl flex flex-row items-center justify-start gap-[20px] z-[1] hover:bg-indianred-200 no-underline"
        >
          <div className="h-[47px] w-[273px] relative rounded-11xl bg-indianred-100 hidden text-lightslategray" />
          <Image
            className="h-[21.9px] w-[19px] relative z-[1]"
            loading="eager"
            alt="Settings Icon"
            src={SettingsIcon}
          />
          <div className="hh-[27px] relative text-lg font-semibold text-lightslategray font-poppins text-left inline-block z-[2] hover:text-white">
            Settings
          </div>
        </Link>
        {status === "authenticated" ? (
          <Button
            className="bg-white cursor-pointer [border:none] bg-none py-2.5 px-7 active:bg-indianred-100 self-stretch rounded-11xl flex flex-row items-center justify-start gap-[20px] z-[1] hover:bg-indianred-200 no-underline"
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/sign-in`,
              })
            }
          >
            <div className="h-[47px] w-[273px] relative rounded-11xl bg-indianred-100 hidden text-lightslategray" />
            <Image
              className="h-[22px] w-[22px] relative object-cover z-[3]"
              loading="eager"
              alt=""
              src={LogoutIcon}
            />
            <div className="hh-[27px] relative text-lg font-semibold text-lightslategray font-poppins text-left inline-block z-[2] hover:text-white">
              Log Out
            </div>
          </Button>
        ) : (
          <Link
            href="/sign-in"
            className="cursor-pointer [border:none] py-2.5 px-7 active:bg-indianred-100 self-stretch rounded-11xl flex flex-row items-center justify-start gap-[20px] z-[1] hover:bg-indianred-200 no-underline"
          >
            <div className="h-[47px] w-[273px] relative rounded-11xl bg-indianred-100 hidden text-lightslategray" />
            <Image
              className="h-[21.9px] w-[19px] relative z-[1]"
              loading="eager"
              alt="Sign Icon"
              src={LogoutIcon}
            />
            <div className="hh-[27px] relative text-lg font-semibold text-lightslategray font-poppins text-left inline-block z-[2] hover:text-white">
              Sign In
            </div>
          </Link>
        )}

        {/* <div className="flex flex-row items-start justify-start py-0 px-7">
          <nav className="m-0 flex flex-col items-start justify-start gap-[38px] text-left text-lg text-lightslategray font-poppins"> */}
        {/* <div className="w-[104px] flex flex-row items-start justify-start gap-[20px]">
              <Image
                className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[3]"
                alt="Search Icon"
                src={SearchSVG}
              />
              <input
                className="w-[calc(100%_-_22px)] [border:none] [outline:none] font-semibold font-poppins text-lg bg-[transparent] h-[27px] flex-1 relative text-lightslategray text-left inline-block min-w-[37px] z-[1]"
                placeholder="Search"
                type="text"
              />
            </div> */}
        {/* <Link href="/companion" className="cursor-pointer [border:none] active:bg-indianred-100 self-stretch rounded-11xl flex flex-row items-center justify-start gap-[20px] z-[1] hover:bg-indianred-200 no-underline">
            <div className="h-[47px] w-[273px] relative rounded-11xl bg-indianred-100 hidden text-lightslategray" />
              <Image
                className="h-[22px] w-[22px] relative object-cover z-[3]"
                loading="eager"
                alt="Edit Icon"
                src={EditIcon}
              />
              <div className="h-[27px] relative font-semibold inline-block z-[1] hover:text-white">
                Create
              </div>
              
            </Link> */}
        {/* <Link href='/faq' className="cursor-pointer [border:none] flex flex-row items-center active:bg-indianred-100 hover:bg-indianred-200 justify-start gap-[20px] no-underline">
              <Image
                className="h-[22px] w-[22px] relative overflow-hidden shrink-0 z-[3]"
                loading="eager"
                alt="FAQ Icon"
                src={FAQIcon}
              />
              <div className="h-[27px] relative font-semibold inline-block z-[1] hover:text-white">
                FAQ
              </div>
            </Link>
            <Link href="/settings" className="cursor-pointer [border:none] flex flex-row items-center active:bg-indianred-100 hover:bg-indianred-200 justify-start gap-[20px] no-underline">
              <Image
                className="h-[21.9px] w-[19px] relative z-[1]"
                loading="eager"
                alt="Settings Icon"
                src={SettingsIcon}
              />
              <div className="relative font-semibold z-[1] hover:text-white">Settings</div>
            </Link>
            <div className="cursor-pointer [border:none] flex flex-row items-center active:bg-indianred-100 hover:bg-indianred-200 justify-start gap-[20px]">
              <Image
                className="h-[22px] w-[22px] relative object-cover z-[3]"
                loading="eager"
                alt=""
                src={LogoutIcon}
              />
              <div className="relative font-semibold z-[1] hover:text-white">Log out</div>
            </div>
          </nav> */}
        {/* </div> */}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0 text-sm text-gray-200">
        <div className="flex-1 flex flex-col items-end justify-start gap-[30px]">
          <div className="self-stretch rounded-mini bg-lavenderblush flex flex-col items-center justify-start pt-8 px-[19px] pb-[21px] gap-[18px] z-[3] text-lg">
            <div className="w-[268px] relative rounded-mini bg-lavenderblush h-[217px] hidden" />
            <div className="relative font-semibold z-[1]">Upgrade to Pro</div>
            <div className="relative text-base font-medium text-gray-300 text-center z-[1]">
              <p className="m-0">Get 1 month free and</p>
              <p className="m-0">unlock all pro features</p>
            </div>
            <button className="cursor-pointer [border:none] pt-[15px] pb-3.5 pr-[82px] pl-20 bg-indianred-100 rounded-11xl flex flex-row items-center justify-center z-[1] hover:bg-indianred-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[53px] w-[230px] relative rounded-11xl bg-indianred-100 hidden" />
              <div className="relative text-base font-medium font-poppins text-white text-left z-[2]">
                Upgrade
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px] text-darkslategray-100">
            <div className="flex flex-row items-center justify-start gap-[11px]">
              <Image
                className="h-[47px] w-[47px] relative rounded-[50%] object-cover z-[3]"
                loading="eager"
                alt="Profile Picture Icon"
                src={ProfilePicture}
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-semibold z-[3]">
                    Obayi Victor
                  </div>
                  <div className="relative text-3xs text-silver whitespace-nowrap z-[3]">
                    obayivictor@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-snow flex flex-row items-center justify-start gap-[24px] z-[3] text-darkgray border-[1px] border-solid border-ghostwhite">
            <div className="h-[37px] w-[270px] relative rounded-3xs bg-snow box-border hidden border-[1px] border-solid border-ghostwhite" />
            <button className="cursor-pointer py-2 pr-[47px] pl-5 bg-white rounded-3xs flex flex-row items-end justify-start gap-[16px] z-[4] border-[1px] border-solid border-ghostwhite hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-200">
              <div className="h-[37px] w-[134px] relative rounded-3xs bg-white box-border hidden border-[1px] border-solid border-ghostwhite" />
              <Image
                className="h-[18.1px] w-[19px] relative overflow-hidden shrink-0 z-[1]"
                alt="Light Icon"
                src={LightIcon}
              />
              <div className="relative text-sm font-medium font-poppins text-indianred-100 text-left z-[1]">
                Light
              </div>
            </button>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <Image
                className="h-[19px] w-[19px] relative object-cover z-[4]"
                loading="eager"
                alt="Dark Icon"
                src={DarkIcon}
              />
              <div className="relative font-medium z-[4]">Dark</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// "use client";

// import React from "react";
// import { cn } from "@/lib/utils";
// import { Home, Plus, Search, HelpCircle, MessageSquareMore, Settings, LogOut } from "lucide-react";
// import {Button} from '@/components/ui/button';
// import Link from 'next/link';
// import { FaRegEdit } from "react-icons/fa";
// import { usePathname, useRouter } from "next/navigation";
// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
// import Image from 'next/image';
// import ProfilePicture from '@/public/images/Profile.png';
// import styles from '@/styles/sidenav.module.css';

// export const Sidebar = () => {
//     const pathname = usePathname();
//     const router = useRouter();
//     const { data: session, status } = useSession();
//     const navItems = [
//         { id: 1, icon: Home, title: 'Home', href: "/", tooltip: 'Home', pro: true},
//         { id: 2, icon: MessageSquareMore, href: "/chat/new", title: 'Chat', tooltip: 'Chat', pro: true },
//         { id: 3, icon: Search, title: 'Search', href: "/search", tooltip: 'Search', pro: true },
//         { id: 4, icon: FaRegEdit, title: 'Edit', href: "/edit", tooltip: 'Edit', pro: false },
//         { id: 5, icon: HelpCircle, title: 'FAQ', href: "/faq", tooltip: 'FAQ', pro: false },
//         { id: 6, icon: Plus, title: 'Create', href: "/companion/new", tooltip: 'Companion', pro: true},
//         { id: 7, icon: Settings, title: 'Setting', href: "/settings", tooltip: 'Setting', pro: false },
// { id: 8, icon: LogOut, title: 'Log out', tooltip: 'Log out', pro: true },
// ];
// const routes = [
//     {
//         icon: Home,
//         href: "/",
//         label: "Home",
//         pro: false,
//     },
//     {
//         icon: MessageSquareMore,
//         href: "/chat/new",
//         label: "Chat",
//         pro: true,
//     },
//     {
//         icon: Search,
//         href: "/search",
//         label: "Search",
//         pro: true,
//     },
//     {
//         icon: FaRegEdit,
//         href: "/edit",
//         label: "Edit",
//         pro: false,
//     },
//     {
//         icon: HelpCircle,
//         href: "/faq",
//         label: "FAQ",
//         pro: false,
//     },
//     {
//         icon: Plus,
//         href: "/companion/new",
//         label: "Create",
//         pro: true,
//     },
//     {
//         icon: Settings,
//         href: "/settings",
//         label: "Settings",
//         pro: false,
//     },
//     {
//         icon: LogOut,
//         // href: "/settings",
//         label: "Log Out",
//         pro: true,
//     },
// ]

// const onNavigate = (url: string, pro:boolean) =>{
//     //TODO: Check if Pro

//     return router.push(url);
// }

//     return (
// <section className={styles.sidebar}>
//   <div className={styles['nav-header']}>
//     <p className={styles.logo}>Vendile</p>
//     <Home />
//   </div>
//   <div className={styles['nav-links']}>
//     {navItems.map((item) => (
//       <div className={styles.list} onClick={() => onNavigate(item.href!, item.pro)} key={item.id}>
//         <div className={`py-1 px-1 ${styles.iconsStyles} ${styles.linkStyle}`}>
//           {item.icon && React.createElement(item.icon, { className: 'h-5 w-5' })}
//           {/* <span className={styles.title}>{item.title}</span> */}
//         </div>
//         {item.href && <span className={styles.tooltip}>{item.tooltip}</span>}
//       </div>
//     ))}
//            {/* {
// status === "authenticated" ? (
// <div className={styles.profile}>
// <p className={styles['profile-picture']}>{session.user.image}</p>
// <h4>{session.user.name}</h4>
// <p>{session.user.email}</p>
// </div>
// ):(<p>{null}</p>)
//                 } */}

// {
//                status === "authenticated" ? (
// <div>
//       <Button className={`headingTwo ${styles['btn-2']}`} onClick={()=> signOut({
//         redirect: true,
//         callbackUrl: `${window.location.origin}/sign-in`,
//       })}>
//         {/* variant="destructive" */}
//         <LogOut />
//         <span className={styles.tooltip}></span>
//       </Button>
//     </div>
//                      ) : (
//  <Link href="/sign-in">Sign In</Link>
//                     )
//                 }
//     <div>
//       <div className={styles.upgrade} id="up_grade">
//         <h2 className={styles['upgrade-heading-1']}>Upgrade to Pro</h2>
//         <p className={styles['upgrade-heading-2']}>
//           Get 1 month free and <br />
//           unlock all pro features
//         </p>
//         <Button className={`headingTwo ${styles['btn-2']}`}>Button</Button>
//       </div>
//     </div>
//     <div>
//       <div className={styles.profile}>
//         <Image className={styles['profile-picture']} src={ProfilePicture} alt="user profile picture" />
//         <div className={styles['profile-name']}>
//           <h4>Obayi Victor</h4>
//           <p>obayivictor@gmail.com</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//         // <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
//         //     <div className="p-3 flex flex-1 justify-center">
//         //         <div className="space-y-2">
//         //             {routes.map((route) => (
//         //                 <div
//         //                     onClick={() => onNavigate(route.href, route.pro)}
//         //                     key={route.href}
//         //                     className={cn(
//         //                         "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
//         //                         pathname === route.href && "bg-primary/10 text-primary",
//         //                     )}
//         //                 >
//         //                     <div className="flex flex-col gap-y-2 items-center flex-1">
//         //                         <route.icon className="h-5 w-5" />
//         //                         {route.label}
//         //                     </div>
//         //                 </div>
//         //             ))}
//         //         </div>
//         //     </div>

//         // </div>
//     )
// }
