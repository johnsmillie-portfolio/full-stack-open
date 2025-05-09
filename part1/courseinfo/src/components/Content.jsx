

const Content = ({parts}) => {
  
  const contents = parts;

  return (
    <>
      {contents.map((el) => {
        return <p>{el.name} {el.exercises}</p>
      })}
    </>
  )
  


}

export default Content;