import './index.css'

const DenominationItemation = props => {
  const {value, stateChange} = props
  const changeState = () => {
    stateChange(value)
  }

  return (
    <li className="item-holder">
      <button type="button" className="btn" onClick={changeState}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItemation
