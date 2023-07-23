import { Line } from 'rc-progress'
import { theme } from '../theme'

interface Prop{
  percent:number
}

const ProgressBar = ({percent}:Prop) => {
  return (
    <div>
      <Line percent={percent}   style={{height:'22px',width:'100%'}} strokeColor={theme.palette.primary.main} />
    </div>
  )
}

export default ProgressBar
