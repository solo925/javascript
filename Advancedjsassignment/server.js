const express = require('express');
const app = express();
import bodyParser from 'body-parser';
const { readEventsData, writeEventsData } = require('./db');

app.use(bodyParser.json());

// Get all events
app.get('/api/events', (req, res) => {
    const events = readEventsData();
    res.json(events);
});

// Add a new event
app.post('/api/events', (req, res) => {
    const newEvent = req.body;
    const events = readEventsData();
    events.push(newEvent);
    writeEventsData(events);
    res.status(201).json(newEvent);
});

// Update an event
app.put('/api/events/:id', (req, res) => {
    const { id } = req.params;
    const updatedEvent = req.body;
    let events = readEventsData();
    const eventIndex = events.findIndex(event => event.id === id);

    if (eventIndex !== -1) {
        events[eventIndex] = { ...events[eventIndex], ...updatedEvent };
        writeEventsData(events);
        res.json(events[eventIndex]);
    } else {
        res.status(404).send('Event not found');
    }
});

// Delete an event
app.delete('/api/events/:id', (req, res) => {
    const { id } = req.params;
    let events = readEventsData();
    events = events.filter(event => event.id !== id);
    writeEventsData(events);
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
