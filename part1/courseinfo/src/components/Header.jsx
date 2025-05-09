
const Header = (props) => {
 console.log(props.course.name)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

export default Header;