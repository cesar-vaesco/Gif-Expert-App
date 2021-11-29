import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    //console.log({ loading });





    return (
        <>
            <h3 className="animate__animated animate__tada"> { category }</h3>

            {loading && <p> Loading... </p>}

            <div className="card-grid">

                    {
                        images.map( ( img )=>
                        <GifGridItem
                        key = { img.id }
                        {...img }
                        />
                        )
                    }
            </div>
        </>
    )
}
