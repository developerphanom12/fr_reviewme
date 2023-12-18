import { Route, Routes } from "react-router-dom";
import Layout from "./components/MainLayouts/Layout";
import PageNF from "./components/PageNF";
import EmployLogin from "./components/CommonPages/loginpages/EmployLogin";
import AllPages from "./components/CommonPages/HomePages/AllPages";
import Employerlogin from "./components/CommonPages/loginpages/Employerlogin";
import EmployerProfile from "./components/employerPages/Employerr/EmployerProfile";
import EmployeeProfile from "./components/employeePages/Employee/EmployeeProfile";
import EditIntro from "./components/registerEmployeeFile/postDetails/EditIntro";
import AddNewPosition from "./components/registerEmployeeFile/postDetails/AddNewPosition";
import AddEducation from "./components/registerEmployeeFile/postDetails/AddEducation";
import EmployeeView from "./components/registerEmployeeFile/getDetails/EmployeeView";
import Home from "./components/topNavPages/Home";
import MyNetwork from "./components/topNavPages/MyNetwork";
import Jobs from "./components/topNavPages/Jobs";
import Message from "./components/topNavPages/Message";
import Notification from "./components/topNavPages/Notification";
import ForBusiness from "./components/topNavPages/ForBusiness";
import { useSelector } from "react-redux";
import EmployeeSign from "./components/CommonPages/signupPages/EmployeeSign";
import EmployerSign from "./components/CommonPages/signupPages/EmployerSign";
import EmployerView from "./components/employerPages/registerEmployerFile/getDetails/EmployerView";
import ErAddNewPosition from "./components/employerPages/registerEmployerFile/postDetails/ErAddNewPosition";
import ErEditIntro from "./components/employerPages/registerEmployerFile/postDetails/ErEditIntro";

function App() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const userDetails = useSelector((state) => state?.users?.user);
  const token = localStorage.getItem("token");
  return (
    <Layout>
      <Routes>
        {userCheck && token ? (
          <>
            <Route path="home" element={<Home />} />
            <Route path="mynetwork" element={<MyNetwork />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="message" element={<Message />} />
            <Route path="notification" element={<Notification />} />
            <Route path="forbusiness" element={<ForBusiness />} />

            {userDetails.role === "employ" ? (
              <>
                <Route path="/employeeprofile" element={<EmployeeProfile />} />
                <Route path="employeeview" element={<EmployeeView />} />
                <Route path="/editintro" element={<EditIntro />} />
                <Route path="/addnewpositon" element={<AddNewPosition />} />
                <Route path="/addeducation" element={<AddEducation />} />
              </>
            ) : userDetails.role === "employer" ? (
              <>
                <Route path="/employerprofile" element={<EmployerProfile />} />
                <Route path="employerview" element={<EmployerView />} />
                <Route path="/ereditintro" element={<ErEditIntro />} />
                <Route path="/eraddnewpositon" element={<ErAddNewPosition />} />
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <Route path="*" element={<PageNF />} />
            <Route path="/employlogin" element={<EmployLogin />} />
            <Route path="/employerlogin" element={<Employerlogin />} />
            <Route path="/employeesign" element={<EmployeeSign />} />
            <Route path="/employersign" element={<EmployerSign />} />
            <Route path="/" element={<AllPages />} />
          </>
        )}

        <Route path="/allpages" element={<AllPages />} />

        {/* nav bar pages */}
      </Routes>
    </Layout>
  );
}

export default App;
