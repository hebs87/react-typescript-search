import React, {FC, ReactElement, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Results from "./Results";

const RepositoriesList: FC = (): ReactElement => {
  const [term, setTerm] = useState('');
  const {searchRepositories} = useActions();
  const {loading, error, data} = useTypedSelector((state) => state.repositories)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={term}/>
        <button>Search</button>
      </form>
      <div style={{marginTop: 25}}>
        <Results
          loading={loading}
          error={error}
          data={data}
        />
      </div>
    </div>
  )
}

export default RepositoriesList;
