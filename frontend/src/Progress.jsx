import React from 'react'
import workout from './Images/workout.jpg'
import tracking from './Images/tracking.jpg'
import support from './Images/support.jpg'
import { FaWeebly } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineSupport } from "react-icons/hi";
import { easeOut, motion } from "framer-motion";
import Support from './Support';

const Progress = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0.5, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };

    return (
        <div id='progress'>
            <div className='px-6 md:px-32'>
                <div className=" md:py-10 sm:py-20">
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={fadeUpVariants}
                        className='text-2xl font-semibold py-10'
                    >
                        Functionalities of our product
                    </motion.p>
                    <div className='grid gap-5 md:grid-cols-3'>
                        {[
                            { img: workout, icon: <FaWeebly />, head: " Personalized workout plans", text: "Get workouts designed just for you! Our plans adapt to our fitness level and help you reach your goals. Whether you're a beginner or more advanced, you'll find the right exercises to keep you on track." },
                            { img: tracking, icon: <FaArrowTrendUp />, head: " Progress Tracking", text: "Keep an eye on your progress easily! Our detailed analytics show how far you've come. You'll get insights that help you understand your achievements and stay motivated to reach your goals." },
                            { img: support, icon: <HiOutlineSupport />, head: " Community Support", text: "Join a friendly community of fitness lovers! You'll find motivation and support from others on their fitness journeys. Share tips, celebrate achievements, and stay inspired together!" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2 }}
                                variants={fadeUpVariants}
                            >
                                <motion.img
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                    variants={fadeUpVariants}
                                    src={item.img}
                                    className='w-full aspect-[4/3] pb-10 object-cover rounded-2xl'
                                />
                                <div className='space-y-5' >
                                    <div className=' inline-flex items-center gap-2'>
                                        <p className='text-3xl'>{item.icon}</p>
                                        <motion.p
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ amount: 0.3 }}
                                            variants={fadeUpVariants}
                                            className='font-semibold text-xl'
                                        >
                                            {item.head}
                                        </motion.p>
                                    </div>
                                    <motion.p
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.3 }}
                                        variants={fadeUpVariants}
                                        className='text-gray-500 leading-relaxed'
                                    >
                                        {item.text}
                                    </motion.p>
                                    <div className='py-5'>
                                        <motion.button
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ amount: 0.3 }}
                                            variants={fadeUpVariants}
                                            className='uppercase bg-blue-500 p-3 rounded-2xl cursor-pointer hover:bg-blue-600'
                                        >
                                            Learn more
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                        }
                    </div>
                </div>
            </div>
            <Support />
        </div>
    )
}

export default Progress
