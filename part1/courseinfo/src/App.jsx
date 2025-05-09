import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Total from "./components/Total.jsx";

const App = () => {
   const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(course)
  
  return (
    <div>
      
        <Header name = {course.name} />
        <Content parts = {course.parts}/>
        <Total parts = {course.parts}/>
    </div>
  )
}

export default App;
