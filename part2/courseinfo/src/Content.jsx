import { Part } from "./Part"


const Content = ({parts}) => {
  let total = 0;
  return (
    <div>
      {
        parts.map(el => {
          total += el.exercises;
          return (
           <Part key={el.id} part={el} />
          )}
      )}
      <p><b>Total of {total} exercises</b></p>
    </div>
  )
    
}


export default Content;