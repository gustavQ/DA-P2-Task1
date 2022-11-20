import { useState } from 'react'
import AddButton from './AddButton'
import Modal from './Modal'

const FormModal = () => {
  const [showModal, setShowModal] = useState(false)

  const onClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <AddButton handleButton={onClick} />
      <Modal 
        onClose={() => setShowModal(false)}
        show={showModal}
        title={"Submit Testimonial"}>
        <h1>hello</h1>
      </Modal>
    </>
  )
}

export default FormModal
