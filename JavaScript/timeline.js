document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function revealTimeline() {
        let scrollPosition = window.scrollY + window.innerHeight;
        timelineItems.forEach((item) => {
            if (scrollPosition > item.offsetTop + item.clientHeight / 2) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealTimeline);
});
