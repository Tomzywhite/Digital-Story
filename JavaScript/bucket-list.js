document.addEventListener("DOMContentLoaded", function () {
    const listContainer = document.getElementById("list-container");
    const addButton = document.getElementById("add-button");
    const newItemInput = document.getElementById("new-item");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    if (!listContainer || !addButton || !newItemInput) {
        console.error("One or more elements are missing!");
        return;
    }

    console.log("Script loaded successfully!");

    let bucketList = JSON.parse(localStorage.getItem("bucketList")) || [
        { text: "Watch a sunset together 🌅", completed: false },
        { text: "Go on a beach vacation 🏖️", completed: false },
        { text: "Have a picnic in a park 🍉", completed: false },
        { text: "Take a couple photoshoot 📸", completed: false },
        { text: "Exchange Digital Scrapbooks of Your Favorite Memories 📸", completed: false },
        { text: "Have a movie night with popcorn 🍿", completed: false },
        { text: "Have a game night with friends 🎲", completed: false },
        { text: "Make a Relationship Scrapbook (Online or Physical) 📖", completed: false }
    ];

    function updateProgress() {
        const totalItems = bucketList.length;
        const completedItems = bucketList.filter(item => item.completed).length;
        const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
        progressBar.style.width = progressPercentage + "%";
        progressText.textContent = `${Math.round(progressPercentage)}% Completed`;
    }

    function saveBucketList() {
        localStorage.setItem("bucketList", JSON.stringify(bucketList));
    }

    function renderList() {
        listContainer.innerHTML = "";
        bucketList.forEach((item, index) => {
            const listItem = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox");
            checkbox.checked = item.completed;

            checkbox.addEventListener("change", () => {
                bucketList[index].completed = checkbox.checked;
                saveBucketList();
                updateProgress();
            });

            listItem.appendChild(checkbox);
            listItem.append(" " + item.text);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.style.background = "transparent";
            deleteButton.style.border = "none";
            deleteButton.style.cursor = "pointer";
            deleteButton.style.color = "#ff4f5a";
            deleteButton.style.fontSize = "1.2em";

            deleteButton.addEventListener("click", () => {
                console.log("Deleting item:", bucketList[index].text);
                bucketList.splice(index, 1);
                saveBucketList();
                renderList();
                updateProgress();
            });

            listItem.appendChild(deleteButton);
            listContainer.appendChild(listItem);
        });

        updateProgress();
    }

    addButton.addEventListener("click", function () {
        const newItemText = newItemInput.value.trim();
        if (newItemText !== "") {
            console.log("Adding new item:", newItemText);
            bucketList.push({ text: newItemText, completed: false });
            saveBucketList();
            renderList();
            newItemInput.value = "";
        } else {
            console.warn("Attempted to add an empty item.");
        }
    });

    // Allow pressing "Enter" to add an item
    newItemInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            console.log("Enter key pressed.");
            addButton.click();
        }
    });

    renderList();
    console.log("Initial list rendered.");
});
