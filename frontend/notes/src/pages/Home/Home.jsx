/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance'
import Toast from '../../components/ToastMessage/Toast'

function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add",
  })

  const [allNotes, setAllNote] = useState([])
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  const handleEditNote = (noteDetails) => {
    setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
  };

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message,
      type,
    });
  };

  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: "",
    });
  };

  //User info API
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get('/get-user');
      // console.log(userInfo);
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate('/login');
      };
    };
  };

  //Get all Notes
  const getAllNote = async () => {
    try {
      const response = await axiosInstance.get('/notes');
      if (response.data && response.data.notes) {
        setAllNote(response.data.notes);
      }
    } catch (error) {
      console.log("Error getting all notes");
    }
  }

  //Delete note API
  const deleteNote = async (data) => {
    const noteId = data._id
    try {
      const response = await axiosInstance.delete('/delete-note/' + noteId);

      if (response.data && !response.data.error) {
        showToastMessage("Note deleted successfully", 'delete');
        getAllNote();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log("An error occurred while deleting note");
      }
    }
  }

  useEffect(() => {
    getAllNote();
    getUserInfo();
    return () => { }
  }, []);



  return (
    <div>
      <NavBar userInfo={userInfo} />

      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          {allNotes.map((items, index) => (
            <NoteCard key={items._id} title={items.title} date={items.createdAt} content={items.content} tags={items.tags} isPinned={items.isPinned} onEdit={() => handleEditNote(items)}
              onDelete={() => deleteNote(items)} onPinNote={() => { }} />
          ))}
        </div>
      </div>

      {/* Add notes  */}
      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' onClick={() => {
        setOpenAddEditModal({ isShown: true, type: "add", data: null });
      }}>
        <MdAdd className='text-[32px] text-white' />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => { }}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
          getAllNote={getAllNote}
          showToastMessage={showToastMessage}
        />
      </Modal>

      <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />

    </div>
  )
}

export default Home