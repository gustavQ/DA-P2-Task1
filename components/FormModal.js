import { useState } from 'react'
import AddButton from './AddButton'
import Modal from './Modal'
import Form from './Form'

const FormModal = () => {
  const [showModal, setShowModal] = useState(false)
  
  const rugForm = {
    nft_name: '',
    nft_pfp: '',
    nft_rug_descr: '',
  }
  
  const onClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <AddButton handleButton={onClick} />
      <Modal 
        onClose={() => setShowModal(false)}
        show={showModal}
        title={"Add New Rug"}>
          <Form rugForm={rugForm} />
      </Modal>
    </>
  )
}

export default FormModal
