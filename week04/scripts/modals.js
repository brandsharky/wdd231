const openButton1 = document.getElementById("openButton1");
const openButton2 = document.getElementById("openButton2");
const openButton3 = document.getElementById("openButton3");

const dialogueBox = document.getElementById("dialogueBox");
const dialogueBoxText = document.querySelector("#dialogueBox div");
const closeButton = document.getElementById("closeButton");



// "Show the dialogue" button opens the dialogue modally
openButton1.addEventListener("click", () => {
  dialogueBoxText.innerHTML = "An Apple has 95 calories";
  dialogueBox.showModal();
})
openButton2.addEventListener("click", () => {
  dialogueBoxText.innerHTML = "An Orange has 45 calories";
  dialogueBox.showModal();
});
openButton3.addEventListener("click", () => {
  dialogueBoxText.innerHTML = "A Banana has 105 calories";
  dialogueBox.showModal();
});


closeButton.addEventListener("click", () => {
  dialogueBox.close();
})


