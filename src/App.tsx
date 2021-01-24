import React, {FC, ReactElement} from 'react';
import './App.css';
import RepositoriesList from "./components/RepositoriesList";

const App: FC = (): ReactElement => {
  return (
    <div>
      <h1>Search For A Package</h1>
      <RepositoriesList/>
    </div>
  );
}

export default App;
