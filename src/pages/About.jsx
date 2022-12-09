import React from "react";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import GithubContext from "../context/Github/GithubContext";
export default function About() {
  const { dispatch } = useContext(GithubContext);

  return (
    <div className='text-center hero-content'>
      <div className=' max-w-xl text-white'>
        <h1 className=' text-4xl font-bold mb-8  '>About this APP...</h1>
        <p className=' text-5sm '>
          this is a <em>Github Finder</em> React APP. design by
          <strong>
            <a href='https://github.com/mohdzubairshafi' target='_blank' rel='noopener noreferrer'>
              {" "}
              <em> MOHD ZUBAIR ANSARI </em>{" "}
            </a>
          </strong>
        </p>
        <p className='text-5sm  mb-8'> using Tailwind Css ,DaisyUI ,React ,React-Router-dom , React-icons </p>
        <Link
          to='/'
          onClick={() => {
            dispatch({ type: "CLEAR_USERS" });
          }}
          className='btn btn-primary btn-sm'
        >
          <FaHome className=' mr-2' />
          Back To Home
        </Link>
      </div>
    </div>
  );
}
