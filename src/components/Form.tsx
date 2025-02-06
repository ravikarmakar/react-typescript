import { useState } from "react";

interface UserFormData {
  name: string;
  email: string;
}

const Form = () => {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Submitted Data  :", formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <div>
      <h1>Enter Your data here</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />

        <input
          type="text"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
