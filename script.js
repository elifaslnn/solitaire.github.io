const startModal = document.querySelector(".startGameModal");
const gameArea = document.querySelector(".gameArea");
const gameOptionBtn = document.querySelectorAll(".startGameModal button ");
const startGameBtn = document.getElementById("startGameBtn");
const stock = document.querySelector(".stock");
const set1 = document.getElementById("set1");
const set2 = document.getElementById("set2");
const set3 = document.getElementById("set3");
const set4 = document.getElementById("set4");
const set5 = document.getElementById("set5");
const set6 = document.getElementById("set6");
const set7 = document.getElementById("set7");
const set8 = document.getElementById("set8");

const stok1 = document.getElementById("stock1");
const stok2 = document.getElementById("stock2");
const stok3 = document.getElementById("stock3");
const stok4 = document.getElementById("stock4");
const stok5 = document.getElementById("stock5");

const pauseBtn = document.getElementById("pauseBtn");
const pauseModal = document.getElementById("pauseModal");
const settingModal = document.getElementById("settingModal");
const settingBtn = document.getElementById("settingBtn");

const lostModal = document.getElementById("lostModal");
const wonModal = document.getElementById("wonModal");

const undoBtn = document.getElementById("undoBtn");

const stocks = [stok1, stok2, stok3, stok4, stok5];
const sets = [set1, set2, set3, set4, set5, set6, set7, set8];

gameArea.style.display = "none";
pauseModal.style.display = "none";
settingModal.style.display = "none";
lostModal.style.display = "none";
wonModal.style.display = "none";

let option = {
  selectedGameOption: "",
};

