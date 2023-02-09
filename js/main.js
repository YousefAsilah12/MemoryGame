fillCards(10);

const cards = document.querySelectorAll(".card");
let array=[];
cards.forEach((card,i) => {
  card.addEventListener("click", ()=>{
    flipCard(card)
  })
  });

  async function flipCard(card) {
    debugger
     card.classList.toggle("flipped");
    array.push(card);
    if(array.length === 2){
      let bgColor1 = array[0].querySelector('.back').style.backgroundColor;
      let bgColor2 = array[1].querySelector('.back').style.backgroundColor;
      console.log(bgColor1);
      console.log(bgColor2);
      if (bgColor1 === bgColor2) {
         addClasses(array[0],array[1]);
        array=[];
      }
    else{
       removeClasses(array[0],array[1]);
      array=[];
    }
  }
  
}



function removeClasses(element1, element2) {
  setTimeout(function() {
    element1.classList.remove("flipped");
    element2.classList.remove("flipped");
  }, 500);
}

 function addClasses(c1,c2) {
  setTimeout(function() {

   c1.classList.add("flipped");
   c1.classList.add("locked");
   c2.classList.add("flipped");   
   c2.classList.add("locked");   
  }, 500);

}

function fillCards(num) {
  const container = document.querySelector(".container");
  debugger
  const colors = generateColors(num / 2);
  console.log(colors);
  for (var i = 1; i <= num / 2; i++) {
    const div = document.createElement("div")
    div.classList.add("card")
    const frontDiv = document.createElement("div")
    frontDiv.classList.add("front")
    const backDiv = document.createElement("div")
    backDiv.classList.add("back")
    backDiv.style.backgroundColor = colors[i - 1]
    div.appendChild(frontDiv)
    div.appendChild(backDiv)
    container.appendChild(div)
  }
  let count = 1
  for (var i = num / 2; i < num; i++) {
    const div = document.createElement("div")
    div.classList.add("card")
    const frontDiv = document.createElement("div")
    frontDiv.classList.add("front")
    const backDiv = document.createElement("div")
    backDiv.classList.add("back")
    backDiv.style.backgroundColor = colors[count - 1]
    div.appendChild(frontDiv)
    div.appendChild(backDiv)
    container.appendChild(div)
    count++;
  }
  scrambleChildren(container);

}

function generateColors(num) {
  let r;
  let g;
  let b;
  let array = []
  for (let i = 1; i <= num; i++) {

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    array.push(`rgb(${r}, ${g}, ${b})`)
  }

  return array

}




//function that scramble cards positions
function scrambleChildren(container) {
  let children = Array.from(container.children);
  children.sort(() => Math.random() - 0.5);
  children.forEach(child => container.appendChild(child));
}