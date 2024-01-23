import  Sidebar  from "@/components/sidebar";
import Companions  from "@/components/mycompanion"



const SearchPage = async () => {
    

    return (
        // className={`h-full pb-4 pr-4 pl-4 space-y-2`}
        <div className="">
    {/* <form className="m-0 w-[1440px] [background:linear-gradient(31.79deg,_#fff,_rgba(255,_216,_223,_0.1))] overflow-hidden flex flex-row items-start justify-start gap-[81px] tracking-[normal] mq750:gap-[40px] mq450:gap-[20px] mq1250:flex-wrap"> */}
      <div className="h-[1024px] w-[312px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
      <Sidebar />
      </div>
        <main>
            {/* <Sidebar /> */}
            
            <Companions />
        </main>
        </div>
    )
}

export default SearchPage;