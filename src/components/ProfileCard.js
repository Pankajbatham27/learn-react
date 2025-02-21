const ProfileCard = ({profile}) => {
    return (
        <div className="profileCard">
            <div style={{height:"50px", width:"50px", marginLeft: "auto", marginRight: "auto", overflow: 'hidden'}}><img style={{width: "100%"}} src={`userImages/${profile.image}`} alt="user Image" /></div>
            <h4>Name: <b>{profile.name}</b></h4>
            <h5>Age: <b>{profile.age}</b></h5>
            <h5>Status: <b className={profile.status === 1 ? "colorGreen" : "colorRed"}>{profile.status === 1 ? "Online" : "Offline"}</b></h5>
            <div>
            <h5>Hobbies: </h5>
            <ul>
                {profile.hobbies.length > 0 ? profile.hobbies.map((value, key) => (
                    <li key={key}>{value}</li>
                )): "No hobbies available."}
            </ul>
            </div>
        </div>
    )
}
export default ProfileCard;