# ARTICON

## Overview
ARTICON is a client-side web application that allows users to generate images from text using AI models like DALL-E and CLIP DROP. This documentation provides information about the project's structure, setup, and usage.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/articon.git
   cd articon/client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Build the project for production:**
   ```sh
   npm run build
   ```

5. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Usage
1. **Home Page:**
   - Navigate to the home page to get an overview of the application.
   - Click on "Generate Image Now" to start creating images.

2. **Pricing Page:**
   - View different subscription plans and choose the one that suits your needs.
   - Click "Purchase" to subscribe to a plan.

3. **Creator Studio:**
   - Use the DALL-E or CLIP DROP studio to generate images by entering text prompts.
   - Switch between studios using the provided buttons.

4. **Authentication:**
   - Login or sign up using the modal that appears when you try to purchase a plan or access certain features.

## Features
- **Text to Image Generation:**
  - Generate images from text using AI models like DALL-E and CLIP DROP.
  
- **Subscription Plans:**
  - Different plans available for personal, commercial, and business use.

- **Authentication:**
  - Login and signup functionality with password validation.

- **Responsive Design:**
  - Mobile-friendly design with responsive navigation and layout.

## Folder Structure
The project is organized into the following folders:

```
client/
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  public/
  README.md
  src/
    App.jsx
    assets/
      images/
    components/
      AuthModal.jsx
      Footer.jsx
      Navbar.jsx
    context/
    index.css
    main.jsx
    pages/
      Clip-Drop-Studio.jsx
      Dall-E-Studio.jsx
      Home.jsx
      Pricing.jsx
  tailwind.config.js
  vite.config.js
read.md
```

## Contributing
1. **Fork the repository:**
   - Click the "Fork" button on the repository page.

2. **Create a new branch:**
   ```sh
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes:**
   - Implement your feature or fix a bug.

4. **Commit your changes:**
   ```sh
   git commit -m "Add your commit message"
   ```

5. **Push to your branch:**
   ```sh
   git push origin feature/your-feature-name
   ```

6. **Create a pull request:**
   - Go to the repository page and click "New pull request".

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Note
This repository contains only the client-side code for ARTICON. The backend services and APIs are not included in this repository.
