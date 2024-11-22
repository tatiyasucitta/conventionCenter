// Toogle Class Active
const navigation = document.querySelector(".links");

// Klik Hamburger
document.querySelector("#hamburger").onclick = () => {
  navigation.classList.toggle("active");
};

// Klik diluar hilangin hamburger

const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navigation.contains(e.target)) {
    navigation.classList.remove("active");
  }
});
