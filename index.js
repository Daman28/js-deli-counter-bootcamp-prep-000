
function takeANumber(arr, name) {
  if(arr.length===0) {
    arr.unshift(name);
    return "Welcome, " + name +". You are number " + arr.length + " in line.";
  }
  else if(arr.length>0) {
    arr.push(name);
    return "Welcome, " + name +". You are number " + arr.length + " in line.";
  }
}

function nowServing(arr) {
  if(arr.length===0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " +arr.shift() + ".";
  }
}

function currentLine(arr) {
  if(arr.length===0) {
    return "The line is currently empty.";
  }
  else {
      return "The line is currently: 1. " + arr.slice(0,1) + ", " + "2. " +arr.slice(0,1) + "," + "3. " + arr.slice(2,1); 
    }
}