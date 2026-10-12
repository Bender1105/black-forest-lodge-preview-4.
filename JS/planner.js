
const tripForm = document.getElementById("tripDatesForm");
const checkInInput = document.getElementById("checkInDate");
const checkOutInput = document.getElementById("checkOutDate");

const plannerMessage = document.getElementById("plannerMessage");
const itineraryResults = document.getElementById("itineraryResults");
const itineraryDays = document.getElementById("itineraryDays");

const today = new Date();
const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0")
].join("-");

checkInInput.min = localToday;
checkOutInput.min = localToday;

// Load any activities previously saved in this browser
let tripActivities = [];

try {
  const savedActivities = JSON.parse(
    localStorage.getItem("bflTripActivities") || "[]"
  );

  if (Array.isArray(savedActivities)) {
    tripActivities = savedActivities;
  }
} catch (error) {
  tripActivities = [];
}

function saveActivities() {
  localStorage.setItem(
    "bflTripActivities",
    JSON.stringify(tripActivities)
  );
}

checkInInput.addEventListener("change", () => {
  checkOutInput.min = checkInInput.value || localToday;

  if (checkOutInput.value < checkOutInput.min) {
    checkOutInput.value = "";
  }
});

// Build the itinerary days
function createItinerary() {
  const checkIn = checkInInput.value;
  const checkOut = checkOutInput.value;

  if (!checkIn || !checkOut) {
    return;
  }

  const startDate = new Date(checkIn + "T12:00:00");
  const endDate = new Date(checkOut + "T12:00:00");

  if (
    !Number.isFinite(startDate.getTime()) ||
    !Number.isFinite(endDate.getTime()) ||
    endDate <= startDate
  ) {
    plannerMessage.textContent =
      "Your check-out date must be after your check-in date.";

    itineraryResults.hidden = true;
    return;
  }

  localStorage.setItem("bflCheckIn", checkIn);
  localStorage.setItem("bflCheckOut", checkOut);

  
// Update the trip overview
const arrivalDisplay = document.getElementById("tripArrival");
const departureDisplay = document.getElementById("tripDeparture");
const nightsDisplay = document.getElementById("tripNights");

const dateOptions = {
  month: "short",
  day: "numeric",
  year: "numeric"
};

arrivalDisplay.textContent =
  startDate.toLocaleDateString("en-US", dateOptions);

departureDisplay.textContent =
  endDate.toLocaleDateString("en-US", dateOptions);

// Calculate nights using calendar dates
const nights = Math.round(
  (Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  ) -
  Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  )) / 86400000
);

nightsDisplay.textContent =
  `${nights} ${nights === 1 ? "Night" : "Nights"}`;


  itineraryDays.innerHTML = "";

  const currentDate = new Date(startDate);
  let dayNumber = 1;

  while (currentDate < endDate) {
    const dateKey = [
      currentDate.getFullYear(),
      String(currentDate.getMonth() + 1).padStart(2, "0"),
      String(currentDate.getDate()).padStart(2, "0")
    ].join("-");

    const dateLabel = currentDate.toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        month: "long",
        day: "numeric"
      }
    );

    const dayCard = document.createElement("div");
    dayCard.className = "itinerary-day";

    const heading = document.createElement("h3");
    heading.textContent = `Day ${dayNumber} — ${dateLabel}`;

    const activityList = document.createElement("div");
    activityList.className = "planner-activity-list";

    // Show activities saved for this particular date
    function displayDayActivities() {
      activityList.innerHTML = "";

      const dayActivities = tripActivities
        .filter((activity) => activity.date === dateKey)
        .sort((a, b) =>
          (a.time || "99:99").localeCompare(b.time || "99:99")
        );

      if (dayActivities.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent =
          "Your adventure awaits! No activities planned yet.";
        activityList.appendChild(emptyMessage);
      }

      dayActivities.forEach((activity) => {
        const activityCard = document.createElement("div");
        activityCard.className = "planner-activity";

        const activityDetails = document.createElement("div");

        const activityTitle = document.createElement("strong");
        activityTitle.textContent = activity.name;
        activityDetails.appendChild(activityTitle);

        if (activity.time) {
          const timeLabel = document.createElement("p");
          timeLabel.textContent = new Date(
            "2000-01-01T" + activity.time
          ).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit"
          });
          activityDetails.appendChild(timeLabel);
        }

        if (activity.notes) {
          const notesLabel = document.createElement("p");
          notesLabel.textContent = activity.notes;
          activityDetails.appendChild(notesLabel);
        }


// EDIT ACTIVITY FEATURE

const editButton = document.createElement("button");
editButton.type = "button";
editButton.className = "planner-edit-button";
editButton.textContent = "Edit";

const editForm = document.createElement("form");
editForm.className = "planner-edit-form";
editForm.hidden = true;

// Activity name
const editNameLabel = document.createElement("label");
editNameLabel.textContent = "Activity Name";

const editNameInput = document.createElement("input");
editNameInput.type = "text";
editNameInput.value = activity.name;
editNameInput.required = true;
editNameLabel.appendChild(editNameInput);

// Activity time
const editTimeLabel = document.createElement("label");
editTimeLabel.textContent = "Time (Optional)";

const editTimeInput = document.createElement("input");
editTimeInput.type = "time";
editTimeInput.value = activity.time || "";
editTimeLabel.appendChild(editTimeInput);

// Activity notes

// MOVE ACTIVITY TO ANOTHER DAY

const editDayLabel = document.createElement("label");
editDayLabel.textContent = "Scheduled Day";

const editDaySelect = document.createElement("select");
editDaySelect.className = "planner-day-select";

// Get the current trip dates
const tripStart = new Date(
  checkInInput.value + "T12:00:00"
);

const tripEnd = new Date(
  checkOutInput.value + "T12:00:00"
);

const optionDate = new Date(tripStart);

while (optionDate < tripEnd) {
  const optionDateKey = [
    optionDate.getFullYear(),
    String(optionDate.getMonth() + 1).padStart(2, "0"),
    String(optionDate.getDate()).padStart(2, "0")
  ].join("-");

  const dayOption = document.createElement("option");
  dayOption.value = optionDateKey;

  dayOption.textContent = optionDate.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric"
    }
  );

  if (optionDateKey === activity.date) {
    dayOption.selected = true;
  }

  editDaySelect.appendChild(dayOption);
  optionDate.setDate(optionDate.getDate() + 1);
}

