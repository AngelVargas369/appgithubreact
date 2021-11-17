import React from 'react'
import "./Card.styles.css"
import { Link } from 'react-router-dom'



const Card = (props) => {
    const {userName, image, cantidadFollowing, cantidadFollowers, cantidadRepos, bio}=props
    
    return (
        <div className="card-container">
          <img src={image} alt={` ${userName}`} />  
          <h2>{userName}</h2>
          <h3>{bio}</h3>
          <ul>

          <Link to={`/users/${userName}/followers`}> <li>Followers:{cantidadFollowers}</li> </Link>
          <Link to={`/users/${userName}/following`}> <li>Following:{cantidadFollowing}</li> </Link>
          <Link to={`/users/${userName}/repo`}> <li>Repositories:{cantidadRepos}</li> </Link>
          </ul>
        </div>
    )
}

export default Card