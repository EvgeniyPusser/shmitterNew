import Avatar from "./Avatar.jsx";
import {useContext, useEffect} from "react";
import {ShmitterContext} from "../utils/context.js";

const FOLLOWERS_ID = 'followers';
const FOLLOWING_ID = 'following';
const FOLLOWERS_LABEL = 'Followers';
const FOLLOWING_LABEL = 'Following';

const Stats = () => {
    const {user, stats, increaseFollowers, increaseFollowing} = useContext(ShmitterContext);

    useEffect(() => {
        const followersElement = document.getElementById(FOLLOWERS_ID);
        const followingElement = document.getElementById(FOLLOWING_ID);

        if (!followersElement || !followingElement) {
            return;
        }

        followersElement.addEventListener('click', increaseFollowers);
        followingElement.addEventListener('click', increaseFollowing);

        return () => {
            followersElement.removeEventListener('click', increaseFollowers);
            followingElement.removeEventListener('click', increaseFollowing);
        };
    }, [increaseFollowers, increaseFollowing]);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div id={FOLLOWERS_ID}>{FOLLOWERS_LABEL}: {stats.followers}</div>
                <div id={FOLLOWING_ID}>{FOLLOWING_LABEL}: {stats.following}</div>
            </div>
        </div>
    )
}

export default Stats;
