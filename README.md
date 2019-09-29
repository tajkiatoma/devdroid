# DevDroid - Stack Overflow for Android Developers
The live version of the app is hosted at https://tajkiatoma.github.io/devdroid/. 

## Task
Suppose that I am interested in the area of Android development. I like to browse and answer Stack Overflow questions that are related to Android. However, it is tedious to search for the relevant questions on Stack Overflow.

I would like to see the titles of the 10 newest Android-related questions and the 10 most voted Android-related questions posted in the past week, on one page. In this way I can easily keep track of the relevant questions. In addition, I would like to be able to read the full information of these questions in a convenient way.

In the next 48 hours, can you implement the following:

- Extracting from stackoverflow.com the 10 newest Android-related questions, as well as the 10 most voted Android-related questions that are created in the past week.
- Building a simple website that displays the titles of the extracted questions.
- Providing a convenient way of displaying the full question thread after I click on one of the titles.
- Adding a cool feature that you came up with yourself (please explain the feature in your documentation).

## How to Run
Everything required for the app is included in the repository. CDN urls are used for external libraries. To run the project in your machine, clone the project and put all the contents in a web server. During development I have used Live Server extension of VS code as web server.

## Features
- A list view of questions
- Questions and answers with user and post information are available in question thread
- Attractive questions - Bountied and unanswered questions displayed in attractive question page. The questions are sorted by highest bounty and then by lowest number of answers.

## API Limitations
Stack Overflow API has been used to fethc data. The unregistered usage of the API allows 300 requests per day per client (tracked by IP).

