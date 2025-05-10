import StatLine from "./StatLine";

const Stats = ({good, neut, bad}) => {
  const all = good + neut + bad;
  const avg = ((good - bad)/all).toFixed(3);
  const pos = ((good/all)*100).toFixed(3);
  if(all > 0){
  return (
    <>
    <table>
      <tr><StatLine text={"good"} value={good}/></tr>
      <tr><StatLine text={"neutral"} value={neut}/></tr>
      <tr><StatLine text={"bad"} value={bad}/></tr>
      <tr><StatLine text={"all"} value={all}/></tr>
      <tr><StatLine text={"average"} value={avg}/></tr>
      <tr><StatLine text={"positive"} value={pos + '%'}/></tr>
      </table>
    </>
    )
  }
  else{
    return(
      <p>No Feedback Given</p>
    )
  }
}

export default Stats;