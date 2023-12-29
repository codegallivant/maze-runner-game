//MAIN.HTML IS MORE UPDATED as of 11:02 10/20/2017
//currentBrick, previousBrick, currentBrickid, PreviousBrickId, ArrayElement, BrickLeftPosition, ForLoopRowVar, ForLoopBrickVar
function BrickMaker(ArrayName, BrickDefaultId, toBeAppendedOn, NoOfColVar, SpecifiedClass, ExtraSpace, ExtraDefaultIdNo, BrickLeftPosition, BrickStyleLeft, STOPVarFeed, currentBrick, previousBrick, currentBrickid, previousBrickId, ArrayElement, BrickRow, BrickStyleTop) {
    BrickLeftPosition=0;
    BrickRow=0;
    BrickStyleTop=200+(Mrow*48)+"px";
      for(ForLoopRowVar=0;ForLoopRowVar<10;ForLoopRowVar++) {
          for(ForLoopBrickVar=0;ForLoopBrickVar<NoOfColVar;ForLoopBrickVar++) {
            console.log("array:"+ArrayName[ForLoopRowVar]);
            console.log("BrickRow:"+BrickRow);
            console.log("ForLoopRowVar:"+ForLoopRowVar);
            console.log("ForLoopBrickVar:"+ForLoopBrickVar);
            //MarrayE = Marrays[Mrow][Mh];
            ArrayElement=ArrayName[BrickRow][ForLoopBrickVar];
            toBeAppendedOn.appendChild(MarrayE);
            ArrayElement.id=ForLoopBrickVar+BrickDefaultId;

            ArrayElement.className="Block "+(SpecifiedClass.toString())+" row"+BrickRow.toString();

            console.log("ArrayElement:"+ArrayElement);

            currentBrickid=document.getElementById(ForLoopBrickVar+BrickDefaultId).id;
            previousBrickId=parseFloat(document.getElementById(ForLoopBrickVar+BrickDefaultId).id)-1;
            console.log('currentID:'+currentBrickid);
            console.log('previousID:'+previousBrickid);

            currentBrick=document.getElementById(currentBrickid);
            previousBrick=document.getElementById(previousBrickId+1);
            console.log('currentElement:'+currentBrick);
            console.log('previousElement:'+previousBrick);

            currentBrick.style.marginLeft=(ForLoopBrickVar+(BrickDefaultId-(BrickDefaultId-ExtraDefaultIdNo)))*43;

            document.getElementById(ForLoopBrickVar+BrickDefaultId).style.position="absolute";
            document.getElementById(ForLoopBrickVar+BrickDefaultId).style.borderBottom="0px";
            document.getElementById(ForLoopBrickVar+BrickDefaultId).style.top=BrickStyleTop;
            document.getElementById(ForLoopBrickVar+BrickDefaultId).style.left=BrickStyleLeft;
            console.log('Element added');
          }
          console.log('Row added');
          BrickRow++;
          MBrickLeftPosition=(BrickRow*40*(NoOfColVar+1))+(2*BrickRow)-ExtraSpace;
          toBeAppendedOn.innerHTML+="<br>";
          BrickDefaultId+=NoOfColVar;
          //rows.style.left=h*90+"px";
        }
}
BrickMaker(Marrays, 1000, content, MNoC, "MapB", (43*MNoC)-43, 1000, MBrickLeftPos, (-1*MBrickLeftPos).toString()+"px");
