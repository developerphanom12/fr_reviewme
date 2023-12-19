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

// {"users":"{\"user\":{\"id\":2,\"email\":\"avineetsingh782@gmail.com\",\"role\":\"employ\",\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhdmluZWV0c2luZ2g3ODJAZ21haWwuY29tIiwicm9sZSI6ImVtcGxveSIsImlhdCI6MTcwMjk3NTY0MX0.ZtSWRX5Oi5CwuhmrUBUFijNBUVWn7kHayIrrJoJ_ygY\"},\"userCheck\":true,\"role\":\"\"}","_persist":"{\"version\":-1,\"rehydrated\":true}"}
function App() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const userDetails = useSelector((state) => state?.users?.user);
  const token = localStorage.getItem("token");
  console.log("role",  userDetails?.role)
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

            {userDetails?.role === "employ" ? (
              <>
                <Route path="/employeeprofile" element={<EmployeeProfile />} />
                <Route path="employeeview" element={<EmployeeView />} />
                <Route path="/editintro" element={<EditIntro />} />
                <Route path="/addnewpositon" element={<AddNewPosition />} />
                <Route path="/addeducation" element={<AddEducation />} />
              </>
            ) : userDetails?.role === "employer" ? (
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
