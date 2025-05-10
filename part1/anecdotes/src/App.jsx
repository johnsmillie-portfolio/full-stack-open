import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const arr = [];
  anecdotes.forEach((el, idx) => arr[idx] = 0);

  const [indexOfMax, setIndexOfMax] = useState(0) 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(arr);

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1;
    setVotes([...copy]);
    setIndexOfMax(findMax(copy,selected));
  }

  const ran = () => { 
    const num = Math.floor((Math.random()*anecdotes.length));
    setSelected(num);
  }

  const findMax = (arr, idx) => { 
    //console.log(arr[idx])
    if(votes[indexOfMax] < arr[idx]){
      return idx;
    }
    return indexOfMax;
  }
  

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>votes: {votes[selected]}</p>
      <button onClick={() => vote()}>vote</button>
      <button onClick={() => ran()}>next anectode</button>
      <h3>Anecdote with the most votes</h3>
      <p>{anecdotes[indexOfMax]}</p>
      <p>votes: {votes[indexOfMax]}</p>
    </div>
  )
}

export default App