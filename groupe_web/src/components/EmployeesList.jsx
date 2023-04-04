import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function EmployeesList() {
  const navigate = useNavigate();
  //http://localhost:5000/employees/get_all_employees
  const [employees, setEmployees] = useState([]);
  //recuperation du token
  let token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

  const handleGetAllEmployees = () => {
    axios
      .get("http://localhost:5000/employees/get_all_employees", { headers })
      .then((result) => setEmployees(result.data));
  };

  useEffect(() => {
    handleGetAllEmployees();
  }, []);

  const handleDeleteEmployee = async (x) => {
    await axios
      .delete(`http://localhost:5000/employees/delete_employee/${x}`, {
        headers,
      })
      .then(() => {
        toast.info("employé supprimé avec succes ! ");
      });
  };

  return (
    <React.Fragment>
      <Container fluid>
        <ToastContainer />
        <Row>
          <Col lg={{ offset: 1 }}>
            <Button
              className="mt-3"
              variant="success"
              onClick={() => navigate("/add")}
            >
              Ajouter un employé
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 6, offset: 2 }}>
            {" "}
            <Table
              style={{ width: "70vw" }}
              size="lg"
              contentEditable={false}
              className="mt-4 text-center"
            >
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>E-mail</th>
                  <th>CIN </th>
                  <th>Tél </th>
                  <th>Actions </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((el) => {
                  return (
                    <tr>
                      <td>{el.nom}</td>
                      <td>{el.prenom}</td>
                      <td>{el.email}</td>
                      <td>{el.tel}</td>
                      <td>{el.cin}</td>
                      <td>
                        <Button
                          variant="success"
                          onClick={() => {
                            navigate(`/edit/${el._id}`);
                          }}
                        >
                          editer
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteEmployee(el._id)}
                        >
                          supprimer
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default EmployeesList;
