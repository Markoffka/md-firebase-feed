function Welcome (props) {
  return (
    <>
      <h3>Public information {props.user ? 'for ' + props.user.email : ''}</h3>
    </>
  )
}

export default Welcome
