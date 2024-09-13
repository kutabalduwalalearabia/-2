document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<strong>${username}</strong>: <p>${comment}</p>`;

        commentsList.appendChild(commentDiv);

        form.reset();
    });
});