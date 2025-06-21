# Pursuit AI Cohort - Week 1 Review

This is an interactive web-based lesson plan designed to review the foundational concepts of AI-assisted development covered in Week 1.

## Features

- **Interactive Slides:** Lessons are presented in a clean, step-by-step slide format.
- **Clickable Activities:** Each slide contains interactive activities that open in a modal window with detailed explanations and code examples.
- **AI Assistant:** A built-in AI chatbot is available to answer student questions about the material.
- **Modern Design:** The application features a dark, professional theme with frosted glass panels and high-quality background images relevant to each lesson.

## Files

- `index.html`: The main HTML file containing the structure of the web application.
- `style.css`: The CSS file for all custom styling and layout.
- `script.js`: The JavaScript file that handles all the application logic, including slide navigation, modal interactions, and the AI chatbot functionality.

## How to Deploy

You can easily deploy this application for free using **Netlify** or **GitHub Pages**.

1.  **Create a GitHub Repository:** If you have not already, create a new public repository on GitHub.
2.  **Upload the Files:** Add the `index.html`, `style.css`, and `script.js` files to your new repository.
3.  **Deploy using your preferred service.**

## IMPORTANT: Enabling the AI Assistant

For the AI Assistant to work on your live website, you must provide it with a free Google AI API Key.

**Step 1: Get Your API Key**

1.  Go to **Google AI Studio**: [https://aistudio.google.com/](https://aistudio.google.com/)
2.  Sign in with your Google account.
3.  Click the **"Get API key"** button in the top left.
4.  In the pop-up window, click **"Create API key in new project"**.
5.  Your key will be generated. Click the copy icon to copy it to your clipboard.

**Step 2: Add the Key to Your Code**

1.  In your code editor, open the `script.js` file.
2.  Find the following line (it should be near line 316):
    ```javascript
    const apiKey = "YOUR_API_KEY_HERE"; 
    ```
3.  Replace `"YOUR_API_KEY_HERE"` with the key you just copied from Google AI Studio. Make sure to keep the quotation marks. It should look like this:
    ```javascript
    const apiKey = "AIzaSyB...your...long...key...here"; 
    ```
4.  Save the `script.js` file and push the change to your GitHub repository. Your deployment service (Netlify or GitHub Pages) will automatically update, and the AI Assistant will now be fully functional.
