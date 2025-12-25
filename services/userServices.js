const data = [
  {
    id: 1,
    username: "nguyenvana",
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phone: "0901234567",
    role: "USER",
    status: "ACTIVE",
    createdAt: "2025-01-10T08:30:00Z",
  },
  {
    id: 2,
    username: "tranthib",
    fullName: "Trần Thị B",
    email: "tranthib@gmail.com",
    phone: "0912345678",
    role: "ADMIN",
    status: "ACTIVE",
    createdAt: "2025-01-12T09:15:00Z",
  },
  {
    id: 3,
    username: "lehoangc",
    fullName: "Lê Hoàng C",
    email: "lehoangc@gmail.com",
    phone: "0923456789",
    role: "TEACHER",
    status: "INACTIVE",
    createdAt: "2025-01-15T14:45:00Z",
  },
];

const handleGetAllDataUser = (name, role) => {
  if (name && role) {
    const user = data.find(
      (item) => item.username == name && item.role == role
    );
    return user;
  } else if (name) {
    const user = data.find((item) => item.username == name);
    return user;
  } else if (role) {
    const user = data.find((item) => item.role == role);
    return user;
  }
  return data;
};

const handleCreateUser = (bodyUser) => {
  data.push(bodyUser);
  return data;
};

export { handleGetAllDataUser, handleCreateUser };
