import Image from "next/image"
import Link from "next/link"
import { Companion } from "@prisma/client"
import { MessagesSquare } from "lucide-react";
import SingleImage from '@/public/images/img-1.png';
// import FirstImage from '@/public/images/img-1.png';
import SecondImage from '@/public/images/img-2.png';
import ThirdImage from '@/public/images/img-3.png';
import FourthImage from '@/public/images/img-4.png';
import FifthImage from '@/public/images/img-5.png';
// import FirstComment from '@/public/images/Comment-1.png';
import SecondComment from '@/public/images/comment-2.png';
import ThirdComment from '@/public/images/comment-3.png';
import FourthComment from '@/public/images/comment-4.png';
import FifthComment from '@/public/images/comment-5.png'
import CommentImage from '@/public/images/Comment-1.png';
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import styles from "@/styles/companions.module.css";
import TestImage from '../public/images/group-6-2@2x.png'

interface CompanionsProps {
    data: (Companion & {
        _count: {
            messages: number
        },
    })[];
}

export const Companions = ({
    data
}: CompanionsProps) => {
    if (data.length === 0) {
        return (
<div>
    <div className="container mx-auto mt-8">
        <div className="flex flex-wrap -mx-4">

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-2 text-center ${styles.companionTextColorOne}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={` text-center pb-2 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorOneFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorOneFooter}`}>@Sally</span>
                            <span className={`text-gray-500 w-3 h-3 mr-1 ${styles.companionTextColorOneFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5  mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorTwo}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={` text-center pb-2 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorTwoFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorTwoFooter}`}>@Sally</span>
                            <span className={` w-3 h-3 mr-1 ${styles.companionTextColorTwoFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5  mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorFive}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={` text-center pb-2 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorFiveFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorFiveFooter}`}>@Sally</span>
                            <span className={` w-3 h-3 mr-1 ${styles.companionTextColorFiveFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5  mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorThree}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={` text-center pb-2 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorThreeFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorThreeFooter}`}>@Sally</span>
                            <span className={` w-3 h-3 mr-1 ${styles.companionTextColorThreeFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorFour}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={`mb-4 text-center pb-5 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorFourFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorFourFooter}`}>@Sally</span>
                            <span className={` w-3 h-3 mr-1 ${styles.companionTextColorFourFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorFour}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={`mb-4 text-center pb-5 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorFourFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorFourFooter}`}>@Sally</span>
                            <span className={`text-gray-500 w-3 h-3 mr-1 ${styles.companionTextColorFourFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorFive}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={`mb-4 text-center pb-5 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorFiveFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorFiveFooter}`}>@Sally</span>
                            <span className={`text-gray-500 w-3 h-3 mr-1 ${styles.companionTextColorFiveFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorSix}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={`mb-4 text-center pb-5 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorSixFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorSixFooter}`}>@Sally</span>
                            <span className={`text-gray-500 w-3 h-3 mr-1 ${styles.companionTextColorSixFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorOne}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={`mb-4 text-center pb-5 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorOneFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorOneFooter}`}>@Sally</span>
                            <span className={`text-gray-500 w-3 h-3 mr-1 ${styles.companionTextColorOneFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorSeven}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={`mb-4 text-center pb-5 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorSevenFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorSevenFooter}`}>@Sally</span>
                            <span className={`text-gray-500 w-3 h-3 mr-1 ${styles.companionTextColorSevenFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorEight}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={`mb-4 text-center pb-5 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorEightFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorEightFooter}`}>@Sally</span>
                            <span className={`text-gray-500 w-3 h-3 mr-1 ${styles.companionTextColorEightFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-3 text-center ${styles.companionTextColorNine}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={`mb-4 text-center pb-5 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorNineFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorNineFooter}`}>@Sally</span>
                            <span className={`text-gray-500 w-3 h-3 mr-1 ${styles.companionTextColorNineFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-25 sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-white p-0 rounded-lg shadow-md overflow-hidden w-[220px] h-[420px]">
                    <Image src={SingleImage} alt="Image 1" className="w-full h-[180px] object-cover rounded-t" />
                    <div className="p-4">
                        <h3 className={`text-lg text-gray-600 font-semibold mb-2 text-center ${styles.companionTextColorTen}`}>Sally Field</h3>
                        <p className={`text-center ${styles.companionDescriptionTextColor}`}>Communication Student</p>
                        <p className={` text-center pb-2 ${styles.companionDescriptionTextColor}`}>at Boston College</p>
                        <div className={`flex justify-between items-center pb-4 pt-5 ${styles.companionTextColorTenFooter}`}>
                            <span className={`lowercase ${styles.companionTextColorTenFooter}`}>@Sally</span>
                            <span className={`text-gray-500 w-3 h-3 mr-1 ${styles.companionTextColorTenFooter}`}>
                                <MessagesSquare />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
        )
      }
      // <div className="pt-10 flex flex-col items-center justify-center space-y-3">
      //     <div className="relative w-60 h-60">
      //         <Image
      //             fill
      //             className="grayscale"
      //             src="/empty.png"
      //             alt="Empty"
      //         />
      //     </div>
      //     <p className="text-sm text-muted-foreground">No companions found.</p>
      // </div>

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10">
            {data.map((item) => (
                <Card key={item.name} className="bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 transition border-0">
                    <Link href={`/chat/${item.id}`}>
                        <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
                            <div className="relative w-32 h-32">
                                <Image
                                    src={item.src}
                                    fill
                                    className="rounded-xl object-cover"
                                    alt="Character"
                                />
                            </div>
                            <p className="font-bold">
                                {item.name}
                            </p>
                            <p className="text-xs">
                                {item.description}
                            </p>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
                            <p className="lowercase">@{item.userName}</p>
                            <div className="flex items-center">
                                <MessagesSquare className="w-3 h-3 mr-1" />
                                {item._count.messages}
                            </div>
                        </CardFooter>
                    </Link>
                </Card>
            ))}
        </div>
    )
}