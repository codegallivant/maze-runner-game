var popupDiv=document.getElementById('popup');


var MDefaultId=1000;
var Mrow=0;

var McurrentBid;
var MpreviousBid;
var McurrentB;
var MpreviousB;
var MarrayE;
var MBrickLeftPos=0;
for(Mr=0;Mr<10;Mr++) {
  for(Mh=0;Mh<MNoC;Mh++) {
    console.log("array:"+Marrays[Mr]);
    console.log("Mrow:"+Mrow);
    console.log("Mr:"+Mr);
    console.log("Mh:"+Mh);
    MarrayE = Marrays[Mrow][Mh];
    popupDiv.appendChild(MarrayE);
    MarrayE.id=Mh+MDefaultId;

    MarrayE.className="block BBrick Mrow"+Mrow.toString();

    console.log("MarrayE:"+MarrayE);
    McurrentBid=document.getElementById(Mh+MDefaultId).id;
    MpreviousBid=parseFloat(document.getElementById(Mh+MDefaultId).id)-1;
    console.log('McurrentID:'+McurrentBid);
    console.log('MpreviousID:'+MpreviousBid);
    McurrentB=document.getElementById(McurrentBid);
    MpreviousB=document.getElementById(MpreviousBid+1);
    console.log('McurrentE:'+McurrentB);
    console.log('MpreviousE:'+MpreviousB);
    McurrentB.style.marginLeft=(Mh+MDefaultId)*43;
    var MRow0leftPos=currentB.style.left;
    document.getElementById(Mh+MDefaultId).style.position="absolute";
    document.getElementById(Mh+MDefaultId).style.borderBottom="0px";
    document.getElementById(Mh+MDefaultId).style.left=(-1*MBrickLeftPos).toString()+"px";
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
  Mrow++;
  MBrickLeftPos=(row*40*(NoC+1))+(2*row);
  popupDiv.innerHTML+="<br>";
  MDefaultId+=MNoC;
  //rows.style.left=h*90+"px";
}
