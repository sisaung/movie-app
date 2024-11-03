# 🎬 React Movie App

A React-based movie application that fetches movie data from the TMDB API. This project includes features like search, pagination, filtering, and state management using Zustand. It’s designed to provide a responsive and user-friendly interface for exploring movie details.


## 🚀 Features

- Movie Search: Search for movies and tv shows .
- Pagination: View movies across multiple pages.
- Filtering & Sorting: Filter movies by genres for popular, top-rated etc and sort by released date, rating, title A-Z ,first released date etc
- Detailed Pages: View detailed information about each movie and tv shows
- Responsive Layout: Optimized for both desktop and mobile


## 🛠 Tech Stack

**React:**   JavaScript library for building user interfaces

**React Router:** Using React Router for navigation with nested routes

**Tailwindcss:**   Styling for responsive layout and UI/UX 

**Typescript :** Adds type safety to JavaScript

**Zustand :** Zustand for managing global state

**React Query :** API data fetching and caching

**TMDB API :** The Movie App API for fetching movie and tv shows data


## ⚙️ Setup and Installation

Clone the repository

```bash
  git clone https://github.com/sisaung/movie-app.git
  cd movie-app
```
    
Install Dependencies

```bash
  npm install
```

Add TMDB Access Token
 - Sign up or log in to (https://www.themoviedb.org/) to get api access token.

 - Create a .env file in the root directory and add
   your api url and api access token

```bash
  VITE_API_URL = https://api.themoviedb.org/3
  VITE_TMDB_API_ACCESS_TOKEN = your_tmdb_api_access_token
```

Start the development server

```bash
 npm run dev
```

The app should now be running at http://localhost:5173
## 📝 Usage

 - Search: Type a movie title or any relateda keyword in the search bar to find specific movies and tv shows.

 - Pagination: Navigate through pages to explore more movies and tv shows.

- Filter: Use filters genres and sort by to view your desire movie and tv shows (e.g., action,animation, rating descending)

- View Details: Click on a movie and tv shows to explore detailed information on the Detail page


## 🌐 Demo 

- https://movie-app-khaki-eight-70.vercel.app/

## 📧 Contact
- Email: sisaungvipse780@gmail.com 
