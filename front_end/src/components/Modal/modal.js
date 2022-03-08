import React, { useState, useRef } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";

const formDataInit = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  role: "User",
  status: "Active",
  email: "",
  phone: "",
  country: "",
  city: "",
  district: "",
  ward: "",
  address: "",
  note: "",
};

const validMessageInit = {
  username: "",
  password: "",
  email: "",
  lastName: "",
};
const data = {
  countries: [
    {
      name: "Germany",
      states: [
        {
          name: "A",
          cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
          village: ["Leinfelden-Echterdingen", "Eschborn"],
        },
      ],
    },
    { name: "Spain", states: [{ name: "B", cities: ["Barcelona"] }] },

    { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },
    {
      name: "Mexico",
      states: [{ name: ["D", "F", "H"], cities: ["Puebla"] }],
    },
    {
      name: "India",
      states: [
        { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
      ],
    },
  ],
};

function MyVerticallyCenteredModal(props) {
  const [selectedCountry, setSelectedCountry] = React.useState();
  const [selectedState, setSelectedState] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();
  const [selectedvillage, setSelectedviillage] = React.useState();

  const availableState = data.countries.find((c) => c.name === selectedCountry);
  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );
  const availablevillage = availableState?.states?.find(
    (s) => s.name === selectedState
  );
  // Ref
  const ref = useRef();

  // State
  const [formData, setFormData] = useState(formDataInit);
  const [validMessage, setValidMessage] = useState(validMessageInit);

  const handleInputChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleInputBlur = ({ target }) => {
    showValidMessage(target.name);
  };

  const handleFormSubmit = () => {
    console.log(formData);
    validateForm();
  };

  const validateForm = () => {
    let isValid = true;
    let newValidMessage = { ...validMessageInit };
    Object.keys(validMessage).forEach((i) => {
      if (formData[i] === "") {
        newValidMessage[i] = i + " is required";
        isValid = false;
      }
    });
    setValidMessage(newValidMessage);
    return isValid;
  };

  const showValidMessage = (name) => {
    formData[name] === ""
      ? setValidMessage({
          ...validMessage,
          [name]: `${name} is required`,
        })
      : setValidMessage({ ...validMessage, [name]: "" });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ADD NEW USER
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                placeholder="Enter user name"
              />
              <Form.Text className="text-danger">
                {validMessage.username}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                placeholder="Password"
              />
              <Form.Text className="text-danger">
                {validMessage.password}
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridfirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridlastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                placeholder="Enter last name"
              />
              <Form.Text className="text-danger">
                {validMessage.lastName}
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridRole">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                defaultValue="Choose..."
              >
                <option>Administrator</option>
                <option>...</option>
              </Form.Select>
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridStatus">
              <Form.Label>status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                defaultValue="Choose..."
              >
                <option>Active</option>
                <option>...</option>
              </Form.Select>
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridemail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              placeholder="@gmail.com"
            />
            <Form.Text className="text-danger">{validMessage.email}</Form.Text>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Select xs={7} defaultValue="Choose...">
                <option>+84</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridnumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Country</Form.Label>
              <Form.Select
                name="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                {data.countries.map((value, key) => {
                  return (
                    <option value={value.name} key={key}>
                      {value.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Provine</Form.Label>
              <Form.Select
                name="city"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                {availableState?.states.map((e, key) => {
                  return (
                    <option value={e.name} key={key}>
                      {e.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>district</Form.Label>
              <Form.Select
                name="district"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                {availableCities?.cities.map((e, key) => {
                  return (
                    <option value={e.name} key={key}>
                      {e}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Village</Form.Label>
              <Form.Select
                name="ward"
                value={formData.ward}
                onChange={handleInputChange}
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNote">
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                col="5"
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                placeholder="Leave a comment here"
              />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={handleFormSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
