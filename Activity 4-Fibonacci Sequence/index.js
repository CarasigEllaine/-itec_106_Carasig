document.getElementById('generateBtn').addEventListener('click', function () {
    var numTermsInput = document.getElementById('numTerms').value.trim();
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (!numTermsInput || isNaN(numTermsInput) || parseInt(numTermsInput) <= 0 || parseInt(numTermsInput) >= 100) {
        outputDiv.innerHTML = '<p>Please enter a valid number (less than 100).</p>';
        return;
    }

    var numTerms = parseInt(numTermsInput);
    var fibonacci = [0, 1];

    for (var i = 2; i < numTerms; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    outputDiv.innerHTML = '<p>Fibonacci Sequence:</p><p>' + fibonacci.join(', ') + '</p>';
});
