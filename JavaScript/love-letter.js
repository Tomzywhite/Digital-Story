document.addEventListener("DOMContentLoaded", function () {
    let letter = document.querySelector(".letter");
    let content = letter.innerHTML;
    letter.innerHTML = "";
    let i = 0;

    function typeLetter() {
        if (i < content.length) {
            letter.innerHTML += content.charAt(i);
            i++;
            setTimeout(typeLetter, 50); // Speed of typing
        }
    }

    typeLetter();
});
