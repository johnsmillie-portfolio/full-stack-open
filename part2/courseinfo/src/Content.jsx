import { Part } from "./Part"


const Content = ({parts}) => {
  const total = parts.reduce((s,p) => {
    return s + p.exercises;
  },0)
  return (
    <div>
      {
        parts.map(el => {
          return (
           <Part key={el.id} part={el} />
          )}
      )}
      <p><b>Total of {total} exercises</b></p>
    </div>
  )
    
}


export default Content;