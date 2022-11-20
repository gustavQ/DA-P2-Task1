import dbConnect from '../../lib/dbConnect'
import Rug from '../../models/RugsModel'
import rugsStyles from '../../styles/Rugs.module.scss'
import Image from 'next/image'

const RugPage = ({ rug }) => {
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

export async function getServerSideProps({ params }) {
  await dbConnect()

  const rug = await Rug.findById(params.id).lean()
  rug._id = rug._id.toString()

  return { props: { rug } }
}

export default RugPage
