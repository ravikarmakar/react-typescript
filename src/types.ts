type Info = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type AdminInfoList = Info & {
  role: string;
  lastActive: string;
};

export { type Info, type AdminInfoList };
