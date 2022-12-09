import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Component/layout/Spinner";
import GithubContext from "../context/Github/GithubContext";
import ReposList from "../Component/Repos/ReposList";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GetUser, GetRepos, GetUserAndRepo } from "../context/Github/GithubAction";
export default function User() {
  const { User, Repos, Loading, dispatch } = useContext(GithubContext);
  const params = useParams();
  const user = params.login;
  useEffect(() => {
    dispatch({
      type: "Loading",
    });

    const GetUserData = async () => {
      const userData = await GetUserAndRepo(user);

      dispatch({
        type: "GET_USER_AND_REPOS",
        payload: userData,
      });
      // const userData = await GetUser(user);
      // dispatch({
      //   type: "GET_USER",
      //   payload: userData,
      // });
      // const userReposData = await GetRepos(user);
      // dispatch({
      //   type: "GET_REPOS",
      //   payload: userReposData,
      // });
    };
    GetUserData();
    return () => {};
  }, []);
  const {
    login,
    id,
    node_id,
    avatar_url,
    gravatar_id,
    url,
    html_url,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    events_url,
    received_events_url,
    type,
    site_admin,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
  } = User;
  if (Loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className=' w-full mx-auto lg:w-10/12'>
          <div className='mb-4'>
            <Link to='/' className=' btn btn-ghost '>
              Back To Search
            </Link>
          </div>
          <div className='  grid    grid-cols-3 sm:grid-cols-3  xl:grid-cols-3 lg:grid-col-3 md:grid-col-3  mb-8  gap-8  '>
            <div className=' custom-card-image   mb-6 md:mb-0  '>
              <div className=' rounded-lg shadow-xl card  image-full'>
                <figure>
                  <img src={avatar_url} alt='profile-pic' />
                </figure>
                <div className='  card-body   px-3 py-3  gap-0 justify-end'>
                  <h3 className='card-title   mb-0'>{name}</h3>
                  <p className=' flex-grow-0 '>{login}</p>
                </div>
              </div>
            </div>
            <div className='col-span-2 '>
              <div className='mb-6'>
                <h1 className='text-3xl card-title'>
                  {name}
                  <div className='ml-2 mr-1 badge  badge-success'>{type}</div>
                  {hireable && <div className='mx-1 badge  badge-info'>Hireable</div>}
                </h1>
                <p>{bio}</p>
                <div className=' mt-4 card-actions'>
                  <a href={html_url} target='_blank' rel='noopener noreferrer' className='btn btn-outline'>
                    Visit Github Profile
                  </a>
                </div>
              </div>
              <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                {location && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Location</div>
                    <div className='text-lg stat-value '>{location}</div>
                  </div>
                )}
                {blog && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Website</div>
                    <div className='text-lg stat-value '>
                      <a href={`http://${blog}`} target='_blank' rel='noopener noreferrer'>
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Twitter</div>
                    <div className='text-lg stat-value '>
                      <a href={`http://twitter.com/${twitter_username}`} target='_blank' rel='noopener noreferrer'>
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaUsers className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>{followers}</div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaUserFriends className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Following</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>{following}</div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaCodepen className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Repos</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>{public_repos}</div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaStore className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Gists</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>{public_gists}</div>
            </div>
          </div>

          <ReposList Repos={Repos} />
        </div>
      </>
    );
  }
}
