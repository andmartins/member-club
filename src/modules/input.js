const input = document.getElementById("id-input");

input.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 15) {
    value = value.slice(0, 15);
  }

  let formattedValue = value.replace(/(\d{3})(?=\d)/g, "$1-");
  e.target.value = formattedValue;
});
