import React from "react";
import RepoItem from "./RepoItem";
export default function ReposList({ Repos }) {
  return (
    <div className=' rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title first-letter'> Latest Repository</h2>
        {Repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
