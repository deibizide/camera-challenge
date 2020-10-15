import React, { useState } from 'react';
// import React from 'react';

import './App.css';
import TakePicture from './components/TakePicture/TakePicture';
import Home from './components/Home/Home';

const App: React.FC = () => {
    const [isUserReady, setIsUserReady] = useState(false);

    return (
        <div className="main">
            {/* <TakePicture /> */}
            {isUserReady ? <TakePicture /> : <Home setIsUserReady={setIsUserReady} isUserReady={isUserReady} />}
        </div>
    );
};

export default App;
