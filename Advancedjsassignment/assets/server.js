import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { readEventsData, writeEventsData } from '../db.js'; // Import the read/write functions

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors()); // To allow cross-origin requests from the frontend

// Routes for CRUD operations
// GET: Retrieve all events
app.get('/api/events', (req, res) => {
    const eventsData = readEventsData(); // Read data from JSON file
    res.json(eventsData);
});

// POST: Add a new event
app.post('/api/events', (req, res) => {
    const newEvent = req.body;
    const eventsData = readEventsData(); // Read existing events
    eventsData.push(newEvent);
    writeEventsData(eventsData); // Write updated events back to JSON file
    res.status(201).json(newEvent);
});

// PUT: Update an event by ID
app.put('/api/events/:id', (req, res) => {
    const { id } = req.params;
    const updatedEvent = req.body;

    const eventsData = readEventsData(); // Read existing events
    const eventIndex = eventsData.findIndex(event => event.id === id);
    if (eventIndex !== -1) {
        eventsData[eventIndex] = { ...eventsData[eventIndex], ...updatedEvent };
        writeEventsData(eventsData); // Write updated events back to JSON file
        res.json(eventsData[eventIndex]);
    } else {
        res.status(404).json({ message: "Event not found" });
    }
});

// DELETE: Remove an event by ID
app.delete('/api/events/:id', (req, res) => {
    const { id } = req.params;
    let eventsData = readEventsData(); // Read existing events
    eventsData = eventsData.filter(event => event.id !== id);
    writeEventsData(eventsData); // Write updated events back to JSON file
    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
