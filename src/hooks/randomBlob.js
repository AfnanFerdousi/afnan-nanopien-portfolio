// script.js
const randomizeBlobPosition = () => {
    const blob = document.querySelector('.blob');
    const container = document.querySelector('.h-screen');

    if (blob && container) {
        const maxX = container.clientWidth - blob.clientWidth;
        const maxY = container.clientHeight - blob.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        blob.style.transition = '4s'; // Add smooth transition
        blob.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
};

const randomBlob = () => {
    // Initial random position when the page loads
    randomizeBlobPosition();

    // Change blob position every 4 seconds
    setInterval(() => {
        randomizeBlobPosition();
    }, 4000);
}

export default randomBlob;
