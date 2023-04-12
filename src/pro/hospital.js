import { useState } from "react";
import "./hospital.css";
import FormInput from "../pro/hospitalInput.js";

const Hospital = () => {
  const [values, setValues] = useState({
    HospitalName: "",
    HospitalEmail: "",
    HospitalLicenceId : "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "HospitalName",
      type: "text",
      placeholder: "HospitalName",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "HospitalName",
      //pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "HospitalEmail",
      type: "HospitalEmail",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "HospitalLicenceId ",
      type: "text",
      placeholder: "HospitalLicenceId ",
      errorMessage:
        "It should be a valid HospitalLicenceId !",
      label: "HospitalLicenceId ",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters!",
      label: "Password",
      //pattern: `^(?=.*[0-9])`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Hospital Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Hospital;