import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const FOLLOWERS_LABEL = 'Followers';
const FOLLOWING_LABEL = 'Following';

const Stats = () => {
    const {user, stats, increaseFollowers, increaseFollowing} = useContext(ShmitterContext);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={increaseFollowers}>{FOLLOWERS_LABEL}: {stats.followers}</div>
                <div onClick={increaseFollowing}>{FOLLOWING_LABEL}: {stats.following}</div>
            </div>
        </div>
    )
}

export default Stats;
