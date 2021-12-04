import React, {useState} from 'react'

import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';


function FormDemo({form, setForm, errors, setErrors, handleSubmitForm}) {


    

    function handleChangeForm(e) {
        const name = e.target.name;

        setForm(prevState => {
            return {
                ...prevState,
                [name]: e.target.value,

            }
        })
    }

    console.log('uuuu: ', form);
    console.log('32312: ', form.name);


    


    return (
        <Form
            style={{border: '1px solid gray', padding: '16px'}}
            onSubmit={handleSubmitForm}
        >
          {/* for name */}
          <FormGroup row>
            <Label
              for="name"
              sm={2}
            >
              Name
            </Label>
            <Col sm={5}>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
                value={form.name}
                onChange={handleChangeForm}
              />
            </Col>
          </FormGroup>

          {/* for email */}
          <FormGroup row>
            <Label
              for="email"
              sm={2}
            >
              Email
            </Label>
            <Col sm={5}>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={form.email}
                onChange={handleChangeForm}
              />
            </Col>
          </FormGroup>

          {/* for pass */}
          <FormGroup row>
            <Label
              for="password"
              sm={2}
            >
              Password
            </Label>
            <Col sm={5}>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={form.password}
                onChange={handleChangeForm}
              />
            </Col>
          </FormGroup>

          {/* for confirmedPass */}
          <FormGroup row>
            <Label
              for="confirmPassword"
              sm={2}
            >
              Confirm Password
            </Label>
            <Col sm={5}>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-type your password"
                type="password"
                value={form.confirmPassword}
                onChange={handleChangeForm}
              />
            </Col>
          </FormGroup>      

          {/* for status */}
          <FormGroup row>
            <Label
              for="status"
              sm={2}
            >
              Status
            </Label>
            <Col sm={5}>
              <Input
                id="status"
                name="status"
                type="select"
                value={form.status}
                onChange={handleChangeForm}
              >
                <option>
                  Pending
                </option>
                <option>
                  Completed
                </option>
              </Input>
            </Col>
          </FormGroup>

          {/* for Bio */}
          <FormGroup row>
            <Label
              for="bio"
              sm={2}
            >
              Bio
            </Label>
            <Col sm={5}>
              <Input
                id="bio"
                name="bio"
                type="textarea"
                placeholder="Write something about your bio..."
                value={form.bio}
                onChange={handleChangeForm}
              />
            </Col>
          </FormGroup>

          {/* for gender */}
          <FormGroup
            row
            tag="fieldset"
          >
            <legend className="col-form-label col-sm-2">
              Gender
            </legend>

            
            <Col sm={5}>
              <FormGroup check>
                <Input
                  name="gender"
                  type="radio"
                  value={form.gender}
                  onChange={handleChangeForm}
                />
                {' '}
                <Label check>
                  Male
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="gender"
                  type="radio"
                //   onClick={function noRefCheck(){}}
                  value={form.gender}
                  onChange={handleChangeForm}
                />
                {' '}
                <Label check>
                  Female
                </Label>
              </FormGroup>
              
            </Col>
          </FormGroup>

          {/* for Policy */}
          <FormGroup row>
            <Label
              for="checkbox2"
              sm={2}
            >
              Policy
            </Label>
            <Col
              sm={{
                size: 5
              }}
            >
              <FormGroup check>
                <Input
                  id="checkbox2"
                  type="checkbox"
                  name="policy"
                  value={form.policy}
                  onChange={handleChangeForm}
                />
                {' '}
                <Label check for="checkbox2">
                  By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup
            check
            row
          >
            <Col
              sm={{
                offset: 5,
                size: 7
              }}
            >
              <Button color="primary">
                Submit
              </Button>
            </Col>
              {errors ? <div style={{textAlign: 'center', color: 'red', marginTop: '10px'}}>please enter full details above</div> : null}
          </FormGroup>
        </Form>
    )
}

export default FormDemo
