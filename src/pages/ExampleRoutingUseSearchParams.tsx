import { useSearchParams } from 'react-router-dom';



const ExampleRoutingUseParams = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "No Name";

  return (
    <div>
      <h1>Example: Routing - searchParams</h1>
      <p>Name = <span style={{ color: 'maroon', fontWeight: 'bold' }}>{name}</span></p>
    </div>
  );

};



export default ExampleRoutingUseParams;
