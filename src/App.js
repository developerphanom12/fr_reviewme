import { Route, Routes } from "react-router-dom";
import Layout from "./components/MainLayouts/Layout";
import PageNF from "./components/PageNF";
import EmployLogin from "./components/CommonPages/EmployLogin";
import AllPages from "./components/CommonPages/HomePages/AllPages";
import Employerlogin from "./components/CommonPages/Employerlogin";
import EmployeeSign from "./components/signupPages/EmployeeSign";
import EmployerSign from "./components/signupPages/EmployerSign";
import EmployerProfile from "./components/ProfilePages/Employerr/EmployerProfile";
import EmployeeProfile from "./components/ProfilePages/Employee/EmployeeProfile";
import EditIntro from "./components/registerEmployeeFile/postDetails/EditIntro";
import ExpEmployee from "./components/ExpEmployee"
import AddNewPosition from "./components/registerEmployeeFile/postDetails/AddNewPosition";
import AddEducation from "./components/registerEmployeeFile/postDetails/AddEducation";
import EmployeeView from "./components/registerEmployeeFile/getDetails/EmployeeView";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<PageNF />} />
        <Route path="/employlogin" element={<EmployLogin />} />
        <Route path="/employerlogin" element={<Employerlogin />} />
        <Route path="/employeesign" element={<EmployeeSign />} />
        <Route path="/employersign" element={<EmployerSign />} />
        <Route path="/employerprofile" element={<EmployerProfile />}/>
        <Route path="/employeeprofile" element={<EmployeeProfile />}/>
        <Route path="/editintro" element={<EditIntro />}/>
        <Route path="/addnewpositon" element={<AddNewPosition />}/>
        <Route path="/addeducation" element={<AddEducation />}/>
        <Route  path="employeeview" element={<EmployeeView />}/>
        <Route path="/" element={<AllPages />} />
        <Route path="/allpages" element={<AllPages />} />
        <Route path="/expemployee" element={<ExpEmployee />}/>
      </Routes>
    </Layout>
  );
}

export default App;
