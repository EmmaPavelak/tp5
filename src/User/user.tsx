import React from "react";

function User(props: any) {
  const users = props.users;
  return (
    <div>
      <h1>User</h1>

      <ul>
        <li>{users[0].name}</li>
      </ul>
    </div>
  );
}

export default User;
