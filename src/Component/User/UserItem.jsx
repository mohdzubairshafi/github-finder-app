import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../context/Github/GithubContext";

export default function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className=' card flex-row shadow-md compact side bg-base-100'>
      <div className=' mr-4'>
        <div className='avatar '>
          <div className=' rounded-full shadow w-14 h-14 '>
            <img src={avatar_url} alt='Profile_img' />
          </div>
        </div>
      </div>
      <div>
        <h2 className='card-title '>{login}</h2>
        <Link className=' text-base-content text-opacity-40 ' to={`/user/${login}`}>
          Visit Profile
        </Link>
      </div>
    </div>
  );
}
