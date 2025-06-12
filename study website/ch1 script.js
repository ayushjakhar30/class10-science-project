document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealAnswerBtn');
    const answerText = document.getElementById('answerText');

    if (revealButton && answerText) {
        revealButton.addEventListener('click', function() {
            // Toggle the 'hidden-text' class to show/hide the answer
            answerText.classList.toggle('hidden-text');

            // Optionally, change button text
            if (answerText.classList.contains('hidden-text')) {
                revealButton.textContent = 'Reveal Answer';
            } else {
                revealButton.textContent = 'Hide Answer';
            }
        });
    }
});