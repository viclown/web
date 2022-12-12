function loadReviews() {
    let reviews = document.getElementById('reviews');
    let randomNumber = Math.floor(Math.random() * 100) + 1
    reviews.innerHTML = ''

    let loadingSection = document.getElementById('loading');

    loadingSection.innerHTML += `
        <div class="loading"></div>
    `;

    fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}/comments`)
        .then(response => response.json())
        .then(json => {
            loadingSection.innerHTML = ''

            json.forEach(comment => {
                let review_item = document.querySelector('#review_item');
                let clone = review_item.content.cloneNode(true);

                let email = clone.querySelector('div span');
                let name = clone.querySelector('div strong');
                let text = clone.querySelector('div div');

                name.innerHTML = comment.name;
                email.innerHTML = comment.email.split('@')[0];
                text.innerHTML = comment.body;

                reviews.appendChild(clone);
            })
        })
        .catch(() => {
            loadingSection.innerHTML = ''

            let review_item = document.querySelector('#review_item');
            let clone = review_item.content.cloneNode(true);
            let name = clone.querySelector('div strong');

            name.innerHTML = 'There are no reviews because something went wrong, please, try again later!';

            reviews.appendChild(clone);
        });
}

function setButtonOnClickHandler() {
    let getButton = document.getElementById('getButton');
    getButton.addEventListener('click', event => loadReviews());
}

document.addEventListener('DOMContentLoaded', event => setButtonOnClickHandler())