// Simulated game data
const games = [
    { title: "Balatro", category: "Adventure", date: "20 Feb, 2024" },
    { title: "Helldivers 2", category: "Action", date: "8 Feb, 2024" },
    { title: "God of War Ragnarok", category: "Action", date: "19 Sep, 2024" },
    { title: "Tekken 8", category: "Competitive", date: "26 Jan, 2024" },
    { title: "Stray", category: "Adventure", date: "19 Jul, 2022" },
    { title: "Elden Ring", category: "Souls Like", date: "25 Feb, 2022" },
];

const categories = [...new Set(games.map(game => game.category))];

// Handle navigation
function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}

// Populate All Games Section
function populateGames() {
    const container = document.querySelector("#all-games .game-container");
    container.innerHTML = "";
    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
            <h3>${game.title}</h3>
            <p>Category: ${game.category}</p>
            <p>Release Date: ${game.date}</p>
        `;
        container.appendChild(card);
    });
}

// Populate Categories Section
function populateCategories() {
    const container = document.querySelector(".category-list");
    container.innerHTML = "";
    categories.forEach(category => {
        const categoryItem = document.createElement("div");
        categoryItem.className = "category-item";
        categoryItem.textContent = category;
        categoryItem.onclick = () => showGamesByCategory(category);
        container.appendChild(categoryItem);
    });
}

// Show games by selected category
function showGamesByCategory(category) {
    const container = document.querySelector(".category-games");
    container.innerHTML = `<h3>Games in Category: ${category}</h3>`;
    const filteredGames = games.filter(game => game.category === category);
    if (filteredGames.length > 0) {
        filteredGames.forEach(game => {
            const card = document.createElement("div");
            card.className = "game-card";
            card.innerHTML = `
                <h3>${game.title}</h3>
                <p>Release Date: ${game.date}</p>
            `;
            container.appendChild(card);
        });
    } else {
        container.innerHTML += "<p>No games available in this category.</p>";
    }
}

// Initialize Sections
document.addEventListener("DOMContentLoaded", () => {
    populateGames();
    populateCategories();
});

document.addEventListener("DOMContentLoaded", () => {
    // Handling Comments
    const commentForm = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");
    const commentsList = document.getElementById("commentsList");

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText) {
            addComment(commentText);
            commentInput.value = "";
        }
    });

    function addComment(text) {
        const commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");

        const commentContent = document.createElement("div");
        commentContent.classList.add("comment-text");
        commentContent.textContent = text;

        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editComment(commentItem, commentContent));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => commentItem.remove());

        commentItem.appendChild(commentContent);
        commentItem.appendChild(editButton);
        commentItem.appendChild(deleteButton);

        commentsList.appendChild(commentItem);
    }

    function editComment(item, content) {
        const newText = prompt("Edit your comment:", content.textContent);
        if (newText !== null) {
            content.textContent = newText.trim();
        }
    }

    // Handling Game Requests
    const requestForm = document.getElementById("requestForm");
    const gameRequestInput = document.getElementById("gameRequestInput");
    const requestList = document.getElementById("requestList");

    requestForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const requestText = gameRequestInput.value.trim();
        if (requestText) {
            addRequest(requestText);
            gameRequestInput.value = "";
        }
    });

    function addRequest(text) {
        const requestItem = document.createElement("div");
        requestItem.classList.add("request-item");

        const requestContent = document.createElement("div");
        requestContent.classList.add("request-text");
        requestContent.textContent = text;

        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editRequest(requestItem, requestContent));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => requestItem.remove());

        requestItem.appendChild(requestContent);
        requestItem.appendChild(editButton);
        requestItem.appendChild(deleteButton);

        requestList.appendChild(requestItem);
    }

    function editRequest(item, content) {
        const newText = prompt("Edit your request:", content.textContent);
        if (newText !== null) {
            content.textContent = newText.trim();
        }
    }
});


function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".link-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const link = button.dataset.link; // Get link from data attribute
            if (link) {
                window.open(link, "_blank"); // Open link in new tab
            }
        });
    });
});
