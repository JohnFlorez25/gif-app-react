import React, { useState, useEffect } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Goku', 'Samurai'];

  const [categories, setCategories] = useState(['One Punch', 'Goku', 'Samurai']);

//   const handleAdd = () => {
//     //setCategories([...categories, 'HunterVSHunter']);
//     setCategories( cats => [...cats, 'HunterVSHunter']);
//   }

  return (
    <>
      <h2>GifExperApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <button>Agregar</button>

      <ol>
        {categories.map((category, index) => {
          return <li key={`category-${index}`}>{category}</li>;
        })}
      </ol>
    </>
  );
};
