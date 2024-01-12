// Function to check if the advice is already stored
function isAdviceStored(newAdvice, storedAdvices) {
    return storedAdvices.some(adviceObject => adviceObject.advice === newAdvice);
}

// Function to get a new advice if it's not already stored
function getNewAdvice(storedAdvices) {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            const newAdvice = data.slip.advice;
            // Check if the advice is already stored
            if (!isAdviceStored(newAdvice, storedAdvices)) {
                document.getElementById('advice').textContent = newAdvice;
                storedAdvices.push({ advice: newAdvice });
                localStorage.setItem('storedAdvice', JSON.stringify(storedAdvices));
            } else {
                // If advice is repeated, try fetching again
                getNewAdvice(storedAdvices);
            }
        })
        .catch(error => {
            console.error("Error retrieving advice:", error);
            document.getElementById('advice').textContent = "Failure, cannot load advice.";
        });
}

// Gets a random advice from the API
function getAdvice() {
    const storedAdvice = JSON.parse(localStorage.getItem('storedAdvice')) || [];
    getNewAdvice(storedAdvice);
}

// Gets a random cat image from the API
function getCatImage() {
    const refresh = new Date().getTime();
    document.getElementById('catImage').src = 'https://cataas.com/cat?refresh=' + refresh;
}

// Click the button to generate a random quote and a cat image
document.getElementById('adviceButton').addEventListener('click', function() {
    getAdvice();
    getCatImage();
});
  
