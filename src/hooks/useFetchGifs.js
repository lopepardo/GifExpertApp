import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [data, setData] = useState({
    data: [],
    loading: true,
  });

  // A quien pertenece este useEffect?
  useEffect(() => {
    getGifs(category).then((images) => {
      setData({
        data: images,
        loading: false,
      });
    });
  }, [category]);

  return data; //{ data: [], loading: true}
};
