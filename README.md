# Travel Itinerary Planner

A React-based web application that allows users to plan multi-day trips, add activities, hotels, and payments, and generate a PDF itinerary.  

## Features

- Create a travel overview including name, departure, destination, dates, and number of travelers.
- Add multiple days to your itinerary, each with activities and time slots (morning, afternoon, evening).
- Add hotel details including name, city, check-in/out dates, and number of nights.
- Add payment installments with amount and due date.
- Generate a PDF of the complete itinerary with a single click.
- Preview the PDF directly in the browser before downloading.

## Technologies Used

- React.js
- Tailwind CSS for styling
- React Context API for state management
- @react-pdf/renderer for PDF generation

## Live Demo

Check out the app live here: [Travel Itinerary Planner](https://travel-itinerary-orcin.vercel.app/)
1. Clone the repository:

```bash
git clone https://github.com/sakshibattala/Travel-Itinerary.git
```


2. Navigate to the project directory: 

```bash
cd Travel-Itinerary
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.

Usage
-----

1.  Fill out the **Travel Overview** form with your name, departure location, destination, travel dates, and number of travelers.
    
2.  Add **Days** to your trip and include activities for each day.
    
3.  Add **Hotels** for your stay.
    
4.  Add **Payment** installments if required.
    
5.  Preview and download your itinerary as a PDF using the **Download Itinerary** button.
    

Sample Data for Testing
-----------------------

*   Name: Jane Doe
    
*   Departure From: Tokyo
    
*   Destination: Switzerland
    
*   Departure Date: 2025-11-01
    
*   Arrival Date: 2025-11-10
    
*   Travelers: 2
    

**Days Example:**

*   Day 1: Explore the city
    
    *   Activity 1: Visit Museum (Morning)
        
    *   Activity 2: Lunch at local cafe (Afternoon)
        

**Hotels Example:**

*   Hotel: Grand Swiss Hotel, Zurich, Check-in: 2025-11-01, Check-out: 2025-11-05
    

**Payments Example:**

*   Amount: 500 RS, Due Date: 2025-10-20
    

Deployment
----------

You can host this project on **Netlify**, **Vercel**, or **GitHub Pages**.

Contributing
------------

Feel free to fork the project and submit pull requests for improvements or bug fixes.

License
-------

MIT License
