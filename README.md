# Podcast Player

This is a podcast player using React TailwindCSS and Apple API.

[Visit the podcast player](https://react-podcast-player.herokuapp.com/)

![podcast_player](https://user-images.githubusercontent.com/4976722/122044725-bea24b00-cdd4-11eb-8e63-347244acc3ac.gif)


Features include 
 - API calls with axios to Apple Podcast API
 - Debounce -slows down typing to prevent unnecessary API calls when user is typing in search term
 - Responsive web design with Tailwind CSS
 - Reusable React component
 - Using JavaScript Audio API to play sounds in the browser
 - Infinite scroll, for lazy loading
 - App layout with a fixed sidebar that does not change between renders, improving performance
 - Reverse Proxy to prevent CORS Error
 - React-Redux

## To run
- Clone the app
- Change directory to the cloned app folder
- Run ``yarn install``
- Then run ``yarn start``
- The application will open at ``http//:localhost:3000/``
