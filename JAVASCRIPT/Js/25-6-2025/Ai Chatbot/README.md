# Aimerz Chatbot

Aimerz Chatbot is a web-based AI chatbot that allows users to interact with an AI assistant. The chatbot supports both text and image inputs and provides responses using Google's generative language models.

## Project Structure

```
index.html
index.js
style.css
```

### `index.html`

This file contains the HTML structure of the chatbot application. It includes the following key elements:

- A chat container with a header, messages area, and input container.
- A theme toggle button to switch between light and dark themes.
- An image upload input for sending images to the chatbot.
- A script tag to include the `index.js` file.

### `style.css`

This file contains the CSS styles for the chatbot application. It defines styles for:

- Light and dark themes using CSS variables.
- The chat container, header, messages area, and input container.
- User and AI messages.
- The theme toggle button and image upload input.
- Scrollbar styling for the messages area.

### `index.js`

This file contains the JavaScript code for the chatbot application. It includes the following key functionalities:

- Configuration of API URLs and keys.
- DOM element references and state management.
- Theme toggle functionality.
- Message creation functions for user and AI messages.
- Image handling and conversion to base64.
- Sending messages to the AI API and handling responses.
- Utility functions and event listeners.

## Getting Started

### Prerequisites

- A web browser
- An API key from Google for generative language models

### Setup

1. Clone the repository to your local machine.
2. Replace the placeholder `YOUR_GOOGLE_API_KEY` in `index.js` with your actual API key.

### Running the Application

1. Open `index.html` in your web browser.
2. Interact with the chatbot by typing messages or uploading images.
3. Toggle between light and dark themes using the theme toggle button.

