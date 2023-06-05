let x = 100000;

function getTimeStamp() {
  let dateData = new Date();
  let time =
    dateData.getHours() +
    ":" +
    dateData.getMinutes() +
    ":" +
    dateData.getSeconds();

  return time;
}

let start;
let end;
for (let i = 0; i < x; i++) {
  console.log(i);

  if (i === 0) {
    start = getTimeStamp();
    console.log("Start: " + start);
  } else if (i === x - 1) {
    end = getTimeStamp();
    console.log("Start: " + start);
    console.log("End: " + end);
  }
}
