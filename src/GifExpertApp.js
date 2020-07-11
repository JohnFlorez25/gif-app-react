import React, { useState, useEffect } from 'react';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Goku', 'Samurai'];

  const [categories, setCategories] = useState(['One Punch', 'Goku', 'Samurai']);

  const handleAdd = () => {
    //setCategories([...categories, 'HunterVSHunter']);
    setCategories( cats => [...cats, 'HunterVSHunter']);
  }

  return (
    <>
      <h2>GifExperApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((category, index) => {
          return <li key={`category-${index}`}>{category}</li>;
        })}
      </ol>
    </>
  );
};
