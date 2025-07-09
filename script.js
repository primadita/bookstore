let comments = {};
let localUser = "";

// #region INIT
function init(){
    getFromLocalStorage();
    
    if (localUser == "" || localUser == "anonym"){
        inputLocalUserName();
    }

    renderCards();
}

function inputLocalUserName(){
    let newUser = prompt("Please enter your name:");
    if (newUser != null || newUser != "") {
        localUser = newUser ;
    }
    localStorage.setItem("localUser", JSON.stringify(localUser));
}

function getFromLocalStorage(){
    let userArr = JSON.parse(localStorage.getItem("localUser"));
        if (userArr !== null){
            localUser = userArr;
        }

    let commentsArr = JSON.parse(localStorage.getItem("comments"));
        if (commentsArr !== null){
            comments = commentsArr;
        }

    for (let bookId = 0; bookId < books.length; bookId++){
        if (comments[bookId]){
            books[bookId].comments = comments[bookId];
        }
    } 
}
// #endregion

// #region RENDERING
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
    
    comments[bookId] =[];
    for (let commentId = 0; commentId < books[bookId].comments.length; commentId++){
        commentSect.innerHTML += loadComments(bookId, commentId);
        comments[bookId].push({
            name: books[bookId].comments[commentId].name,
            comment: books[bookId].comments[commentId].comment
        });
    }
}
// #endregion

// #region COMMENTS
function addNewComment(bookId){
    const newCommentRef = document.getElementById("newcomment" + bookId);
    const newComment = newCommentRef.value;

    if (newComment != ""){
        books[bookId].comments.push({
            name: localUser,
            comment: newComment
        });

        newCommentRef.value = "";
        comments[bookId] = books[bookId].comments;
        localStorage.setItem("comments", JSON.stringify(comments));
        renderComment(bookId);

    }
}
// #endregion

// #region LIKE
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
    } else {
        heartImg.src = "./assets/icons/like-inactive.png";
        books[idx].likes = books[idx].likes - 1;
    }
    
    likeCounter.innerText = books[idx].likes;
}
// #endregion