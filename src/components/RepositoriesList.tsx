import React, {FC, ReactElement, useState} from "react";

const RepositoriesList: FC = (): ReactElement => {
  const [term, setTerm] = useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={term}/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList;
