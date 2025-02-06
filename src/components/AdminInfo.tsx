import { AdminInfoList } from "../types";

interface AdminProps {
  admin: AdminInfoList;
}

const AdminInfo: React.FC<AdminProps> = ({ admin }) => {
  return (
    <div>
      <h1>Admin Info</h1>

      <p>UserId : {admin.id}</p>
      <p>Name : {admin.name}</p>
      <p>Age : {admin.age}</p>
      <p>Email : {admin.email}</p>
      <p>Role : {admin.role}</p>
      <p>Last Activity : {admin.lastActive}</p>
    </div>
  );
};

export default AdminInfo;
