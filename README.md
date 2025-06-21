# Pursuit AI Cohort - Week 1 Review

This is an interactive, web-based lesson plan designed to review the foundational concepts of AI-assisted development covered in Week 1 of the Pursuit AI Cohort. The application transforms a standard slide deck into an engaging, self-paced learning experience.

## Features

-   **Interactive Slide Deck:** The entire 12-part lesson plan is presented in a clean, step-by-step slide format with professional, thematic background imagery.
-   **Clickable Activities:** Each lesson contains interactive activities. Clicking on an activity opens a detailed modal window with explanations and real-world code examples.
-   **Live AI Assistant:** A built-in AI chatbot, powered by the Google Gemini API, is available to answer student questions about the material in real-time.
-   **Modern UI/UX:** The application features a dark, professional theme with frosted-glass UI panels, smooth animations, and a fully responsive design that works on desktop, tablets, and mobile devices.

## Core Benefits

This project was designed to solve a key problem: static lesson plans are often not engaging. By transforming the material into an interactive application, this project provides several benefits:

-   **Active vs. Passive Learning:** Instead of just reading, students are encouraged to click, explore, and interact with the material, which improves retention and understanding.
-   **Self-Paced Exploration:** Students can move through the lessons at their own speed, spending more time on concepts they find challenging.
-   **Instant Support:** The integrated AI Assistant provides immediate help, answering questions as they arise and preventing students from getting stuck.
-   **Professional Polish:** The modern design creates a high-quality, professional learning environment that takes the content seriously.

## Full Deployment Guide (from Zero to Live)

Follow these steps to deploy your own copy of this application using Netlify, a free and powerful hosting service for web projects.

### Step 1: Create a GitHub Repository

1.  Create a new, public repository on your GitHub account. You can name it `Pursuit-AI-Cohort-Week-1-Review`.
2.  Download the `index.html`, `style.css`, and `script.js` files I have provided.
3.  Upload these three files to your new GitHub repository.

### Step 2: Get Your Google AI API Key

The AI Assistant needs an API key to function on a live website.

1.  Go to **Google AI Studio**: [https://aistudio.google.com/](https://aistudio.google.com/)
2.  Sign in and click **"Get API key"**, then **"Create API key in new project"**.
3.  **Copy the key** that is generated. It will be a long string of characters.

### Step 3: Add the API Key to Your Code

1.  In your GitHub repository, click on the `script.js` file to open it.
2.  Click the **pencil icon** to edit the file directly on GitHub.
3.  Find this specific line (it should be near the end of the file):
    ```javascript
    const apiKey = "YOUR_API_KEY_HERE";
    ```
4.  Replace the placeholder text `"YOUR_API_KEY_HERE"` with the key you just copied. Make sure to keep the quotation marks around your key.
5.  Scroll to the bottom and click the green **"Commit changes"** button.

### Step 4: Deploy with Netlify

1.  Go to [https://www.netlify.com/](https://www.netlify.com/) and sign up using your **GitHub account**. This links them automatically.
2.  From your Netlify dashboard, click **"Add new site"** -> **"Import an existing project"**.
3.  Choose **"GitHub"** and select your `Pursuit-AI-Cohort-Week-1-Review` repository.
4.  The deployment settings will be pre-filled correctly. Simply click the **"Deploy site"** button.
5.  Netlify will build your site. In about a minute, you will be given a live URL (e.g., `https://some-name.netlify.app`).

### Step 5: Authorize Your Website in Google Cloud

This is the final, crucial step to make the AI Assistant work.

1.  Go to the Google Cloud Console Credentials page: [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
2.  Find your API key in the list and click on its name to edit it.
3.  Under **"Application restrictions"**, select the **"Websites"** option.
4.  Click **"ADD"** and enter your Netlify site's URL (e.g., `your-site-name.netlify.app`). It's also a good idea to add a wildcard version: `*.netlify.app/*`.
5.  Click **"Save"**.

After waiting up to 5 minutes for the settings to update, your live website will be fully functional, including the AI Assistant. Congratulations!
