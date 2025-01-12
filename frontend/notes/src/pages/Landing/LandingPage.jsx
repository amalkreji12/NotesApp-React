/* eslint-disable no-unused-vars */
import React from 'react'
import LandingNavBar from '../../components/NavBar/LandingNavBar'

const Landing = () => {
    return (
        <div>
            <LandingNavBar />

            <div className='hero-section text-center py-16 bg-gray-50'>
                <h1 className='text-4xl font-semibold text-center text-black'>
                    Welcome to Notes
                </h1>

                <p className='class-lg text-center text-gray-700 mt-2'>
                Your simple, secure, and smart way to organize your thoughts, ideas, and to-do lists.
                </p>
            </div>


        </div>
    )
}

export default Landing