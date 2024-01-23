"use client";

import qs from "query-string";
import { Category } from "@prisma/client"
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import styles from "@/styles/categories.module.css";
import { useSession } from "next-auth/react";

interface CategoriesProps {
    data: Category[]
}

export const Categories = ({
    data
}: CategoriesProps) => {

    const boxContents = ['Newest', 'Black', 'Mature', 'Celebrity', 'Asian', 'White'];

    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryId = searchParams.get("categoryId");
    const { data: session, status } = useSession();
    const isLoggedIn = status === "authenticated"

    const onClick = (id: string | undefined) => {
        const query = { categoryId: id };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });

        router.push(url);
    };

    return (
        <div className={`self-stretch flex flex-row items-start justify-start gap-[9px] max-w-full mq750:flex-wrap ${styles['search-content']}`}>
            <nav className="m-0 flex-1 flex flex-row items-start justify-center gap-[9px] min-w-[495px] max-w-full mq750:flex-wrap mq750:min-w-full">
            {isLoggedIn ? (
                boxContents.map((content, index) => (
                    <div key={index}>
                        {/* className={styles[`box-${index + 1}`]} */}
                        {data.slice(0, 6).map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onClick(item.id)}
                                className={`cursor-pointer [border:none] py-2.5 pr-[43px] pl-[39px] rounded-smi flex flex-row items-center justify-center ${styles[`box-${index + 1}`]}`}>
                                    {/* className={cn(
                                    styles[`box-${index + 1}`],
                                    { [styles.selected]: item.id === categoryId }
                                )} */}
                            <div className="h-[46px] w-[145px] relative rounded-smi hidden" />
                            <div className="relative text-mid tracking-[0.5px] leading-[150%] font-poppins text-center z-[1]">
                                {item.name}
                                </div>
                            </button>
                        ))}
                    </div>
                ))
            ) : (
                boxContents.map((content, index) => (
                    <button
                        key={index}
                        onClick={() => onClick(undefined)}
                        className={`cursor-pointer [border:none] py-2.5 pr-[43px] pl-[39px] rounded-smi flex flex-row items-center justify-center ${styles[`box-${index + 1}`]}`}
                    >
                        <div className="h-[46px] w-[145px] relative rounded-smi hidden" />
                        <div className="relative text-mid tracking-[0.5px] leading-[150%] font-poppins text-center z-[1]">
                        {content}
                        </div>
                    </button>
                ))
            )}
            </nav>
        </div>

)
}






// flex 
//             items-center 
//             text-center 
//             text-xs 
//             md:text-sm 
//             px-2 
//             md:px-4 
//             py-2 
//             md:py-3 
//             rounded-md 
//             bg-primary/10 
//             hover:opacity-75 
//             transition