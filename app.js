var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-them");
  if (document.body.classList.contains("dark-them")) {
    icon.src = "Icons/entypo_light-up.svg";
    // document.style.body.transition(0.5);
  } else {
    icon.src = "Icons/moon-fill.svg";
  }
};
