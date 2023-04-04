import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import AddEmployee from "./components/AddEmployee";
import "react-toastify/dist/ReactToastify.css";
const styles = {
  minHeight: "85vh",
};
import "bootstrap/dist/css/bootstrap.min.css";
import EditEmployee from "./components/EditEmployee";
import Login from "./components/auth/Login";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <>
      <MyNavbar />
      <div style={styles}>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <EmployeesList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddEmployee />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <EditEmployee />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
