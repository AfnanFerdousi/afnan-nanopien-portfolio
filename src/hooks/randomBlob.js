export const randomBlob = (blobRef) => {
    const blob = blobRef.current;

    if (blob) {
        const maxX = window.innerWidth - blob.clientWidth;
        const maxY = window.innerHeight - blob.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        blob.style.transition = 'none'; // Remove transition for immediate positioning
        blob.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
};