# Vehicle Rental Booking Application

A full-stack application for booking vehicle rentals with a multi-step form interface.

## Features

- Multi-step booking form
- Vehicle type selection based on wheel count
- Date range selection with validation
- Overlapping booking prevention
- Modern UI with Material-UI components

## Tech Stack

### Backend
- Node.js with Express
- PostgreSQL
- Sequelize ORM
- TypeScript

### Frontend
- React with TypeScript
- Material-UI
- Axios for API calls

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following content:
   ```
   PORT=3001
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=vehicle_rental
   ```

4. Create the database:
   ```bash
   createdb vehicle_rental
   ```

5. Run the seeder script:
   ```bash
   npx ts-node src/seeders/initialData.ts
   ```

6. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at http://localhost:3000

## API Endpoints

- GET `/api/vehicle-types/:wheelCount` - Get vehicle types by wheel count
- GET `/api/vehicles/:typeId` - Get vehicles by type
- POST `/api/bookings` - Create a new booking

## Development

To run the application in development mode:

1. Start the backend server (from the backend directory):
   ```bash
   npm run dev
   ```

2. Start the frontend development server (from the frontend directory):
   ```bash
   npm start
   ``` # vechile-booking-assiment
# OctalogicTech
