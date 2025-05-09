

const Content = (props) => {
  
  const contents = props.contents;

  return (
    <>
      {contents.map((el) => {
        return <p>{el.part} {el.exercises}</p>
      })}
    </>
  )
  


}

export default Content;