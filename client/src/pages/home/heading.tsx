import { FC } from "react";

const Heading: FC = () => {
  return (
    <div className="flex justify-between items-center my-[24px] md:mt-[36px] lg:[mt-50px] xl:mt-[90px] xl:mb-[32px]">
      <h1 className="font-semibold uppercase leading-[96%] text-[24px] md:text-[36px] lg:text-[60] xl:text-[74px] text-my-blue">
        Yeni Ürünleri <br /> Kaçırma
      </h1>

      <button className="bg-my-blue text-white py-[12px] px-[16px] lg:py-[16px] lg:px-[32px] rounded-[8px] hover:brightness-90 transition cursor-pointer ">
        Alışverişe Başla
      </button>
    </div>
  );
};

export default Heading;
