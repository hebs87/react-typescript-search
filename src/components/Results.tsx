import React, {FC, ReactElement} from "react";

interface ResultsProps {
  loading: boolean;
  error: string | null;
  data: string[];
}

const Results: FC<ResultsProps> = ({loading, error, data}): ReactElement => {
  return (
    <div>
      {
        loading &&
        <h3>Loading...</h3>
      }
      {
        error &&
        <h3>{error}</h3>
      }
      {
        !loading && !error && data.length > 0 &&
        data.map((name: string): JSX.Element => <h3 key={name}>{name}</h3>)
      }
    </div>
  )
}

export default Results;
