//document.querySelector(".button-p2-1").innerHTML += BackNextButtonUI("Back");
//document.querySelector(".button-p2-2").innerHTML += BackNextButtonUI("Next");
document.querySelector(".startbutton").innerHTML += StartButtonUI("Start");


//Page 2
document.querySelector(".header-p2").innerHTML += HeaderUI("WHAT IS FOOD WASTE?");

document.querySelector(".button-p2-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".button-p2-2").innerHTML += BackNextButtonUI("Next");

document.querySelector(".textbubble").innerHTML += TextBubbleUI("More than 30% of the landfill is taken up by compostable organics and food scraps");
document.querySelector(".textbubble").innerHTML += TextBubbleUI();

document.querySelector(".textbubble").innerHTML += textBubbleLightUI("More than 30% of the landfill is taken up by compostable organics and food scraps");
document.querySelector(".textbubble").innerHTML += textBubbleLightUI();


//page 3
document.querySelector(".HeaderPage3-1").innerHTML += HeaderUI("THE COST OF FOOD WASTE");
document.querySelector(".textBubblePage3-1").innerHTML += textBubbleLightUI("Food waste negatively contributes to resource costs.", "245px", "#F5D9B7");
document.querySelector(".textBubblePage3-2").innerHTML += textBubbleLightUI("RESOURCE COST", "204px", "#FBAD81");

// page 9
document.querySelector(".header-p9").innerHTML += HeaderUI("WHAT IS FOOD WASTE?");
document.querySelector("").innerHTML += textBubbleLightUI("THE COST OF FOOD WASTE");


function NextPage(page){
  document.querySelector("#show").style.display = "none";
  document.querySelector("#show").id = "";
  document.querySelector(page).style.display = "flex";
  document.querySelector(page).id = "show";
}


