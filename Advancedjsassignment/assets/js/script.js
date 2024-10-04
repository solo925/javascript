let eventsData = [];
let uniqueLocations = new Set(); // Set to store unique locations

// Function to render events in the HTML
const renderEvents = (events) => {
  const eventsContainer = document.getElementById('events-container');
  eventsContainer.innerHTML = ''; // Clear previous events

  events.forEach(event => {
    uniqueLocations.add(event.location); // Add location to the set

    const eventCard = document.createElement('div');
    eventCard.className = 'event-item'; // Updated class to match CSS

    // Create HTML structure for each event
    eventCard.innerHTML = `
      <img src="${event.imageUrl}" alt="${event.title}" class="event-image" />
      <h2>${event.title}</h2>
      <p>Price: $${event.price}</p>
      <p>Date: ${event.date}</p>
      <p>Location: ${event.location}</p>
      <div class="event-buttons">
        <button onclick="viewProduct('${event.id}')">View</button>
        <button onclick="editProduct('${event.id}')">Edit</button>
        <button onclick="deleteProduct('${event.id}')">Delete</button>
      </div>
    `;

    eventsContainer.appendChild(eventCard); // Append the event card to the container
  });

  // Populate the location filter dropdown
  populateLocationFilter();
};

// Function to populate the location filter
const populateLocationFilter = () => {
  const locationFilter = document.getElementById('location-filter');
  locationFilter.innerHTML = ''; // Clear existing options
  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'All';
  locationFilter.appendChild(allOption); // Add "All" option

  uniqueLocations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationFilter.appendChild(option);
  });
};

// Function to filter events by location
const filterEventsByLocation = () => {
  const selectedLocation = document.getElementById('location-filter').value;
  const filteredEvents = selectedLocation === 'all'
    ? eventsData
    : eventsData.filter(event => event.location === selectedLocation);

  renderEvents(filteredEvents);
};

// Function to view event details
window.viewProduct = (id) => {
  const event = eventsData.find(event => event.id === id);
  if (event) {
    // You can replace this alert with a modal or a dedicated view page
    alert(`Event Details:\nTitle: ${event.title}\nPrice: $${event.price}\nDate: ${event.date}\nLocation: ${event.location}`);
  }
};

// Function to edit an existing event and PUT to Node.js API
window.editProduct = async (id) => {
  const event = eventsData.find(event => event.id === id);
  if (event) {
    const updatedEvent = {
      ...event,
      title: prompt("Edit event title:", event.title),
      price: parseFloat(prompt("Edit event price:", event.price)),
      date: prompt("Edit event date:", event.date),
      location: prompt("Edit event location:", event.location),
      imageUrl: prompt("Edit image URL:", event.imageUrl)
    };

    // Validate input before sending to API
    if (updatedEvent.title && !isNaN(updatedEvent.price) && updatedEvent.date && updatedEvent.location && updatedEvent.imageUrl) {
      try {
        const response = await fetch(`http://localhost:3000/api/events/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedEvent),
        });

        if (!response.ok) throw new Error('Failed to update event');

        fetchEventsData(); // Re-fetch and render events after updating
      } catch (error) {
        console.error('Error updating event:', error);
      }
    } else {
      alert('Please provide valid inputs for all fields.');
    }
  }
};

// Function to delete an event and DELETE from Node.js API
window.deleteProduct = async (id) => {
  if (confirm("Are you sure you want to delete this event?")) {
    try {
      const response = await fetch(`http://localhost:3000/api/events/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete event');

      fetchEventsData(); // Re-fetch and render events after deletion
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  }
};

// Function to add a new event and POST to Node.js API
const addProduct = async () => {
  const newEvent = {
    id: Date.now().toString(),
    title: prompt("Enter event title:"),
    price: parseFloat(prompt("Enter event price:")),
    date: prompt("Enter event date:"),
    location: prompt("Enter event location:"),
    imageUrl: prompt("Enter image URL:")
  };

  // Validate input before sending to API
  if (newEvent.title && !isNaN(newEvent.price) && newEvent.date && newEvent.location && newEvent.imageUrl) {
    try {
      const response = await fetch('http://localhost:3000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) throw new Error('Failed to add event');

      fetchEventsData(); // Re-fetch and render events after adding
    } catch (error) {
      console.error('Error adding event:', error);
    }
  } else {
    alert('Please provide valid inputs for all fields.');
  }
};

// Add event listener for the "Add Product" button
document.getElementById("add-product-btn").addEventListener('click', addProduct);

// Add event listener for location filter change
document.getElementById('location-filter').addEventListener('change', filterEventsByLocation);

// Function to fetch events data from the Node.js API
const fetchEventsData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/events');
    if (!response.ok) throw new Error('Failed to fetch events');

    eventsData = await response.json();
    renderEvents(eventsData); // Re-render events
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

// Call the fetch function on page load to load initial events
fetchEventsData();
let scrollTimeout;

// Function to hide the "Add Product" button during scroll
window.addEventListener('scroll', () => {
  const addButton = document.getElementById('add-product-btn');

  // Hide the button while scrolling
  addButton.classList.add('hidden');

  // Clear the previous timeout
  clearTimeout(scrollTimeout);

  // Show the button again after scrolling stops
  scrollTimeout = setTimeout(() => {
    addButton.classList.remove('hidden');
  }, 200); // 200ms delay after scrolling stops
});
