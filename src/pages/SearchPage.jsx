import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
    onResetForm();
  };

  return (
    <>
      <div>
        <h1>Search Page</h1>
        <hr />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="searchText"
            id=""
            placeholder="Search a TODO"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
        </form>
      </div>
      <div>
        <h3>Results</h3>

      </div>
    </>
  );
};
