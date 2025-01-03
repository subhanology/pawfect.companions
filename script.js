document.addEventListener("DOMContentLoaded", function() {
    const catsButton = document.getElementById("Cats");
    const dogsButton = document.getElementById("Dogs");

    const availableCats = document.querySelector(".available-cats-wrapper");
    const availableDogs = document.querySelector(".available-dogs-wrapper");

    availableCats.style.display = "none";
    availableDogs.style.display = "none";

    catsButton.addEventListener("click", function() {
        if (availableCats.style.display === "none") {
            availableCats.style.display = "block";
            availableDogs.style.display = "none";
        } else {
            availableCats.style.display = "none";
        }
    });

    dogsButton.addEventListener("click", function() {
        if (availableDogs.style.display === "none") {
            availableDogs.style.display = "block";
            availableCats.style.display = "none";
        } else {
            availableDogs.style.display = "none";
        }
    });
});
