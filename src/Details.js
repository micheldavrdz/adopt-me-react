import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <div className="details">
      <h1>Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
        voluptatum?
      </p>
    </div>
  );
};

export default Details;
