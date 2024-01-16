"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./DoctorTab.css";

const DoctorTab = ({ doctor }) => {
  const { aboutMe, education, experience, services, awards } = doctor;

  const university1 = education.university01.name;
  const degree1 = education.university01.degree;
  const university2 = education.university02.name;
  const degree2 = education.university02.degree;

  const experienceName1 = experience.exp01.name;
  const experienceYear1 = experience.exp01.year;
  const experienceName2 = experience.exp02.name;
  const experienceYear2 = experience.exp02.year;
  const experienceName3 = experience.exp03.name;
  const experienceYear3 = experience.exp03.year;

  const awardDate1 = awards.award01.date;
  const awardName1 = awards.award01.awardName;
  const awardDetails1 = awards.award01.details;
  const awardDate2 = awards.award02.date;
  const awardName2 = awards.award02.awardName;
  const awardDetails2 = awards.award02.details;
  const awardDate3 = awards.award03.date;
  const awardName3 = awards.award03.awardName;
  const awardDetails3 = awards.award03.details;

  return (
    <Tabs className="">
      <TabList className="flex gap-6 md:gap-[169px] items-center">
        <Tab className="text-[#6C6B6B] text-xl font-semibold cursor-pointer">
          Overview
        </Tab>
        <Tab className="text-[#6C6B6B] text-xl font-semibold cursor-pointer">
          Locations
        </Tab>
        <Tab className="text-[#6C6B6B] text-xl font-semibold cursor-pointer">
          Reviews
        </Tab>
        <Tab className="text-[#6C6B6B] text-xl font-semibold cursor-pointer">
          Business Hours
        </Tab>
      </TabList>

      <TabPanel className="mt-[30px]">
        <div>
          <h5 className="text-[#3B3A3A] text-xl font-bold mb-[10px]">
            About Me
          </h5>
          <p className="text-[#3B3A3A] leading-[26px] mb-[10px]">{aboutMe}</p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-[147px]">
            <div className="md:w-[540px]">
              {/* Education Section: */}
              <h3 className="text-[#3B3A3A] text-xl font-bold leading-[26px] mb-5">
                Education
              </h3>
              <div className="ml-6">
                <ul>
                  <li className="text-[#3B3A3A] font-bold leading-[26px] list-disc mb-2">
                    {university1}
                  </li>
                </ul>
                <ul>
                  {degree1.map((degree, index) => (
                    <li className="text-[#3B3A3A] leading-[26px]" key={index}>
                      {degree}
                    </li>
                  ))}
                </ul>
                <ul>
                  <li className="text-[#3B3A3A] font-bold leading-[26px] list-disc mt-3 mb-2">
                    {university2}
                  </li>
                </ul>
                <ul>
                  {degree2.map((degree, index) => (
                    <li className="text-[#3B3A3A] leading-[26px]" key={index}>
                      {degree}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Experience Section: */}
              <h3 className="text-[#3B3A3A] text-xl font-bold leading-[26px] my-5">
                Work & Experience
              </h3>
              <div className="ml-6">
                <ul>
                  <li className="text-[#3B3A3A] font-bold leading-[26px] list-disc mb-1">
                    {experienceName1}
                  </li>
                </ul>
                <p className="text-[#3B3A3A] leading-[26px] mb-2">
                  {experienceYear1}
                </p>
                <ul>
                  <li className="text-[#3B3A3A] font-bold leading-[26px] list-disc mb-1">
                    {experienceName2}
                  </li>
                </ul>
                <p className="text-[#3B3A3A] leading-[26px] mb-2">
                  {experienceYear2}
                </p>
                <ul>
                  <li className="text-[#3B3A3A] font-bold leading-[26px] list-disc mb-1">
                    {experienceName3}
                  </li>
                </ul>
                <p className="text-[#3B3A3A] leading-[26px] mb-2">
                  {experienceYear3}
                </p>
              </div>
              {/* Services SEction: */}
              <h3 className="text-[#3B3A3A] text-xl font-bold leading-[26px] my-5">
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                {services.map((service, index) => (
                  <li className="list-disc ml-8" key={index}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* Awards Section: */}
              <h3 className="text-[#3B3A3A] text-xl font-bold leading-[26px] mb-5">
                Awards
              </h3>
              <div className="ml-7">
                <p className="text-[#3B3A3A] leading-[26px]">
                  {awardDate1}
                </p>
                <ul>
                  <li className="text-[#3B3A3A] font-bold leading-[26px] list-disc">
                    {awardName1}
                  </li>
                </ul>
                <p className="text-[#3B3A3A] leading-[26px] mb-5">
                  {awardDetails1}
                </p>
                <p className="text-[#3B3A3A] leading-[26px]">
                  {awardDate2}
                </p>
                <ul>
                  <li className="text-[#3B3A3A] font-bold leading-[26px] list-disc">
                    {awardName2}
                  </li>
                </ul>
                <p className="text-[#3B3A3A] leading-[26px] mb-5">
                  {awardDetails2}
                </p>
                <p className="text-[#3B3A3A] leading-[26px]">
                  {awardDate3}
                </p>
                <ul>
                  <li className="text-[#3B3A3A] font-bold leading-[26px] list-disc">
                    {awardName3}
                  </li>
                </ul>
                <p className="text-[#3B3A3A] leading-[26px] mb-5">
                  {awardDetails3}
                </p>
              </div>
              {/* Specializations Section: */}
              <h3 className="text-[#3B3A3A] text-xl font-bold leading-[26px] mb-5 ml-5">
                Specializations
              </h3>
              <ul className="flex flex-col gap-3">
                {services.map((service, index) => (
                  <li className="list-disc ml-12" key={index}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel className="mt-[30px]">
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel className="mt-[30px]">
        <h2>Any content 3</h2>
      </TabPanel>
      <TabPanel className="mt-[30px]">
        <h2>Any content 4</h2>
      </TabPanel>
    </Tabs>
  );
};

export default DoctorTab;
