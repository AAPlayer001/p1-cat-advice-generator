console.log('Deez nuts');

document.getElementById('adviceButton').addEventListener('click', function() {
    fetchAdvice();
    fetchCatImage();
});

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('advice').textContent = data.slip.advice;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            document.getElementById('advice').textContent = 'Failed to load advice.';
        });
}

function fetchCatImage() {
    const timestamp = new Date().getTime(); // to prevent caching of image
    document.getElementById('catImage').src = 'https://cataas.com/cat?timestamp=' + timestamp;
}
