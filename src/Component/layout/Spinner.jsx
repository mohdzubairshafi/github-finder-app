import React from "react";
import spinner from "./assets/spinner.gif";

export default function Spinner() {
  return (
    <div className=' text-center  w-32 mx-auto my-20 '>
      <img src={spinner} alt='Loading' />
    </div>
  );
}
