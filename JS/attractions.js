
/* BLACK FOREST LODGE ATTRACTION DIRECTORY */


const attractions = [
  // DINING — STOTTS FAMILY FAVORITES
  {
    name: "Pottery House Café & Grille",
    category: "Dining",
    location: "Pigeon Forge",
    favorite: true,
    description: "A charming café near the Old Mill, known for fresh-baked breads, creative Southern dishes, and a lovely garden setting.",
    website: "https://www.old-mill.com/pottery-house-cafe-grill"
  },
  {
    name: "Big Daddy's Pizzeria",
    category: "Dining",
    location: "Sevierville, Pigeon Forge & Gatlinburg",
    favorite: true,
    description: "Delicious wood-fired pizzas made with handcrafted dough and fresh ingredients.",
    website: "https://www.bigdaddyspizzeria.net/"
  },
  {
    name: "Muchacho Alegre Mexican Restaurant",
    category: "Dining",
    location: "Sevierville",
    favorite: true,
    description: "A welcoming Mexican restaurant for flavorful favorites and a relaxed meal.",
    website: "https://www.google.com/search?q=Muchacho+Alegre+Mexican+Restaurant+Sevierville"
  },
  {
    name: "Cracker Barrel — Winfield Dunn Parkway",
    category: "Dining",
    location: "Sevierville",
    favorite: true,
    description: "Classic Southern comfort food, homestyle breakfasts, and a country store. A Stotts family pick!",
    website: "https://www.google.com/search?q=Cracker+Barrel+Winfield+Dunn+Parkway+Sevierville"
  },
  {
    name: "Five Oaks Farm Kitchen",
    category: "Dining",
    location: "Sevierville",
    favorite: true,
    description: "Hearty Southern breakfasts, farm-style suppers, and generous portions in a welcoming farmhouse setting.",
    website: "https://fiveoaksfarmkitchen.com/"
  },
  {
    name: "Holston's Kitchen",
    category: "Dining",
    location: "Sevierville",
    favorite: true,
    description: "A relaxed restaurant serving steaks, seafood, and American favorites made with fresh ingredients.",
    website: "https://holstonskitchen.com/sevierville-tn/"
  },

  // DINING — MORE PLACES TO TRY
  {
    name: "Buddy's BBQ",
    category: "Dining",
    location: "Sevierville",
    description: "Casual East Tennessee barbecue with smoked meats and classic sides.",
    website: "https://www.google.com/search?q=Buddys+BBQ+Sevierville"
  },
  {
    name: "Puckett's Restaurant",
    category: "Dining",
    location: "Pigeon Forge",
    description: "Southern comfort food, barbecue, and live music in a laid-back atmosphere.",
    website: "https://www.puckettsrestaurant.com/pigeon-forge"
  },
  {
    name: "Crockett's Breakfast Camp",
    category: "Dining",
    location: "Gatlinburg",
    description: "A mountain-themed breakfast destination known for hearty morning meals and sweet breakfast favorites.",
    website: "https://crockettsbreakfastcamp.com/"
  },
  {
    name: "Applewood Farmhouse Restaurant",
    category: "Dining",
    location: "Sevierville",
    description: "Traditional Southern dining with country-style dishes and the famous Applewood experience.",
    website: "https://www.google.com/search?q=Applewood+Farmhouse+Restaurant+Sevierville"
  },
  {
    name: "Aubrey's",
    category: "Dining",
    location: "Sevierville",
    description: "A comfortable neighborhood restaurant serving American favorites, salads, and hearty entrées.",
    website: "https://www.google.com/search?q=Aubreys+Sevierville+restaurant"
  },
  {
    name: "The Old Mill Restaurant",
    category: "Dining",
    location: "Pigeon Forge",
    description: "Traditional Southern comfort food beside the historic Old Mill.",
    website: "https://www.old-mill.com/"
  },
  {
    name: "The Fat Bear Family Tavern",
    category: "Dining",
    location: "Pigeon Forge",
    description: "A friendly tavern serving burgers, comfort food, and casual meals in a lively setting.",
    website: "https://fatbearpf.com/"
  },
  {
    name: "Blue Moose Burgers & Wings",
    category: "Dining",
    location: "Pigeon Forge",
    description: "A casual sports-grill favorite for juicy burgers, wings, and game-day dining.",
    website: "https://www.google.com/search?q=Blue+Moose+Burgers+Wings+Pigeon+Forge"
  },
  {
    name: "Local Goat",
    category: "Dining",
    location: "Pigeon Forge",
    description: "A popular dining spot featuring American cuisine, burgers, and locally inspired dishes.",
    website: "https://www.google.com/search?q=Local+Goat+Pigeon+Forge+restaurant"
  },
  {
    name: "Sunliner Diner",
    category: "Dining",
    location: "Pigeon Forge",
    description: "Step back into a nostalgic 1950s-style diner for classic American comfort food.",
    website: "https://www.google.com/search?q=Sunliner+Diner+Pigeon+Forge"
  },
  {
    name: "Downtown Flavortown",
    category: "Dining",
    location: "Pigeon Forge",
    description: "Guy Fieri-inspired dining combined with arcade games and lively entertainment.",
    website: "https://www.google.com/search?q=Downtown+Flavortown+Pigeon+Forge"
  },
  {
    name: "Harpoon Harry's Crab House",
    category: "Dining",
    location: "Pigeon Forge",
    description: "A spacious seafood restaurant with coastal-inspired dishes and a fun atmosphere.",
    website: "https://www.google.com/search?q=Harpoon+Harrys+Crab+House+Pigeon+Forge"
  },

  // THEME PARKS — STOTTS FAMILY FAVORITES
  {
    name: "Soaky Mountain Waterpark",
    category: "Theme Parks",
    location: "Sevierville",
    favorite: true,
    description: "A mountain-themed outdoor waterpark packed with slides, splash zones, and summer adventures.",
    website: "https://www.soakymountainwaterpark.com/"
  },
  {
    name: "Dollywood",
    category: "Theme Parks",
    location: "Pigeon Forge",
    favorite: true,
    description: "An iconic Smoky Mountain theme park featuring thrilling rides, live entertainment, crafts, and seasonal celebrations.",
    website: "https://www.dollywood.com/themepark/"
  },

  // THEME PARKS — MORE PLACES TO TRY
  {
    name: "Wilderness Indoor Waterpark",
    category: "Theme Parks",
    location: "Sevierville",
    description: "Indoor waterpark fun with slides, pools, and water attractions. Check visitor access options before planning.",
    website: "https://www.google.com/search?q=Wilderness+at+the+Smokies+indoor+waterpark"
  },
  {
    name: "Slick City Action Park",
    category: "Theme Parks",
    location: "Pigeon Forge",
    description: "An indoor action park featuring exciting slides, air courts, and arcade games.",
    website: "https://www.slickcitypigeonforge.com/"
  },
  {
    name: "Dig'n Zone Theme Park",
    category: "Theme Parks",
    location: "Sevierville",
    description: "A construction-themed adventure where visitors can experience impressive equipment and hands-on activities.",
    website: "https://www.google.com/search?q=Dign+Zone+Theme+Park+Sevierville"
  },
  {
    name: "SkyLand Ranch",
    category: "Theme Parks",
    location: "Sevierville",
    description: "Mountain coaster rides, animal encounters, and scenic ranch experiences. Check which attractions are currently operating.",
    website: "https://www.skylandranch.com/"
  },
  {
    name: "Outdoor Gravity Park",
    category: "Theme Parks",
    location: "Pigeon Forge",
    description: "A unique adventure where you roll downhill inside a giant inflatable ball filled with water.",
    website: "https://www.outdoorgravitypark.com/"
  },
  {
    name: "The Island in Pigeon Forge",
    category: "Theme Parks",
    location: "Pigeon Forge",
    description: "A lively entertainment destination with rides, shopping, restaurants, and the famous fountain show.",
    website: "https://islandinpigeonforge.com/"
  },
  {
    name: "Ripley's Believe It or Not!",
    category: "Theme Parks",
    location: "Gatlinburg",
    description: "Explore strange artifacts, curious exhibits, and unusual discoveries at this entertaining odditorium.",
    website: "https://www.google.com/search?q=Ripleys+Believe+It+or+Not+Gatlinburg"
  },

  // ADVENTURE — STOTTS FAMILY FAVORITES
  {
    name: "Anakeesta",
    category: "Adventure",
    location: "Gatlinburg",
    favorite: true,
    description: "A mountaintop adventure destination featuring beautiful views, treetop experiences, gardens, and dining.",
    website: "https://anakeesta.com/"
  },
  {
    name: "Ober Mountain",
    category: "Adventure",
    location: "Gatlinburg",
    favorite: true,
    description: "Year-round mountain adventures with scenic views, seasonal activities, and alpine attractions.",
    website: "https://obermountain.com/"
  },

  // ADVENTURE — MORE PLACES TO TRY
  {
    name: "Ripley's Super Fun Park",
    category: "Adventure",
    location: "Pigeon Forge",
    description: "A playful destination for rides and family entertainment.",
    website: "https://www.google.com/search?q=Ripleys+Super+Fun+Park+Pigeon+Forge"
  },
  {
    name: "Lost Mine Mountain Coaster & Mini Golf",
    category: "Adventure",
    location: "Pigeon Forge",
    description: "Enjoy a mountain coaster adventure and themed miniature golf in one destination.",
    website: "https://lostmine.com/"
  },
  {
    name: "The Goat Coaster at Goats on the Roof",
    category: "Adventure",
    location: "Pigeon Forge",
    description: "Ride a mountain coaster and enjoy one of the Smokies' most unusual roadside attractions.",
    website: "https://www.google.com/search?q=Goats+on+the+Roof+Goat+Coaster+Pigeon+Forge"
  },
  {
    name: "Gatlinburg SkyPark",
    category: "Adventure",
    location: "Gatlinburg",
    description: "Take in spectacular mountain views and experience the famous SkyBridge high above Gatlinburg.",
    website: "https://www.gatlinburgskypark.com/"
  },

  // SHOPPING — STOTTS FAMILY FAVORITES
  {
    name: "Tanger Outlets",
    category: "Shopping",
    location: "Sevierville",
    favorite: true,
    description: "An open-air outlet shopping destination with a wide variety of popular brands.",
    website: "https://www.google.com/search?q=Tanger+Outlets+Sevierville"
  },
  {
    name: "The Mountain Mile",
    category: "Shopping",
    location: "Pigeon Forge",
    favorite: true,
    description: "A modern shopping and entertainment destination with boutiques, dining, and attractions.",
    website: "https://www.google.com/search?q=Mountain+Mile+Pigeon+Forge"
  },

  // SHOPPING — MORE PLACES TO TRY
  {
    name: "Governor's Crossing Mall",
    category: "Shopping",
    location: "Sevierville",
    description: "A convenient shopping destination with a variety of stores and nearby entertainment.",
    website: "https://www.google.com/search?q=Governors+Crossing+shopping+Sevierville"
  },
  {
    name: "Smoky Mountain Gateway",
    category: "Shopping",
    location: "Sevierville",
    description: "A local shopping area for browsing stores and finding convenient stops during your visit.",
    website: "https://www.google.com/search?q=Smoky+Mountain+Gateway+shopping+Sevierville"
  },
  {
    name: "Ogle Brothers General Store",
    category: "Shopping",
    location: "Sevierville",
    description: "A charming general store featuring Smoky Mountain gifts, locally inspired goods, and souvenirs.",
    website: "https://www.oglebrothersgeneralstore.com/"
  },
  {
    name: "The Village Shops",
    category: "Shopping",
    location: "Gatlinburg",
    description: "A charming collection of specialty shops tucked into a picturesque European-inspired village.",
    website: "https://www.google.com/search?q=The+Village+Shops+Gatlinburg"
  },
  {
    name: "Three Bears General Store",
    category: "Shopping",
    location: "Pigeon Forge",
    description: "A longtime Smoky Mountain general store with souvenirs, sweets, gifts, and family activities.",
    website: "https://threebearsgeneralstore.com/"
  },

  // RELAXATION — STOTTS FAMILY FAVORITES
  {
    name: "The Spa at RiverStone",
    category: "Relaxation",
    location: "Pigeon Forge",
    favorite: true,
    description: "Escape into luxury with massages, facials, body treatments, nail services, and peaceful wellness experiences.",
    website: "https://www.spaatriverstone.com/"
  },
  {
    name: "St. Somewhere Spa",
    category: "Relaxation",
    location: "Pigeon Forge",
    favorite: true,
    description: "A relaxing spa retreat offering a peaceful break from the excitement of the Smokies.",
    website: "https://www.google.com/search?q=St+Somewhere+Spa+Pigeon+Forge"
  },

  // RELAXATION — MORE PLACES TO TRY
  {
    name: "Diva Nail Spa",
    category: "Relaxation",
    location: "Smoky Mountains Area",
    description: "Treat yourself to a manicure, pedicure, or a little vacation pampering.",
    website: "https://www.google.com/search?q=Diva+Nail+Spa+Sevierville+Pigeon+Forge"
  },
  {
    name: "B Blessed Spa",
    category: "Relaxation",
    location: "Smoky Mountains Area",
    description: "A spa option for slowing down and enjoying a little well-deserved self-care.",
    website: "https://www.google.com/search?q=M+Blessed+Spa+Smoky+Mountains"
  },
  {
    name: "Blue Mountain Mist Spa",
    category: "Relaxation",
    location: "Sevierville",
    description: "A peaceful spa experience in a beautiful Smoky Mountain setting.",
    website: "https://www.google.com/search?q=Blue+Mountain+Mist+Spa+Sevierville"
  },
  {
    name: "Spa at Oak Haven",
    category: "Relaxation",
    location: "Sevierville",
    description: "A tranquil spa destination for massages and relaxing treatments.",
    website: "https://www.google.com/search?q=Spa+at+Oak+Haven+Sevierville"
  },
  {
    name: "Wanderlust Salon and Spa",
    category: "Relaxation",
    location: "Smoky Mountains Area",
    description: "A salon and spa option for refreshing your look or enjoying some vacation self-care.",
    website: "https://www.google.com/search?q=Wanderlust+Salon+and+Spa+Smoky+Mountains"
  }
];

