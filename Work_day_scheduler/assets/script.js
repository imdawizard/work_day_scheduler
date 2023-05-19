$(function () {
 //delcaring global varibles
  var divElements = document.querySelectorAll("div[id]");
  let saveBtns = document.querySelectorAll(".btn");

  //loop to add a querySelector to each save button
  saveBtns.forEach((saveButton) => {
    const timeBlockId = saveButton.parentNode.id;
    const textAreaEl = document.querySelector(`#input-${timeBlockId}`);
    const userInput = localStorage.getItem(timeBlockId);
    //checks for previous input in local storage
    if (userInput) {
      textAreaEl.value = userInput;
    }
    //updates local storage if user inputs additional info
    saveButton.addEventListener("click", function() {
      const userInput = textAreaEl.value;
      localStorage.setItem(timeBlockId, userInput);
    });
  });
  
//changes color of parent div based off the current time, past=gray, present=red, future=green
  var time = dayjs().format("HH");
  console.log(time);
  divElements.forEach((divElement) => {
    if (parseInt(divElement.id) < time) {
      divElement.classList.add("past");
    } else if (parseInt(divElement.id) == time) {
      divElement.classList.add("present");
    } else {
      divElement.classList.add("future");
    }
  }
  )

//gets current time from day.js, Then displays that and the date to screen
  const currentTimeElement = document.getElementById("currentDay");
setInterval(() => {
  const currentTime = dayjs().format("ddd, MMMM D YYYY, h:mm:ss A");
  currentTimeElement.innerHTML = `Current date and time: ${currentTime}`;
}, 1000);




});
