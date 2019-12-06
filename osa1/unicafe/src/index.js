import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const positive = good/(good+neutral+bad)*100
  const average = (good-bad)/(good+neutral+bad)

  if(isNaN(average)){
    return(
      <div>
        no feedback given
      </div>
    )
  }
  
  return (
    <table>
      <tbody>
        <Statistic text='good' value={good}/>
        <Statistic text='neutral' value={neutral}/>
        <Statistic text='bad' value={bad}/>
        <tr>
          <td>averave</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive} %</td>
        </tr>
      </tbody>
    </table>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='good' onClick={() => setGood(good+1)} />
      <Button text='neutral' onClick={() => setNeutral(neutral+1)} />
      <Button text='bad' onClick={() => setBad(bad+1)} />
     
      <h1>Statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)