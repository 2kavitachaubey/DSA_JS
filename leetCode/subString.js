let s = "pwwjkw";
let newString = "";
let oldString = "";

if (s.length === 0) return 0;
if (s.length === 1) return 1;
if (s.length === 2 && s.charAt(0) !== s.charAt(1)) return 2;

for (let i = 0; i < s.length; i++) {
  let isduplicate = false;
  for (let j = 0; j < oldString.length; j++) {
    if (oldString.charAt(j) === s.charAt(i)) {
      isduplicate = true;
      break;
    }
  }

  if (!isduplicate) {
    oldString += s.charAt(i);
  } else {
    if (oldString.length > newString.length) {
      newString = oldString;
    }
    oldString = "" + s.charAt(i); // Reset properly to current character only
  }
}

if (oldString.length > newString.length) {
  newString = oldString;
}

console.log(newString);
