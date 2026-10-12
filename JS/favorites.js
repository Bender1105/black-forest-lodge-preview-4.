
const favoritesGrid =
  document.getElementById("familyFavoritesGrid");

if (favoritesGrid && window.lodgeAttractions) {

  const familyFavorites =
    window.lodgeAttractions.filter(
      (place) => place.favorite === true
    );

  familyFavorites.forEach((place) => {

    const card = document.createElement("article");
    card.className = "family-favorite-card";

    const badge = document.createElement("p");
    badge.className = "favorite-badge";
    badge.textContent = "♥ Stotts Family Favorite";

    const title = document.createElement("h3");
    title.textContent = place.name;

    const location = document.createElement("p");
    location.className = "attraction-category";
    location.textContent =
      place.category + " · " + place.location;

    const description = document.createElement("p");
    description.textContent = place.description;

    const link = document.createElement("a");
    link.href = place.website;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Visit Website →";

    card.append(
      location,
      title,
      badge,
      description,
      link
    );

    favoritesGrid.appendChild(card);

  });
}
