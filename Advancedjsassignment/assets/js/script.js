let eventsData = [];
let favorites = [];

// Function to fetch events from the JSON server
async function fetchEvents() {
  try {
    const response = await fetch('http://localhost:3000/eventsData');
    eventsData = await response.json();
    renderEvents(eventsData);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

// Function to render events
function renderEvents(events) {
  const container = document.getElementById("events-container");
  container.innerHTML = "";

  events.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <div class="event-image" style="background-image: url(${event.imageUrl});"></div>
        <div class="event-details">
          <h3>${event.title}</h3>
          <p><strong>Price:</strong> $${event.price}</p>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <button onclick="toggleFavorite(${event.id})">
            ${favorites.includes(event.id) ? "Remove from" : "Add to"} Favorites
          </button>
        </div>
      `;
    container.appendChild(card);
  });
}

// Filter function
function filterEvents() {
  const location = document.getElementById("location-filter").value;
  const price = document.getElementById("price-filter").value;

  let filteredEvents = eventsData;

  if (location !== "all") {
    filteredEvents = filteredEvents.filter((event) =>
      event.location.includes(location)
    );
  }

  if (price !== "all") {
    filteredEvents = filteredEvents.filter((event) => {
      if (price === "low") return event.price <= 20;
      if (price === "medium") return event.price > 20 && event.price <= 50;
      return event.price > 50;
    });
  }

  renderEvents(filteredEvents);
}

// Sort function
function sortEvents() {
  const sortBy = document.getElementById("sort-by").value;

  let sortedEvents = [...eventsData];
  if (sortBy === "price") {
    sortedEvents.sort((a, b) => a.price - b.price);
  } else if (sortBy === "date") {
    sortedEvents.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  renderEvents(sortedEvents);
}

// Add/Remove favorite
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((favId) => favId !== id);
  } else {
    favorites.push(id);
  }

  updateFavorites();
  filterEvents();
}

// Update favorites list
function updateFavorites() {
  const favoritesList = document.getElementById("favorites-list");
  favoritesList.innerHTML = ""; // Clear the list

  favorites.forEach((id) => {
    const event = eventsData.find((e) => e.id === id);
    const listItem = document.createElement("li");
    listItem.textContent = event.title;
    favoritesList.appendChild(listItem);
  });
}

// Event listeners
document.getElementById("location-filter").addEventListener("change", filterEvents);
document.getElementById("price-filter").addEventListener("change", filterEvents);
document.getElementById("sort-by").addEventListener("change", sortEvents);

// Initial fetch
fetchEvents();