const spades = {
  color: "black",
  1: {
    id: "",
    number: 1,
    img: "",
    name: "as",
    showCard: false,
    card: "spades",
  },

  2: {
    id: "",
    number: 2,
    img: "",
    name: "2",
    showCard: false,
    card: "spades",
  },
  3: {
    id: "",
    number: 3,
    img: "",
    name: "3",
    showCard: false,
    card: "spades",
  },
  4: {
    id: "",
    number: 4,
    img: "",
    name: "4",
    showCard: false,
    card: "spades",
  },
  5: {
    id: "",
    number: 5,
    img: "",
    name: "5",
    showCard: false,
    card: "spades",
  },
  6: {
    id: "",
    number: 6,
    img: "",
    name: "6",
    showCard: false,
    card: "spades",
  },
  7: {
    id: "",
    number: 7,
    img: "",
    name: "7",
    showCard: false,
    card: "spades",
  },
  8: {
    id: "",
    number: 8,
    img: "",
    name: "8",
    showCard: false,
    card: "spades",
  },
  9: {
    id: "",
    number: 9,
    img: "",
    name: "9",
    showCard: false,
    card: "spades",
  },
  10: {
    id: "",
    number: 10,
    img: "",
    name: "10",
    showCard: false,
    card: "spades",
  },
  11: {
    id: "",
    number: 11,
    img: "",
    name: "joker",
    showCard: false,
    card: "spades",
  },
  12: {
    id: "",
    number: 12,
    img: "",
    name: "queen",
    showCard: false,
    card: "spades",
  },
  13: {
    id: "",
    number: 13,
    img: "",
    name: "king",
    showCard: false,
    card: "spades",
  },
};
const hearts = {
  color: "red",
  1: {
    id: "",
    number: 1,
    img: "",
    name: "ah",
    showCard: false,
    card: "hearts",
  },

  2: {
    id: "",
    number: 2,
    img: "",
    name: "2",
    showCard: false,
    card: "hearts",
  },
  3: {
    id: "",
    number: 3,
    img: "",
    name: "3",
    showCard: false,
    card: "hearts",
  },
  4: {
    id: "",
    number: 4,
    img: "",
    name: "4",
    showCard: false,
    card: "hearts",
  },
  5: {
    id: "",
    number: 5,
    img: "",
    name: "5",
    showCard: false,
    card: "hearts",
  },
  6: {
    id: "",
    number: 6,
    img: "",
    name: "6",
    showCard: false,
    card: "hearts",
  },
  7: {
    id: "",
    number: 7,
    img: "",
    name: "7",
    showCard: false,
    card: "hearts",
  },
  8: {
    id: "",
    number: 8,
    img: "",
    name: "8",
    showCard: false,
    card: "hearts",
  },
  9: {
    id: "",
    number: 9,
    img: "",
    name: "9",
    showCard: false,
    card: "hearts",
  },
  10: {
    id: "",
    number: 10,
    img: "",
    name: "10",
    showCard: false,
    card: "hearts",
  },
  11: {
    id: "",
    number: 11,
    img: "",
    name: "joker",
    showCard: false,
    card: "hearts",
  },
  12: {
    id: "",
    number: 12,
    img: "",
    name: "queen",
    showCard: false,
    card: "hearts",
  },
  13: {
    id: "",
    number: 13,
    img: "",
    name: "king",
    showCard: false,
    card: "hearts",
  },
};
const clubs = {
  color: "black",
  1: {
    id: "",
    number: 1,
    img: "",
    name: "ac",
    showCard: false,
    card: "clubs",
  },
  2: {
    id: "",
    number: 2,
    img: "",
    name: "2",
    showCard: false,
    card: "clubs",
  },
  3: {
    id: "",
    number: 3,
    img: "",
    name: "3",
    showCard: false,
    card: "clubs",
  },
  4: {
    id: "",
    number: 4,
    img: "",
    name: "4",
    showCard: false,
    card: "clubs",
  },
  5: {
    id: "",
    number: 5,
    img: "",
    name: "5",
    showCard: false,
    card: "clubs",
  },
  6: {
    id: "",
    number: 6,
    img: "",
    name: "6",
    showCard: false,
    card: "clubs",
  },
  7: {
    id: "",
    number: 7,
    img: "",
    name: "7",
    showCard: false,
    card: "clubs",
  },
  8: {
    id: "",
    number: 8,
    img: "",
    name: "8",
    showCard: false,
    card: "clubs",
  },
  9: {
    id: "",
    number: 9,
    img: "",
    name: "9",
    showCard: false,
    card: "clubs",
  },
  10: {
    id: "",
    number: 10,
    img: "",
    name: "10",
    showCard: false,
    card: "clubs",
  },
  11: {
    id: "",
    number: 11,
    img: "",
    name: "joker",
    showCard: false,
    card: "clubs",
  },
  12: {
    id: "",
    number: 12,
    img: "",
    name: "queen",
    showCard: false,
    card: "clubs",
  },
  13: {
    id: "",
    number: 13,
    img: "",
    name: "king",
    showCard: false,
    card: "clubs",
  },
};
const diamonds = {
  color: "red",
  1: {
    id: "",
    number: 1,
    img: "",
    name: "ad",
    showCard: false,
    card: "diamonds",
  },
  2: {
    id: "",
    number: 2,
    img: "",
    name: "2",
    showCard: false,
    card: "diamonds",
  },
  3: {
    id: "",
    number: 3,
    img: "",
    name: "3",
    showCard: false,
    card: "diamonds",
  },
  4: {
    id: "",
    number: 4,
    img: "",
    name: "4",
    showCard: false,
    card: "diamonds",
  },
  5: {
    id: "",
    number: 5,
    img: "",
    name: "5",
    showCard: false,
    card: "diamonds",
  },
  6: {
    id: "",
    number: 6,
    img: "",
    name: "6",
    showCard: false,
    card: "diamonds",
  },
  7: {
    id: "",
    number: 7,
    img: "",
    name: "7",
    showCard: false,
    card: "diamonds",
  },
  8: {
    id: "",
    number: 8,
    img: "",
    name: "8",
    showCard: false,
    card: "diamonds",
  },
  9: {
    id: "",
    number: 9,
    img: "",
    name: "9",
    showCard: false,
    card: "diamonds",
  },
  10: {
    id: "",
    number: 10,
    img: "",
    name: "10",
    showCard: false,
    card: "diamonds",
  },
  11: {
    id: "",
    number: 11,
    img: "",
    name: "joker",
    showCard: false,
    card: "diamonds",
  },
  12: {
    id: "",
    number: 12,
    img: "",
    name: "queen",
    showCard: false,
    card: "diamonds",
  },
  13: {
    id: "",
    number: 13,
    img: "",
    name: "king",
    showCard: false,
    card: "diamonds",
  },
};

