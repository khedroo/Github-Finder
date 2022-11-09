import React from "react";
import User from "./shared/User";
import Loading from "./assets/Loading";
import { useContext } from "react";
import GithubConext from "../context/github/GithubContext";
function UsersResult() {
  const {users, loading } = useContext(GithubConext);

  if (loading) return (<div className="flex items-center"><Loading /></div>)
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-3">
      {users.map((item) => (
        <User key={item.id} item={item} />
      ))}
    </div>
  );
}

export default UsersResult;
