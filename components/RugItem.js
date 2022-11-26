import rugsStyles from '../styles/Rugs.module.scss'
import { useState } from 'react'
import Modal from './Modal'
import RugModal from './RugModal'
import ImageFallback from './ImageFallback'

const RugItem = ({ rug }) => {
  const [showModal, setShowModal] = useState(false)

  return (
  <>
  <button onClick={() => setShowModal(true)} type="button"> 
    <div className={rugsStyles.card}>
        <div className={rugsStyles.pfp}>
        	<ImageFallback  src={rug.nft_pfp} 
									alt="none" 
									width="100%" 
									height="100%" 
									layout="responsive" 
									objectFit="contain"/>
        </div>
        <div>
          <h3>{rug.nft_name}</h3>
        </div>
    </div>
  </button>
  <Modal
    onClose={() => setShowModal(false)}
    show={showModal}
    title={rug.nft_name}>
      <RugModal Id={rug._id} />
  </Modal>
  </>
  )
}

export default RugItem
