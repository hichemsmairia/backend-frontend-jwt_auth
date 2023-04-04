import React from "react";
import { useState } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
function AddEmployee() {
  let token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: 0,
    cin: 0,
  });

  const handleAddEmployee = () => {
    axios
      .post("http://localhost:5000/employees/add", data, { headers })
      .then(() => {
        toast.success("employé ajouté avec succes ! ");
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
                />
                <Form.Control.Feedback>parfait ! </Form.Control.Feedback>{" "}
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
                  required
                />
                <Form.Control.Feedback type="invalid">
                  cette address email n'est pas valide .
                </Form.Control.Feedback>
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
                />
              </Form.Group>
            </Row>
            <Row>
              <Col lg={9}>
                <Button variant="success" onClick={() => handleAddEmployee()}>
                  ajouter un employé
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

export default AddEmployee;