let col1 = new Array(0);
let col2 = new Array(0);
let col3 = new Array(0);
let col4 = new Array(0);
let col5 = new Array(0);
let col6 = new Array(0);
let col7 = new Array(0);
let col8 = new Array(0);
let col9 = new Array(0);
let col10 = new Array(0);
let arrays = [col1, col2, col3, col4, col5, col6, col7, col8, col9, col10];
let arraysUndo = [];

let mixedArr = [];
const sortedArray = [];

function oneSuitsGame() {
  for (let j = 0; j < 8; j++) {
    for (let i = 1; i <= 13; i++) {
      sortedArray.push(i);
    }
  }
  shuffle(sortedArray);

  function addMixingCards(array) {
    for (let i = 0; i < 104; i++) {
      const cardNumber = array[i];
      const card = { ...spades[cardNumber] };
      card.id = `${card.name}_${i}`;
      mixedArr.push(card);
    }
  }

  addMixingCards(sortedArray);
  dealTheCards(mixedArr, arrays);
}

function twoSuitGame() {
  for (let i = 1; i <= 13; i++) {
    sortedArray.push({ ...spades[i] });
    sortedArray.push({ ...hearts[i] });
  }
  let fullDeck = [
    ...sortedArray,
    ...sortedArray,
    ...sortedArray,
    ...sortedArray,
  ];

  shuffle(fullDeck);

  function addMixingCards(array) {
    for (let i = 0; i < 104; i++) {
      const card = array[i];
      card.id = `${card.card}_${card.name}_${i}`;
      mixedArr.push(card);
    }
  }
  addMixingCards(fullDeck);
  dealTheCards(mixedArr, arrays);
}

function fourSuitGame() {
  for (let i = 1; i <= 13; i++) {
    sortedArray.push({ ...spades[i] });
    sortedArray.push({ ...hearts[i] });
    sortedArray.push({ ...clubs[i] });
    sortedArray.push({ ...diamonds[i] });
  }
  let fullDeck = [...sortedArray, ...sortedArray];

  shuffle(fullDeck);

  function addMixingCards(array) {
    for (let i = 0; i < 104; i++) {
      const card = array[i];
      card.id = `${card.card}_${card.name}_${i}`;
      mixedArr.push(card);
    }
  }
  addMixingCards(fullDeck);
  dealTheCards(mixedArr, arrays);
}

gameOptionBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id == "oneSuit") {
      document.getElementById(`${e.target.id}`).style.backgroundColor = "green";
      document.getElementById(`twoSuit`).style.backgroundColor = "gray";
      document.getElementById(`fourSuit`).style.backgroundColor = "gray";
      option.selectedGameOption = "One Suit";
    }
    if (e.target.id == "twoSuit") {
      document.getElementById(`${e.target.id}`).style.backgroundColor = "green";
      document.getElementById(`oneSuit`).style.backgroundColor = "gray";
      document.getElementById(`fourSuit`).style.backgroundColor = "gray";
      option.selectedGameOption = "Two Suit";
    }
    if (e.target.id == "fourSuit") {
      document.getElementById(`${e.target.id}`).style.backgroundColor = "green";
      document.getElementById(`twoSuit`).style.backgroundColor = "gray";
      document.getElementById(`oneSuit`).style.backgroundColor = "gray";
      option.selectedGameOption = "Four Suit";
    }
  });
});
let pauseCheck = false;
startGameBtn.addEventListener("click", () => {
  if (option.selectedGameOption == "") {
    alert("lütfen seçim yapın");
  } else {
    startModal.style.display = "none";
    gameArea.style.display = "block";
    document.getElementById(`gameTitle`).innerHTML = option.selectedGameOption;
    if (option.selectedGameOption == "One Suit") {
      oneSuitsGame();
    } else if (option.selectedGameOption == "Two Suit") {
      twoSuitGame();
    } else if (option.selectedGameOption == "Four Suit") {
      fourSuitGame();
    }
    startTimer();
  }
});

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function dealTheCards(array, colArrays) {
  var audio = new Audio("audio/shuffle-cards.mp3");
  audio.play();

  // Get the stock and all card row elements
  const stockElement = document.querySelector(".stock");
  const cardRows = document.querySelectorAll(".cardRowCol");

  // Iterate over each card row
  for (let i = 0; i < 10; i++) {
    const name = `cardRow${i + 1}`;
    const dom = document.querySelector(`#${name}`);
    const ul = document.createElement("ul");
    ul.id = `${name}Ul`;
    ul.className = "dropzone";

    // Determine the number of cards per row
    const cardsPerRow = i < 4 ? 6 : 5;

    for (let j = 0; j < cardsPerRow; j++) {
      const obj = array.pop();
      const number = obj.number;
      const cardType = obj.card;

      if (j === cardsPerRow - 1) {
        obj.img = `assets/${cardType}/${number}.png`; // Open the card
        obj.showCard = true;
      } else {
        obj.img = `assets/backgroundCard/classic_blue.png`;
      }

      colArrays[i].push(obj);
      const li = document.createElement("li");
      li.id = `li${j + 1}`;
      li.draggable = true;
      li.style.top = `${j}rem`;
      li.style.zIndex = `${j + 1}`;
      li.style.position = "absolute"; // For smooth animation
      const img = document.createElement("img");
      img.src = obj.img;
      li.appendChild(img);
      setTimeout(() => {
        ul.appendChild(li);
      }, 100 * j);
    }

    // Append the ul to the respective card row after cards are added
    dom.appendChild(ul);
  }
}

