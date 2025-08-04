import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Characters = ({ uid, nombre }) => {
const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="/src/assets/img/rigo-baby.jpg" className="card-img-top" alt={nombre} />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">Name: {nombre}</h5>
                    <FontAwesomeIcon
                        icon={faHeart}
                        onClick={toggleFavorite}
                        style={{fontSize: '1.5rem',color: isFavorite ? 'red' : 'gray',
                        cursor: 'pointer',transition: 'color 0.3s' }}
                    />
                </div>
                <Link to={`/CharacterDetails/${uid}`} className="btn btn-primary">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default Characters;
