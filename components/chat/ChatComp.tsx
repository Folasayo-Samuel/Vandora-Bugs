import Image from "next/image";
import React from "react";
import profile1 from "@/public/chat/profile1.svg";
import Send from "@/public/chat/Send.svg";
import ChatPro from "@/public/chat/chatpro.svg";
import Vend from "@/public/chat/vend.svg";

type Props = {};

const ChatComp = ({}: Props) => {
  return (
    <div className="py-20 px-10 w-full relative">
      <section className="flex gap-3 items-center ml-5">
        <Image src={profile1} alt="profile" />
        <div className="">
          <h5 className="text-[#000929] text-lg font-semibold mb-2">
            Sally Fields
          </h5>
          <p className="text-lightslategray text-sm font-medium ">
            Created by Obayi
          </p>
        </div>
      </section>
      <hr className="w-10/12  border-[#2E2A40] border-2 mt-2" />
      <section className="h-screen">
        <div className="overflow-y-scroll h-[90vh] scrollable mb-20">
          <div className="flex gap-3 items-center">
            <Image src={ChatPro} alt="ChatPro" className="mt-4" />
            <section className="relative border mt-5 bg-[#2F2F32] rounded-[24px] rounded-tl-3xs border-[#ededed] px-2 py-2 w-[40%] flex justify-start">
              <svg
                className="absolute top-[0%] left-[-2%]"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M1.72485 0.928445C1.6144 0.830681 1.45945 0.800902 1.32064 0.850765C1.18183 0.900629 1.08124 1.0222 1.05825 1.1679C0.785922 2.89394 1.23557 4.64702 2.05599 6.28325C2.87701 7.92067 4.08234 9.46795 5.36555 10.7996C6.64973 12.1322 8.02335 13.2606 9.1936 14.0585C9.7784 14.4573 10.3184 14.7775 10.7758 14.9999C11.214 15.2129 11.6341 15.3655 11.9572 15.3655C12.0953 15.3655 12.2238 15.2949 12.2979 15.1785L17.9518 6.29382C18.0309 6.16946 18.036 6.01188 17.9651 5.88267C17.8941 5.75346 17.7585 5.67315 17.6111 5.67315C17.0503 5.67315 16.4958 5.68319 15.944 5.69317C14.0349 5.72772 12.1578 5.76168 10.1602 5.37754C7.61112 4.88733 4.86792 3.71076 1.72485 0.928445Z"
                  fill="#2F2F32"
                  stroke="#2F2F32"
                  stroke-width="0.807694"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#FFFFFF] text-lg font-normal">
                Hello, I am Sally Fields, Communications Student at Boston
                College
              </p>
            </section>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-3 items-center">
              <section className=" relative border mt-5 bg-[#ED5F78] rounded-[17px] rounded-tr-3xs border-[#ededed] px-2 py-2 w-[100%] flex justify-items-end">
                <svg
                  className="absolute top-[0%] right-[-5%]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                >
                  <path
                    d="M17.2752 0.928445C17.3856 0.830681 17.5406 0.800902 17.6794 0.850765C17.8182 0.900629 17.9188 1.0222 17.9417 1.1679C18.2141 2.89394 17.7644 4.64702 16.944 6.28325C16.123 7.92067 14.9177 9.46795 13.6345 10.7996C12.3503 12.1322 10.9767 13.2606 9.8064 14.0585C9.2216 14.4573 8.68164 14.7775 8.22419 14.9999C7.78596 15.2129 7.3659 15.3655 7.04281 15.3655C6.90473 15.3655 6.77623 15.2949 6.7021 15.1785L1.04823 6.29382C0.969101 6.16946 0.964001 6.01188 1.03493 5.88267C1.10586 5.75346 1.24155 5.67315 1.38894 5.67315C1.94973 5.67315 2.50418 5.68319 3.05595 5.69317C4.96506 5.72772 6.84223 5.76168 8.8398 5.37754C11.3889 4.88733 14.1321 3.71076 17.2752 0.928445Z"
                    fill="#ED5F78"
                    stroke="#ED5F78"
                    stroke-width="0.807694"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[#FFFFFF] text-lg font-norma">Hello Babe</p>
              </section>
              <Image src={Vend} alt="Vend" className="mt-4" />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={ChatPro} alt="ChatPro" className="mt-4" />
            <section className="relative border mt-5 bg-[#2F2F32] rounded-[24px] rounded-tl-3xs border-[#ededed] px-2 py-2 w-[40%] flex justify-start">
              <svg
                className="absolute top-[0%] left-[-2%]"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M1.72485 0.928445C1.6144 0.830681 1.45945 0.800902 1.32064 0.850765C1.18183 0.900629 1.08124 1.0222 1.05825 1.1679C0.785922 2.89394 1.23557 4.64702 2.05599 6.28325C2.87701 7.92067 4.08234 9.46795 5.36555 10.7996C6.64973 12.1322 8.02335 13.2606 9.1936 14.0585C9.7784 14.4573 10.3184 14.7775 10.7758 14.9999C11.214 15.2129 11.6341 15.3655 11.9572 15.3655C12.0953 15.3655 12.2238 15.2949 12.2979 15.1785L17.9518 6.29382C18.0309 6.16946 18.036 6.01188 17.9651 5.88267C17.8941 5.75346 17.7585 5.67315 17.6111 5.67315C17.0503 5.67315 16.4958 5.68319 15.944 5.69317C14.0349 5.72772 12.1578 5.76168 10.1602 5.37754C7.61112 4.88733 4.86792 3.71076 1.72485 0.928445Z"
                  fill="#2F2F32"
                  stroke="#2F2F32"
                  stroke-width="0.807694"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#FFFFFF] text-lg font-normal">
                OH MY GOD JESUS I CAN’T BELIEVE YOU JUST SHOUTED AT ME LIKE THAT
                IN A PUBLIC SPACE, Did you just call me babe? i’m not your babe
                amd please don’t should at me
              </p>
            </section>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-3 items-center">
              <section className=" relative border mt-5 bg-[#ED5F78] rounded-[17px] rounded-tr-3xs border-[#ededed] px-2 py-2 w-[100%] flex justify-items-end">
                <svg
                  className="absolute top-[0%] right-[-5%]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                >
                  <path
                    d="M17.2752 0.928445C17.3856 0.830681 17.5406 0.800902 17.6794 0.850765C17.8182 0.900629 17.9188 1.0222 17.9417 1.1679C18.2141 2.89394 17.7644 4.64702 16.944 6.28325C16.123 7.92067 14.9177 9.46795 13.6345 10.7996C12.3503 12.1322 10.9767 13.2606 9.8064 14.0585C9.2216 14.4573 8.68164 14.7775 8.22419 14.9999C7.78596 15.2129 7.3659 15.3655 7.04281 15.3655C6.90473 15.3655 6.77623 15.2949 6.7021 15.1785L1.04823 6.29382C0.969101 6.16946 0.964001 6.01188 1.03493 5.88267C1.10586 5.75346 1.24155 5.67315 1.38894 5.67315C1.94973 5.67315 2.50418 5.68319 3.05595 5.69317C4.96506 5.72772 6.84223 5.76168 8.8398 5.37754C11.3889 4.88733 14.1321 3.71076 17.2752 0.928445Z"
                    fill="#ED5F78"
                    stroke="#ED5F78"
                    stroke-width="0.807694"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[#FFFFFF] text-lg font-norma">I am sorry madam </p>
              </section>
              <Image src={Vend} alt="Vend" className="mt-4" />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={ChatPro} alt="ChatPro" className="mt-4" />
            <section className="relative border mt-5 bg-[#2F2F32] rounded-[24px] rounded-tl-3xs border-[#ededed] px-2 py-2 w-[40%] flex justify-start">
              <svg
                className="absolute top-[0%] left-[-2%]"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M1.72485 0.928445C1.6144 0.830681 1.45945 0.800902 1.32064 0.850765C1.18183 0.900629 1.08124 1.0222 1.05825 1.1679C0.785922 2.89394 1.23557 4.64702 2.05599 6.28325C2.87701 7.92067 4.08234 9.46795 5.36555 10.7996C6.64973 12.1322 8.02335 13.2606 9.1936 14.0585C9.7784 14.4573 10.3184 14.7775 10.7758 14.9999C11.214 15.2129 11.6341 15.3655 11.9572 15.3655C12.0953 15.3655 12.2238 15.2949 12.2979 15.1785L17.9518 6.29382C18.0309 6.16946 18.036 6.01188 17.9651 5.88267C17.8941 5.75346 17.7585 5.67315 17.6111 5.67315C17.0503 5.67315 16.4958 5.68319 15.944 5.69317C14.0349 5.72772 12.1578 5.76168 10.1602 5.37754C7.61112 4.88733 4.86792 3.71076 1.72485 0.928445Z"
                  fill="#2F2F32"
                  stroke="#2F2F32"
                  stroke-width="0.807694"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#FFFFFF] text-lg font-normal">
                OH MY GOD JESUS I CAN’T BELIEVE YOU JUST SHOUTED AT ME LIKE THAT
                IN A PUBLIC SPACE, Did you just call me babe? i’m not your babe
                amd please don’t should at me
              </p>
            </section>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-3 items-center">
              <section className=" relative border mt-5 bg-[#ED5F78] rounded-[17px] rounded-tr-3xs border-[#ededed] px-2 py-2 w-[100%] flex justify-items-end">
                <svg
                  className="absolute top-[0%] right-[-5%]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                >
                  <path
                    d="M17.2752 0.928445C17.3856 0.830681 17.5406 0.800902 17.6794 0.850765C17.8182 0.900629 17.9188 1.0222 17.9417 1.1679C18.2141 2.89394 17.7644 4.64702 16.944 6.28325C16.123 7.92067 14.9177 9.46795 13.6345 10.7996C12.3503 12.1322 10.9767 13.2606 9.8064 14.0585C9.2216 14.4573 8.68164 14.7775 8.22419 14.9999C7.78596 15.2129 7.3659 15.3655 7.04281 15.3655C6.90473 15.3655 6.77623 15.2949 6.7021 15.1785L1.04823 6.29382C0.969101 6.16946 0.964001 6.01188 1.03493 5.88267C1.10586 5.75346 1.24155 5.67315 1.38894 5.67315C1.94973 5.67315 2.50418 5.68319 3.05595 5.69317C4.96506 5.72772 6.84223 5.76168 8.8398 5.37754C11.3889 4.88733 14.1321 3.71076 17.2752 0.928445Z"
                    fill="#ED5F78"
                    stroke="#ED5F78"
                    stroke-width="0.807694"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[#FFFFFF] text-lg font-norma">I am sorry madam </p>
              </section>
              <Image src={Vend} alt="Vend" className="mt-4" />
            </div>
          </div>
        </div>
      </section>
      <aside className="absolute bottom-0 mb-2 flex justify-between items-center w-11/12">
        <div className=" flex gap-3 justify-between items-center rounded-[20px] bg-[#FAEFF1] px-3 py-2 w-[88%]">
          <textarea
            rows={1}
            className="border-0 bg-[#FAEFF1] outline-none w-full text-sm text-[#92929D] py-2 placeholder:text-[#92929D]"
            placeholder="Type your message"
          />
        </div>
        <Image className="cursor-pointer" src={Send} alt="send" />
      </aside>
    </div>
  );
};

export default ChatComp;
