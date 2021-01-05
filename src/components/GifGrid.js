import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  return (
    <div className="animate__animated animate__fadeInDown">
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="grid">
        {data.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
