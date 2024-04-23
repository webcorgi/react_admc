import 'css/App.css';
import Customer from 'pages/Customer';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from 'include/ScrollTop';
import Wrapper from 'include/Wrapper';
import AU001M04 from 'pages/AU001M04';

function App() {

  return (
    <BrowserRouter
    // basename='react_admc'
    >
      <Wrapper>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Customer />} exact />
          <Route path="/AU" element={<AU001M04 />} exact />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;