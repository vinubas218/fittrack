import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
const Footer = () => {
    return (
        <div className='bg-gray-200 px-12'>
            <div className='grid grid-cols-2 py-6 md:grid-cols-5'>
                <div className='pb-5'>
                    <h3 className='text-xl font-semibold pb-4'>Product</h3>
                    <ul className='space-y-1 '>
                        <li className='hover:underline cursor-pointer'>Dara Smart Scale</li>
                    </ul>
                </div>
                <div className='pb-5'>
                    <h3 className='text-xl font-semibold pb-4'>Support</h3>
                    <ul className='space-y-1'>
                        <li className='hover:underline cursor-pointer'>Track your order</li>
                        <li className='hover:underline cursor-pointer'>Contact Us</li>
                        <li className='hover:underline cursor-pointer'>FAQ</li>
                        <li className='hover:underline cursor-pointer'>Refund & Returns</li>
                        <li className='hover:underline cursor-pointer'>Terms of Services</li>
                        <li className='hover:underline cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='pb-5'>
                    <h3 className='text-xl font-semibold pb-4'>About</h3>
                    <ul className='space-y-1 cursor-pointer'>
                        <li className='hover:underline cursor-pointer'>Our Story</li>
                        <li className='hover:underline cursor-pointer'>How It Works</li>
                        <li className='hover:underline cursor-pointer'>Reviews</li>
                        <li className='hover:underline cursor-pointer'>Blogs</li>
                    </ul>
                </div>
                <div className='pb-5'>
                    <h3 className='text-xl font-semibold pb-4'>Resources</h3>
                    <ul className='space-y-1 cursor-pointer'>
                        <li className='hover:underline cursor-pointer'>Affiliates </li>
                        <li className='hover:underline cursor-pointer'>FitTrack Fundamentals</li>
                        <li className='hover:underline cursor-pointer'>Brand Ambassadors</li>
                        <li className='hover:underline cursor-pointer'>Refer a friend</li>
                    </ul>
                </div>
                <div className=''>
                    <h3 className='text-xl font-semibold pb-4'>Sign up for Newsletter</h3>
                    <ul className='space-y-1 pb-3 '>
                        <li>Be the first to hear </li>
                        <li>about Amazfit special discounts,</li>
                        <li>new product announcements,</li>
                        <li>compaigns, and more!</li>
                    </ul>
                    <div className='flex items-center rounded border border-gray-600 overflow-hidden w-full max-w-[300px]'>
                        <input
                            type="text"
                            placeholder='Enter Email...'
                            className='outline-none px-2 flex-1 min-w-0'
                        />
                        <button className='bg-green-600 p-2 cursor-pointer'>Submit</button>
                    </div>
                    <p className='py-2 cursor-pointer'>support@fittrackapp.com</p>
                    <p className='font-medium cursor-pointer'>Follow Us</p>
                    <div className='flex gap-3 py-3 cursor-pointer'>
                        <FaInstagram className='hover:scale-125'/>
                        <RiFacebookCircleLine className='hover:scale-125'/>
                        <SlSocialYoutube className='hover:scale-125'/> 
                        <TfiTwitter className='hover:scale-125'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
