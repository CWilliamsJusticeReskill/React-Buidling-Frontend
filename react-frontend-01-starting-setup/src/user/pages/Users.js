import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Justice Reskill",
      image:
        "	https://justicereskill.com/_next/image?url=%2Fjustice-reskill-logo.png&w=1080&q=75",
      places: 1,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
