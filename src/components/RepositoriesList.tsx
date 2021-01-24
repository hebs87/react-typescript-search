import React, {FC, ReactElement} from "react";

const RepositoriesList: FC = (): ReactElement => {
  return (
    <div>
      <form>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList;
