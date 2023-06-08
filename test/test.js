// Thêm danh sách player
let inputValue = document.getElementById("form-input");
console.log(inputValue);
let btnAddPlayer = document.getElementById("add-player");
console.log(btnAddPlayer);
let divparent = document.getElementById("parent");
let btnMinus = document.getElementById("btn-minus");
let countScore = document.getElementById("count-score");
let btnPlus = document.getElementById("btn-plus");

btnAddPlayer.onclick = function () {
  console.log("haha");
  let player = inputValue.value;
  console.log(player);
  //   Tạo thẻ div để add nội dung
  let div = document.createElement("div");

  div.innerHTML = `
  <button class="delete">X</button>
  <span><i class="fa-sharp fa-solid fa-crown"></i></span>
  <span>${player}</span>
`;
  divparent.appendChild(div);
  inputValue.value = "";
};

// Xử lý stopwatch
let btnStart = document.getElementById("btn-start");
let btnStop = document.getElementById("btn-stop");
let btnReset = document.getElementById("btn-reset");
let countTime = document.getElementById("count-time");
let start = 0;
let i = null;
btnStart.onclick = function () {
  btnStart.style.display = "none";
  btnStop.style.display = "inline";
  btnStop.style.backgroundColor = "black";
  btnStop.style.color = "white";
  i = setInterval(function () {
    start = start + 1;
    countTime.innerText = `${start}`;
  }, 1000);
  //   console.log(i);
};
console.log(start);
btnStop.onclick = function () {
  clearInterval(i);
  btnStart.style.display = "inline";
  btnStop.style.display = "none";
  countTime.innerText = `${start}`;
  btnStart.style.backgroundColor = "white";
  btnStart.style.color = "black";
};

btnReset.onclick = function () {
  start = 0;
  clearInterval(i);
  btnStart.style.display = "inline";
  btnStop.style.display = "none";
  countTime.innerText = `${start}`;
  btnStart.style.backgroundColor = "white";
  btnStart.style.color = "black";
};
