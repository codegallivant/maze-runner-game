var MNoC=14;

var Marrays=[];
for (a = 0; a < 10; a++) {
    window["Marray" + a]=[];
    Marrays.push(window["Marray"+a]);
}

for (v = 0; v < NoC; v++) {
    window["Ma" + v]=document.createElement('div');
    window["Mb" + v]=document.createElement('div');
    window["Mc" + v]=document.createElement('div');
    window["Md" + v]=document.createElement('div');
    window["Me" + v]=document.createElement('div');
    window["Mf" + v]=document.createElement('div');
    window["Mg" + v]=document.createElement('div');
    window["Mh" + v]=document.createElement('div');
    window["Mi" + v]=document.createElement('div');
    window["Mj" + v]=document.createElement('div');
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
  Marray0[index]=window["a"+index];
  Marray1[index]=window["b"+index];
  Marray2[index]=window["c"+index];
  Marray3[index]=window["d"+index];
  Marray4[index]=window["e"+index];
  Marray5[index]=window["f"+index];
  Marray6[index]=window["g"+index];
  Marray7[index]=window["h"+index];
  Marray8[index]=window["i"+index];
  Marray9[index]=window["j"+index];
}