let isSetCheck = false;
(function () {
  var dragged, listener;
  dragged = null;
  listener = document.addEventListener;
  listener("dragstart", (event) => {
    console.log("start !");
    return (dragged = event.target.parentNode);
  });
  listener("dragend", (event) => {
    return console.log("end !");
  });
  listener("dragover", function (event) {
    return event.preventDefault();
  });
  listener("drop", (event) => {
    console.log("drop !");
    event.preventDefault();
    if (event.target.parentNode.parentNode.className === "dropzone") {
      const decArrId = dragged.parentNode.id.match(/\d+/)[0]; //silinecek col
      const addarrId = event.target.parentNode.parentNode.id.match(/\d+/)[0]; //eklenecek col
      const draggedId = parseInt(dragged.id.match(/\d+/)[0], 10) - 1; //silinecek ul id'si
      const addUl = event.target.parentNode.parentNode; //eklenecek ul

      const decUl = dragged.parentNode;
      if (
        eklenebilirmiSayisal(
          arrays[decArrId - 1],
          arrays[addarrId - 1],
          draggedId
        ) == true
      ) {
        //eklenebilir olduğunu gördük
        if (addUl.childNodes[0].id == "demo") {
          addUl.removeChild(addUl.childNodes[0]);
        }
        //şimdiki halini önceki olarak değiştirelim
        if (isStockCheck) {
          isStockCheck = false;
        }
        isSetCheck = false;
        arraysUndo = JSON.parse(JSON.stringify(arrays));
        //ekleme ve çıkarma yapacağız
        //yeni id değerlerini ayarlama
        //zIndex, top değerleri ayarlama
        //array den silme, array e yazma
        //ul den silme ul'e yazma
        const j = draggedId;
        const length = arrays[decArrId - 1].length;
        let check = false;
        for (let i = draggedId; i < length; i++) {
          //eklenecek listenin boyutunu al o bize son id'yi verecek
          const lastIdAddedArray = arrays[addarrId - 1].length + 1;

          const removedObj = arrays[decArrId - 1][j];
          const removedLi = decUl.childNodes[j];

          removedLi.id = `li${lastIdAddedArray}`;
          removedLi.style.zIndex = `${lastIdAddedArray}`;
          removedLi.style.top = `${lastIdAddedArray - 1}rem`;

          //array düzenlemesi
          arrays[addarrId - 1].push(removedObj);
          arrays[decArrId - 1].splice(j, 1);

          if (i + 1 == length && j + 1 != 1) {
            sadeceSonListeAcik(decUl, arrays[decArrId - 1]);
            check = true;
          }

          //ul düzenlemesi
          decUl.removeChild(removedLi);
          addUl.appendChild(removedLi);

          if (decUl.childNodes.length == 0) {
            const demoLi = document.createElement("li");
            demoLi.id = "demo";
            const img = document.createElement("img");
            img.style.height = "80px";
            demoLi.appendChild(img);
            decUl.appendChild(demoLi);
          }

          isSetDone(arrays[addarrId - 1], addUl);
          if (findTheAllHint(false) == false && stocks.length == 0) {
            lostModal.style.display = "block";
            gameArea.style.filter = "blur(8px)";
          }
        }

        var audio = new Audio("audio/card_drop.mp3");
        audio.play();

        const hintLenght = hintObjects.length;
        if (hintLenght > 0) {
          for (let i = 0; i < hintLenght; i++) {
            const obj = hintObjects.pop();
            console.log(obj);
            obj.style.padding = "0px";
            obj.style.backgroundColor = "";
          }
        }
      } else {
        window.alert("ekleme yapamazsınız");
      }
    }
  });
}).call(this);

//silinecek col, eklenecek col, silinecek objenin indexi
function eklenebilirmiSayisal(col1, col2, draggerIndex) {
  let check = true;

  if (col1.length != 1) {
    const cardType = col1[0].card;
    for (let i = draggerIndex; i < col1.length - 1; i++) {
      if (
        col1[i].number - 1 != col1[i + 1].number ||
        col1[i].card != col1[i + 1].card
      ) {
        check = false;
      }
    }
  }

  const col2length = col2.length;

  // Eğer col2(eklenecek col) boş ise, eklemeye izin ver
  if (col2length === 0) {
    return check;
  }

  // Eğer col2 boş değilse, son kartın numarasını kontrol et
  if (col1[draggerIndex].number + 1 != col2[col2length - 1].number) {
    check = false;
  }

  return check;
}

