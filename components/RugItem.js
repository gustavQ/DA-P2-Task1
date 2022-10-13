import Image from 'next/image'
import rugsStyles from '../styles/Rugs.module.scss'

const RugItem = ({ rug }) => {
  return (
    <div className={rugsStyles.card}>
        <div className={rugsStyles.pfp}>
          <Image  src={rug.nft_pfp} alt="none" width="100%" height="100%" layout="responsive" objectFit="contain"/>
        </div>
        <div>
          <h3>{rug.nft_name}</h3>
          <p>{rug.nft_rug_descr}</p>
        </div>
    </div>
  )
}

export default RugItem