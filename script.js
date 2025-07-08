let comments = [];
let localUser = "anonym";

function inputLocalUserName(){}

function renderCards(){
    const displayCard = document.getElementById("display");
    displayCard.innerHTML = "";

    for (let bookId = 0; bookId < books.length; bookId++){
        displayCard.innerHTML += getCardData(bookId);
        getLikeButton(bookId);
        renderComment(bookId);
    }
}

function renderComment(bookId){
    const commentSect = document.getElementById("comment-table-" + bookId);
    commentSect.innerHTML = "";

    for (let commentId = 0; commentId < books[bookId].comments.length; commentId++){
        commentSect.innerHTML += loadComments(bookId, commentId);
        comments[bookId]= {
            name: books[bookId].comments[commentId].name,
            comment: books[bookId].comments[commentId].comment
        };
    }
    localStorage.setItem("comments", JSON.stringify(comments));
}

function addNewComment(bookId){
    const newCommentRef = document.getElementById("newcomment" + bookId);
    const newComment = newCommentRef.value;

    if (newComment != ""){
        if (!comments[bookId]){
            comments[bookId] =[];
        }
        comments[bookId].push({
            name: localUser,
            comment: newComment
        });

        newCommentRef.value = "";
        renderComment(bookId);

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