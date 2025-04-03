import {useState} from 'react';

import LandmarksTable from '../landmarksTable/landmarksTable';
import './header.scss';

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [landmarkCount, setLandmarkCount] = useState(0);
    
    const toggleHandler = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <div className="flex-wrap">
                <div className="count">Количество достопримечательностей: {landmarkCount}</div>
                <div>
                    Режим Админа:
                    <div
                        className={`toggle-container ${isToggled ? 'toggled' : ''}`}
                        onClick={toggleHandler}
                    >
                        <div className="toggle-background" />
                        <div className="toggle-switch" />
                    </div>
                </div>
            </div>
            <LandmarksTable  onItemCountChange={setLandmarkCount} isAdmin={isToggled}/>
        </>
    );
};

export default Header;
