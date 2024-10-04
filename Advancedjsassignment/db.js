import fs from 'fs';
import path from 'path';

// Path to the JSON file
const dataFilePath = path.join('/home/davinci/Desktop/frontend/Javascript/Advancedjsassignment', 'db.json'); // Adjust path if needed

// Function to read events data from the JSON file
const readEventsData = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf-8');
        return JSON.parse(data).eventsData; // Assuming your JSON structure has an "eventsData" key
    } catch (error) {
        console.error('Error reading data:', error);
        return []; // Return an empty array on error
    }
};

// Function to write updated events data to the JSON file
const writeEventsData = (events) => {
    try {
        const dataToWrite = JSON.stringify({ eventsData: events }, null, 2); // Format with 2 spaces indentation
        fs.writeFileSync(dataFilePath, dataToWrite, 'utf-8');
    } catch (error) {
        console.error('Error writing data:', error);
    }
};

export { readEventsData, writeEventsData };
