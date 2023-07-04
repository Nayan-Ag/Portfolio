# Portfolio

This is a static portfolio created using React.js, designed to showcase my experience and projects. It provides a clean and organized layout to highlight my skills, work history, and featured projects.

**Check it out on:** https://nayan-ag-portfolio.netlify.app/ .

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

1. **Home:** Provides the domains of my interest.
2. **About:** Provides a brief introduction about me and my professional background.
3. **Experience:** Displays my work history, including companies I've worked for, positions held, and duration.
4. **Portfolio:** Showcases my featured projects with descriptions, screenshots, and links to live demos or repositories.
5. **Skills:** Highlights my technical skills and expertise in various programming languages, frameworks, and tools.
6. **Contact:** Offers a way for visitors to get in touch with me by providing contact information or a contact form.

## Installation

To run this portfolio on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project's root directory.
3. Install the necessary dependencies by running the following command:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your web browser and visit `http://localhost:3000` to see the portfolio.

## Usage

Customize the portfolio according to your own experience and projects by modifying the source code files. Below is an overview of the project structure.

## Project Structure

The project structure is organized as follows:

```
|-- public
|-- src
    |-- components
        |-- SIdebar.jsx
    |-- css
        |-- About.css
        |-- Contact.css
        |-- Experience.css
        |-- Home.css
        |-- Portfolio.css
        |-- sidebar.css
    |-- files
        |-- Constant.json
    !-- images
        |-- exp_bg.webp.crdownload
        |-- home_bg.JPG
        |-- logo_img.jpg
    |-- Pages
        |-- About.jsx
        |-- Contact.jsx
        |-- Experience.jsx
        |-- Home.jsx
        |-- Portfolio.jsx
        |-- MainPage.jsx
    |-- App.js
    |-- index.js
    |-- App.css
    |-- index.css
|-- .gitignore
|-- package.json
|-- README.md
```

- **public:** Contains the index.html file and other static assets.
- **src:** Holds the source code of the portfolio.
  - **components:** Contains React components for different sections of the portfolio.
  - **css:** Includes all the css files for conponents and pages.
  - **files:** Includes json file for the data of experience and projects.
  - **images:** Contaisn the logo image along with all the background images.
  - **pages:** Contains all the sections of the website along with mainpage to load all sections at a particular page.
  - **App.js:** The main component that renders different sections of the portfolio.
  - **index.js:** The entry point of the application.
- **.gitignore:** Specifies the files and directories to be ignored by Git.
- **package.json:** Lists the project dependencies and other metadata.
- **README.md:** The markdown file you're currently reading.

## Technologies Used

The following technologies and libraries were used to develop this portfolio:

- React.js
- HTML5
- CSS3
- JavaScript

Feel free to explore the source code and modify it to suit your own needs.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it as a template for your own portfolio.
