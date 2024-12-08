    import React from "react";
    import Image from "next/image";
    import { FaCheck } from "react-icons/fa6";

    import about1 from "../../../my-project/public/about/about1.png";
    import about2 from "../../../my-project/public/about/about2.png";
    import about3 from "../../../my-project/public/about/about3.png";

    function AboutUs() {
    return (
        <section className="bg-black px-4 md:px-[135px] lg:px-[150px] xl:px-[250px] py-[40px] flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Heading Section */}
        <div className="text-white w-full lg:grid-cols-2  space-y-4">
            <h1 className="text-[20px] md:text-[28px] lg:text-[28px] xl:text-[48px] font-normal text-[#FF9F0D] font-greatVibes">
            About Us
            </h1>

            <h2 className="text-[12px] md:text-[16px] lg:text-[18px] xl:text-[48px] font-bold whitespace-nowrap lg:whitespace-normal">
            <span className="text-[#FF9F0D]">We</span> Create the Best Foody Product
            </h2>

            <p className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[38px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
            </p>

            <ul className="space-y-4 w-full">
            <li className="flex items-start text-[12px] md:text-[16px] lg:text-[18px] xl:text-[28px] font-normal">
                <span className="mr-[10px]">
                <FaCheck />
                </span>
                Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-start text-[12px] md:text-[16px] lg:text-[18px] xl:text-[28px] font-normal">
                <span className="mr-[10px]">
                <FaCheck />
                </span>
                Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-start text-[12px] md:text-[16px] lg:text-[18px] xl:text-[28px] font-normal">
                <span className="mr-[10px]">
                <FaCheck />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            </ul>

            <div className="flex flex-col items-center md:items-start mt-6">
            <button className="bg-[#FF9F0D] text-white w-[140px] h-[45px] md:w-[190px] md:h-[60px] rounded-[40px] hover:bg-yellow-800 text-lg md:text-xl transition-all">
                See More
            </button>
            
            </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 w-full">
            <Image src={about1} alt="About 1" width={760} height={330} className="w-full h-auto" />
            <div className="flex flex-col lg:flex-row justify-between mt-6 lg:mt-8">
            <Image src={about2} alt="About 2" width={332} height={194} className="w-full lg:w-[48%] h-auto mb-4 lg:mb-0" />
            <Image src={about3} alt="About 3" width={332} height={194} className="w-full lg:w-[48%] h-auto" />
            </div>
        </div>
        </section>
    );
    }
    export default AboutUs;
