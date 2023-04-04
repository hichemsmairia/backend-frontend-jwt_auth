import React from "react";
import { useState } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
function EditEmployee() {
  //extraction du parametre a partie de url
  let token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: 0,
    cin: 0,
  });

  const handleGetOneEmployee = () => {
    axios
      .get(`http://localhost:5000/employees/get_employee/${id}`, { headers })
      .then((result) => {
        setData(result.data[0]);
      });
  };
  useEffect(() => {
    handleGetOneEmployee();
  }, []);

  const handleUpdateEmployee = () => {
    axios
      .put(`http://localhost:5000/employees/update_employee/${id}`, data, {
        headers,
      })
      .then(() => {
        toast.success("employé modifié avec succes ! ");
      })
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }, 2500);
      });
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col className="mt-3" lg={{ offset: 4, span: 4 }}>
          <Form noValidate>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                lg={12}
                md="12"
                controlId="validationCustom01"
              >
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nom"
                  value={data.nom}
                  onChange={(e) => setData({ ...data, nom: e.target.value })}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                lg={12}
                md="12"
                controlId="validationCustom02"
              >
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  onChange={(e) => setData({ ...data, prenom: e.target.value })}
                  required
                  type="text"
                  placeholder="Last name"
                  value={data.prenom}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                lg={12}
                md="12"
                controlId="validationCustom03"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  type="email"
                  placeholder="E-mail"
                  value={data.email}
                  required
                />
              </Form.Group>
              <Form.Group
                as={Col}
                lg={12}
                md="12"
                controlId="validationCustom04"
              >
                <Form.Label>CIN</Form.Label>
                <Form.Control
                  onChange={(e) => setData({ ...data, cin: e.target.value })}
                  type="number"
                  placeholder="CIN"
                  value={data.cin}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  ce numéro CIN n'est pas valide .
                </Form.Control.Feedback>
                <Form.Label>Tél</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="tel"
                  onChange={(e) => setData({ ...data, tel: e.target.value })}
                  required
                  value={data.tel}
                />
              </Form.Group>
            </Row>
            <Row>
              <Col lg={9}>
                <Button
                  variant="success"
                  onClick={() => handleUpdateEmployee()}
                >
                  modifier un employé
                </Button>
              </Col>
              <Col>
                <Button variant="warning">Retour</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditEmployee;
