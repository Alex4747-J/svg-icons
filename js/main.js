console.log("JavaScript File is Links")

const iconElements = document.querySelectorAll("object");
console.log(iconElements)

function handleFruitClick(event) {
  const iconId = event.currentTarget.id;
  console.log(`You clicked on the flavour: ${iconId}`);
}

iconElements.forEach(function attachClickEvent(icon) {
  icon.addEventListener("load", function onLoad() {
    icon.contentDocument.documentElement.addEventListener("click", handleFruitClick);
  });
});