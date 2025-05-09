

const Total = (props) => {
  const contents = props.course.parts;

  return (
    <p>
      <span>
        Number of Exercises:  {contents.reduce((sum, el) => sum + el.exercises, 0)}
      </span>
    </p>
  )
}

export default Total;