# DevDroid - Stack Overflow for Android Developers

## Task
Suppose that I am interested in the area of Android development. I like to browse and answer Stack Overflow questions that are related to Android. However, it is tedious to search for the relevant questions on Stack Overflow.

I would like to see the titles of the 10 newest Android-related questions and the 10 most voted Android-related questions posted in the past week, on one page. In this way I can easily keep track of the relevant questions. In addition, I would like to be able to read the full information of these questions in a convenient way.

In the next 48 hours, can you implement the following:

- Extracting from stackoverflow.com the 10 newest Android-related questions, as well as the 10 most voted Android-related questions that are created in the past week.
- Building a simple website that displays the titles of the extracted questions.
- Providing a convenient way of displaying the full question thread after I click on one of the titles.
- Adding a cool feature that you came up with yourself (please explain the feature in your documentation).

## How to Run
The live version of the app is hosted at https://tajkiatoma.github.io/devdroid/.

**Running Locally**: Everything required for the app is included in the repository. CDN urls are used for external libraries. To run the website in local machine, clone the repository and put all the contents in a web server. During development I have used `Live Server` extension of VS code as web server. 

## Features
- List views of the 10 newest Android-related questions and the 10 most voted Android-related questions are available in one page with tabbed view for imporved user experience. Each item of the list shows question title, question badges, date of the question being asked, vote and answer count. Clicking on the question will send the user to the question thread.
- The question thread includes the question and its answers. Along with the post body, each of the post includes it's vote and view count, tags, bounty, the author's avatar, name and reputation, post time and edit time.
- Attractive questions - Bountied and unanswered questions are displayed in attractive question page. The bountied questions are sorted by highest bounty and then by lowest number of answers. 10 newest unanswered questions are then displayed in ascending order of answer count. If a question is both bountied and unanswered, it is shown only with the bountied questions.  
Note that, unanswered questions are those for which there is no upvoted answers (according to stackoverflow).

## API Limitations
Stack Overflow API has been used to fethc data. The unregistered usage of the API allows 300 requests per day per client (tracked by IP).

