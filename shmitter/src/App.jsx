import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {ShmitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    })

    const changeAvatar = url => setUser({...user, avatar: url || user.avatar});
    const changeName = name => setUser({...user, name: name || user.name});
    const increaseFollowers = () => {
        setStats(prevStats => ({...prevStats, followers: prevStats.followers + 1}));
    };
    const increaseFollowing = () => {
        setStats(prevStats => ({...prevStats, following: prevStats.following + 1}));
    };

    return (
        <div className={'app'}>
            <ShmitterContext value={{
                user, stats, changeAvatar, changeName, increaseFollowers, increaseFollowing
            }}>
                <Navigation/>
                <Body/>
            </ShmitterContext>
        </div>
    )
}

export default App
