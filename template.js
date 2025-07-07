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
                <p>${books[bookIdx].likes}</p>
                <img id="like" src="./assets/icons/like-inactive.png" alt="">
                <img id="liked" class="d-none" src="./assets/icons/like-color.png" alt="">
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
                <table>
                  <tr>
                    <td>[Kevin]</td>
                    <td>:</td>
                    <td>xxxxx</td>
                  </tr>
                  <tr>
                    <td>[Leser123]</td>
                    <td>:</td>
                    <td>xxxnfndksnfjef</td>
                  </tr>
                  <tr>
                    <td>[Bookworm]</td>
                    <td>:</td>
                    <td>xxxfnfajnwdnjlfnkmsfmereefmefoffmklemalfmkmfoemfom</td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="write-comment">
              <input type="text" placeholder="Schreib dein Kommentar">
              <button id="send-comment"><img src="./assets/icons/send-turquiose.png" alt=""></button>
            </div>
          </div>
    `;
}
