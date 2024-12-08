import { Routes, Route } from 'react-router-dom';
import NavbarTop from './react/component/NavbarTop';
import Home from './pages/Home';

// hooks
import ExampleUseState from './pages/ExampleUseState';
import ExampleUseEffect from './pages/ExampleUseEffect';
import ExampleUseContext from './pages/ExampleUseContext';
import ExampleUseReducer from './pages/ExampleUseReducer';
import ExampleUseMemo from './pages/ExampleUseMemo';
import ExampleUseCallback from './pages/ExampleUseCallback';
import ExampleUseLayoutEffect from './pages/ExampleUseLayoutEffect';
import ExampleUseRef from './pages/ExampleUseRef';
import ExampleUseImperativeHandle from './pages/ExampleUseImperativeHandle';

// routing
import ExampleRoutingUseParams from './pages/ExampleRoutingUseParams';
import ExampleRoutingUseSearchParams from './pages/ExampleRoutingUseSearchParams';
import ExampleRoutingNesting, { ExampleRoutingNested } from './pages/ExampleRoutingNesting';
import ExampleRoutingLogin from './pages/ExampleRoutingLogin';
import ExampleRoutingDashboard from './pages/ExampleRoutingDashboard';


// react/component
import PrivateRoute from './react/component/PrivateRoute';

// react/context
import { ThemeProvider } from './react/context/ThemeContext';
import { AuthProvider } from './react/context/AuthContext';


const App = () => {
  return (
    <div>
      <nav>
        <NavbarTop></NavbarTop>
      </nav>

      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/example-usestate' element={<ExampleUseState />} />
            <Route path='/example-useeffect' element={<ExampleUseEffect />} />
            <Route path='/example-usecontext' element={<ExampleUseContext />} />
            <Route path='/example-usereducer' element={<ExampleUseReducer />} />
            <Route path='/example-usememo' element={<ExampleUseMemo />} />
            <Route path='/example-usecallback' element={<ExampleUseCallback />} />
            <Route path='/example-uselayouteffect' element={<ExampleUseLayoutEffect />} />
            <Route path='/example-useref' element={<ExampleUseRef />} />
            <Route path='/example-useimperativehandle' element={<ExampleUseImperativeHandle />} />

            <Route path='/example-routing-useparams/:id' element={<ExampleRoutingUseParams />} />
            <Route path='/example-routing-usesearchparams' element={<ExampleRoutingUseSearchParams />} />
            <Route path='/example-routing-nesting' element={<ExampleRoutingNesting />}>
              <Route path='nested' element={<ExampleRoutingNested />} />
            </Route>
            <Route path='/example-routing-login' element={<ExampleRoutingLogin />} />
            <Route path="/example-routing-dashboard" element={<PrivateRoute element={<ExampleRoutingDashboard />} />} // Use PrivateRoute for protected route
            />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};


export default App;
