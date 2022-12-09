import React from "react";
import { useState } from "react";
import { useContext } from "react";
import GithubContext from "../../context/Github/GithubContext";
import AlertContext from "../../context/Alert/AlertContext";
import Alert from "../layout/Alert";
import { GetUsers } from "../../context/Github/GithubAction";

export default function UserSearch() {
  const [text, setText] = useState("");

  const handlechange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validating

    if (text === "") {
      empty();
    } else {
      // searching with api
      setText("");
      dispatch({ type: "LOADING" });
      const user = await GetUsers(text);
      dispatch({
        type: "GET_USERS",
        payload: user.items,
      });
    }
  };
  const handleClear = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const { Users, dispatch } = useContext(GithubContext);
  const { alert, empty } = useContext(AlertContext);
  return (
    <>
      {alert !== null && alert.error === true ? <Alert /> : <h4></h4>}
      <div className=' grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-20 gap-8'>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <div className='relative'>
                <input
                  type='text'
                  value={text}
                  onChange={handlechange}
                  className=' w-full pr-40 bg-gray-200 input input-lg text-black  '
                  placeholder='Search Profile'
                />
                <button type='submit' className=' absolute top-0 right-0  rounded-l-none w-36 btn btn-lg'>
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          {Users.length !== 0 ? (
            <button onClick={handleClear} className='btn btn-ghost btn-lg '>
              {" "}
              Clear
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
