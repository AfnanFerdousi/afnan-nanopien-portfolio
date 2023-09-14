export const randomBlob = (blobRef) => {
    const blob = blobRef.current;

    if (blob) {
        const maxWidthForFixedPosition = 480; // Define the maximum width for fixed position
        const maxLimit = 100; // Define the maximum limit for randomX and randomY
        const maxPosition = 80; 
        // Get the dimensions of the screen and the blob element
        const screenRect = document.body.getBoundingClientRect();
        const blobRect = blob.getBoundingClientRect();

        // Calculate the maximum allowed position values
        const maxX = screenRect.width - blobRect.width;
        const maxY = screenRect.height - blobRect.height;

        // Array of fixed positions (x, y)
        const fixedPositions = [
            [Math.random() * maxPosition, Math.random() * maxPosition],
            [Math.random() * maxPosition, Math.random() * maxPosition],
            [Math.random() * maxPosition, Math.random() * maxPosition],
        ];

        let randomX, randomY;

        if (window.innerWidth <= maxWidthForFixedPosition) {
            // Choose a random fixed position for devices with width <= 480px
            const randomIndex = Math.floor(Math.random() * fixedPositions.length);
            [randomX, randomY] = fixedPositions[randomIndex];
        } else {
            // Generate random values for randomX and randomY for other devices
            randomX = Math.random() * maxX;
            randomY = Math.random() * maxY;

            // Limit randomX and randomY to be under 100
            randomX = Math.min(randomX, maxLimit);
            randomY = Math.min(randomY, maxLimit);
        }

        blob.style.transition = 'none'; // Remove transition for immediate positioning
        blob.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
};
