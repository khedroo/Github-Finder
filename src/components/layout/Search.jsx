import React from "react";
import { useContext, useState } from "react";
import { searchAPI } from "../../components/context/github/GithubActions";
import Alert from "./Alert";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";

function Search() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.length === 0) {
      setAlert("please type something in", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const searched = await searchAPI(text);
      dispatch({ type: "GET_USERS", payload: searched });
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8">
      <div>
        <Alert />
        <form action="" onSubmit={handleSubmit} className="form-control">
          <div className="relative">
            <input
              type="text"
              className="input-lg w-full pr-40 text-black bg-gray-200"
              value={text}
              placeholder="Search"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute btn-lg rounded-l-none top-0 right-0 w-36"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "CLEAR_SEARCH" })}
            className="btn btn-ghost btn-lg"
          >
            clear
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
