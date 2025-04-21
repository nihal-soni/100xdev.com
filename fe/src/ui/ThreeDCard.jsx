"use client";
import React from "react";
import webdevImg from "../assets/webdevop.png";
import cohortImg from "../assets/Cohort3.png";
import devopImg from "../assets/Devops.png";
import web3 from "../assets/web3.webp";

import { CardBody, CardContainer, CardItem } from "../components/CardContainer";

export default function ThreeDCard() {
  return (
    <section className="py-6 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex justify-center items-center text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Roboto']">What You'll Learn with us</h1>
      </div>
      
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
   
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 md:p-6 border">
            <CardItem translateZ={50} className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white">
              Start you Web + Devop journey
            </CardItem>
            <CardItem translateZ={60} as="p" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              become the best developer
            </CardItem>
            <CardItem translateZ={100} className="w-full mt-4">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                  src={webdevImg}
                  className="w-full h-full object-cover object-center group-hover/card:shadow-xl"
                  alt="Web Development"
                />
              </div>
            </CardItem>
            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={20}
                as="button"
                className="px-6 py-2 rounded-xl bg-black cursor-pointer dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Buy Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

       
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 md:p-6 border">
            <CardItem translateZ={50} className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white">
              Start Your Web and Web3 Journey with us
            </CardItem>
            <CardItem translateZ={60} as="p" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              become the best developer
            </CardItem>
            <CardItem translateZ={100} className="w-full mt-4">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                  src={cohortImg}
                  className="w-full h-full object-cover object-center group-hover/card:shadow-xl"
                  alt="Web and Web3"
                />
              </div>
            </CardItem>
            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={20}
                as="button"
                className="px-6 py-2 rounded-xl bg-black cursor-pointer dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Buy Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

    
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 md:p-6 border">
            <CardItem translateZ={50} className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white">
              Start your Web 3 Journey
            </CardItem>
            <CardItem translateZ={60} as="p" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              become the best developer
            </CardItem>
            <CardItem translateZ={100} className="w-full mt-4">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                  src={web3}
                  className="w-full h-full object-cover object-center group-hover/card:shadow-xl"
                  alt="Web3"
                />
              </div>
            </CardItem>
            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={20}
                as="button"
                className="px-6 py-2 rounded-xl bg-black cursor-pointer dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Buy Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 md:p-6 border">
            <CardItem translateZ={50} className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white">
              Start Your Devops Journey
            </CardItem>
            <CardItem translateZ={60} as="p" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Become the best Devops dev
            </CardItem>
            <CardItem translateZ={100} className="w-full mt-4">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                  src={devopImg}
                  className="w-full h-full object-cover object-center group-hover/card:shadow-xl"
                  alt="DevOps"
                />
              </div>
            </CardItem>
            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={20}
                as="button"
                className="px-6 py-2 rounded-xl cursor-pointer bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Buy Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 md:p-6 border">
            <CardItem translateZ={50} className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white">
              Start you Web + Devop journey
            </CardItem>
            <CardItem translateZ={60} as="p" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              become the best developer
            </CardItem>
            <CardItem translateZ={100} className="w-full mt-4">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                  src={webdevImg}
                  className="w-full h-full object-cover object-center group-hover/card:shadow-xl"
                  alt="Web Development"
                />
              </div>
            </CardItem>
            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={20}
                as="button"
                className="px-6 py-2 rounded-xl cursor-pointer bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Buy Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}