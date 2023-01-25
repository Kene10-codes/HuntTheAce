// Define the images apth and id
const cardObjectDefinitions = [
  { id: 1, imagePath: "/images/card-KingHearts.png" },
  { id: 2, imagePath: "/images/card-JackClubs.png" },
  { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "/images/card-AceSpades.png" },
];

// Card Back Element Image Path
const cardBackImgPath = "/images/card-back-Blue.png";

const cardContainerElem = document.querySelector(".card-container");
const playGameButton = document.getElementById("playGame");

const collapsedGridAreaTemplate = '"a a" "a a"';
const cardCollectionClassName = ".card-pos-a";

const numCards = cardObjectDefinitions.length;
const cardPositions = [];

let cards = [];

// Inovkr Load GAME
loadGame();

// Laod Game Func
function loadGame() {
  createCards();

  cards = document.querySelectorAll(".card");
  // Start the Game on Button Click
  playGameButton.addEventListener("click", () => startGame());
}

function startGame() {
  startRound();
}

function startRound() {
  initializeNewGame();
  collectCards();
  // flipCards(true);
  shuffleCards();
}

function initializeNewGame() {
  initializeNewRound();
}

function initializeNewRound() {}

// Create Cards Dynamically Func
function createCards() {
  cardObjectDefinitions.forEach((cardItem) => {
    createCard(cardItem);
  });
}

function collectCards() {
  transformGridArea(collapsedGridAreaTemplate);
  addCardToGridCell(cardCollectionClassName);
}

// Transform Grid Area Func
function transformGridArea(areas) {
  cardContainerElem.style.gridTemplateAreas = areas;
}

// Add All Cards To Designated Card Declared Above
function addCardsToGridAreaCellPosition(cellPositionClassName) {
  const cellPositionElem = document.querySelector(cellPositionClassName);

  cards.forEach((card, index) => {
    addChildElem(cellPositionElem, card);
  });
}

// Flip Card
function flipCard(card, flipToBack) {
  const cardInnerElem = card.firstChild;
  if (flipToBack && !cardInnerElem.classList.contains) {
    cardInnerElem.classList.add("flip-it");
  } else if (innerCard.classList.contains("flip-it")) {
    cardInnerElem.classList.remove("flip-it");
  }
}

// Flip Cards Func
function flipCards(flipToBack) {
  cards.forEach((card, index) => {
    setTimeout(() => flipCard(card, flipToBack), index * 100);
  });
}

// Shuffle Cards
function shuffleCards() {
  const id = setInterval(shuffle, 12);
  let shuffleCount = 0;
  if (shuffleCards == 400) {
    // Invoke Randomize Card Position
    randomizeCardsPosition();
    // Stop/Clear setIntervalhh
    clearInterval(id);
    dealCards();
  } else {
    shuffleCount++;
  }
}

// Randomze Card Position Fun
function randomizeCardsPosition() {
  let random1 = Math.floor(Math.random * numCards) + 1;
  let random2 = Math.floor(Math.random * numCards) + 1;

  const temp = cardPositions[random1 - 1];
  cardPositions[random1 - 1] = cardPositions[random2 - 1];
  cardPositions[random2 - 1] = cardPositions[random1 - 1];

  cardPositions[random2 - 1] = temp;
}

function dealCards() {
  addCardsToAppriopriateCell();
  const areasTemplate = returnGridAreasMappedToCardPosition();

  transformGridArea(areasTemplate);
}

function returnGridAreasMappedToCardPosition() {
  let firstPath = "";
  let secondPath = "";
  let areas = "";

  cards.forEach((card, index) => {
    if (cardPositions[index] == 1) {
      areas = areas + "a";
    } else if (cardPositions[index] == 2) {
      areas = areas + "b";
    } else if (cardPositions[index] == 3) {
      areas = areas + "c";
    } else if (cardPositions[index] == 4) {
      areas = areas + "d";
    }
    if (index == 1) {
      firstPath = areas.substring(0, areas.length - 1);
      areas = "";
    } else if (index == 3) {
      secondPath = areas.substring(0, areas.length - 1);
    }

    return `"${firstPath}" "${secondPath}";`;
  });
}

/* <div class="card">
<div class="card-inner">
    <div class="card-front">
        <img src="/images/card-JackClubs.png" alt="" class="card-img">
    </div>
    <div class="card-back">
        <img src="/images/card-back-Blue.png" alt="" class="card-img">
    </div>
</div>
</div> */

function addCardsToAppriopriateCell() {
  cards.forEarch((card) => {
    addCardToGridCell(card);
  });
}

// Creatte Card Func
function createCard(cardItem) {
  const cardElem = createElem("div");
  const cardInnerElem = createElem("div");
  const cardFrontElem = createElem("div");
  const cardBackElem = createElem("div");

  // Create img Elements
  const cardFrontImg = createElem("img");
  const cardBackImg = createElem("img");

  // Add Classes To Elements
  addClassToElement(cardElem, "card");

  // Add ID To Elements
  addIdToElement(cardElem, cardItem.id);

  // Add Class To Inner Element
  addClassToElement(cardInnerElem, "card-inner");

  // Add Class To Front Card Element
  addClassToElement(cardFrontElem, "card-front");

  // Add Class To Back Card Element
  addClassToElement(cardBackElem, "card-back");

  // Add src to Back Element
  addSrcToImageElem(cardBackImg, cardBackImgPath);

  // Add Image Path To Card Front Element
  addSrcToImageElem(cardFrontImg, cardItem.imagePath);

  // Add Class To Back Image Element
  addClassToElement(cardFrontImg, "card-img");

  // Add Class To Front Image Element
  addClassToElement(cardBackImg, "card-img");

  // Add Child Front Element Image To Parent Front Parent
  addChildElem(cardFrontElem, cardFrontImg);

  // Add Child Back Element Image To Parent Back Parent
  addChildElem(cardBackElem, cardBackImg);

  // Add Child Front Element  To Inner Parent
  addChildElem(cardInnerElem, cardFrontElem);

  // Add Child Back Element  To Inner Parent
  addChildElem(cardInnerElem, cardBackElem);

  // Add Inner Eement To Card Element
  addChildElem(cardElem, cardInnerElem);

  // Add The Cards To Grid Cells
  addCardToGridCell(cardElem);

  // Invoke the initialize Cards Positions
  initializeCardsPositions(cardElem);
}

// Initialize Card Positions Func
function initializeCardsPositions(card) {
  cardPositions.push(card.id);
}
// Reusable Create Elem Func
function createElem(elemType) {
  return document.createElement(elemType);
}

// Reusable Add Class To Element
function addClassToElement(elem, className) {
  return elem.classList.add(className);
}

// Reusable Add ID To Element
function addIdToElement(elem, id) {
  return (elem.id = id);
}

// Reusbale ADD Source (src) To Images
function addSrcToImageElem(imgElem, src) {
  return (imgElem.src = src);
}

// Reusable Add Child Element To Parent
function addChildElem(parentElem, childElem) {
  return parentElem.appendChild(childElem);
}

// Add Card To Grid Cell
function addCardToGridCell(card) {
  const cardPositionClssName = mapCardIdToGridCell(card);
  const cardPosElem = document.querySelector(cardPositionClssName);

  addChildElem(cardPosElem, card);
}

// Map Card Id To Grid Cell and Return It's ClassName
function mapCardIdToGridCell(card) {
  if (card.id == 1) {
    return ".card-pos-a";
  } else if (card.id == 2) {
    return ".card-pos-b";
  } else if (card.id == 3) {
    return ".card-pos-c";
  } else if (card.id == 4) {
    return ".card-pos-d";
  }
}
