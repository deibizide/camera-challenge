import React, { useState } from 'react';
// bootstrap
import Button from 'react-bootstrap/Button';
// hooks
// import useImagePreview from '../../hooks/usePreviewImage';
// style
import './style.scss';

interface Props {
    isUserReady: boolean;
    setIsUserReady: (isUserReady: boolean) => void;
}

const Home: React.FC<Props> = () => {
    // const { getPreview } = useImagePreview();
    const [file, setFile] = useState('');

    const getImagePreview = e => {
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="home d-flex justify-content-center align-items-center flex-column">
            <h5 className="text-center pb-5">Do you want to send an image to your landlord?</h5>
            <Button variant="outline-light" className="btn btn-outline-secondary d-flex p-0">
                <input type="file" accept="image/*" id="file" onChange={(e): void => getImagePreview(e)} />
            </Button>
            <img src={file} width="250" height="250" alt="Preview of the upload" />
        </div>
    );
};

export default Home;
