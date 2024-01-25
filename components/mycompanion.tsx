import type { NextPage } from "next";
import Image from "next/image";
import TestImage from "@/public/images/group-6-8@2x.png";

const CompanionForm: NextPage = () => {
  return (
    <div className="container mx-auto my-16 flex flex-col">
      <div>
        <h1 className="text-slate-950 text-lg font-semibold  leading-relaxed">
          General Information
        </h1>
        <span className="mt-2 text-gray-500 text-[13.16px] font-medium ">
          General information about your companion
        </span>
        <div className="mt-7 h-[0px] border border-slate-800"></div>
      </div>

      <div className="flex gap-5 my-16 items-center">
        <div className="w-24 h-24 bg-gray-200/15 rounded-[5px]"></div>
        <div className="flex flex-col gap-4">
          <p className="text-black text-sm font-light  leading-snug">
            Please upload square image, size less than 100KB
          </p>
          <label className="bg-red-500 text-white rounded-md w-[133px] px-4 whitespace-nowrap h-10 flex items-center justify-center cursor-pointer">
            <input type="file" name="" id="" className="hidden" />
            Choose File
          </label>
        </div>
      </div>

      {/* forms part */}
      <div className="flex flex-col gap-5">
        <form className="flex flex-col gap-5">
          <div className="flex items-center gap-8">
            <div className="w-full">
              <label className="block text-stone-500 text-xs font-semibold leading-[18px] mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Sally Fields"
                className={`relative w-full h-14 bg-white rounded-lg border-stone-300  p-4 placeholder:text-stone-500 outline-none text-sm sm:leading-6 border `}
              />
              <span className="text-stone-500 text-opacity-70 text-xs font-medium leading-[18px]">
                Give your friend a name
              </span>
            </div>
            <div className="w-full">
              <label className="block text-stone-500 text-xs font-semibold leading-[18px] mb-2">
                Description
              </label>
              <input
                type="text"
                placeholder="A Girl looking for love"
                className={`relative w-full h-14 bg-white rounded-lg border-stone-300  p-4 placeholder:text-stone-500 outline-none text-sm sm:leading-6 border `}
              />
              <span className="text-stone-500 text-opacity-70 text-xs font-medium leading-[18px]">
                Short description for your friend
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <label className="block text-stone-500 text-xs font-semibold leading-[18px] mb-2">
              Category
            </label>
            <select
              name=""
              id=""
              className="relative w-full h-14 bg-white rounded-lg border-stone-300 px-4 placeholder:text-stone-500 outline-none text-sm sm:leading-6 border"
            >
              <option value="">Select Category</option>
            </select>
            <span className="text-stone-500 text-opacity-70 text-xs font-medium leading-[18px]">
              Select a category for your new friend
            </span>
          </div>
        </form>
      </div>

      {/* Configuration */}
      <div className="my-16">
        <h1 className="text-slate-950 text-lg font-semibold  leading-relaxed">
          Configuration
        </h1>
        <span className="mt-2 text-gray-500 text-[13.16px] font-medium ">
          Detailed instruction for your new friend
        </span>
        <div className="mt-7 h-[0px] border border-slate-800"></div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-stone-500 text-xs font-semibold  leading-[18px]">
          Category
        </h1>
        <div className="p-4 bg-white rounded-lg border border-stone-300">
          <span className="text-stone-500 text-sm font-normal  leading-normal">
            Lorem ipsum dolor sit amet consectetur. Sit consectetur senectus sit
            porta scelerisque commodo malesuada quis adipiscing. Donec leo dui{" "}
            <br />
            sit sed gravida aliquam posuere dui. Fermentum enim sapien turpis
            sit etiam odio iaculis. Turpis nibh risus mauris viverra elit.
            Cursus sagittis <br />
            dictum interdum diam facilisi. Ut eu diam neque convallis at
            venenatis vitae. Quisque eget sed nisl senectus nunc vitae malesuada
            ut. Neque <br />
            arcu integer amet cras arcu fusce amet sed risus. Interdum curabitur
            velit tempus vestibulum semper faucibus sit amet. At faucibus sed
            vitae
            <br /> diam malesuada amet in quam. Velit nisi nec quis malesuada
            enim ut eu imperdiet tristique.
            <br />
          </span>
        </div>
        <span className="text-stone-500 text-opacity-70 text-xs font-medium leading-[18px]">
          Describe in detail your new friend’s backstory and relevant details
        </span>
      </div>

      <div className="flex flex-col gap-2 my-5">
        <h1 className="text-stone-500 text-xs font-semibold  leading-[18px]">
          Example Conversation
        </h1>
        <div className="p-4 bg-white rounded-lg border border-stone-300">
          <span className="text-stone-500 text-sm font-normal  leading-normal">
            Lorem ipsum dolor sit amet consectetur. Sit consectetur senectus sit
            porta scelerisque commodo malesuada quis adipiscing. Donec leo dui{" "}
            <br />
            sit sed gravida aliquam posuere dui. Fermentum enim sapien turpis
            sit etiam odio iaculis. Turpis nibh risus mauris viverra elit.
            Cursus sagittis <br />
            dictum interdum diam facilisi. Ut eu diam neque convallis at
            venenatis vitae. Quisque eget sed nisl senectus nunc vitae malesuada
            ut. Neque <br />
            arcu integer amet cras arcu fusce amet sed risus. Interdum curabitur
            velit tempus vestibulum semper faucibus sit amet. At faucibus sed
            vitae
            <br /> diam malesuada amet in quam. Velit nisi nec quis malesuada
            enim ut eu imperdiet tristique.
            <br />
          </span>
        </div>
        <span className="text-stone-500 text-opacity-70 text-xs font-medium leading-[18px]">
          Write couple of examples of a human chatting with your new friend,
          write expected answers
        </span>
      </div>

      <button className="w-[418.62px] h-[65.61px] bg-red-400 rounded-2xl mx-auto">
        <span className=" text-center text-white text-lg font-medium  tracking-wide">
          Create New Freind
        </span>
      </button>
    </div>
  );
};

export default CompanionForm;
