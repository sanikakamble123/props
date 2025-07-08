
import Child from './Child'; 

function Parent()
{
  const greeting = "Hello from the Parent!";

  return (
    <div style={{ "border": '2px solid green', "padding": '20px' }}>
      <h2>Parent Component</h2>
      <Child message={greeting} />
    </div>
  );
};

export default Parent;