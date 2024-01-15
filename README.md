# React and Redux Posts Web Application

This web application is developed using React and Redux to present posts retrieved from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API. The application includes features such as a tabular view for posts, pagination, sorting, and the ability to select a specific user.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

1. **Tabular View for Posts:**
   - Displays posts in a tabular format with columns for User Id, Title, and Body.

2. **Pagination:**
   - Allows users to select 5, 10, 15, 20, or 25 records per page.
   - Frontend pagination implementation for a seamless user experience.

3. **Sorting:**
   - Enables users to sort the table columns in both ascending and descending order.

4. **User Selection:**
   - Allows users to select a specific user.

5. **View Single Post:**
   - Upon selection, calls the API: `https://jsonplaceholder.typicode.com/posts/{id}` to fetch and display data for the chosen post.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): This is included with Node.js. npm is used to manage project dependencies.

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/AlhanoufKMLz/roshn-assignment.git
```

2. Change into the project directory:

```bash
    cd roshn-assignment
```

3. Install dependencies:

```bash
    npm install
```

## Usage

1. Start the development server:

```bash
    npm start
```
This will open the application in your default web browser.

2. Explore the features such as tabular post view, pagination, sorting, and user selection.

## Projrct Structure

- src/components: Contains React components used in the application.
- src/pages: Contains React components representing different pages of the application.
- src/redux: Contains Redux-related files, including actions, reducers, and the Redux store setup.
- src/types: Defines TypeScript types used in the application.
- public: Contains the index.html file.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.