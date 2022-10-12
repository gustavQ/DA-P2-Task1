import RugItem from './RugItem'
import rugsStyles from '../styles/Rugs.module.scss'

const RugList = ({ rugs }) => {
  return (
    <div className={rugsStyles.grid}>
      {rugs.map((rug, index) => (
        <RugItem rug={rug} />
      ))}
    </div>
  )
}

export default RugList