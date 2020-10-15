import { useState, useEffect } from 'react';

interface Parameters {
    canvasRef: any;
    videoRef: any;
}

const useCamera = (parameters: Parameters): { getPicture: () => void; imageSrc: string } => {
    const [imageSrc, setImageSrc] = useState('');
    const [isStreaming, setisStreaming] = useState(false);
    const video = parameters.videoRef;
    const canvas = parameters.canvasRef;
    const WIDTH = 320;
    let HEIGHT = 0;

    const constraints = {
        video: {
            width: {
                min: 1280,
                ideal: 1920,
                max: 2560,
            },
            height: {
                min: 720,
                ideal: 1080,
                max: 1440,
            },
        },
    };

    const startCamera = (): void => {
        if (!navigator || !navigator.mediaDevices) {
            console.log('Camera API is not available in your browser');
        }
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => {
                video.current.srcObject = stream;
                video.current.play();
            })
            .catch(err => {
                console.log(`An error occurred: ${err}`);
            });

        video.current.addEventListener('canplay', () => {
            if (!isStreaming) {
                HEIGHT = video.current.videoHeight / (video.current.videoWidth / WIDTH);
                setisStreaming(false);
            }
        });
    };

    const getPicture = (): void => {
        const context = canvas.current.getContext('2d');
        context.drawImage(video.current, 0, 0, WIDTH, HEIGHT);
        const src = canvas.current.toDataURL('image/png');

        setImageSrc(src);
    };

    useEffect(() => {
        startCamera();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { getPicture, imageSrc };
};

export default useCamera;
