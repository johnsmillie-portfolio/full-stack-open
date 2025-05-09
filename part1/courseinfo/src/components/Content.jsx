

const Content = (props) => {
  
  const contents = props.course.parts;

  return (
    <>
      {contents.map((el) => {
        return <p>{el.name} {el.exercises}</p>
      })}
    </>
  )
  


}

export default Content;