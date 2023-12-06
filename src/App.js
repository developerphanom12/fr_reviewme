import { Route, Routes } from "react-router-dom";
import Layout from "./components/MainLayouts/Layout";
import PageNF from "./components/PageNF";
import EmployLogin from "./components/CommonPages/EmployLogin";
import AllPages from "./components/CommonPages/HomePages/AllPages";
import Employerlogin from "./components/CommonPages/Employerlogin";
import EmployeeSign from "./components/signupPages/EmployeeSign";
import EmployerSign from "./components/signupPages/EmployerSign";
import EmployerProfile from "./components/ProfilePages/EmployerProfile";
import EmployeeProfile from "./components/ProfilePages/EmployeeProfile";
import EditIntro from "./components/registerEmployeeFile/EditIntro";
import ExpEmployee from "./components/ExpEmployee"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<PageNF />} />
        <Route path="/employlogin" element={<EmployLogin />} />
        <Route path="/employerlogin" element={<Employerlogin />} />
        <Route path="/employeesign" element={<EmployeeSign />} />
        <Route path="/employersign" element={<EmployerSign />} />
        <Route path="/employerprofile" element={<EmployerProfile/>}/>
        <Route path="/employeeprofile" element={<EmployeeProfile/>}/>
        <Route path="/editintro" element={<EditIntro />}/>
        <Route path="/" element={<AllPages />} />
        <Route path="/allpages" element={<AllPages />} />
        <Route path="/expemployee" element={<ExpEmployee />}/>
      </Routes>
    </Layout>
  );
}

export default App;
