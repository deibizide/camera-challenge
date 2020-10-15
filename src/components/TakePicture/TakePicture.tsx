import React, { useRef } from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faRandom, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import useCamera from '../../hooks/useCamera';
// style
import './style.scss';

const TakePicture: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const { getPicture } = useCamera({ canvasRef, videoRef });

    return (
        <Container className="take-picture__container">
            <video ref={videoRef} className="w-100 mt-5">
                <track default kind="captions" srcLang="en" />
            </video>
            <div className="text-center my-5">
                <p className="">Press the button to preview the image</p>
                <Row className="d-flex justify-content-center row">
                    <Button variant="info" className="btn mx-3" onClick={(): void => getPicture()}>
                        <FontAwesomeIcon icon={faCamera} />
                    </Button>
                    <Button variant="info" className="btn d-flex align-items-center mx-3" onClick={getPicture}>
                        <FontAwesomeIcon icon={faRandom} />
                        <p className="m-0 px-3">Switch Camera</p>
                    </Button>
                </Row>
            </div>
            <h2 className="text-center m-0">Preview Image</h2>
            <div className="text-center d-flex flex-column">
                <canvas ref={canvasRef} className="w-100 mb-5" />
                <Button
                    variant="info"
                    className="btn d-flex align-items-center justify-content-center mx-3"
                    onClick={getPicture}
                >
                    <p className="m-0 px-3">Send</p>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </Button>
            </div>
        </Container>
    );
};

export default TakePicture;
