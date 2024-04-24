 

 let colorContainer= document.getElementById("colorContainer")

 colorContainer.style.backgroundColor="Black";

 function changeTheColor(){
    const clr=["Red","Green","Blue","Orange","Yellow","Purple","DeepPink","DarkKhaki","Fuchsia","GreenYellow"];
  GetTheColor=colorContainer.style.backgroundColor=clr[Math.floor(Math.random()*10)];
  console.log(GetTheColor);

return GetTheColor;
 }