editDayLabel.appendChild(editDaySelect);


const editNotesLabel = document.createElement("label");
editNotesLabel.textContent = "Notes (Optional)";

const editNotesInput = document.createElement("textarea");
editNotesInput.rows = 3;
editNotesInput.value = activity.notes || "";
editNotesLabel.appendChild(editNotesInput);

// Save changes
const saveEditButton = document.createElement("button");
saveEditButton.type = "submit";
saveEditButton.className = "planner-button";
saveEditButton.textContent = "Save Changes";

// Cancel editing
const cancelEditButton = document.createElement("button");
cancelEditButton.type = "button";
cancelEditButton.className = "planner-cancel-button";
cancelEditButton.textContent = "Cancel";

const editActions = document.createElement("div");
editActions.className = "planner-form-actions";
editActions.append(saveEditButton, cancelEditButton);


editForm.append(
  editNameLabel,
  editDayLabel,
  editTimeLabel,
  editNotesLabel,
  editActions
);


// Show or hide the editing form
editButton.addEventListener("click", () => {
  editForm.hidden = !editForm.hidden;
});

// Cancel without saving
cancelEditButton.addEventListener("click", () => {
  editForm.hidden = true;
});

// Save edited activity
editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const updatedName = editNameInput.value.trim();

  if (!updatedName) {
    return;
  }


activity.name = updatedName;
activity.date = editDaySelect.value;
activity.time = editTimeInput.value;
activity.notes = editNotesInput.value.trim();

saveActivities();

// Refresh the itinerary so the activity
// appears under its newly selected day
createItinerary();

});


        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "planner-remove-button";
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", () => {
          tripActivities = tripActivities.filter(
            (item) => item.id !== activity.id
          );

          saveActivities();
          displayDayActivities();
        });


const activityButtons = document.createElement("div");
activityButtons.className = "planner-activity-actions";

activityButtons.append(editButton, removeButton);

activityCard.append(
  activityDetails,
  activityButtons
);

activityList.appendChild(activityCard);
activityList.appendChild(editForm);

      });
    }

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "planner-add-button";
    addButton.textContent = "+ Add My Own Activity";

    const activityForm = document.createElement("form");
    activityForm.className = "planner-activity-form";
    activityForm.hidden = true;

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Activity Name";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "e.g. Picnic in Cades Cove";
    nameInput.required = true;
    nameLabel.appendChild(nameInput);

    const timeLabel = document.createElement("label");
    timeLabel.textContent = "Time (Optional)";

    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeLabel.appendChild(timeInput);

    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes (Optional)";

    const notesInput = document.createElement("textarea");
    notesInput.rows = 3;
    notesInput.placeholder = "Bring a blanket and pack lunch...";
    notesLabel.appendChild(notesInput);

    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.className = "planner-button";
    saveButton.textContent = "Save Activity";

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "planner-cancel-button";
    cancelButton.textContent = "Cancel";

    const formActions = document.createElement("div");
    formActions.className = "planner-form-actions";
    formActions.append(saveButton, cancelButton);

    activityForm.append(
      nameLabel,
      timeLabel,
      notesLabel,
      formActions
    );

    addButton.addEventListener("click", () => {
      activityForm.hidden = !activityForm.hidden;

      if (!activityForm.hidden) {
        nameInput.focus();
      }
    });

    cancelButton.addEventListener("click", () => {
      activityForm.reset();
      activityForm.hidden = true;
    });

    activityForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const activityName = nameInput.value.trim();

      if (!activityName) {
        return;
      }

      const newActivity = {
        id: crypto.randomUUID(),
        date: dateKey,
        name: activityName,
        time: timeInput.value,
        notes: notesInput.value.trim(),
        custom: true
      };

      tripActivities.push(newActivity);
      saveActivities();

      activityForm.reset();
      activityForm.hidden = true;

      displayDayActivities();
    });

    dayCard.append(
      heading,
      activityList,
      addButton,
      activityForm
    );

    itineraryDays.appendChild(dayCard);

    displayDayActivities();

    currentDate.setDate(currentDate.getDate() + 1);
    dayNumber++;
  }

  itineraryResults.hidden = false;
  plannerMessage.textContent =
    "Your itinerary is ready! Start planning your adventures.";
}

tripForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createItinerary();
});

// Restore saved dates
const savedCheckIn = localStorage.getItem("bflCheckIn");
const savedCheckOut = localStorage.getItem("bflCheckOut");

if (savedCheckIn && savedCheckOut) {
  checkInInput.value = savedCheckIn;
  checkOutInput.value = savedCheckOut;
  checkOutInput.min = savedCheckIn;

  // Automatically restore the itinerary
  createItinerary();
}
