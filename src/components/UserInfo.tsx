import { Info } from "../types";

interface UserInfoProps {
  user: Info;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <h1>User Info</h1>

      <p>UserId : {user.id}</p>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
    </div>
  );
};

export default UserInfo;
