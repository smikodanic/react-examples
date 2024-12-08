import { Outlet } from 'react-router-dom';



const ExampleRoutingNesting = () => {
  return (
    <div>
      <h1>Example: Routing - nested</h1>
      <br />
      <br />NESTED COMPONENT:
      <Outlet />
    </div>
  );
};


const ExampleRoutingNested = () => {
  return (
    <div>
      <b>Lorem ipsum from componend "ExampleRoutingNested"...</b>
    </div>
  );
};



export default ExampleRoutingNesting;
export { ExampleRoutingNested };
