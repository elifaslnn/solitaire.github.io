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

console.log(stok5);

const stocks = [stok1, stok2, stok3, stok4, stok5];

gameArea.style.display = "none";

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
  },

  2: {
    id: "",

    number: 2,
    img: "",
    name: "2",
    showCard: false,
  },
  3: {
    id: "",

    number: 3,
    img: "",
    name: "3",
    showCard: false,
  },
  4: {
    id: "",

    number: 4,
    img: "",
    name: "4",
    showCard: false,
  },
  5: {
    id: "",

    number: 5,
    img: "",
    name: "5",
    showCard: false,
  },
  6: {
    id: "",

    number: 6,
    img: "",
    name: "6",
    showCard: false,
  },
  7: {
    id: "",

    number: 7,
    img: "",
    name: "7",
    showCard: false,
  },
  8: {
    id: "",

    number: 8,
    img: "",
    name: "8",
    showCard: false,
  },
  9: {
    id: "",

    number: 9,
    img: "",
    name: "9",
    showCard: false,
  },
  10: {
    id: "",

    number: 10,
    img: "",
    name: "10",
    showCard: false,
  },
  11: {
    id: "",

    number: 11,
    img: "",
    name: "joker",
    showCard: false,
  },
  12: {
    id: "",

    number: 12,
    img: "",
    name: "queen",
    showCard: false,
  },
  13: {
    id: "",

    number: 13,
    img: "",
    name: "king",
    showCard: false,
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
const arrays = [col1, col2, col3, col4, col5, col6, col7, col8, col9, col10];

const sets = [set1, set2, set3, set4, set5, set6, set7, set8];
const mixedArr = [];

function oneSuitsGame() {
  const sortedArray = [];

  //console.log(arrays);
  for (let j = 0; j < 8; j++) {
    for (let i = 1; i <= 13; i++) {
      sortedArray.push(i);
    }
  }
  //console.log(sortedArray);
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

startGameBtn.addEventListener("click", () => {
  if (option.selectedGameOption == "") {
    alert("lütfen seçim yapın");
  } else {
    startModal.style.display = "none";
    gameArea.style.display = "block";
    document.getElementById(`gameTitle`).innerHTML = option.selectedGameOption;
    if (option.selectedGameOption == "One Suit") {
      oneSuitsGame();
    }
  }
});

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function dealTheCards(array, colArrays) {
  for (let i = 0; i < 10; i++) {
    const name = `cardRow${i + 1}`;
    const dom = document.querySelector(`#${name}`);
    const ul = document.createElement("ul");
    ul.id = `${name}Ul`;
    ul.className = "dropzone";
    if (i == 0 || i == 1 || i == 2 || i == 3) {
      for (let j = 0; j < 6; j++) {
        const obj = array.pop();
        const number = obj.number;
        if (j === 5) {
          obj.img = `assets/spades/${number}.png`; // Kartı aç
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
        const img = document.createElement("img");
        img.src = obj.img;
        li.appendChild(img);
        ul.appendChild(li);
      }
    } else {
      for (let j = 0; j < 2; j++) {
        const obj = array.pop();
        const number = obj.number;
        if (j === 1) {
          obj.img = `assets/spades/${number}.png`; // Kartı aç
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
        const img = document.createElement("img");
        img.src = obj.img;
        li.appendChild(img);
        ul.appendChild(li);
      }
    }
    dom.appendChild(ul);
  }
}

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
    console.log(event.target.parentNode.parentNode.className);
    if (event.target.parentNode.parentNode.className === "dropzone") {
      const decArrId = dragged.parentNode.id.match(/\d+/)[0]; //silinecek col
      const addarrId = event.target.parentNode.parentNode.id.match(/\d+/)[0]; //eklenecek col
      const draggedId = parseInt(dragged.id.match(/\d+/)[0], 10) - 1;
      const addUl = event.target.parentNode.parentNode;
      console.log(addUl.childNodes[0].id);
      if (addUl.childNodes[0].id == "demo") {
        addUl.removeChild(addUl.childNodes[0]);
      }
      const decUl = dragged.parentNode;
      if (
        eklenebilirmiSayisal(
          arrays[decArrId - 1],
          arrays[addarrId - 1],
          draggedId
        ) == true
      ) {
        //eklenebilir olduğunu gördük
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
          console.log(j);

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
            console.log("array boş");
            const demoLi = document.createElement("li");
            demoLi.id = "demo";
            const img = document.createElement("img");
            img.style.height = "80px";
            demoLi.appendChild(img);
            decUl.appendChild(demoLi);
            console.log(decUl);
          }

          isSetDone(arrays[addarrId - 1], addUl);
        }
        console.log(arrays);
      } else {
        window.alert("ekleme yapamazsınız");
      }
    }
  });
}).call(this);

