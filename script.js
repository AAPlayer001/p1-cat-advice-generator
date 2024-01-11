//Gets a random advice from the API (https://api.adviceslip.com/advice)
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            document.getElementById('advice').textContent = advice;
            localStorage.setItem('storedAdvice', advice);
        })
        .catch(error => {
            console.error("Error retrieving advice:", error);
            document.getElementById('advice').textContent = "Failure, cannot load advice.";
        });
}

//Gets a random cat image from the API (https://cataas.com/)
function getCatImage() {
    const refresh = new Date().getTime();
    document.getElementById('catImage').src = 'https://cataas.com/cat?refresh=' + refresh;
}

//Click the button to generate a random quote and a cat image
document.getElementById('adviceButton').addEventListener('click', function() {

    getAdvice();
    getCatImage();
})

