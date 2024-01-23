import type { NextPage } from "next";
import Image from 'next/image'
import TestImage from '@/public/images/group-6-8@2x.png'

const CompanionForm: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(31.79deg,_#fff,_rgba(255,_216,_223,_0.1))] h-[1482px] overflow-hidden text-left text-lg text-lightslategray font-menu-l-poppins-m">
      

      <div className="absolute top-[61px] left-[366px] w-[966px] h-[109.65px] overflow-hidden text-[17.54px] text-dark">
        <div className="absolute top-[26.32px] left-[26.32px] flex flex-row items-center justify-start">
          <div className="flex flex-col items-start justify-start gap-[8.77px]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[150%] font-semibold">
                General Information
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-[13.16px] text-lightslategray">
              <div className="relative tracking-[-0.02em] font-medium">
                General information about your companion
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[108.45px] left-[-0.55px] box-border w-[967.1px] h-[1.1px] border-t-[1.1px] border-solid border-secondary-500" />
      </div>
      <div className="absolute top-[658px] left-[366px] w-[966px] h-[109.65px] overflow-hidden text-[17.54px] text-dark">
        <div className="absolute top-[26.32px] left-[1.32px] flex flex-row items-center justify-start">
          <div className="flex flex-col items-start justify-start gap-[8.77px]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[150%] font-semibold">
                Configuration
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-[13.16px] text-lightslategray">
              <div className="relative tracking-[-0.02em] font-medium">
                Detailed instruction for your new friend
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[108.45px] left-[-0.55px] box-border w-[967.1px] h-[1.1px] border-t-[1.1px] border-solid border-gray-500" />
      </div>
      <div className="absolute top-[391px] left-[366px] w-[470px] h-[105px] text-xs text-dimgray-100">
        <div className="absolute top-[0px] left-[0px] w-[470px] flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[18px] font-semibold">Name</div>
          <div className="w-[471px] rounded-lg bg-w-background box-border flex flex-col items-start justify-start p-4 text-sm border-[1px] border-solid border-lightgray">
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative leading-[24px]">Sally Fields</div>
              <Image
                className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
                alt="Icon"
                src={TestImage}
              />
            </div>
          </div>
          <div className="w-[368px] relative leading-[18px] font-noto-sans hidden">
            Your password is between 4 and 12 characters
          </div>
        </div>
        <span className="absolute top-[87px] left-[0px] leading-[18px] font-medium text-dimgray-200">
          Give your friend a name
        </span>
      </div>
      <div className="absolute top-[518px] left-[366px] w-[470px] h-[105px] text-xs text-dimgray-100 font-noto-sans">
        <div className="absolute top-[0px] left-[0px] w-[470px] flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[18px] font-semibold font-menu-l-poppins-m">
            Category
          </div>
          <div className="w-[471px] rounded-lg bg-w-background box-border flex flex-col items-start justify-start p-4 text-sm border-[1px] border-solid border-lightgray">
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative leading-[24px]">Select Category</div>
              <Image
                className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
                alt="Icon avatar"
                src={TestImage}
              />
            </div>
          </div>
          <div className="w-[368px] relative leading-[18px] hidden">
            Your password is between 4 and 12 characters
          </div>
        </div>
        <span className="absolute top-[87px] left-[0px] leading-[18px] font-medium font-menu-l-poppins-m text-dimgray-200">
          Select a category for your new friend
        </span>
      </div>
      <div className="absolute top-[817px] left-[366px] w-[966px] h-[219px] text-xs text-dimgray-200">
        <span className="absolute top-[201px] left-[1px] leading-[18px] font-medium">
          Describe in detail your new friend’s backstory and relevant details
        </span>
        <div className="absolute top-[0px] left-[0px] w-[966px] h-[196px] text-dimgray-100 font-noto-sans">
          <div className="absolute top-[0px] left-[0px] w-[966px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[18px] font-semibold font-menu-l-poppins-m">
              Category
            </div>
            <div className="w-[967px] rounded-lg bg-w-background box-border h-[171px] flex flex-col items-start justify-start p-4 text-sm border-[1px] border-solid border-lightgray">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[24px]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sit consectetur senectus sit porta scelerisque commodo malesuada quis adipiscing. Donec leo dui `}</p>
                  <p className="m-0">{`sit sed gravida aliquam posuere dui. Fermentum enim sapien turpis sit etiam odio iaculis. Turpis nibh risus mauris viverra elit. Cursus sagittis `}</p>
                  <p className="m-0">{`dictum interdum diam facilisi. Ut eu diam neque convallis at venenatis vitae. Quisque eget sed nisl senectus nunc vitae malesuada ut. Neque `}</p>
                  <p className="m-0">
                    arcu integer amet cras arcu fusce amet sed risus. Interdum
                    curabitur velit tempus vestibulum semper faucibus sit amet.
                    At faucibus sed vitae
                  </p>
                  <p className="m-0">
                    {" "}
                    diam malesuada amet in quam. Velit nisi nec quis malesuada
                    enim ut eu imperdiet tristique.
                  </p>
                </div>
                <Image
                  className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
                  alt="Icon"
                  src={TestImage}
                />
              </div>
            </div>
            <div className="w-[966px] relative leading-[18px] hidden">
              Your password is between 4 and 12 characters
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1058px] left-[367px] w-[966px] h-[219px] text-xs text-dimgray-200">
        <span className="absolute top-[201px] left-[1px] leading-[18px] font-medium">
          Write couple of examples of a human chatting with your new friend,
          write expected answers
        </span>
        <div className="absolute top-[0px] left-[0px] w-[966px] h-[196px] text-dimgray-100 font-noto-sans">
          <div className="absolute top-[0px] left-[0px] w-[966px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[18px] font-semibold font-menu-l-poppins-m">
              Example Conversation
            </div>
            <div className="w-[967px] rounded-lg bg-w-background box-border h-[171px] flex flex-col items-start justify-start p-4 text-sm border-[1px] border-solid border-lightgray">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[24px]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Sit consectetur senectus sit porta scelerisque commodo malesuada quis adipiscing. Donec leo dui `}</p>
                  <p className="m-0">{`sit sed gravida aliquam posuere dui. Fermentum enim sapien turpis sit etiam odio iaculis. Turpis nibh risus mauris viverra elit. Cursus sagittis `}</p>
                  <p className="m-0">{`dictum interdum diam facilisi. Ut eu diam neque convallis at venenatis vitae. Quisque eget sed nisl senectus nunc vitae malesuada ut. Neque `}</p>
                  <p className="m-0">
                    arcu integer amet cras arcu fusce amet sed risus. Interdum
                    curabitur velit tempus vestibulum semper faucibus sit amet.
                    At faucibus sed vitae
                  </p>
                  <p className="m-0">
                    {" "}
                    diam malesuada amet in quam. Velit nisi nec quis malesuada
                    enim ut eu imperdiet tristique.
                  </p>
                </div>
                <Image
                  className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
                  alt="Icon"
                  src={TestImage}
                />
              </div>
            </div>
            <div className="w-[966px] relative leading-[18px] hidden">
              Your password is between 4 and 12 characters
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-[554px] left-[788px] w-[27px] h-[27px] overflow-hidden"
        alt="Icon"
        src={TestImage}
      />
      <div className="absolute top-[391px] left-[862px] w-[420px] h-[105px] text-xs text-dimgray-200">
        <span className="absolute top-[87px] left-[0px] leading-[18px] font-medium">
          Short description for your friend
        </span>
        <div className="absolute top-[0px] left-[0px] w-[420px] flex flex-col items-start justify-start gap-[8px] text-dimgray-100">
          <div className="self-stretch relative leading-[18px] font-semibold">
            Description
          </div>
          <div className="w-[471px] rounded-lg bg-w-background box-border flex flex-col items-start justify-start p-4 text-sm border-[1px] border-solid border-lightgray">
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="w-[304px] relative leading-[24px] inline-block shrink-0">
                A Girl looking for love
              </div>
              <Image
                className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
                alt="Icon logo"
                src={TestImage}
              />
            </div>
          </div>
          <div className="w-[368px] relative leading-[18px] font-noto-sans hidden">
            Your password is between 4 and 12 characters
          </div>
        </div>
      </div>
      <div className="absolute top-[241px] left-[486px] flex flex-col items-start justify-start gap-[10px] text-sm text-black">
        <div className="relative leading-[22px] font-light">
          Please upload square image, size less than 100KB
        </div>
        <div className="self-stretch rounded-8xs bg-snow-200 flex flex-row items-center justify-start p-2.5 gap-[30px] text-base text-indianred">
          <div className="rounded-8xs flex flex-row items-center justify-start py-2.5 px-5 border-[1px] border-solid border-indianred">
            <div className="flex flex-row items-center justify-center gap-[15px]">
              <div className="relative leading-[22px] font-medium">
                Choose File
              </div>
              <Image
                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                alt="icon"
                src={TestImage}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-darkslategray-200">
            <div className="relative leading-[22px]">No File Chosen</div>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-[238px] left-[366px] w-[100px] h-[100px]"
        alt="Icon"
        src={TestImage}
      />
      <div className="absolute top-[1346px] left-[660px] w-[418.62px] h-[65.61px] text-center text-[18.67px] text-w-background">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-indianred w-[418.62px] h-[65.61px]" />
        <div className="absolute top-[18px] left-[115px] tracking-[0.03em] font-medium inline-block w-[189px] h-[34px]">
          Create New Freind
        </div>
      </div>
    </div>
  );
};

export default CompanionForm;
