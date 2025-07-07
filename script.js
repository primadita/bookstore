function renderCards(){
    const displayCard = document.getElementById("display");
    displayCard.innerHTML = "";

    for (let id = 0; id < books.length; id++){
        displayCard.innerHTML += getCardData(id);
        getLikeButton(id);
    }
}

function getLikeButton(idx){
    const heartImg = document.getElementById("heart" + idx);
    if (books[idx].liked){
        heartImg.src = "./assets/icons/like-color.png";
    } else {
        heartImg.src = "./assets/icons/like-inactive.png";
    }
}

function toggleLikeButton(idx){
    const heartImg = document.getElementById("heart" + idx);
    books[idx].liked = !books[idx].liked;
    // const currentLikes = books[idx].likes;
    const likeCounter = document.getElementById("like-number-" + idx);

    if (books[idx].liked == true){
        heartImg.src = "./assets/icons/like-color.png";
        books[idx].likes = books[idx].likes + 1;
        likeCounter.innerText = books[idx].likes;
    } else {
        heartImg.src = "./assets/icons/like-inactive.png";
        books[idx].likes = books[idx].likes - 1;
        likeCounter.innerText = books[idx].likes;
    }
}