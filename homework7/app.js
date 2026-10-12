console.log("Hello World!");

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

function daysUntilDeadline(submissionDate) {
    let currentDate = new Date();
    let dueDate = new Date(submissionDate);

    let utc1 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    let utc2 = 
	Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());

    let msLeft = utc2 - utc1;
    let daysLeft = msLeft / (1000 * 60 * 60 * 24);

    console.log("Ms left (rounded to day): " + msLeft);
    console.log("Days left: " + daysLeft);
    
    if (daysLeft <= 0) {
        return 0;
    } else {
        return Math.floor(daysLeft);
    }
}

function resumeButtonClicked() {
    if (hasDownloadedResume == false) {
        hasDownloadedResume = true;

        setTimeout(() => {
        alert("Your resume has downloaded successfully!");
        }, 2000);        
    }
}

function modifyGreetingBasedOnTime(hour) {
    console.log("Current hour: " + hour);
    
    if (hour < 6) {
        return "Somebody's an early bird!";
    } else if (hour < 12) {
        return "Good morning!";
    } else if (hour < 18) {
        return "Good evening!";
    } else {
        return "Good night!";
    }
}

const resumeButton = document.querySelector(".resume-button");
const greeting = document.querySelector("#greeting");
const countdown = document.querySelector("#countdown");
const date = new Date();

let hasDownloadedResume = false;

greeting.textContent = showGreeting("Nicole");
greeting.textContent = modifyGreetingBasedOnTime(date.getHours());
countdown.textContent = daysUntilDeadline("11/30/2026");

resumeButton.addEventListener("click", (event) => {
    resumeButtonClicked();
});

