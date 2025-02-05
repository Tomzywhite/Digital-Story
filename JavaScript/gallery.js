document.querySelectorAll(".gallery-image, .gallery-video").forEach(item => {
    item.addEventListener("click", function () {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        
        const fullItem = document.createElement(item.tagName === "IMG" ? "img" : "video");
        fullItem.src = item.tagName === "IMG" ? item.src : item.querySelector("source").src;
        fullItem.classList.add(item.tagName === "IMG" ? "full-image" : "full-video");
        fullItem.controls = item.tagName === "VIDEO";  // Show controls for videos
        
        overlay.appendChild(fullItem);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", function () {
            document.body.removeChild(overlay);
        });
    });
});
