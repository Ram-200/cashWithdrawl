import {Component} from 'react'
import './index.css'
import DenominationItemation from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {money: 2000}

  stateChange = value => {
    this.setState(preState => ({
      money: preState.money - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {money} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="heading-container">
            <div className="para-div">
              <p className="s">S</p>
            </div>
            <p className="name-para">Sarah Williams</p>
          </div>
          <div className="money-container">
            <p className="balance-name">Your Balance</p>
            <div className="balance-holder">
              <p className="amount">{money}</p>
            </div>
          </div>
          <p className="rupees">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items-holder">
            {denominationsList.map(eachObject => (
              <DenominationItemation
                key={eachObject.id}
                value={eachObject.value}
                stateChange={this.stateChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
