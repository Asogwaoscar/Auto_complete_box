let availableWords = [
  "Javascript",
  "Best tech institute",
  "Web design tutorials",
  "how to create website",
  "Is front-end better than backend",
  "Where to learn coding online",
  "where to learn product design",
  "what is data analysis",
  "Who is a data analyst",
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableWords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};
function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
