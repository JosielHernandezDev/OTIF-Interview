import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Card, Form, Row, Col, Alert, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import { signInSchema } from "../../core/formSchema/authValidationSchema";

import "./loginComponent.css";

export default function Login() {
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const history = useHistory();

  const handleLogin = async (user) => {
    setLoading(true);
    setErrors(false);
    await auth
      .login(user)
      .then(({ success, data, results }) => {
        if (success) {
          history.push("/search");
        } else {
          localStorage.clear();
          setErrors(true);
          setErrorMessage(results);
        }
      })
      .finally(() => setLoading(false));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: function (e) {
      handleLogin(e);
    },
  });

  return (
    <Row className="container-login">
      <Col>
        <Card className="container-card">
          {errors && (
            <Alert key={"danger"} variant={"danger"}>
              {errorMessage}
            </Alert>
          )}
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                required
                autoComplete="off"
                placeholder="Enter username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.username && formik.errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                autoComplete="off"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.password && formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="btn-submit"
              disabled={
                !formik.dirty || !formik.touched || !formik.isValid || loading
              }
            >
              {loading?<Spinner animation="border" role="status"></Spinner>:'submit'}
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
