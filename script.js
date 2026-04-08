/* =========================
   이메일 버튼 기능
========================= */

const emailButton = document.getElementById("Email-button");

emailButton.addEventListener("click", function () {
    alert("my-email@knu.ac.kr");
});


/* =========================
   다크 모드 토글 기능
========================= */

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
