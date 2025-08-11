import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout1 from "./component/Layout1";
import Home1 from "./component/pages/Home1";
import Workthrough from "./component/pages/Workthrough"
import Login from "./component/pages/Login"
import Report from "./component/pages/Report"
import Sensor from "./component/pages/Sensor"
import Pattern from "./component/pages/Pattern"
import Alert from "./component/pages/Alert"
import Mypage from "./component/pages/Mypage"
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout1 />}>
            <Route index element={<Home1 />} />
            <Route path="workthrough" element={<Workthrough />} />
            <Route path="login" element={<Login />} />
            <Route path="report" element={<Report />} />
            <Route path="sensor" element={<Sensor />} />
            <Route path="pattern" element={<Pattern />} />
            <Route path="alert" element={<Alert />} />
            <Route path="mypage" element={<Mypage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
