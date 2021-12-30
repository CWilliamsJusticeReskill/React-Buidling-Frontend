import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Christopher Williams",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFL99Srozo1Vw/profile-displayphoto-shrink_400_400/0/1617816426679?e=1646265600&v=beta&t=cs-Cm7aQOXiJFcQjS2FdG9u9iHfm-MrRbltPNJdOjO0",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
