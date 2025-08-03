import React from 'react';

function Characters({ uid, nombre, url }) {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src="src/assets/img/rigo-baby.jpg" className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">ID: {uid}</p>
                <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Learn more...
                </a>
            </div>
        </div>
    );
}


export default Characters;
