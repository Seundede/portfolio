import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import mobile_meal from "../assets/mobile_meal.png";
import chat from '../assets/chatImage.png'
import mobileCrypto from '../assets/cryptoMobile.png'
import netflix from '../assets/movieNetflix.png'
const data = [
  {
    image: mobile_meal,
    title: "Mobile Meal",
    description:
      "A React native food delivery application that brings delicious food from your favorite local restaurant to your door. Credit card payment implemented with Stripe.",
    stack: "React Native, Expo, Redux, Sanity, javaScript, Firebase, Tailwind",
    liveLink: "https://expo.dev/@dede007/mobile_meal",
    githubLink: "https://github.com/Seundede/Mobile-meal",
  },
  {
    image: chat,
    title: "Youchat",
    description:
      "YouChat is a chat application that makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time.",
    stack: "React, Firebase, Netlify(deployment)",
    liveLink: "https://chat-react-ap.netlify.app/",
    githubLink: "https://github.com/Seundede/chat-application",
  },
  {
    image: mobileCrypto,
    title: "Mobile crypto app",
    description:
      "This is a mobile cryptocurrency application  that displays the  market price listing based on trade volume and market capitalization. This application is intended for users who are interested in cryptocurrency market and investment.  Real time and historical market changes of cryptocurrencies can be viewed on this app.",
    stack: "React Native, Expo, Recoil, Tailwind",
    liveLink: "https://expo.dev/@dede007/crypto",
    githubLink: "https://github.com/Seundede/React-native-crypto-app",
  },
  {
    image: netflix,
    title: "Netflix clone",
    description:
      "This is a movie application which displays movie data based on categories, and extensive details like trailers of each movie. It fetches data from The Movie DataBase API and is implemented using Typescript, Next JS, Tailwind, Recoil ",
    stack:
      "Next JS, Typescript, Tailwind, Firebase, Recoil, Material UI, React hook form, Vercel (deployment)",
    liveLink: "https://netflix-cloneed.vercel.app",
    githubLink: "https://github.com/Seundede/Netflix-clone",
  },
];
const Projects = () => {
  return (
    <div className="dark:bg-black dark:text-white ">
      <Navbar />
      <div className="px-8 xl:px-16 mt-[15px] pb-4 ">
        <h3 className="uppercase text-2xl font-bold text-center my-8">
          Projects
        </h3>

        {data.map((item, index) => (
          <div
            className="mb-16 flex flex-col lg:grid lg:grid-cols-12 lg:items-center"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <motion.img
              src={item.image}
              alt="pixel"
              className="lg:col-span-6 rounded-xl lg:justify-self-center"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 1, type: "tween", delay: 0.1 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.div
              className="space-y-4 lg:col-span-6 mt-4 lg:mt-0"
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 1.6, type: "tween", delay: 0.2 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl uppercase font-semibold text-center">
                {item.title}
              </h3>
              <div>
                <p className="text-center px-8 tracking-wide">
                  {item.description}
                </p>
                <p className="text-center px-8 tracking-wide italic text-slate-400 mt-[5px]">
                  {item.stack}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center md:flex-row">
                <a
                  href={item.liveLink}
                  className="uppercase md:mr-4 mb-4 md:mb-0 button px-8 "
                  target="_blank"
                  rel="noreferrer"
                >
                  live link
                </a>
                <a
                  href={item.githubLink}
                  className="uppercase button"
                  target="_blank"
                  rel="noreferrer"
                >
                  github link
                </a>
              </div>
            </motion.div>
          </div>
        ))}

        <Footer />
      </div>
    </div>
  );
};

export default Projects;
