import React from 'react'

export const GifGridItem = ( { title, url } ) => {

    // console.log( id, title, url );

    return (
        <div className="card animate__animated animate__bounceInDown">
            <img src={ url } alt={ title }/>
            <p className="animate__animated animate__flash">{ title }</p>
        </div>
    )
}
