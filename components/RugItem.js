import rugsStyles from '../styles/Rugs.module.scss'

const RugItem = ({ rug, index }) => {
  return (
    <div className={rugsStyles.card}>
        <img src={rug.nft_pfp} key={index}/>
        <div>
          <h3 key={index}>{rug.nft_name}</h3>
          <p key={index}>{rug.nft_rug_descr}</p>
        </div>
    </div>
  )
}

export default RugItem