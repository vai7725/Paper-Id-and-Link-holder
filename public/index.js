let inputs = Array.from(document.querySelectorAll(".inputs"));
let btn = document.querySelector(".btn");
let subStringDiv = document.querySelector(".subString");
let subjectVal = document.querySelector("#subject");
let year = document.querySelector("#year");
let inpLink = document.querySelector("#link");
let paperName = document.getElementById("paperName");
let saveBtn = document.getElementById("save");
let driveLink = document.getElementById("driveLink");
let paperLink = document.getElementById("link");
console.log(paperName);

const subjectValLimiter = (sub) => {
  let text = sub;
  let txtTrim = text.substring(0, 37);
  let tripleDot = "";
  if (text.length >= 37) {
    tripleDot = `...`;
  }

  let finalText = `${txtTrim}${tripleDot}`;
  return finalText.split(" ").join("").trim();
};

const idExtractor = (link) => {
  let linkArr = link.split("/");
  console.log(linkArr[5]);
  return linkArr[5];
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let str = "";
  inputs.forEach((e) => {
    str += e.value.split(" ").join("").trim();
  });
  let yearVal = year.value;
  let subTxt = subjectValLimiter(subjectVal.value);

  let finalStr = str.concat(subTxt).concat(yearVal);
  console.log(finalStr);

  let id = idExtractor(driveLink.value);
  let finalLink = `https://drive.google.com/uc?export=download&id=${id}`;

  paperName.value = finalStr;
  paperLink.value = finalLink;
  subStringDiv.innerHTML = `Paper name: ${finalStr} </br> Paper Link: ${finalLink}`;
});

// const postData = (name, link) => {
//   axios
//     .post("/savepapers", {
//       paperName: name,
//       paperLink: link,
//     })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => console.log(err));
// };

saveBtn.addEventListener("click", () => {
  window.location.reload();
});
