import React, { useState } from 'react'
import grp from './Images/grp.jpg'
import tracker from './Images/tracker.jpg'
import sc from './Images/sc.jpg'
import { LuNotepadText } from "react-icons/lu";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import Progress from './Progress';
import { easeOut, motion } from 'framer-motion';


const About = () => {
    const [quantity, setQuantity] = useState(1)

    const fadeUpVariants = {
        hidden: { opacity: 0.5, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    }

    const fadeRightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    }

    const fadeLeftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    }

    const handleIncrease = () => {
        setQuantity(prev => prev + 1)
    }

    const handleDecrease = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }

    return (
        <div id='about' className='bg-gray-100'>
            <div className='container mx-auto px-6 md:px-26'>
                <div className='flex flex-col gap-5 justify-evenly pt-12 md:flex-row  '>
                    <div className=' py-12'>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={fadeLeftVariants}
                            className='uppercase font-semibold text-2xl pb-5'
                        >
                            About FitTrack
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={fadeLeftVariants}
                            className='font-medium  text-gray-700 '
                        >
                            FitTrack is your ultimate fitness companion designed to help you achieve your health goals. Our website provides personalized workout plans, progress tracking, and a supportive community of fitness
                        </motion.p>
                    </div>
                    <motion.img
                        src={grp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={fadeRightVariants}
                        className='w-full h-[300px] md:w-[500px]'
                    />
                </div>
                <div className='flex flex-col py-15 '>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={fadeRightVariants}
                        className='uppercase font-semibold text-2xl py-5 '
                    >
                        Our vision
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={fadeLeftVariants}
                        className='font-medium text-gray-700'
                    >
                        At FitTrack, we believe in health for all through proactive, value-based health-care. We're dedicated to making fitness accessible and effective for everyone, regardless of their starting point.
                    </motion.p>
                </div>
                <div className='flex flex-col gap-10 rounded-2xl p-6 md:p-12 bg-emerald-200 md:flex-row '>
                    <div className=''>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            variants={fadeUpVariants}
                            className='text-xl font-medium'
                        >
                            Welcome to the family!
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            variants={fadeLeftVariants}
                            className='font-medium text-gray-700 pt-5'
                        >
                            When you buy a FitTrack, you're not just getting a health tracker. You are accessing a smart AI health ecosystem that learns and grows with you. As you build your digital health profile, the app will predict potential health issues and provide personalized recommendations to help you reach your goals.
                        </motion.p>
                    </div>
                    <motion.img
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        variants={fadeRightVariants}
                        src={tracker}
                        className='rounded-3xl'
                    />
                </div>
                <div className='py-16 flex flex-col'>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        variants={fadeUpVariants}
                        className='text-2xl font-medium pb-3'
                    >
                        Our Commitment
                    </motion.p>
                    <div className='space-y-3'>
                        {[
                            { head: "Empowerment: ", text: "We provide the tools and knowledge you need to take charge of your health." },
                            { head: "Personalization: ", text: "Every journey is unique, so our app offers tailored solutions to meet your individual needs." },
                            { head: "Community: ", text: "We foster a supportive environment where everyone can share their experiences and motivate each other." }
                        ].map((item, index) => (
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2 }}
                                variants={fadeLeftVariants}
                                key={index}
                            >
                                <strong>{item.head}</strong>
                                <span className='text-gray-700'>
                                    {item.text}
                                </span>
                            </motion.p>
                        ))
                        }
                    </div>
                </div>
                <div className=' '>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        variants={fadeUpVariants}
                        className='text-3xl font-semibold pb-5 max-w-[500px]'
                    >
                        Chosen as the Best Body Monitor for Health Tracking 2023
                    </motion.p>
                    <div className='flex flex-col gap-16 py-5 md:flex-row'>
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            variants={fadeLeftVariants}
                            src={sc}
                            className='h-96 w-full'
                        />
                        <div>
                            {[
                                { content: "The Most Precise Smart Scale in the World", text: "Now only", ocost: "$89.95", acost: "$179.90", abt: "80% of people fail to maintain their health goals. FitTrack scales are a simple and effective solution to stay motivated and keep track of your health." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={fadeRightVariants}
                                    src={sc}
                                >
                                    <p className='text-xl font-semibold '>{item.content}</p>
                                    <p className='font-semibold py-2'>{item.text}</p>
                                    <div className='inline-flex gap-5 items-center pb-2'>
                                        <h2 className='font-semibold text-xl'>{item.ocost}</h2>
                                        <h2 className='font-semibold line-through text-gray-500 '>{item.acost}</h2>
                                    </div>
                                    <motion.p
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.3 }}
                                        variants={fadeRightVariants}
                                        src={sc}
                                        className='py-2 text-gray-700 font-medium'
                                    >
                                        {item.abt}
                                    </motion.p>
                                </motion.div>
                            ))
                            }

                            <div className='flex flex-col space-y-3 py-3'>
                                {[
                                    { icon: <LuNotepadText />, text: "Accurate measurements" },
                                    { icon: <PiPersonArmsSpreadLight />, text: "Monitor progress easily" },
                                    { icon: <GiSandsOfTime />, text: "Nutrition and fitness coaching" }
                                ].map((item, index) => (
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.2 }}
                                        variants={fadeLeftVariants}
                                        src={sc}
                                        key={index}
                                        className='inline-flex items-center gap-3'
                                    >
                                        <p className='text-green-300'>{item.icon} </p>
                                        <p className='text-gray-700 font-medium'>{item.text}</p>
                                    </motion.div>
                                ))
                                }
                            </div>
                            <div className='flex gap-10 pt-3'>
                                <motion.button
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                    variants={fadeUpVariants}
                                    src={sc}
                                    className='bg-orange-400 px-5 py-2 rounded-xl font-medium cursor-pointer'
                                >
                                    Add to Cart
                                </motion.button>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                    variants={fadeUpVariants}
                                    src={sc}
                                    className='flex bg-gray-400 rounded-xl font-medium'
                                >
                                    <button
                                        onClick={handleDecrease}
                                        className=' px-3 py-2 cursor-pointer '
                                    >
                                        -
                                    </button>
                                    <button
                                        className=' px-3 py-2 cursor-pointer '
                                    >
                                        {quantity}
                                    </button>
                                    <button
                                        onClick={handleIncrease}
                                        className=' px-3 py-2 cursor-pointer '
                                    >
                                        +
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Progress />

        </div>
    )
}

export default About
