# Crypto Dashboard

## Built with:

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)   ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Features

### General
:weight_lifting: React component: Used to create CurrencyConverter & ExchangeRate component; <br>
:roller_coaster: axios.request: Used to send HTTP requests to the API for fetching exchange rate and news data; <br>
:hamburger: Mapping: Used to iterate over the 'currencies' array to generate option elements for the select dropdowns; <br>
:ferris_wheel: Select dropdown: Used to display a dropdown menu for selecting primary and secondary currencies; <br>
:spider_web: Array slicing: Used to extract the first 10 articles from the 'articles' array; <br>
:framed_picture: Conditional rendering: Used to conditionally render the first 10 articles in the Newsfeed component; <br>
:iphone: Responsive design from 320px to 2500px; <br>
:fountain_pen: useEffect: Used to trigger a side effect in the Newsfeed component when the component mounts; <br>
:roller_coaster: Social network icons with background animation on hover and focus; <br>
:barber: Custom scrollbar; <br>
:computer_mouse: Linear gradient: Used to create a gradient background color effect in the body and convert button; <br>
:keyboard: import: Used to import the useState hook from the 'react' library, ExchangeRate component, and axios library.

## Some techniques used 

### Functional components

I used Functional components in the code to define the structure and behavior of various UI elements. They are a modern approach to writing components in React, providing a more concise and readable syntax compared to class components. This is my first time using Functional components and I notticed already that they offer better performance optimizations through hooks.

### Event handling:

The event handling were crucial for capturing user interactions and triggering specific actions in response. In the code, I used events like onChange and onClick to update state variables and perform tasks such as updating the chosen currencies, amount, and performing the currency conversion. These event handlers enable interactivity and user engagement within the application.


### API integration: 

This was my first experience with axios library. I searched and tested differents external APIs to integrated with the code using axios. APIs allow the application to fetch data from external sources, such as exchange rates and news articles. By making HTTP requests to APIs, the code retrieves real-time data and incorporates it into the application, enhancing its functionality and providing up-to-date information.

### Asynchronous programming: 

Asynchronous programming is essential when dealing with time-consuming operations, such as making API requests. In the code, asynchronous programming is employed through promises and the .then() and .catch() methods. These allow the code to handle API responses and errors in a non-blocking manner, ensuring the application remains responsive during data retrieval.

### Data mapping: 

I used in the code the map() method to iterate over arrays and render dynamic content. For instance, the code dynamically renders currency options and news articles by mapping over the currencies array and the articles array, respectively. By utilizing data mapping, the code can generate repetitive UI elements efficiently and flexibly based on the available data.

### Code organization and modularity:

The code is structured into separate components, such as CurrencyConverter, ExchangeRate, and Newsfeed. This approach promotes code organization and modularity, allowing for easier maintenance, readability, and reusability. Each component encapsulates its specific functionality, making it easier to understand and modify independently.

## Tasks
### Home
- [X] Structure whole HTML
- [X] Set up a React dev environment
- [X] Create a new React project
- [X] Install the dependencies, including React, axios, etc.
- [X] Set up the file structure
- [X] Create a component named CurrencyConverter
- [X] Import dependencies for CurrencyConverter component (useState and axios)
- [X] Define the currencies array & other variables using useState
- [X] Set up a convert function for the API request using axios
- [X] Search for an efficient and usable crypto exchange API
- [X] Make the API request using axios 
- [X] Handle the response data using the .then() method
- [X] Update the result state variable 
- [X] Handle errors using the .catch() method
- [X] Create CurrencyConverter component
- [X] Create the input fields, dropdowns, and Convert button
- [X] Implement event handlers (onChange)
- [X] Create a component named ExchangeRate
- [X] Define the JSX structure for the ExchangeRate component

### Form
- [X] Style the components using CSS or a styling library/framework
- [X] Apply a background color and font styles
- [X] Add a centered heading with a specific color and text alignment 
- [X] Style the primary and secondary currency input fields 
- [X] Customize the appearance of the dropdowns
- [X] Apply hover effect changing the background color & adding a border
- [X] Create a table structure for the currency selection section 
- [X] Style the Convert button & use hover, transition, transform effects 
- [X] Style the CurrencyConverter component
- [X] Add horizontal rule (hr) with a specific width and border color
- [X] Style the ExchangeRate component 
- [X] Add styling to the primary and secondary currency labels
- [X] Apply custom scrollbar styles to the Newsfeed component
- [X] Customize the Newsfeed component
- [X] Customize the appearance of the news article links
