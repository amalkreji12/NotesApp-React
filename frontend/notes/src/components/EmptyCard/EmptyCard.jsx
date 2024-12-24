/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const EmptyCard = ({ imgSrc, message }) => {
    return (
        <div className='flex flex-col items-center'>
            <img src={imgSrc} alt='No notes found' className='w-60 flex pt-20' />

            <p className='w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5'>
                {message}
            </p>
        </div>
    )
}

export default EmptyCard