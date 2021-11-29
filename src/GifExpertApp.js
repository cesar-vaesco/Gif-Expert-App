
import React, { useState } from 'react';
import { AddCategorie } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     ///setcategorias(['HunterXHunter', ...categorias]);
    //     setcategorias(cats => {return [...cats, 'HunterXHunter']});
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategorie setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (

                        <GifGrid
                        key = {category}
                        category = {category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
