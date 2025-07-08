function getCardData(bookIdx) {
  return `
    <div id="bookcard">
            <h2>${books[bookIdx].name}</h2>
            <div class="separate-line"></div>
            <img id="book-img" src='${parentFolderImg+books[bookIdx].imgName}' alt="">
            <div class="separate-line"></div>
            <div>
              <h3 id="price">${Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(books[bookIdx].price)}</h3>
              <div id="like-section">
                <p id="like-number-${bookIdx}">${books[bookIdx].likes}</p>
                <button onclick="toggleLikeButton(${bookIdx})"><img id="heart${bookIdx}" src="" alt="like-button filled/unfilled"></button>
              </div>
            </div>
            <table>
              <tr>
                <td>Author</td>
                <td>:</td>
                <td>${books[bookIdx].author}</td>
              </tr>
                <tr>
                <td>Erscheinungsjahr</td>
                <td>:</td>
                <td>${books[bookIdx].publishedYear}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>:</td>
                <td>${books[bookIdx].genre}</td>
              </tr>
            </table>
            <div class="separate-line"></div>
            <div id="comments-section">
              <h3>Kommentare:</h3>
              <div id="comments">
                <table id="comment-table-${bookIdx}">
                </table>
              </div>
            </div>
            <div id="write-comment">
              <input id="newcomment${bookIdx}" type="text" placeholder="Schreib dein Kommentar">
              <button id="send-comment" onclick="addNewComment(${bookIdx})"><img src="./assets/icons/send-turquiose.png" alt=""></button>
            </div>
          </div>
    `;
}

function loadComments(bookId, commentId){
  return `
      <tr>
          <td>${books[bookId].comments[commentId].name}</td>
          <td>:</td>
          <td>${books[bookId].comments[commentId].comment}</td>
      </tr>
  `
}