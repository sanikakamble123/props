

function Child(props)
 {
  const msg="Hii from the child";
  return (
    <div style={{ "border": '1px solid blue', "padding": '10px', "margin": '5px' }}>
      <h3>Child Component</h3>
      <p>Message from parent:{props.message}</p>
    </div>
  )
}

export default Child;