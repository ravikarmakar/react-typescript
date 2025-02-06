import { useState } from "react";

interface UserProfile {
  name: string;
  age: number;
  email: string;
}

const Counter = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prevValue) => ({ ...prevValue, name }));
  };

  const updateAge = (age: string) => {
    setProfile((prevValue) => ({ ...prevValue, age: +age }));
  };

  const updateEmail = (email: string) => {
    setProfile((prevValue) => ({ ...prevValue, email }));
  };

  return (
    <div>
      <h1>My Counter Component</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Your name"
          value={profile.name}
          onChange={(e) => updateName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Your Age"
          value={profile.age > 0 ? profile.age : ""}
          onChange={(e) => updateAge(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={profile.email}
          onChange={(e) => updateEmail(e.target.value)}
        />
      </div>
      <br /> <br /> <br />
      <div>
        <h1>Profile Summary</h1>

        <ul>
          <li>Name : {profile.name}</li>
          <li>Age : {profile.age}</li>
          <li>Email : {profile.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Counter;
