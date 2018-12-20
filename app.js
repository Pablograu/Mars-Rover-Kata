// Rover Object Goes Here
// ======================
var rover = {

  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
  }
// ======================


function turnLeft(rover){
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("You just turned left. ", "Now you're facing " + rover.direction);
  console.log("Currently you are in the coordinates " + rover.x,rover.y);
}

function turnRight(rover){
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("You just turned right. ", "Now you're facing " + rover.direction);
  console.log("Currently you are in the coordinates " + rover.x,rover.y);
}

function moveForward(rover){
 if(rover.direction === "N"){
   rover.y--;
 }else if(rover.direction === "S"){
   rover.y++;
 }else if(rover.direction === "E"){
   rover.x++;
 }else if(rover.direction === "W"){
   rover.x--;
 }
  rover.travelLog.push(rover.x +" - " + rover.y);
  console.log("You just moved forward. ", "Now you're facing " + rover.direction);
  console.log("Currently you are in the coordinates " + rover.x,rover.y);
}

function moveBackwards(rover){
  if(rover.direction === "N"){
    rover.y++;
  }else if(rover.direction === "S"){
    rover.y--;
  }else if(rover.direction === "E"){
    rover.x--;
  }else if(rover.direction === "W"){
    rover.x++;
  }
   rover.travelLog.push(rover.x +" - " + rover.y);
   console.log("You just moved backwards. ", "Now you're facing " + rover.direction);
   console.log("Currently you are in the coordinates " + rover.x,rover.y);
 }

function commands(str){
  for(i=0; i<str.length; i++){
    if (str[i]!== "f" && str[i] !== "r" && str[i] !== "l" && str[i]!=="b"){
      console.log("invalid command. You can only use (f)orward, (l)eft, (b)ack or (r)ight");
     }
     switch(str[i]){

      case 'f':
      moveForward(rover);
      break;

      case 'l':
      turnLeft(rover);
      break;

      case 'r':
      turnRight(rover);
      break;

      case 'b':
      moveBackwards(rover);
      break;
    }
  } 
  console.log("Now you're facing " + rover.direction);
  console.log("Currently you are in the coordinates " + rover.x,rover.y);
}
