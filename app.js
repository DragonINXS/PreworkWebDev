// Rover Object Goes Here
// ======================

var Rover = {
  direction: "N",
  x: "0",
  y: "0",
  travelLog: []
};

// ======================

function turnLeft(Rover) {
  switch (Rover.direction) {
    case 'N':
      Rover.direction = "W";
      break;
    case 'E':
      Rover.direction = "N";
      break;    
    case 'S':
      Rover.direction = "E";
      break;
    case 'W':
      Rover.direction = "S";  
      break;
  }
  console.log("turnLeft was called!");
  console.log("Currently facing: " + Rover.direction);
  Rover.travelLog.push("[" + Rover.x + ", " + Rover.y + "]");
}

function turnRight(Rover) {
  switch (Rover.direction) {
    case 'N':
      Rover.direction = "E";
      break;
    case 'E':
      Rover.direction = "S";
      break;    
    case 'S':
      Rover.direction = "W";
      break;
    case 'W':
      Rover.direction = "N";  
      break;
  }
  console.log("turnRight was called!");
  console.log("Currently facing: " + Rover.direction);
  Rover.travelLog.push("[" + Rover.x + ", " + Rover.y + "]");
}

function moveForward(Rover) {
  switch (Rover.direction) {
    case 'N':
      if (Rover.y == 0)
        console.log("INVALID: OFF GRID");
      else 
        Rover.y = (Rover.y * 1 - 1);
      break;
    case 'E':
      if (Rover.x == 9)
        console.log("INVALID: OFF GRID");
      else
        Rover.x = (Rover.x * 1 + 1);
      break;    
    case 'S':
      if (Rover.y == 9)
        console.log("INVALID: OFF GRID");
      else
        Rover.y = (Rover.y * 1 + 1);
      break;
    case 'W':
      if (Rover.x == 0)
        console.log("INVALID: OFF GRID");
      else
        Rover.x = (Rover.x*1 - 1);  
      break;
  }
  console.log("moveForward was called!")
  console.log("Currently located: [" + Rover.x + ", " + Rover.y + "]");
  Rover.travelLog.push("[" + Rover.x + ", " + Rover.y + "]");
}

function moveBackward(Rover) {
  switch (Rover.direction) {
    case 'N':
      if (Rover.y == 9)
        console.log("INVALID: OFF GRID");
      else 
        Rover.y = (Rover.y * 1 + 1);
      break;
    case 'E':
      if (Rover.x == 0)
        console.log("INVALID: OFF GRID");
      else
        Rover.x = (Rover.x * 1 - 1);
      break;    
    case 'S':
      if (Rover.y == 0)
        console.log("INVALID: OFF GRID");
      else
        Rover.y = (Rover.y * 1 - 1);
      break;
    case 'W':
      if (Rover.x == 9)
        console.log("INVALID: OFF GRID");
      else
        Rover.x = (Rover.x*1 + 1);  
      break;
  }
  console.log("moveBackward was called!")
  console.log("Currently located: [" + Rover.x + ", " + Rover.y + "]");
  Rover.travelLog.push("[" + Rover.x + ", " + Rover.y + "]");
}

function command(input) { 
  for (i = 0; i < input.length; i++) {
    if (input[i] !== "f" && input[i] !== "b" && input[i] !== "r" && input[i] !== "l") {
      return "Invalid input. Commands are: (f)orward, (b)ackward, (r)ight, (l)eft: "
    }
  }
  for (i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "f":
        moveForward(Rover);
        break;
      case "b":
        moveBackward(Rover);
        break;
      case "r":
        turnRight(Rover);
        break;
      case "l":
        turnLeft(Rover);
        break;
      }
  }  
}