function eklenebilirmiSayisal(col1, col2, draggerIndex) {
  let check = true;

  if (col1.length != 1) {
    for (let i = draggerIndex; i < col1.length - 1; i++) {
      if (col1[i].number - 1 != col1[i + 1].number) {
        check = false;
      }
    }
  }

  const col2length = col2.length;

  // Eğer col2 boş ise, eklemeye izin ver
  if (col2length === 0) {
    return check;
  }

  // Eğer col2 boş değilse, son kartın numarasını kontrol et
  if (col1[draggerIndex].number + 1 != col2[col2length - 1].number) {
    check = false;
  }

  return check;
}

function sadeceSonListeAcik(kaldirilanUl, kaldirilanCol) {
  const lenght = kaldirilanUl.childNodes.length;
  kaldirilanUl.childNodes[lenght - 1];
  const obj = kaldirilanCol.pop();
  obj.showCard = true;
  kaldirilanCol.push(obj);
  const number = obj.number;
  console.log(
    (kaldirilanUl.childNodes[
      lenght - 2
    ].childNodes[0].src = `assets/spades/${number}.png`)
  );
}

function demo(kaldirilanUl, kaldirilanCol) {
  const obj = kaldirilanCol.pop();
  obj.showCard = true;
  kaldirilanCol.push(obj);
  const number = obj.number;
}

stock.addEventListener("click", function () {
  for (let i = 0; i < 10; i++) {
    const name = `cardRow${i + 1}`;
    const ulId = `${name}Ul`;
    const ulLength = document.getElementById(`${ulId}`).childNodes.length;
    const li = document.createElement("li");
    li.id = `li${ulLength + 1}`;
    li.draggable = true;
    li.style.top = `${ulLength}rem`;
    li.style.zIndex = `${ulLength + 1}`;
    const img = document.createElement("img");
    const cardObj = mixedArr.pop();
    cardObj.showCard = true;
    img.src = `assets/spades/${cardObj.number}.png`;
    cardObj.img = `assets/spades/${cardObj.number}.png`;
    li.appendChild(img);
    arrays[i].push(cardObj);

    document.getElementById(`${ulId}`).appendChild(li);
    isSetDone(arrays[i], document.getElementById(`${ulId}`));
  }
  const obj = stocks.pop();
  console.log(obj);
  obj.style.display = "none";
});

function isSetDone(array, ul) {
  const filteredArray = array.filter((item) => item.showCard);

  const targetSequence = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const values = filteredArray.map((item) => item.number);

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
        return true;
      }
    }
    return false;
  }

  if (containsSequence(values, targetSequence)) {
    window.alert("Set tamamlandı!");
    // array'den elemanları sil
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
      if (i + 1 == lisToRemove.length) {
        sadeceSonListeAcik(ul, array);
      }
      ul.removeChild(lisToRemove[i]);
    }

    const changeset = sets.pop();
    const img = document.createElement("img");
    img.src = "assets/spades/13.png";
    img.style.objectFit = "contain";
    img.style.height = "7rem";

    changeset.appendChild(img);
  }
}
