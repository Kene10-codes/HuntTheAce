// Define the images apth and id
const cardObjectDefinitions = [
  {id:1, imagePath: "/images/card-KingHearts.png"},
  {id:2, imagePath: "/images/card-JackClubs.png"},
  {id:3, imagePath: "/images/card-QueenDiamons.png"},
  {id:4, imagePath: "/images/card-AceSpades.png"}
]

// Card Back Element Image Path
const cardBackImgPath = "/images/card-back-Blue.png";

const cardContainer = document.querySelector(".card-container");

// Creatte Card Func 
function createCard(cardItem) {
  const cardElem = createElem("div");
  const cardInner = createElem("div");
  const cardFrontInner = createElem("div");
  const cardBackInner = createElem("div");

  // Create img Elements
  const cardFrontImg = createElem("img");
  const cardBackImg = createElem("img");

  // Add Classes To Elements
  addClassToElement(cardElem, "card");

  // Add ID To Elements
  addIdToElement(cardElem, cardItem.id);

  // Add Class To Inner Element
  addClassToElement(cardInner, "card-inner");

  // Add Class To Front Card Element
  addClassToElement(cardFrontElem, "card-front");

  // Add Class To Back Card Element
  addClassToElement(cardBackElem, "card-back");

  // Add src to Back Element
  addSrcToImageElem(cardBackElem, cardBackImgPath)

  // Add Image Path To Card Front Element
  addSrcToImageElem(cardFrontElem, cardItem.imagePath);

  // Add Class To Back Image Element
  addSrcToImageElem(cardBackImg, "card-img");
  
  // Add Class To Front Image Element
  addSrcToImageElem(cardFrontImg, "card-img");

  // Add Child Front Element Image To Parent Front Parent
  addChildElem(cardFrontElem, cardFrontImg);

  // Add Child Back Element Image To Parent Back Parent
  addChildElem(cardBackElem, cardBackImg);

  
  // Add Child Front Element  To Inner Parent
  addChildElem(cardInner, cardFrontElem);

   // Add Child Back Element  To Inner Parent
  addChildElem(cardInner, cardBackElem);

  // Add Inner Eement To Card Element
  addChildElem(cardElem, cardInner);


}

// Reusable Create Elem Func
function createElem(elemType) {
  return document.createElement(elemType);
}

// Reusable Add Class To Element
function addClassToElement(elem, className) {
  return elem.add(className);
}

// Reusable Add ID To Element
function addIdToElement(elem, id) {
  return elem.id = id;
}

// Reusbale ADD Source (src) To Images
function addSrcToImageElem(imgElem, src) {
  return imgElem.src = src;
}

// Reusable Add Child Element To Parent
function addChildElem(parentElem, childElem) {
  return parentElem.appendChild(childElem);
}
























































