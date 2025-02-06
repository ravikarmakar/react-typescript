import { FormEvent, useRef, useState } from "react";

interface UserFormData {
  name: string;
  email: string;
  password: string;
}

const UserForm = () => {
  const [userFormData, setUserFormData] = useState<UserFormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setUserFormData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <div>
      <h1>User Form : Fill Your Data here</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" ref={name} />
        <input type="email" placeholder="Enter your email" ref={email} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={password}
        />

        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>User Data</h1>

        <p>Name : {userFormData.name}</p>
        <p>Email : {userFormData.email}</p>
        <p>Password : {userFormData.password}</p>
      </div>
    </div>
  );
};

export default UserForm;
