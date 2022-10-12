import rugsStyles from '../styles/Rugs.module.scss'

const RugItem = ({ rug }) => {
  return (
    <div className={rugsStyles.card}>
        <img src={rug.nft_pfp}/>
        <div>
          <h3>{rug.nft_name}</h3>
          <p>{rug.nft_rug_descr}</p>
        </div>
    </div>
  )
}

export default RugItem