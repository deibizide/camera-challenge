import React from 'react';
// bootstrap
import Button from 'react-bootstrap/Button';

// style
import './style.scss';

interface Props {
    isUserReady: boolean;
    setIsUserReady: (isUserReady: boolean) => void;
}

const Home: React.FC<Props> = ({ isUserReady, setIsUserReady }) => {
    return (
        <div className="home d-flex justify-content-center align-items-center flex-column">
            <h5 className="text-center pb-5">Do you want to send an image to your landlord?</h5>
            <Button variant="info" onClick={(): void => setIsUserReady(!isUserReady)}>
                Yes
            </Button>
        </div>
    );
};
export default Home;
