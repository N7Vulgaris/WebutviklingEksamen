# The Game Shelf

## Description
This project is my delivery for a Web development exam in Novermber 2022 as a part of my Bachelors degree.
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
- **View Page:** Displays all of the objects in the database. The `VideoGameService.ts` retrieves all the objects from the database using a `GET` request, which is then used by `VideoGameContext.tsx` to supply the data to the different pages in the project.  
These objects are then mapped into an array, and the objects are displayed on the page. This array can then be sorted or filtered based on user input.
<img width="735" height="380" alt="viewPage" src="https://github.com/user-attachments/assets/50a1a3fc-0fc2-4f22-abbc-5566df412c52" />

- **Quiz Page:** A simple multiple choice quiz. `quizQuestions.ts` stores all the questions and choices. At the end of the quiz, the user is shown how many correct answers they got.
<img width="735" height="380" alt="quizPage" src="https://github.com/user-attachments/assets/a200098e-1545-49cc-ab8d-240d36446607" />

- **Management Page:** This is where most of the CRUD operations are done. This page allows you to do three things:
1. Add a new game to the database using a `POST` request.
2. Update an existing object in the database using a `PUT` request.  
There is a bug where if you want to update an existing object, you still have to fill out all the fields, even the ones that you don't want to change. The application does not keep track of the previous fields, and will be given a default value if not specified.
4. Delete an object in the database using a `DELETE` request.
<img width="735" height="380" alt="managementPage" src="https://github.com/user-attachments/assets/d4eb09d0-225d-434d-812d-9ceea5bdf751" />


