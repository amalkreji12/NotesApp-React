import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'

function Home() {
  return (
    <div>
      <NavBar />

      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard title='Test Demo Sample Test' date='10th Dec 2024' content='lorem ipsum dolor sit amet' tags='#test' isPinned={true} onEdit={() => { }}
            onDelete={() => { }} onPinNote={() => { }} />
        </div>
      </div>

      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' onClick={() => { }}>
        <MdAdd className='text-[32px] text-white' />
      </button>
    </div>
  )
}

export default Home