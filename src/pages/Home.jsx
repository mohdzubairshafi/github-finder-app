import React from "react";
import UserResult from "../Component/User/UserResult";
import UserSearch from "../Component/User/UserSearch";

export default function Home() {
  return (
    <div className=''>
      <UserSearch />
      <UserResult />
    </div>
  );
}
