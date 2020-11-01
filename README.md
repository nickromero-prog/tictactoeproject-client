Wireframe URLs : https://i.imgur.com/SbDeuoO.jpg, https://i.imgur.com/jU5vi4r.jpg
List of technologies used : JavaScript, HTML, CSS, and an API run through heroku

Planning: first thing we needed to do was to set up the html structure with forms,
and then create the structure of the game with div tags. Most of the game will take place
within the structure of the event handlers held witihin games folder. Understanding
what the API needed for it's request was massive in how I set up my ajax requests
and how I used my event handler functions within the logic. Looking at the documentation
is big in how to structure the data-id tags and how to access those tags within
the JavaScript files. From there, I could set up logic to determine how to win, lose,
and tie based off the position of the data id tags.

User Stories:

As a  new user I need to be able to sign up
We need to set up a form and be able to submit the information to the api and
store the token in the store file so that we can access it among our other modules.

As a user I want to be able to sign in

I set up a seperate form for signing in using an ajax request to the api including
the authentication from signing up allowing the same user who signed up
to now be able to sign in

As a user I want to be able to change my password

I set a third form only available after a successful sign in, allowing a
user to change the password they used to sign in to a different one.

As a user I want to be able to see if I submitted correctly.

In order to reflect success or failure of the interactions with the forms,
I set up some functions using jquery to reply with a message with the correct
feedback depending on how they interacted with the form.

As a user I want to play the game

Added the boxes needed to play the game with bootstrap div tags
and touched them up with a color scheme and some extra special css properties.
I also added a ternary operator to the clickbox function in the events in order
to allow the current player variable to stay constant and the value change after each
click.
