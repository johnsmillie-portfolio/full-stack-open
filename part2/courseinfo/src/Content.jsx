import { Part } from "./Part"


const Content = ({parts}) => {
  return (
    <div>
      {parts.map(el => <Part key={el.id} part={el} />) }
    </div>
  )
    
}


export default Content;