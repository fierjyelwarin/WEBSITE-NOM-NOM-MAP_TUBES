document.addEventListener("DOMContentLoaded", function () {

    const adminBtn = document.getElementById("btn-admin");
    const userBtn  = document.getElementById("btn-user");

    // ke halaman login admin
    adminBtn.addEventListener("click", function () {
        window.location.href = "indexAdmin.html";
    });

    // ke halaman user (dashboard)
    userBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });

});
