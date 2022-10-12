import RugItem from './RugItem'
import rugsStyles from '../styles/Rugs.module.scss'

const RugList = ({ rugs }) => {
  return (
    <div className={rugsStyles.grid}>
      {rugs.map((rug) => (
        <RugItem key={rug._id} rug={rug} />
      ))}
    </div>
  )
}

export default RugList