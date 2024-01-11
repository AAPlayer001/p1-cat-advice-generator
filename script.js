function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById('advice').textContent = data.slip.advice;
        })
        .catch(error => {
            console.error("Error retrieving advice:", error);
            document.getElementById('advice').textContent = "Failure, cannot load advice.";
        });
}

function getCatImage() {
    const refresh = new Date().getTime();
    document.getElementById('catImage').src = 'https://cataas.com/cat?refresh=' + refresh;
}

document.getElementById('adviceButton').addEventListener('click', function() {
    getAdvice();
    getCatImage();
})
