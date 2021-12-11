import React from "react";

import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Jedi's Found.</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map(user => 
      <UserItem />;
      })}
    </ul>
  );
};

export default UsersList;
