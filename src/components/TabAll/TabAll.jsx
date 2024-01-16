"use client";

import Image from "next/image";
import teeth from "@/assets/services/teeth.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./TabAll.css";

const TabAll = () => {
  return (
    <Tabs className="mt-[30px]">
      <TabList className="flex gap-4 items-center">
        <Tab className="text-[#3B3A3A] text-lg font-bold cursor-pointer">
          Cavity Protection
        </Tab>
        <Tab className="text-[#3B3A3A] text-lg font-bold cursor-pointer">
          Cosmetic Dentist
        </Tab>
        <Tab className="text-[#3B3A3A] text-lg font-bold cursor-pointer">
          Oral Surgery
        </Tab>
      </TabList>

      <TabPanel className="mt-[50px]">
        <Image src={teeth} className="mb-[30px]" alt="teeth" />
        <h3 className="text-[#0A0808] text-[30px] font-bold mb-5">
          Electro Gastrology Therapy
        </h3>
        <p className="text-[#3B3A3A] leading-[26px] mb-[10px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Sed ut perspiciatis unde omnis iste natus error
        </p>
        <p className="text-[#3B3A3A] leading-[26px] mb-5">
          Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
        <button className="text-[#F7A582] text-xl font-bold px-6 py-[14px] rounded-[10px] border border-[#F7A582] hover:text-white hover:bg-[#F7A582] hover:border-0">
          More Details
        </button>
      </TabPanel>
      <TabPanel className="mt-[50px]">
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel className="mt-[50px]">
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default TabAll;
