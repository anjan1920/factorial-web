
## 📐 Large Number Factorial Calculator

A responsive web app to calculate the **factorial of very large numbers** that can't be handled using traditional JavaScript `Number` types.
This project is inspired by GFG factorial of lage number , where handling large factorials efficiently is required.

---

### 🔍 Features

* ✅ Accepts large input numbers (up to hundreds of digits factorial)
* 🔢 Uses **array-based multiplication logic** (similar to how we multiply by hand)
* ⚡ Instant computation with efficient big integer algorithm
* 💅 Styled with **Tailwind CSS**
* 🌐 Built using **HTML, CSS, JavaScript ** – 


### 🚀 How It Works

1. User inputs a number (e.g., 100, 500, 1000).
2. JavaScript handles the factorial using **array multiplication** (each digit stored and multiplied manually).
3. Displays the result in a scrollable output box.

### 🔧 Setup Instructions

1. Clone the repository or download the files.
2. Setup the node js in your system
3. Navigate to the 'factorial_web' folder in your system
4. Open comand prompt
5. Run  'npm install tailwindcss @tailwindcss/cli' #Install Tailwind CLI and other dependencies 
6. Run this 'tailwind -npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watc'  #Start the Tailwind watcher to compile CSS from input.css to output.css:
7. Open `index.html` in your browser.
8. Enter a number and click "Calculate Factorial".

---

### 📁 Project Structure

```
factorial_web/
├── index.html             # Webpage layout
├── script.js              # Main factorial logic using array-based multiplication
├── node_modules/          # All installed npm modules
├── package.json           # Project config and dependencies
└── src/
    ├── input.css          # Tailwind directives (@tailwind base, components, utilities)
    └── output.css         # Compiled Tailwind CSS file
```
