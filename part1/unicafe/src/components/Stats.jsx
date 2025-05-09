

const Stats = ({good, neut, bad}) => {
  const all = good + neut + bad;
  const avg = all < 1 ? 0 : ((good - bad)/all).toFixed(3);
  const pos = all < 1 ? 0 : ((good/all)*100).toFixed(3);
  return (
    <>
    <p>good {good}</p>
    <p>neutral {neut}</p>
    <p>bad {bad}</p>
    <p>all {all}</p>
    <p>average {avg}</p>
    <p>positive {pos}%</p>

    </>
  )
}

export default Stats;