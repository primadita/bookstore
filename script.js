function renderCards(){
    const displayCard = document.getElementById("display");
    displayCard.innerHTML = "";

    for (let id = 0; id < books.length; id++){
        displayCard.innerHTML += getCardData(id);
    }
}

function toggleLikeButton(bookIdx){
    const LikeButton = document.getElementById('like');
    LikeButton.classList.toggle('d-none');
    LikeButton.src = "./assets/icons/like-color.png";
    
    if (books[bookIdx].liked){
        return books[bookIdx] - 1;
    }
}