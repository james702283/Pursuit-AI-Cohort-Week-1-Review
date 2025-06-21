document.addEventListener('DOMContentLoaded', () => {
    const lessons = [
        {
            title: "Explaining AI's Work & Basic GitHub Use",
            objective: "Build communication and version control skills.",
            backgroundImage: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop",
            activities: [
                { title: "Ask AI to explain Python code", content: `<h3 class="text-xl font-bold text-white mb-2">AI Explains Code</h3><p class="text-gray-300 mb-4">Your task is to take a simple Python script and have the AI explain a part of it. This teaches you how to use AI as a learning tool.</p><p class="text-gray-300 mb-2 font-semibold">1. Your Code:</p><pre class="bg-gray-900/70 p-3 rounded-lg text-sm"><code class="language-python text-white">name = "World"\nprint(f"Hello, {name}!")</code></pre><p class="text-gray-300 mt-4 mb-2 font-semibold">2. Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"In my Python script, please explain what the line 'print(f"Hello, {name}!")' does. Explain it like I am a complete beginner."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">3. Example AI Response:</p><div class="frosted-panel border-l-4 border-sky-500 p-4 rounded-r-lg"><p>Of course! Let's break down that line:</p><ul class="list-disc list-inside mt-2 text-gray-300 space-y-1"><li><strong>print()</strong> is a built-in Python function that displays text on the screen.</li><li>The <strong>f"..."</strong> part is called an "f-string". The 'f' stands for 'formatted'. It is a modern way to embed expressions inside string literals.</li><li><strong>{name}</strong> is a placeholder inside the f-string. Python replaces this with the actual value stored in the 'name' variable, which in this case is "World".</li></ul><p class="mt-2">So, the line tells Python to print the phrase "Hello, " followed by the value of the 'name' variable, resulting in the output: <strong>Hello, World!</strong></p></div>` },
                { title: "Use AI to write a Git Commit", content: `<h3 class="text-xl font-bold text-white mb-2">Clear Commit Messages with AI</h3><p class="text-gray-300 mb-4">Writing clear, concise commit messages is a crucial skill. You can use an AI to help you summarize your changes.</p><p class="text-gray-300 mt-4 mb-2 font-semibold">1. Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"I have a Python script. I just added a variable 'name' and a print statement to greet the user. Write a git commit message for this change in the imperative mood, following conventional commit standards."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">2. Example AI Response:</p><div class="frosted-panel border-l-4 border-sky-500 p-4 rounded-r-lg"><p class="font-mono text-white">feat: Add user greeting</p><p class="font-mono text-white mt-2">Initialize a 'name' variable and add a print statement to display a personalized greeting to the user.</p></div><p class="text-gray-300 mt-4">This format is clean, professional, and easy for other developers (and your future self!) to understand.</p>` }
            ]
        },
        {
            title: "What Simple Problem Could This AI Solve?",
            objective: "Connect even simple AI creations to potential real-world applications.",
            backgroundImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",
            activities: [
                { title: "Brainstorm with AI", content: `<h3 class="text-xl font-bold text-white mb-2">Finding Real-World Purpose</h3><p class="text-gray-300 mb-4">Even the simplest script can be the starting point for a real solution. This exercise helps you think like an entrepreneur or product manager.</p><p class="text-gray-300 mb-2 font-semibold">1. The Script:</p><pre class="bg-gray-900/70 p-3 rounded-lg text-sm"><code class="language-python text-white">name = input("What is your name? ")\nprint(f"Hello, {name}!")</code></pre><p class="text-gray-300 mt-4 mb-2 font-semibold">2. Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"What is a tiny real-world problem or need that my 'Hello Name' Python script (or a slightly smarter version AI could build) might help address? Brainstorm 3 ideas."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">3. Example AI Response:</p><div class="frosted-panel border-l-4 border-sky-500 p-4 rounded-r-lg space-y-2"><div><strong>1. Simple Event Kiosk:</strong> A slightly smarter version could be used on a tablet at an event entrance. It asks for a name and prints a "Welcome, [Name]!" badge sticker.</div><div><strong>2. Personalized Support Chatbot:</strong> This is the first step for any chatbot. It could greet a user by name before asking, "What can I help you with today, [Name]?"</div><div><strong>3. Kid's Learning Tool:</strong> A version with a friendly voice could help young children practice typing their name and give them a positive greeting as a reward.</div></div>` }
            ]
        },
        {
            title: "Effective Questioning of AI",
            objective: "Master getting clear, useful explanations from AI.",
            backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
            activities: [
                { title: "Practice: Explain a Variable", content: `<h3 class="text-xl font-bold text-white mb-2">Getting Different Kinds of Explanations</h3><p class="text-gray-300 mb-4">The key to effective AI interaction is asking for exactly what you need. Let us ask for the same concept (a variable) in three different ways.</p><p class="text-gray-300 mt-4 mb-2 font-semibold">Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"Explain what a variable is in Python. Provide three explanations:<br>1. Using a simple analogy a non-coder can understand.<br>2. A simple, technical definition.<br>3. A short code example."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">Example AI Response:</p><div class="frosted-panel p-4 rounded-lg space-y-4"><div><h4 class="font-semibold text-sky-400">1. The Analogy (A Labeled Box)</h4><p>Imagine a variable is like a labeled box. You can put something inside the box (like the number 10), and you give the box a name (like 'userAge'). Whenever you need what is inside, you just refer to the box by its label.</p></div><div><h4 class="font-semibold text-sky-400">2. The Technical Definition</h4><p>A variable is a named storage location in a computer's memory that holds a value. This value can be changed during program execution.</p></div><div><h4 class="font-semibold text-sky-400">3. The Code Example</h4><pre class="bg-gray-900/70 p-3 rounded-lg text-sm mt-2"><code class="language-python text-white"># 'user_score' is the variable, 100 is the value\nuser_score = 100\n\n# We can print the value by using the variable's name\nprint(user_score) # Output: 100\n\n# We can change the value\nuser_score = 150\nprint(user_score) # Output: 150</code></pre></div></div>` }
            ]
        },
        {
            title: "AI Enhances Your Script: Variables & Input",
            objective: "Make your code more dynamic and interactive.",
            backgroundImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
            activities: [
                 { title: "Add User Input", content: `<h3 class="text-xl font-bold text-white mb-2">Making a Script Interactive</h3><p class="text-gray-300 mb-4">A static script is good, but an interactive one is better. Let us direct the AI to get input from the user.</p><p class="text-gray-300 mt-4 mb-2 font-semibold">1. Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"Modify my 'Hello World' script. Make it ask for the user's name and then use that name in a personalized greeting."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">2. Example AI Response:</p><div class="frosted-panel border-l-4 border-sky-500 p-4 rounded-r-lg"><p>Certainly! Here is the updated script that takes user input:</p><pre class="bg-gray-900/70 p-3 rounded-lg text-sm mt-2"><code class="language-python text-white"># Ask for the user's name and store it in a variable\nname = input("What is your name? ")\n\n# Print a personalized greeting\nprint(f"Hello, {name}! It is nice to meet you.")</code></pre><p class="mt-2">The key change is the <code>input()</code> function, which pauses the script, waits for the user to type something and press Enter, and then returns what they typed.</p></div>` }
            ]
        },
        {
            title: "Preparing to Share: Communication Skills",
            objective: "Build professional presentation abilities.",
            backgroundImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
            activities: [
                 { title: "Draft explanation bullet points", content: `<h3 class="text-xl font-bold text-white mb-2">Explaining Your Work</h3><p class="text-gray-300 mb-4">Being able to clearly explain your project is as important as building it. Let us use the AI to help draft a short summary.</p><p class="text-gray-300 mt-4 mb-2 font-semibold">1. Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"Draft 2-3 bullet points for a presentation explaining my Python script. Focus on: what it does, how AI helped, and what I learned."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">2. Example AI Response:</p><div class="frosted-panel border-l-4 border-sky-500 p-4 rounded-r-lg space-y-2"><div>• <strong>What it does:</strong> My script is a simple but effective tool that provides a personalized greeting after asking for a user's name, making the interaction feel more engaging.</div><div>• <strong>How AI Helped:</strong> I used an AI assistant to transition the script from a static 'Hello World' to an interactive one by prompting it to incorporate the 'input()' function.</div><div>• <strong>What I Learned:</strong> Through this process, I learned the fundamental concept of variables and how to capture and use user input to create dynamic applications.</div></div>` }
            ]
        },
        {
            title: "Prompt Engineering: Personas & Output",
            objective: "Learn to use AI personas and request specific output formats.",
            backgroundImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
            activities: [
                { title: "Practice: Using an AI Persona", content: `<h3 class="text-xl font-bold text-white mb-2">Giving Your AI a Role</h3><p class="text-gray-300 mb-4">Telling the AI to adopt a "persona" dramatically changes the tone and style of its response, making it more suitable for your needs.</p><p class="text-gray-300 mt-4 mb-2 font-semibold">Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"Act as a friendly Python programming instructor for beginners. Explain 'if/else' statements (control flow) using a simple analogy about making a choice, and then provide a short Python code example."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">Example AI Response (Friendly Instructor Persona):</p><div class="frosted-panel border-l-4 border-sky-500 p-4 rounded-r-lg"><p>Hey there! Great question. Let us talk about making choices in our code.</p><p class="mt-2"><strong>Analogy:</strong> Imagine you are deciding what to wear. <strong>IF</strong> it is raining outside, you will grab an umbrella. <strong>ELSE</strong> (if it is not raining), you will wear sunglasses. Your code can make similar decisions!</p><p class="mt-2">The <code>if/else</code> statement lets your program check a condition and run different code depending on whether it is true or false.</p><p class="mt-2">Here is a quick example:</p><pre class="bg-gray-900/70 p-3 rounded-lg text-sm mt-2"><code class="language-python text-white">is_raining = True\n\nif is_raining:\n    print("Grab an umbrella!")\nelse:\n    print("Wear sunglasses!")\n\n# This will print "Grab an umbrella!"</code></pre><p class="mt-2">See? It is just like making a decision based on a condition. Keep up the great work!</p></div>` }
            ]
        },
        {
            title: "AI Adds Simple Logic (If/Else)",
            objective: "Direct AI to incorporate conditional logic into your script.",
            backgroundImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2070&auto=format&fit=crop",
            activities: [
                 { title: "Add Conditional Logic", content: `<h3 class="text-xl font-bold text-white mb-2">Adding a 'Special' Case</h3><p class="text-gray-300 mb-4">Conditional logic makes apps smarter. Let us ask the AI to modify our script to handle a specific name differently.</p><p class="text-gray-300 mt-4 mb-2 font-semibold">1. Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"Modify my Python greeting script. If the user's name entered is 'Alex', make it print a special welcome message. For any other name, it should print the regular greeting."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">2. Example AI Response:</p><div class="frosted-panel border-l-4 border-sky-500 p-4 rounded-r-lg"><p>Excellent idea! Here is the script with the added if/else logic:</p><pre class="bg-gray-900/70 p-3 rounded-lg text-sm mt-2"><code class="language-python text-white">name = input("What is your name? ")\n\n# Check if the name is 'Alex'\nif name == "Alex":\n    print(f"Hey, it is the awesome AI Director, {name}!")\nelse:\n    print(f"Hello, {name}! It is nice to meet you.")</code></pre><p class="mt-2">The <code>if name == "Alex":</code> line checks the condition. If it is true, the special message prints. If it is false, the code in the <code>else:</code> block runs instead.</p></div>` }
            ]
        },
        {
            title: "Refining Your Script's Purpose",
            objective: "Connect script functionality to user experience.",
            backgroundImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
            activities: [
                 { title: "Discuss the 'problem' it solves", content: `<h3 class="text-xl font-bold text-white mb-2">Understanding the 'Why'</h3><p class="text-gray-300 mb-4">Every feature should have a purpose. What 'problem' does our new if/else logic solve for the user experience?</p><div class="frosted-panel p-4 rounded-lg mt-4"><p>Even a small feature like a personalized greeting solves a user experience 'problem' by:</p><ul class="list-disc list-inside mt-2 text-gray-300 space-y-1"><li><strong>Creating a sense of recognition and importance:</strong> It makes the user feel acknowledged and special.</li><li><strong>Adding a human touch:</strong> It makes the interaction less robotic and more delightful.</li><li><strong>Demonstrating hidden capabilities:</strong> It shows the application is more than just a simple script; it has custom logic.</li></ul><p class="mt-2">When presenting your work, focusing on these small benefits shows a deep understanding of user-centric design.</p></div>` }
            ]
        },
        {
            title: "AI as Your Debugging Detective",
            objective: "Learn to use AI to interpret error messages and suggest fixes.",
            backgroundImage: "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?q=80&w=2070&auto=format&fit=crop",
            activities: [
                { title: "Debug a Syntax Error", content: `<h3 class="text-xl font-bold text-white mb-2">Solving Errors with AI</h3><p class="text-gray-300 mb-4">Error messages can be intimidating, but they contain clues. An AI is excellent at translating them into plain English and suggesting fixes.</p><p class="text-gray-300 mt-4 mb-2 font-semibold">1. The Buggy Code:</p><pre class="bg-gray-900/70 p-3 rounded-lg text-sm"><code class="language-python text-white">name = "Alice"\nprint("Hello, " name) # Missing '+' operator</code></pre><p class="text-gray-300 mt-4 mb-2 font-semibold">2. The Error Message:</p><pre class="bg-red-900/30 text-red-300 p-3 rounded-lg text-sm"><code>  File "&lt;stdin>", line 1\n    print("Hello, " name)\n                    ^^^^^\nSyntaxError: invalid syntax</code></pre><p class="text-gray-300 mt-4 mb-2 font-semibold">3. Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"My Python script is giving me a 'SyntaxError: invalid syntax'. Here is the code and the error message. What does this error mean, and what part of my code is likely causing it? Suggest a fix."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">4. Example AI Response:</p><div class="frosted-panel border-l-4 border-sky-500 p-4 rounded-r-lg"><p>This is a very common error! The 'SyntaxError: invalid syntax' means Python does not understand the structure of your code on that line.</p><p class="mt-2"><strong>The Cause:</strong> In Python, you cannot place a string literal ("Hello, ") right next to a variable (name) inside a print function without telling Python how to combine them.</p><p class="mt-2"><strong>The Fix:</strong> You need to concatenate (join) the string and the variable using the <code>+</code> operator.</p><p class="mt-2">Here is the corrected code:</p><pre class="bg-gray-900/70 p-3 rounded-lg text-sm mt-2"><code class="language-python text-white">name = "Alice"\nprint("Hello, " + name)</code></pre><p class="mt-2">Alternatively, using an f-string is an even cleaner way to do this:</p><pre class="bg-gray-900/70 p-3 rounded-lg text-sm mt-2"><code class="language-python text-white">name = "Alice"\nprint(f"Hello, {name}")</code></pre></div>` }
            ]
        },
        {
            title: 'Al-Assisted "Bug Hunt" & Fix',
            objective: "Practice directing AI to find and fix a bug in your own script.",
            backgroundImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
            activities: [
                 { title: "Find and fix a bug", content: `<h3 class="text-xl font-bold text-white mb-2">Practicing the Process</h3><p class="text-gray-300 mb-4">Now it is your turn to be the detective. The best way to learn debugging is by doing it.</p><p class="text-gray-300 mb-2 font-semibold">Your Task:</p><ol class="list-decimal list-inside text-gray-300 space-y-2 mt-2"><li>Take your working script from the previous lesson.</li><li>Intentionally introduce a small, common error. For example, misspell a variable name, remove a colon after an 'if' statement, or get the indentation wrong.</li><li>Run the script to see the error message it produces.</li><li>Use the AI debugging techniques we just learned. Give the AI your code and the error, and ask it to help you identify and fix the problem.</li></ol><p class="mt-4 text-gray-300">Focus on the process of clearly describing the problem to the AI. This practical experience is invaluable for becoming a self-sufficient developer.</p>` }
            ]
        },
         {
            title: 'Final Polish for Week 2 Showcase',
            objective: "Refine and practice your 1-2 minute presentation.",
            backgroundImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
            activities: [
                 { title: "Review your talking points", content: `<h3 class="text-xl font-bold text-white mb-2">Review Your Core Message</h3><p class="text-gray-300 mb-4">Before refining, ensure your main points are solid. Your presentation should be a concise story of your project.</p><p class="text-gray-300 mb-2 font-semibold">Key Points to Review:</p><ul class="list-disc list-inside text-gray-300 space-y-2 mt-2"><li><strong>What you directed AI to build:</strong> Start with a clear statement of your project's goal. (e.g., "I directed the AI to build a script that provides a personalized greeting based on user input.")</li><li><strong>One cool AI interaction:</strong> Choose the most interesting or surprising interaction you had. (e.g., "The most interesting part was when I asked the AI to act as a friendly instructor to explain 'if/else' logic.")</li><li><strong>One challenge overcome with AI:</strong> Discuss a specific problem (like a bug) and how the AI helped you solve it. This shows resilience and learning.</li></ul>` },
                 { title: "Make your points more engaging", content: `<h3 class="text-xl font-bold text-white mb-2">Polishing Your Pitch with AI</h3><p class="text-gray-300 mb-4">Once you have your core points, the AI can help you phrase them more effectively for an audience.</p><p class="text-gray-300 mt-4 mb-2 font-semibold">Your Prompt to the AI:</p><p class="italic text-sky-300 bg-sky-900/30 p-3 rounded-lg">"Help me make these 3 bullet points about my AI project sound more engaging for a short presentation: [Paste your 3 bullet points here]."</p><p class="text-gray-300 mt-4 mb-2 font-semibold">Example AI Response:</p><div class="frosted-panel border-l-4 border-sky-500 p-4 rounded-r-lg space-y-2"><div>• "Instead of a generic 'Hello World,' I partnered with an AI to create a dynamic application that offers a personalized welcome to every user."</div><div>• "A highlight of this project was treating the AI as a creative partner; I prompted it to act as a programming instructor, and it gave me a fantastic analogy for conditional logic that made the concept click."</div><div>• "I hit a roadblock with a persistent syntax error, but by providing the AI with the exact error message, it acted as a debugging detective, guiding me straight to the fix and teaching me a valuable lesson in problem-solving."</div></div>` },
                 { title: "Practice your delivery", content: `<h3 class="text-xl font-bold text-white mb-2">Practice Makes Perfect</h3><p class="text-gray-300 mb-4">Great delivery is as important as great content. How you say it matters.</p><p class="text-gray-300 mb-2 font-semibold">Tips for Practice:</p><ul class="list-disc list-inside text-gray-300 space-y-2 mt-2"><li><strong>Time yourself:</strong> Use a stopwatch to ensure you are within the 1-2 minute timeframe. Adjust your content if needed.</li><li><strong>Record yourself:</strong> Use your phone or webcam to record your presentation. Watch it back to check your pacing, tone of voice, and body language.</li><li><strong>Focus on clarity and enthusiasm:</strong> Speak clearly and let your passion for what you have learned shine through. Your energy will engage the audience.</li><li><strong>Practice with a peer:</strong> Presenting to someone else is the best way to get feedback and build confidence.</li></ul>` }
            ]
        },
        {
            title: 'Week 1 Wrap-Up: Your New Developer Toolkit',
            objective: "Recognize the powerful, real-world skills you have developed this week.",
            backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
            activities: [
                { title: "How Far You Have Come", content: `<h3 class="text-xl font-bold text-white mb-2">From Zero to Coder in One Week</h3><p class="text-gray-300 mb-4">Think back to the start of this week. You began by simply talking to an AI. Now, you have directed an AI to build, modify, and debug a custom Python application. You have transformed from a user of technology into a creator.</p>` },
                { title: "The Real Skills You Have Developed", content: `<h3 class="text-xl font-bold text-white mb-2">Your New Professional Skills</h3><p class="text-gray-300 mb-4">This week was about more than just code. You have developed a set of skills that are in high demand in the tech industry:</p><ul class="list-disc list-inside mt-2 text-gray-300 space-y-2"><li><strong>Prompt Engineering:</strong> You can now craft precise instructions to get the output you want from an AI.</li><li><strong>AI-Assisted Debugging:</strong> You know how to use an AI as a partner to diagnose and solve code errors.</li><li><strong>Technical Communication:</strong> You have practiced explaining complex topics to different audiences.</li><li><strong>Version Control Basics:</strong> You have started using GitHub, the industry-standard tool for managing code.</li><li><strong>Core Programming Concepts:</strong> You have implemented variables, user input, and conditional (if/else) logic.</li></ul>` },
                { title: "How You Can Use These Skills Now", content: `<h3 class="text-xl font-bold text-white mb-2">What You Can Do Next</h3><p class="text-gray-300 mb-4">These are not just theoretical skills; they are practical tools you can use immediately.</p><ul class="list-disc list-inside mt-2 text-gray-300 space-y-2"><li><strong>Build Your Own Projects:</strong> Think of a simple problem in your own life and use the AI to help you build a script to solve it.</li><li><strong>Ace Future Interviews:</strong> You can now speak intelligently about how to leverage AI as a professional developer, a major talking point in today's job market.</li><li><strong>Learn Faster:</strong> Use your prompt engineering skills to ask AIs to explain any new technical concept you encounter in a way that makes sense to you.</li></ul><p class="mt-4 text-sky-300 font-semibold">Congratulations on an incredible first week. This is just the beginning.</p>` }
            ]
        }
    ];

    let currentSlide = 0;

    const slideContainer = document.getElementById('slide-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressIndicator = document.getElementById('progress-indicator');
    const backgroundContainer = document.getElementById('background-container');
    
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContainer = document.getElementById('modal-container');
    const modalPanel = document.getElementById('modal-panel');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    const aiLabel = document.getElementById('ai-label');

    const renderSlide = () => {
        const lesson = lessons[currentSlide];
        
        backgroundContainer.style.backgroundImage = `url('${lesson.backgroundImage}')`;
        
        slideContainer.innerHTML = `
            <div class="slide frosted-panel rounded-xl p-6 sm:p-8">
                <div class="mb-4">
                    <h2 class="text-3xl font-bold text-white">${lesson.title}</h2>
                </div>
                <p class="text-gray-300 mb-6">${lesson.objective}</p>
                
                <div class="border-t border-white/10 pt-6">
                    <h3 class="text-xl font-semibold text-white mb-4">Interactive Activities</h3>
                    <div class="space-y-3">
                        ${lesson.activities.map((act, index) => `
                            <button data-activity-index="${index}" class="activity-btn w-full text-left flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                                <div class="flex-shrink-0 mr-4 bg-sky-900/50 h-10 w-10 rounded-lg flex items-center justify-center transition-colors group-hover:bg-sky-800/70">
                                   <svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg>
                                </div>
                                <span class="font-medium">${act.title}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === lessons.length - 1;
        progressIndicator.textContent = `Lesson ${currentSlide + 1} of ${lessons.length}`;
        
        document.querySelectorAll('.activity-btn').forEach(btn => {
            btn.addEventListener('click', openModal);
        });
    };

    const openModal = (e) => {
        const btn = e.currentTarget;
        const activityIndex = parseInt(btn.dataset.activityIndex, 10);
        const activity = lessons[currentSlide].activities[activityIndex];
        
        modalContent.innerHTML = activity.content;
        modalBackdrop.classList.remove('hidden');
        modalContainer.classList.remove('hidden');
        setTimeout(() => {
            modalPanel.classList.remove('scale-95', 'opacity-0');
        }, 10);
    };

    const closeModal = () => {
        modalPanel.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modalBackdrop.classList.add('hidden');
            modalContainer.classList.add('hidden');
        }, 300);
    };

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) { currentSlide--; renderSlide(); }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < lessons.length - 1) { currentSlide++; renderSlide(); }
    });
    
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    const chatToggleButton = document.getElementById('chat-toggle-button');
    const chatCloseButton = document.getElementById('chat-close-button');
    const chatWindow = document.getElementById('ai-chat-window');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    const toggleChat = (visible) => { 
        chatWindow.classList.toggle('visible', visible); 
        if (aiLabel) {
            aiLabel.classList.toggle('hidden', visible);
        }
    };

    chatToggleButton.addEventListener('click', () => toggleChat(true));
    chatCloseButton.addEventListener('click', () => toggleChat(false));
    
    const addMessageToChat = (sender, text) => {
        const messageEl = document.createElement('div');
        let content = '';
        if (sender === 'user') {
            messageEl.className = 'flex items-start gap-2.5 justify-end';
            content = `<div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-sky-600 rounded-s-xl rounded-ee-xl"><p class="text-sm font-normal text-white">${text}</p></div>`;
        } else {
            messageEl.className = 'flex items-start gap-2.5';
            content = `<div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-gray-100/10 rounded-e-xl rounded-es-xl"><p class="text-sm font-normal text-white/90">${text === 'loading' ? '<div class="loader"></div>' : text}</p></div>`;
        }
        messageEl.innerHTML = content;
        chatMessages.appendChild(messageEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return messageEl;
    };

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userInput = chatInput.value.trim();
        if (!userInput) return;

        addMessageToChat('user', userInput);
        chatInput.value = '';
        chatForm.querySelector('button').disabled = true;

        const loadingIndicator = addMessageToChat('ai', 'loading');

        // IMPORTANT: Add your Google AI API key here for the chatbot to work on a live site.
        const apiKey = "AIzaSyBAHVpzXVuSvmX1Xr5Vr8LpzdZlWraj_x0"; 

        try {
             if (apiKey === "AIzaSyBAHVpzXVuSvmX1Xr5Vr8LpzdZlWraj_x0") {
                throw new Error("API key not set. Please add your key to script.js");
            }

            const currentLesson = lessons[currentSlide];
            const prompt = `You are a friendly and helpful AI programming instructor for a beginner. The student is currently in a lesson titled "${currentLesson.title}" with the objective: "${currentLesson.objective}". Please answer the student's question concisely and clearly based on this context. Student's question: "${userInput}"`;
            const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { contents: chatHistory };
            
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

            if (!response.ok) throw new Error(`API error: ${response.statusText}`);

            const result = await response.json();
            let aiResponseText = "Sorry, I could not get a response. Please try again.";
            if (result.candidates && result.candidates[0]?.content?.parts?.[0]) {
                aiResponseText = result.candidates[0].content.parts[0].text;
            }
            loadingIndicator.querySelector('p').innerHTML = aiResponseText;

        } catch (error) {
            console.error("Error fetching from Gemini API:", error);
            loadingIndicator.querySelector('p').textContent = "An error occurred. Please check the console and try again. Make sure your API key is set in script.js.";
        } finally {
            chatForm.querySelector('button').disabled = false;
            chatInput.focus();
        }
    });
    
    renderSlide();
});
