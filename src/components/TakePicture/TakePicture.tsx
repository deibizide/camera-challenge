import React, { useRef } from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faRandom } from '@fortawesome/free-solid-svg-icons';
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

            <Row>
                <Col className="text-center mt-5">
                    <p>Press the button to preview the image</p>
                    <Button variant="info" className="btn" onClick={getPicture}>
                        <FontAwesomeIcon icon={faCamera} size="2x" />
                    </Button>
                    <Button variant="info" className="btn w-50 d-flex align-items-center" onClick={getPicture}>
                        <p>Change Camera</p>
                        <FontAwesomeIcon icon={faRandom} size="1x" />
                    </Button>
                </Col>
            </Row>
            <h5>Image Preview</h5>
            <canvas ref={canvasRef} />
        </Container>
    );
};

export default TakePicture;
