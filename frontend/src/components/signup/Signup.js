import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

import { signupNewUser } from "./SignupActions"; // new import

const Signup = () => {
  const dispatch = useDispatch()

  const [info, setInfo] = useState({
    username: "",
    password: "",
  });
  const createUser = useSelector((store) => store.createUser);

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onSignupClick = () => {
    dispatch(signupNewUser(info));
  };

  return (
    <Container>
      <Row>
        <Col md="4">
          <h1>Sign up</h1>
          <Form>
            <Form.Group controlId="usernameId">
              <Form.Label>User name</Form.Label>
              <Form.Control
                isInvalid={createUser.usernameError}
                type="text"
                name="username"
                placeholder="Enter user name"
                value={info.username}
                onChange={onChange}
              />
              <FormControl.Feedback type="invalid">
                {createUser.usernameError}
              </FormControl.Feedback>
            </Form.Group>

            <Form.Group controlId="passwordId">
              <Form.Label>Your password</Form.Label>
              <Form.Control
                isInvalid={createUser.passwordError}
                type="password"
                name="password"
                placeholder="Enter password"
                value={info.password}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                {createUser.passwordError}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
          <Button color="primary" onClick={onSignupClick}>
            Sign up
          </Button>
          <p className="mt-2">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

// Signup.propTypes = {
//   signupNewUser: PropTypes.func.isRequired,
//   createUser: PropTypes.object.isRequired,
// };

export default Signup;
