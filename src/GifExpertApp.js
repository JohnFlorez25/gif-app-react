import React, { useState, useEffect } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Goku', 'Samurai'];

  const [categories, setCategories] = useState(['One Punch']);

//   const handleAdd = () => {
//     //setCategories([...categories, 'HunterVSHunter']);
//     setCategories( cats => [...cats, 'HunterVSHunter']);
//   }

  return (
    <>
      <h2>GifExperApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      
      <ol>
        {categories.map((category, index) => (
            <GifGrid 
                key={`category-${index}`}
                category = { category }
            />
        ))}
      </ol>
    </>
  );
};
