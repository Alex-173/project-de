document.getElementById("searchButton").addEventListener("click", function () {
  let query = document.getElementById("searchInput").value;
  if (query.trim() !== "") {
    alert("Ви шукаєте: " + query);
    // Тут можна додати функцію пошуку на сайті
  }
});

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("searchButton").click();
    }
  });
