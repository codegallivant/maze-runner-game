var DefaultId=0;
var row=0;
play.onclick=function() {
  content.innerHTML='';

  var currentBid;
  var previousBid;
  var currentB;
  var previousB;
  var arrayE;
  var BrickLeftPos=0;
  for(r=0;r<10;r++) {
    for(h=0;h<NoC;h++) {
      console.log("array:"+arrays[r]);
      console.log("row:"+row);
      console.log("r:"+r);
      console.log("h:"+h);
      arrayE = arrays[row][h];
      content.appendChild(arrayE);
      arrayE.id=h+DefaultId;

      arrayE.className="block BBrick row"+row.toString();

      console.log("arrayE:"+arrayE);
      currentBid=document.getElementById(h+DefaultId).id;
      previousBid=parseFloat(document.getElementById(h+DefaultId).id)-1;
      console.log('currentID:'+currentBid);
      console.log('previousID:'+previousBid);
      currentB=document.getElementById(currentBid);
      previousB=document.getElementById(previousBid+1);
      console.log('currentE:'+currentB);
      console.log('previousE:'+previousB);
      currentB.style.marginLeft=(h+DefaultId)*43;
      var Row0leftPos=currentB.style.left;
      document.getElementById(h+DefaultId).style.position="absolute";
      document.getElementById(h+DefaultId).style.borderBottom="0px";
      document.getElementById(h+DefaultId).style.left=(-1*BrickLeftPos).toString()+"px";
      /*
      document.getElementById(h+DefaultId).style.left= parseFloat(previousB.style.left)+(13*40)+"px";
      document.getElementById(h+DefaultId).style.top= parseFloat(previousB.style.top)-40+"px";

      if(row!==0) {
        currentB.style.left=(h*90)+(rowArray[row][h].style.left);
        currentB.style.top=200+(row*40)+"px";
      }
      else{
        currentB.style.top="200px";
      }

      var elem = document.getElementsByClassName(("row"+row.toString()));
      var OrigPosLeft = getComputedStyle( elem[h], null).getPropertyValue("left");
      var PosLeft=parseInt(OrigPosLeft)-90+"px";

      var blocks=document.getElementsByClassName('block');
      window["OrigPosLeft"+row]=currentB.style.left;
      //blocks[arrayE.id].style.left=(parseFloat(currentB.style.left)-(h*90))+"px".toString();
      blocks[arrayE.id].style.left=(parseFloat(window["OrigPosLeft"+row])-(h*90))+"px".toString();
*/
      console.log('Element added');
    }
    console.log('Row added');
    row++;
    BrickLeftPos=(row*40*(NoC+1))+(2*row);
    content.innerHTML+="<br>";
    DefaultId+=NoC;
    //rows.style.left=h*90+"px";
  }




  //Player commands
  var playerBody= document.createElement('div');
  playerBody.className="player-body";
  var PBodyC=document.getElementsByClassName("player-body")
  PBodyC.textContent="G";
  var PlayerPosDefault=document.getElementById(116);
  PlayerPosDefault.classList.remove("BBrick");
  PlayerPosDefault.className="player-body row9";
  var prevPlaceId=116;
  var prevPlace=document.getElementById(prevPlaceId);


  //Maze obstacles
  var UBBrick = [
    document.getElementById(81),
    document.getElementById(82),
    document.getElementById(71),
    document.getElementById(61)
  ];
  for(i=0 ; i<UBBrick.length ; i++) {
      UBBrick[i].classList.remove("BBrick");
      UBBrick[i].className+=" UBBrick";
      console.log('UBBrick added');
  }
