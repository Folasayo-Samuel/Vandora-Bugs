import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full relative bg-lightslategray overflow-hidden flex flex-row items-start justify-start gap-[46px] tracking-[normal] mq750:gap-[23px] mq1225:flex-wrap bg-gradient-to-r from-white via-white to-pink-100">
      {/* <form className="m-0 w-[1440px] [background:linear-gradient(31.79deg,_#fff,_rgba(255,_216,_223,_0.1))] overflow-hidden flex flex-row items-start justify-start gap-[81px] tracking-[normal] mq750:gap-[40px] mq450:gap-[20px] mq1250:flex-wrap"> */}
      <div className="h-[1024px] w-[312px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
        <Sidebar />
      </div>
      <main className="w-full">{children}</main>
      {/* </form> */}
    </div>
  );
};

export default RootLayout;
