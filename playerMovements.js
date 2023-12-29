document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
        if((PlayerPosDefault.id % NoC) !== 0) {
          console.log('first true');
          console.log(PlayerPosDefault.id-1);
          if(document.getElementById(PlayerPosDefault.id-1).classList.contains('UBBrick')) {}
          else {
            prevPlace.classList.remove("player-body");
            prevPlace.className+=" BBrick";
            prevPlaceId--;
            PlayerPosDefault=document.getElementById(prevPlaceId);
            PlayerPosDefault.classList.add("player-body");
            PlayerPosDefault.classList.remove("BBrick");
            prevPlace=document.getElementById(prevPlaceId);
            console.log(prevPlaceId);
            console.log(prevPlace);
            console.log(PlayerPosDefault);

          }
        }
      break;

      case 39:
          //alert('right');
          if((PlayerPosDefault.id % NoC)!==(NoC-1)) {
            console.log('first true');
            console.log(parseFloat(PlayerPosDefault.id)+1);
            if(document.getElementById(parseFloat(PlayerPosDefault.id)+1).classList.contains('UBBrick')) {}
            else {
              prevPlace.classList.remove("player-body");
              prevPlace.className+=" BBrick";
              prevPlaceId++;
              PlayerPosDefault=document.getElementById(prevPlaceId);
              PlayerPosDefault.className+=" player-body";
              PlayerPosDefault.classList.remove("BBrick");
              prevPlace=document.getElementById(prevPlaceId);
              console.log(prevPlaceId);
              console.log(prevPlace);
              console.log(PlayerPosDefault);

            }
          }
      break;

      case 38:
          //alert('up');
          if(PlayerPosDefault.classList.contains("row0")) {}
          else{
            if(document.getElementById(parseFloat(PlayerPosDefault.id)-NoC).classList.contains("UBBrick")) {}
            else{
              prevPlace.classList.remove("player-body");
              prevPlace.className+=" BBrick";
              prevPlaceId-=NoC;
              PlayerPosDefault=document.getElementById(prevPlaceId);
              PlayerPosDefault.className+=" player-body";
              PlayerPosDefault.classList.remove("BBrick");
              prevPlace=document.getElementById(prevPlaceId);
              console.log(prevPlaceId);
              console.log(prevPlace);
              console.log(PlayerPosDefault);

            }
          }
      break;

      case 40:
          //alert('down');
          if(PlayerPosDefault.classList.contains("row9")) {}
          else {
            if(document.getElementById(parseFloat(PlayerPosDefault.id)+NoC).classList.contains("UBBrick")) {}
            else{
              prevPlace.classList.remove("player-body");
              prevPlace.className+=" BBrick";
              prevPlaceId+=NoC;
              PlayerPosDefault=document.getElementById(prevPlaceId);
              PlayerPosDefault.className+=" player-body";
              PlayerPosDefault.classList.remove("BBrick");
              prevPlace=document.getElementById(prevPlaceId);
              console.log(prevPlaceId);
              console.log(prevPlace);
              console.log(PlayerPosDefault);
            }
          }
          break;
  }


};
