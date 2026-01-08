let reminders = [];

function addReminder() {
    const medicine = document.getElementById("medicine").value;
    const time = document.getElementById("time").value;

    if (medicine === "" || time === "") {
        alert("Please enter medicine name and time");
        return;
    }

    reminders.push({ medicine, time });
    displayReminders();
    setReminder(medicine, time);

    document.getElementById("medicine").value = "";
    document.getElementById("time").value = "";
}

function displayReminders() {
    const list = document.getElementById("reminderList");
    list.innerHTML = "";

    reminders.forEach((reminder, index) => {
        const li = document.createElement("li");
        li.textContent = `${reminder.medicine} at ${reminder.time}`;
        list.appendChild(li);
    });
}

function setReminder(medicine, time) {
    const now = new Date();
    const reminderTime = new Date();

    const [hours, minutes] = time.split(":");
    reminderTime.setHours(hours);
    reminderTime.setMinutes(minutes);
    reminderTime.setSeconds(0);

    let delay = reminderTime - now;
    if (delay < 0) {
        delay += 24 * 60 * 60 * 1000; // next day
    }

    setTimeout(() => {
        alert(`Time to take your medicine: ${medicine}`);
    }, delay);
}

