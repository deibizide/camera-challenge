const usePreviewImage: any = (): { getPreview: () => void } => {
    const getPreview = (): void => {
        console.log('hello');
    };

    return { getPreview };
};
export default usePreviewImage;
