import React from 'react'
import InputTag from '../../components/Input/InputTag'

const AddEditNotes = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className='input-label'>Title</label>
            <input type='text' className='text-2xl text-slate-950 outline-none' placeholder='Meeting at 9am'/>
        </div>

        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>Content</label>
            <textarea type='text' className='text-sm text-slate-950 outline-none bg-slate-50 rounded' placeholder='Content' rows={10}/>
        </div>

        <div className='mt-3'>
            <label className='input-label'>TAGS</label>
            <InputTag/>
        </div>

        <button className='btn-primary font-medium mt-5 p-3' onClick={() => {}}>ADD</button>
    </div>
  )
}

export default AddEditNotes