let undoSkor;
function sadeceSonListeAcik(kaldirilanUl, kaldirilanCol) {
  const lenght = kaldirilanUl.childNodes.length;
  kaldirilanUl.childNodes[lenght - 1];
  const obj = kaldirilanCol.pop();
  const number = obj.number;
  const type = obj.card;
  obj.showCard = true;
  obj.img = `assets/${type}/${number}.png`;
  kaldirilanCol.push(obj);
  kaldirilanUl.childNodes[
    lenght - 2
  ].childNodes[0].src = `assets/${type}/${number}.png`;
  undoSkor = -10;
  setSkor(10);
}
let isStockCheck = false;
let undoStock;
let undoMixedArray = [];
//STOCK
stock.addEventListener("click", function () {
  arraysUndo = JSON.parse(JSON.stringify(arrays));
  undoMixedArray = JSON.parse(JSON.stringify(mixedArr));

  var audio = new Audio("audio/stock_flip.mp3");
  audio.play();

  for (let i = 0; i < 10; i++) {
    const name = `cardRow${i + 1}`;
    const ulId = `${name}Ul`;

    if (document.getElementById(`${ulId}`).childNodes[0].id == "demo") {
      document
        .getElementById(`${ulId}`)
        .removeChild(document.getElementById(`${ulId}`).childNodes[0]);
    }
    const ulLength = document.getElementById(`${ulId}`).childNodes.length;
    const li = document.createElement("li");
    li.id = `li${ulLength + 1}`;
    li.draggable = true;
    li.style.top = `${ulLength}rem`;
    li.style.zIndex = `${ulLength + 1}`;
    const img = document.createElement("img");

    const cardObj = mixedArr.pop();
    cardObj.showCard = true;
    const cardType = cardObj.card;
    img.src = `assets/${cardType}/${cardObj.number}.png`;
    cardObj.img = `assets/${cardType}/${cardObj.number}.png`;
    li.appendChild(img);
    arrays[i].push(cardObj);

    document.getElementById(`${ulId}`).appendChild(li);
    isSetDone(arrays[i], document.getElementById(`${ulId}`));
  }
  isStockCheck = true;
  const obj = stocks.pop();
  undoStock = obj;
  obj.style.display = "none";
});

