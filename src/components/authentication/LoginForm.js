import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import PropTypes from 'prop-types';


const LoginForm = ({onEmailChange, onPasswordChange, onFormSubmit}) => {
    return(
      <div>
          <Form>
              <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                      type="email"
                      name="email"
                      id="user_email"
                      placeholder="Your email"
                      onChange={onEmailChange}/>
              </FormGroup>

              <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                  type="password"
                  name="password"
                  id="user_password"
                  placeholder="Your password"
                  onChange={onPasswordChange}/>
              </FormGroup>

              <Button
                  type="submit"
                  onClick={onFormSubmit}>
                  Login
              </Button>
          </Form>
      </div>
    );
};

LoginForm.propTypes = {
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired
};

export default LoginForm;
