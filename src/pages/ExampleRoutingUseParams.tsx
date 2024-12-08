import { useParams } from 'react-router-dom';



const ExampleRoutingUseParams = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Example: Routing - useParams</h1>
      <p>ID = <span style={{ color: 'maroon', fontWeight: 'bold' }}>{id}</span></p>
    </div>
  );
};



export default ExampleRoutingUseParams;
