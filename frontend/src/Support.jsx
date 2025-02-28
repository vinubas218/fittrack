import React from 'react'
import sarah from './Images/sarah.jpg'
import mike from './Images/mike.jpg'
import jessi from './Images/jessi.jpg'
import { FaStar } from 'react-icons/fa'
import { LuNotepadText } from "react-icons/lu";
import { BsDroplet } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { TbDropletDown } from "react-icons/tb";
import { motion } from 'framer-motion'
import Footer from './Footer'

const Support = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0.5, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const fadeLeftVariants = {
        hidden: { opacity: 0.5, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeRightVariants = {
        hidden: { opacity: 0.5, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const renderStars = (rate) => {
        const star = []
        for (let i = 1; i <= rate; i++) {
            star.push(<FaStar key={i} />)
        }
        return star;
    }
    return (
        <div >
            <div id='support' className='px-6 md:px-32'>
                <div className='py-24 '>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={fadeUpVariants}
                        className='text-2xl font-semibold pb-15'
                    >
                        User Feedback and Insights
                    </motion.p>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                        {[
                            { img: sarah, name: "Sarah James", review: "FitTrack has transformed my fitness journey-I'm more motivated than ever.", rate: 3 },
                            { img: mike, name: "Mike Kumar", review: "The personalized plans really work!I've seen amazing results in just a few months.", rate: 4 },
                            { img: jessi, name: "Jessica", review: "I love the community support.It's like having  workout buddy all the time!", rate: 3 }
                        ].map((item, index) => (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                                variants={fadeLeftVariants}
                                className=' place-items-center p-5 space-y-2 rounded-2xl bg-yellow-500'
                                key={index}
                            >
                                <img src={item.img} alt="" className='h-12 w-12 rounded-full' />
                                <p className='text-xl font-semibold'>{item.name}</p>
                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.2 }}
                                    variants={fadeUpVariants}
                                    className='text-center'
                                >
                                    {item.review}
                                </motion.p>
                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.1 }}
                                    variants={fadeUpVariants}
                                    className='flex gap-2'
                                >
                                    {renderStars(item.rate)}
                                </motion.p>
                            </motion.div>
                        ))
                        }
                    </div>
                </div>
                <div id='consultation' className='py-12'>
                    <div>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={fadeRightVariants}
                        className='bg-pink-100 rounded-3xl space-y-5 p-10 place-items-center'
                    >
                        <p className='text-center font-medium text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500'>Diabetics participating in the Actofit Diabetics Remission Program experienced more stable blood sugar levels compared to traditional diabetics management methods.</p>
                        <p className='text-xl'>Have any questions or concerns? Reach out to our expert today!</p>
                        <motion.button
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            variants={fadeUpVariants}
                            className='bg-white p-3 rounded-2xl cursor-pointer'
                        >
                            Take a Free Consultation
                        </motion.button>
                    </motion.div>
                    </div>
                </div>
                <div className=''>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={fadeLeftVariants}
                        className='grid grid-cols-1 md:grid-cols-4 py-16 '>
                        {[
                            { icon: <LuNotepadText />, main: "3+ kg", text: "Sustained Weight Loss" },
                            { icon: <BsDroplet />, main: "1.3%", text: "Average HbA1c drp within 3 months" },
                            { icon: <MdGroups />, main: "98.6%", text: "Of users have seen a reduction in reported Hypo/Hyper glycemic episodes" },
                            { icon: <TbDropletDown />, main: "90%", text: "Users have seen a reduction in Sugar levels" }
                        ].map((item, index) => (
                            <div key={index} className='bg-green-200 rounded-xs p-6 place-items-center space-y-3 text-center'>
                                <p className='text-4xl border-2 border-gray-700 rounded-full h-12 w-12 p-3 flex items-center justify-center '>{item.icon}</p>
                                <p className='font-medium text-xl'>{item.main}</p>
                                <p className='text-xs'>{item.text}</p>
                            </div>
                        ))
                        }
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Support
