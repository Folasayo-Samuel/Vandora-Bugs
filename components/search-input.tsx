"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import styles from '@/styles/searchInput.module.css';

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryId = searchParams.get("categoryId");
    const name = searchParams.get("name");

    const [value, setValue] = useState(name || "");
    const debouncedValue = useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        const query = {
            name: debouncedValue,
            categoryId: categoryId,
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true, skipEmptyString: true });

        router.push(url);
    }, [debouncedValue, router, categoryId])
    return (
        <section className="w-[911px] flex flex-col items-start justify-start pt-[62px] px-0 pb-0 box-border max-w-full text-left text-smi-1 text-palevioletred font-rubik mq750:pt-10 mq750:box-border mb-3">
      <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq450:gap-[25px]">
        <div className="self-stretch rounded-xl bg-pure-white box-border flex flex-row items-center justify-between py-[18px] pr-[27px] pl-10 gap-[20px] max-w-full border-[2.5px] border-solid border-ghostwhite">
          <div className="h-[62px] w-[900px] relative rounded-xl bg-pure-white box-border hidden max-w-full border-[2.5px] border-solid border-ghostwhite" />
          <Input
            onChange={onChange}
            value={value}
            // className="w-full [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] h-[30px] relative leading-[150%] text-lightslategray-200 text-left inline-block z-[1] mq450:text-base mq450:leading-[24px]"
            className={`text-lightslategray-200 font-poppins text-xl border-none focus:outline-none font-poppins ${styles.search}`}
            placeholder="Search"
            // tracking-[0.5px]
        />
          {/* <input
            className="w-[74px] [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] h-[30px] relative tracking-[0.5px] leading-[150%] text-lightslategray-200 text-left inline-block z-[1] mq450:text-base mq450:leading-[24px]"
            placeholder="Search "
            type="text"
          /> */}
          <Search className="h-[23.1px] w-[23.1px] relative object-contain z-[1]" />
          {/* <Image
            
            alt="Search Icon"
            src={}
          /> */}
        </div>
        
        {/* <div className="w-[171px] rounded-[6.74px] bg-pure-white shadow-[0px_2.7px_13.48px_2.7px_rgba(0,_0,_0,_0.12)] flex flex-col items-center justify-start pt-[187px] pb-[53px] pr-[22px] pl-5 box-border relative gap-[10px]">
          <div className="w-[169.5px] relative rounded-[6.74px] bg-pure-white shadow-[0px_2.7px_13.48px_2.7px_rgba(0,_0,_0,_0.12)] h-[289px] hidden z-[0]" />
          <Image
            className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="eager"
            alt=""
            src={TestImage}
          />
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-6">
            <div className="relative font-medium z-[2]">Sally Field</div>
          </div>
          <div className="self-stretch relative text-4xs-1 leading-[140.5%] text-darkslategray-200 text-center z-[2]">
            <p className="m-0">{`Communication Student `}</p>
            <p className="m-0">{`at Boston College `}</p>
          </div>
        </div>  */}
      </div>
    </section>
        )
    }
    
    // <div className={styles.home}>
    //     <div className={styles.box}>
        {/* <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" /> */}
        {/* <Input
            onChange={onChange}
            value={value}
            placeholder="Search"
            className={`border-none focus:outline-none font-poppins ${styles.search}`} */}
            // "pl-10 bg-primary/10"
        // />
        // <Search className={`h-4 w-4 ${styles.icon}`}/>
        {/* <i className="bx bx-search-alt-2"></i> */}
        {/* </div>
    </div> */}