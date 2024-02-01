function ProfileCard({imagen, modelo, descripcion}){
    
    return(
        <div className="card">
            <img className="card-image " src={imagen}/>
            <h3 className="card-header-title is-centered">{modelo}</h3>
            <p className="card-content">{descripcion}</p>
        </div>
    )
};

export default ProfileCard;