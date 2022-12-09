import React, { useContext } from "react";
import GithubContext from "../../context/Github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
export default function UserResult() {
  const { Users, Loading /*,fetchUser*/ } = useContext(GithubContext);

  if (!Loading) {
    return (
      <div className=' grid grid-cols-1 gap-7 xl:grid-col-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
        {Users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
