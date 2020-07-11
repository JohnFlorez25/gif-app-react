import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data, loading } = useFetchGifs( category );
  // useEffect(() => {
  //   getGifs( category )
  //     .then( setImages )
  // }, [ category ]);

  return (
    <>
      <h3 className="card animate__animated animate__fadeIn">{category}</h3>
      {/* { loading ? 'Cargando....' : 'Data Cargada'} */}
      { loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className='card-grid'>
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
