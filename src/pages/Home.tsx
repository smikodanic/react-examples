import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <h2>HOOKS</h2>
      <ol>
        <li><Link to="/example-usestate">Example: useState</Link></li>
        <li><Link to="/example-useeffect">Example: useEffect</Link></li>
        <li><Link to="/example-usecontext">Example: useContext</Link></li>
        <li><Link to="/example-usereducer">Example: useReducer</Link></li>
        <li><Link to="/example-usememo">Example: useMemo</Link></li>
        <li><Link to="/example-usecallback">Example: useCallback</Link></li>
        <li><Link to="/example-uselayouteffect">Example: useLayoutEffect</Link></li>
        <li><Link to="/example-useref">Example: useRef</Link></li>
        <li><Link to="/example-useimperativehandle">Example: ExampleUseImperativeHandle</Link></li>
      </ol>
      <h2 style={{ marginTop: 50 }}>ROUTING</h2>
      <ol>
        <li><Link to="/example-routing-useparams/8">Example: Routing - useParams</Link></li>
        <li><Link to="/example-routing-usesearchparams?name=John">Example: Routing - useSearchParams</Link></li>
        <li><Link to="/example-routing-nesting/nested">Example: Routing - nesting</Link></li>
        <li><Link to="/example-routing-login">Example: Routing - Login</Link></li>
        <li><Link to="/example-routing-dashboard">Example: Routing - Dashboard (protected route)</Link></li>
      </ol>
    </>
  );
};


export default Home;
