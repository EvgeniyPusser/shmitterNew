import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar, changeName} = useContext(ShmitterContext);
    const handleAvatarClick = () => {
        const url = prompt('Enter avatar URL');
        changeAvatar(url);
    };

    const handleAvatarRightClick = event => {
        event.preventDefault();
        const name = prompt('Enter new name');
        changeName(name);
    };

    return (
        <img
            onClick={handleAvatarClick}
            onContextMenu={handleAvatarRightClick}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    )
}

export default Avatar;
