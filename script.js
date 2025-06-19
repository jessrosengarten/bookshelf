document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const genre = document.getElementById("genre").value.trim();
  const date = document.getElementById("date").value;

  // Create book card
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  bookCard.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Author:</strong> ${author}</p>
    ${genre ? `<p><strong>Genre:</strong> ${genre}</p>` : ""}
    ${date ? `<p><strong>Date Read:</strong> ${date}</p>` : ""}
  `;

  // Add to bookshelf
  document.getElementById("book-list").appendChild(bookCard);

  // Reset form
  e.target.reset();
});
