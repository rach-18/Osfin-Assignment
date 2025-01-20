# Flight Booking Website (Osfin Assignment)

This is a flight booking website replica designed to simulate the experience of booking a flight. The website allows users to input their passenger and contact details as they would on a real flight booking platform, but it does not handle actual flight bookings. The project showcases how such a platform might look and behave, providing a seamless user experience with validation, data handling, and UI/UX design.

## Table of Contents

1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Libraries and Frameworks Used](#libraries-and-frameworks-used)
1. [Challenges and Solutions](#challenges-and-solutions)

## Features

- **Passenger Details**: Users can enter and manage their personal information, such as name, date of birth, and gender.
- **Contact Information**: Users can provide and update their contact details, including email and phone number.
- **Booking Process Simulation**: The website simulates a typical flight booking process, guiding users through each step with validation.
- **Responsive Design**: Fully responsive design ensures the website works well across various devices and screen sizes.
- **Data Persistence**: Passenger details are stored in local storage for a consistent user experience across page reloads.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed on your system.
- **npm/yarn**: Node package manager for installing dependencies.

### Steps to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/rach-18/Osfin-Assignment
   ```

2. Navigate into the project folder:

   ```bash
   cd osfin-assignment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   Or if you are using yarn:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Or:

   ```bash
   yarn run dev
   ```

5. Visit localhost in your browser to view the project running locally.

### Vercel Deployment

The project is also deployed on [Vercel](https://osfin-assignment.vercel.app/). You can visit the live version of the project from the provided Vercel URL.

## Libraries and Frameworks Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for custom designs.
- **React Router**: Library for handling routing and navigation within the app.
- **Vercel**: Platform for deploying the project to the web.

## Challenges and Solutions

1. **Handling Date Formatting Challenge:** The dob (Date of Birth) field was initially stored as a string, which caused issues when trying to format it using a date-specific function.
   **Solution:** I used useEffect to check if the stored data's dob was a string and, if so, converted it to a JavaScript Date object for proper formatting.

2. **Ensuring Local Storage Sync Challenge:** Ensuring that the passenger data was properly synced with local storage on reloads without causing errors.
   **Solution:** I used useEffect to update local storage every time the passengerDetails state changes, ensuring that data was always preserved and consistent between sessions.

3. **Learning TypeScript Syntax Challenge:** This project was my first experience using TypeScript, and I was unfamiliar with its syntax and type definitions.
   **Solution:** I referred to online resources and documentation to learn the basics of TypeScript. By reading articles, checking examples, and using online TypeScript playgrounds, I gradually became comfortable with TypeScript's type system and syntax, allowing me to apply it successfully in the project.
