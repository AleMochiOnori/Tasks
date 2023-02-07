const toggleList = document.querySelector("#toggleList");
const nameList = document.querySelector("#nameList");
const label = document.querySelector("label");

toggleList.addEventListener("change", function() {
  if (toggleList.checked) {
    nameList.style.display = "block";
    label.textContent = "Hide";
  } else {
    nameList.style.display = "none";
    label.textContent = "Show";
  }
});
  w