window.lodgeAttractions = attractions;

const grid = document.getElementById("attractionsGrid");
const searchInput = document.getElementById("attractionSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");


const urlParams = new URLSearchParams(window.location.search);
const requestedCategory = urlParams.get("category");

let activeCategory =
  requestedCategory === "Favorites" ? "Favorites" : "All";


function displayAttractions() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filtered = attractions.filter((place) => {
    const matchesCategory =
  activeCategory === "All" ||
  (activeCategory === "Favorites" && place.favorite === true) ||
  place.category === activeCategory;

    const searchableText = (
      place.name + " " +
      place.category + " " +
      place.location + " " +
      place.description
    ).toLowerCase();

    const matchesSearch =
      searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  
grid.innerHTML = "";

  filtered.forEach((place) => {
    const card = document.createElement("article");
    card.className = "attraction-card";

    const label = document.createElement("p");
    label.className = "attraction-category";
    label.textContent =
      place.category + " · " + place.location;

    const title = document.createElement("h2");
    title.textContent = place.name;

    // Add a special badge for family favorites
    if (place.favorite === true) {
      const favoriteBadge = document.createElement("p");
      favoriteBadge.className = "favorite-badge";
      favoriteBadge.textContent = "♥ Stotts Family Favorite";
      card.append(label, title, favoriteBadge);
    } else {
      card.append(label, title);
    }

    const description = document.createElement("p");
    description.textContent = place.description;

    const link = document.createElement("a");
    link.href = place.website;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Visit Website →";

    
card.append(description, link);

// Add an attraction to the guest's itinerary
const addTripButton = document.createElement("button");
addTripButton.type = "button";
addTripButton.className = "attraction-trip-button";
addTripButton.textContent = "+ Add to My Trip";

const tripDaySelector = document.createElement("div");
tripDaySelector.className = "attraction-trip-selector";
tripDaySelector.hidden = true;

addTripButton.addEventListener("click", () => {
  const checkIn = localStorage.getItem("bflCheckIn");
  const checkOut = localStorage.getItem("bflCheckOut");

  if (!checkIn || !checkOut || checkOut <= checkIn) {
    window.location.href = "planner.html";
    return;
  }

  tripDaySelector.hidden = !tripDaySelector.hidden;

  if (tripDaySelector.hidden) {
    return;
  }

  tripDaySelector.innerHTML = "";

  const instructions = document.createElement("p");
  instructions.textContent = "Which day would you like to visit?";
  tripDaySelector.appendChild(instructions);

  const startDate = new Date(checkIn + "T12:00:00");
  const endDate = new Date(checkOut + "T12:00:00");
  const currentDate = new Date(startDate);

  while (currentDate < endDate) {
    const dateKey = [
      currentDate.getFullYear(),
      String(currentDate.getMonth() + 1).padStart(2, "0"),
      String(currentDate.getDate()).padStart(2, "0")
    ].join("-");

    const dateLabel = currentDate.toLocaleDateString(
      "en-US",
      {
        weekday: "short",
        month: "short",
        day: "numeric"
      }
    );

    const dayButton = document.createElement("button");
    dayButton.type = "button";
    dayButton.className = "attraction-day-button";
    dayButton.textContent = dateLabel;

    dayButton.addEventListener("click", () => {
      let activities = [];

      try {
        const saved = JSON.parse(
          localStorage.getItem("bflTripActivities") || "[]"
        );

        if (Array.isArray(saved)) {
          activities = saved;
        }
      } catch (error) {
        activities = [];
      }

      // Prevent accidentally adding the same attraction
      // more than once to the same day
      const alreadyAdded = activities.some(
        (activity) =>
          activity.date === dateKey &&
          activity.attractionName === place.name
      );

      if (alreadyAdded) {
        instructions.textContent =
          "This attraction is already on that day's itinerary.";
        return;
      }

      activities.push({
        id: crypto.randomUUID(),
        date: dateKey,
        name: place.name,
        attractionName: place.name,
        time: "",
        notes: "",
        custom: false
      });

      localStorage.setItem(
        "bflTripActivities",
        JSON.stringify(activities)
      );


tripDaySelector.innerHTML = "";
tripDaySelector.hidden = false;

const confirmation = document.createElement("p");
confirmation.className = "attraction-added-message";
confirmation.textContent =
  `Added to your itinerary for ${dateLabel}!`;

const viewTripLink = document.createElement("a");
viewTripLink.href = "planner.html";
viewTripLink.className = "attraction-view-trip-link";
viewTripLink.textContent = "View My Itinerary →";

tripDaySelector.append(confirmation, viewTripLink);

addTripButton.textContent = "+ Add to Another Day";

    });

    tripDaySelector.appendChild(dayButton);
    currentDate.setDate(currentDate.getDate() + 1);
  }
});

card.append(addTripButton, tripDaySelector);
grid.appendChild(card);

  });

  noResults.hidden = filtered.length !== 0;
}


searchInput.addEventListener("input", displayAttractions);


filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    displayAttractions();
  });
});

// Highlight the correct category when the page opens
filterButtons.forEach((button) => {
  button.classList.toggle(
    "active",
    button.dataset.category === activeCategory
  );
});

displayAttractions();

