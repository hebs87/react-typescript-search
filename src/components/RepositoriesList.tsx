import React, {FC, ReactElement, useState} from "react";
import {useDispatch} from "react-redux";
import {actionCreators} from "../redux"

const RepositoriesList: FC = (): ReactElement => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={term}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList;