function isSetDone(array, ul) {
  const filteredArray = array.filter((item) => item.showCard);

  const targetSequence = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const values = filteredArray.map((item) => item.number);
  const cardTypeValues = filteredArray.map((item) => item.card);

  // Sıralı alt dizi kontrolü
  function containsSequence(arr, seq) {
    for (let i = 0; i <= arr.length - seq.length; i++) {
      let match = true;
      for (let j = 0; j < seq.length; j++) {
        if (arr[i + j] !== seq[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        isSetCheck = true;
        return true;
      }
    }
    return false;
  }

  function isSameType(arr, seq) {
    let match = true;
    const firstType = arr[arr.length - seq.length];

    for (let i = arr.length - seq.length; i < arr.length; i++) {
      if (firstType != arr[i]) {
        match = false;
      }
    }
    return match;
  }
  if (
    containsSequence(values, targetSequence) &&
    isSameType(cardTypeValues, targetSequence)
  ) {
    window.alert("Set tamamlandı!");
    undoSkor = -100;
    setSkor(100);
    for (let i = 0; i < targetSequence.length; i++) {
      const index = array.findIndex(
        (item) => item.number === targetSequence[i] && item.showCard === true
      );
      if (index !== -1) {
        array.splice(index, 1);
      }
    }

    const lisToRemove = ul.querySelectorAll("li");
    for (
      let i = lisToRemove.length - targetSequence.length;
      i < lisToRemove.length;
      i++
    ) {
      if (
        i + 1 == lisToRemove.length &&
        lisToRemove[lisToRemove.length - targetSequence.length].id != "li1"
      ) {
        sadeceSonListeAcik(ul, array);
      }
      ul.removeChild(lisToRemove[i]);
    }
    if (ul.childNodes.length == 0) {
      const demoLi = document.createElement("li");
      demoLi.id = "demo";
      const img = document.createElement("img");
      img.style.height = "80px";
      demoLi.appendChild(img);
      ul.appendChild(demoLi);
    }

    const changeset = sets.pop();
    const img = document.createElement("img");
    img.src = "assets/spades/13.png";
    img.style.objectFit = "contain";
    img.style.height = "7rem";

    changeset.appendChild(img);

    if (sets.length == 0) {
      document.getElementById("finalScor").innerHTML = `Scor: ${skor}`;

      wonModal.style.display = "block";
      var audio = new Audio("audio/victory.mp3");
      audio.play();
    }
  }
}

let second = "00";
let minutes = "00";
function updateTime() {
  const time = document.getElementById("time");
  if (second == 59) {
    second = "00";
    minutes = Number(minutes) + 1;
  } else {
    second = Number(second) + 1;
  }

  if (second < 10) {
    time.innerHTML = `Time: ${minutes}:0${second}`;
  } else {
    time.innerHTML = `Time: ${minutes}:${second}`;
  }
}

function startTimer() {
  pauseCheck = false;
  timerInterval = setInterval(() => {
    if (!pauseCheck) {
      updateTime();
    }
  }, 1000);
}

const contGameBtn = document.getElementById("contGameBtn");
const exitGameBtn = document.getElementById("exitGameBtn");

pauseBtn.addEventListener("click", () => {
  pauseModal.style.display = "block";
  gameArea.style.filter = "blur(8px)";
  pauseCheck = true;
});

contGameBtn.addEventListener("click", function () {
  pauseModal.style.display = "none";
  gameArea.style.filter = "blur(0px)";
  pauseCheck = false;
});

exitGameBtn.addEventListener("click", function () {
  window.location.reload();
});

document.getElementById("newGameBtn").addEventListener("click", function () {
  window.location.reload();
});
document.getElementById("newGameBtnWon").addEventListener("click", function () {
  window.location.reload();
});

const skorVal = document.getElementById("skor");
let skor = 0;
function setSkor(skorData) {
  skor += skorData;
  skorVal.innerHTML = `Skor: ${skor}`;
}

undoBtn.addEventListener("click", function () {
  if (arraysUndo.length != 0) {
    setSkor(undoSkor);
    var audio = new Audio("audio/undo.mp3");
    audio.play();
    arrays = JSON.parse(JSON.stringify(arraysUndo));
    console.log(undoMixedArray);
    if (undoMixedArray.length > 0) {
      mixedArr = JSON.parse(JSON.stringify(undoMixedArray));
    }
    if (isSetCheck) {
      console.log(sets);
      const index = sets.length + 1; //7
      const setsObj = document.getElementById(`set${index}`);
      console.log(setsObj);
      setsObj.removeChild(setsObj.childNodes[0]);
      sets.push(`set${index}`);
    }
    updateUI();
    if (isStockCheck) {
      undoStock.style.display = "block";
      stocks.push(undoStock);
    }
  }
});

function updateUI() {
  for (let i = 0; i < arrays.length; i++) {
    const name = `cardRow${i + 1}`;
    const ul = document.querySelector(`#${name}Ul`);
    ul.innerHTML = ""; // Mevcut liste öğelerini temizle

    for (let j = 0; j < arrays[i].length; j++) {
      const li = document.createElement("li");
      li.id = `li${j + 1}`;
      li.draggable = true;
      li.style.top = `${j}rem`;
      li.style.zIndex = `${j + 1}`;
      const img = document.createElement("img");
      const obj = arrays[i][j];
      img.src = obj.img;
      li.appendChild(img);
      ul.appendChild(li);
    }
  }
  console.log(arrays);
}

const exitSettingBtn = document.getElementById("exitSettingBtn");

settingBtn.addEventListener("click", function () {
  settingModal.style.display = "block";
  gameArea.style.filter = "blur(8px)";
  pauseCheck = true;
});

exitSettingBtn.addEventListener("click", function () {
  settingModal.style.display = "none";
  gameArea.style.filter = "blur(0px)";
  pauseCheck = false;
});

const cardArea = document.getElementById("settingModalBody");

cardArea.addEventListener("click", (e) => {
  if (e.target.id != "exitSettingBtn") {
    for (let i = 0; i < 10; i++) {
      const name = `cardRow${i + 1}`;
      const ul = document.querySelector(`#${name}Ul`);

      for (let j = 0; j < arrays[i].length; j++) {
        if (arrays[i][j].showCard === false) {
          arrays[i][j].img = `assets/backgroundCard/${e.target.id}.png`;
          ul.childNodes[
            j
          ].childNodes[0].src = `assets/backgroundCard/${e.target.id}.png`;
        }
        console.log(`assets/backgroundCard/${e.target.id}.png`);
      }
    }
  }
});

const hintBtn = document.getElementById("hintBtn");

hintBtn.addEventListener("click", () => {
  //sırayla tüm satırlarda gez
  //her satırın sonuna eklenebilecek olasılıkları gör.
  //daha uzun bir sonuç elde ediliyorsa öner.
  console.log(findTheAllHint());
  findTheAllHint(true);
  if (hintObjects.length == 0 && stocks.length != 0) {
    stockHint();
  } else if (hintObjects.length == 0 && stocks.length == 0) {
    window.alert("oyunu kaybettiniz");
  }
  console.log(arrays);
});

function findTheAllHint(check) {
  let foundHint = false; // Flag variable to control the outer loop
  let result = false;
  for (let i = 0; i < 10 && !foundHint; i++) {
    // Check flag in the outer loop condition
    if (arrays[i].length === 0) continue;

    const arraysLastCard = arrays[i][arrays[i].length - 1];
    const cardsNum = arraysLastCard.number;

    for (let j = 0; j < 10 && !foundHint; j++) {
      // Check flag in the inner loop condition
      if (i !== j) {
        arrays[j].forEach((element, index) => {
          if (element.showCard === true) {
            if (element.number === cardsNum - 1) {
              if (eklenebilirmiSayisal(arrays[j], arrays[i], index)) {
                console.log(`${arraysLastCard.number} --- ${element.number}`);
                console.log(i + "--" + j);

                const addListLength =
                  isLonger(arrays[i]) + arrays[j].length - index;
                const dellListLength = isLonger(arrays[j]);

                console.log(
                  `eklenecek ${addListLength} ** silinecek ${dellListLength}`
                );

                if (addListLength > dellListLength) {
                  result = true;
                  if (check == true) {
                    showHint(arrays[j], j, arrays[i], i, index);
                  }
                  foundHint = true; // Set flag to true to stop further looping
                }
              }
            }
          }
        });
      }
    }
  }
  return result;
}

function isLonger(col1) {
  let sum = 1;
  let num = col1[col1.length - 1].number; //[13,12,9,6,5,4,3]6. index   length=7
  let cont = true;
  for (let i = col1.length - 1; i > 0; i-- && cont) {
    if (col1[i - 1].number - 1 == num && col1[i - 1].showCard == true) {
      num = col1[i - 1].number;
      sum++;
      console.log(col1[i - 1].number);
    } else {
      cont = false;
    }
  }
  return sum;
}
let hintObjects = [];
//silinecek,eklenecek,index
function showHint(col1, j, col2, m, k) {
  /**        img.style.padding = "5px";
        img.style.backgroundColor = "pink"; */
  const ulName = `cardRow${j + 1}Ul`;
  const ul = document.getElementById(`${ulName}`);
  for (let i = k; i < col1.length; i++) {
    console.log(ul.childNodes[i].childNodes[0]);
    const img = ul.childNodes[i].childNodes[0];
    img.style.padding = "5px";
    img.style.backgroundColor = "red";
    hintObjects.push(img);
  }
  const ulName2 = `cardRow${m + 1}Ul`;
  const ul2 = document.getElementById(`${ulName2}`);

  const addColImg = ul2.childNodes[ul2.childNodes.length - 1].firstChild;
  addColImg.style.padding = "5px";
  addColImg.style.backgroundColor = "red";
  hintObjects.push(addColImg);
  console.log(hintObjects);
}

window.addEventListener("click", (e) => {
  console.log(hintObjects.length);
  const lenght = hintObjects.length;
  if (e.target.id != "hintBtn" && lenght > 0) {
    for (let i = 0; i < lenght; i++) {
      const obj = hintObjects.pop();
      console.log(obj);
      obj.style.padding = "0px";
      obj.style.backgroundColor = "";
    }
  }
});

function stockHint() {
  const obj = stocks[stocks.length - 1].childNodes[1];
  obj.style.padding = "5px";
  obj.style.backgroundColor = "red";
  console.log(obj);
  hintObjects.push(obj);
}
