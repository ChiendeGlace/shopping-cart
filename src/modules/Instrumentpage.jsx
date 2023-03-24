import { useParams, Link } from 'react-router-dom';
import React from './react.svg';

function Instrumentpage() {
  const params = useParams();
  const text = `This is ${params.id}`;
  return (
    <div className="instrument-page">
      <img src={React} alt="react" />
      <div className="text-div">
        <h2>{text}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          illo illum dolorum suscipit deserunt assumenda quo nesciunt incidunt
          beatae, similique dicta. Officiis tenetur sed provident? Debitis
          reprehenderit commodi natus ipsum?
        </p>
        <div className="button-div">
          <button type="button">Add to cart</button>
          <Link to="../products-page">
            <button type="button">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Instrumentpage;
