import { useState } from 'react'
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Stats from "./components/Stats.jsx";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const incGood = () => setGood(good +1);
  const incNeut = () => setNeutral(neutral+1);
  const incBad = () => setBad(bad+1);
  return (
    <div>
      <Header text={"Feedback:"}/>
      <Button onClick={incGood} text={"Good"}/>
      <Button onClick={incNeut} text={"Neutral"}/>
      <Button onClick={incBad} text={"Bad"}/>
      <Stats good={good} neut={neutral} bad={bad} />

    </div>
  )
}

export default App