

const ProfileUSers =(props) =>{
    debugger
    if(!props.profile){
        return(
            <img src="https://image.flaticon.com/icons/png/512/146/146018.png" alt="" />
        )
    }

    return(
        <div>
            <img src={props.profile.photos.large} alt="" />
            <div>{props.profile.fullName}</div>
        </div>
    )
}

export default ProfileUSers;