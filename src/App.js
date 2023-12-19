import { Route, Routes } from "react-router-dom";
import Layout from "./components/MainLayouts/Layout";
import PageNF from "./components/PageNF";
import AllPages from "./components/CommonPages/HomePages/AllPages";
import { useSelector } from "react-redux";
import EmployeeProfile from "./components/employeePages/EmployeeProfile";
import EmployerProfile from "./components/employerPages/EmployerProfile";
import Home from "./components/topNavPages/Home";
import MyNetwork from "./components/topNavPages/MyNetwork";
import Jobs from "./components/topNavPages/Jobs";
import  Message  from "./components/topNavPages/Message";
import Notification from "./components/topNavPages/Notification";
import ForBusiness from "./components/topNavPages/ForBusiness";
import EditIntro from "./components/employeePages/postDetails/EditIntro";
import EmployeeView from "./components/employeePages/getDetails/EmployeeView";
import AddNewPosition from "./components/employeePages/postDetails/AddNewPosition";
import AddEducation from "./components/employeePages/postDetails/AddEducation";
import EmployLogin from "./components/CommonPages/loginpages/EmployLogin";
import Employerlogin from "./components/CommonPages/loginpages/Employerlogin";
import EmployeeSign from "./components/CommonPages/signupPages/EmployeeSign";
import EmployerSign from "./components/CommonPages/signupPages/EmployerSign";


function App() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const userDetails = useSelector((state) => state?.users);
  const token = localStorage.getItem("token");
  console.log("role",  userDetails?.user?.role)
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

            {userDetails?.user?.role === "employ" ? (
              <>
                <Route path="/employeeprofile" element={<EmployeeProfile />} />
                <Route path="employeeview" element={<EmployeeView />} />
                <Route path="/editintro" element={<EditIntro />} />
                <Route path="/addnewpositon" element={<AddNewPosition />} />
                <Route path="/addeducation" element={<AddEducation />} />
              </>
            ) : userDetails?.user?.role === "employer" ? (
              <>
                <Route path="/employerprofile" element={<EmployerProfile />} />
             
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
            <Route path="/allpages" element={<AllPages />} />
          </>
        )}


        
      </Routes>
    </Layout>
  );
}

export default App;
