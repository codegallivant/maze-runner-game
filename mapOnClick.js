var mapButtonCL=document.createElement('button');
document.body.appendChild(mapButtonCL);
mapButtonCL.innerHTML="Show Map";
mapButtonCL.id="ShMap";
var mapButton=document.getElementById('ShMap');

mapButton.onclick=function() {
  console.log('map function started');
  pop('popDiv');

};
};
