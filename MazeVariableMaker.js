var NoC=14;

var play=document.getElementById("play");
var ldr=document.getElementById('ldr');
var how=document.getElementById('how');
var content=document.getElementById('content');

var arrays=[];
for (var a = 0; a < 10; a++) {
    window["array" + a]=[];
    arrays.push(window["array"+a]);
}

for (var v = 0; v < NoC; v++) {
    window["a" + v]=document.createElement('div');
    window["b" + v]=document.createElement('div');
    window["c" + v]=document.createElement('div');
    window["d" + v]=document.createElement('div');
    window["e" + v]=document.createElement('div');
    window["f" + v]=document.createElement('div');
    window["g" + v]=document.createElement('div');
    window["h" + v]=document.createElement('div');
    window["i" + v]=document.createElement('div');
    window["j" + v]=document.createElement('div');
}
  /*
  var letterOfvar=[
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z"];
  */
for(index=0;index<NoC;index++) {
  array0[index]=window["a"+index];
  array1[index]=window["b"+index];
  array2[index]=window["c"+index];
  array3[index]=window["d"+index];
  array4[index]=window["e"+index];
  array5[index]=window["f"+index];
  array6[index]=window["g"+index];
  array7[index]=window["h"+index];
  array8[index]=window["i"+index];
  array9[index]=window["j"+index];
}
var rowArray=[];
for(cssdefPosLeft=0;cssdefPosLeft<10;cssdefPosLeft++) {
  window["row"+cssdefPosLeft]=document.getElementsByClassName("row"+cssdefPosLeft.toString());
  rowArray.push(window["row"+cssdefPosLeft]);
}
