# The Game Shelf

## Description
This project was my delivery for a Web development exam in Novermber 2022 as a part of my Bachelors degree.
The goal of the project was threefold:

-  Developing a Web API with a database. The database stores information about videogames and videogame characters.
-  A frontend solution that retrieves data from the Web API, and displays it in a meaningful and fun manner.
-   wwroot HTML page that that describes how to use the Web API, how to use the different endpoints and what data i available.

The general focus areas of the exam was:

- HTML and CSS3, responsive design with media queries and CSS Grid
- ReactJS
- .NET/C# Web API
- Ajax to connect ReactJS to the Web API
- Universal Design

## Technologies
**Frontend:**
- ReactJS + TypeScript
- Vanilla CSS3 + Bootstrap for styling
- Axios for making Ajax calls and CRUD commands to the database
- Media queries for making the frontend responsive. Example: The header changes from text to icons when the screen width is under 576 pixels.

**Backend:**
- .NET/C#

## Usage

The frontend consists of three pages:
- **View Page:** Displays all of the objects in the database. The `VideoGameService.ts` retrieves all the objects from the database using a `GET` request. These objects are then mapped into an array, and the objects are displayed on the page. This array can then be sorted or filtered based on user input.<img width="1470" height="760" alt="viewPage" src="https://github.com/user-attachments/assets/50a1a3fc-0fc2-4f22-abbc-5566df412c52" />

