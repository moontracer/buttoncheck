This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Things to work on:

considering removing the justify-content and
setting up a margin-left but it heavily depends
on the amount of content that ends up in this div and how
flexbox handles it

set parent width aka width of <a> to the width of the child element,
<img>

actually, is there even a reason to do this?
can't i actually just assign an onclick event
to the react image? ask someone about this.

NVM! I'M GOING TO USE REACT-ROUTER ANYWAYS! SET IT UP TOMORROW!

reduce space between elements in flexbox

### WEBSITE CHECKLIST
Registration Page = Figure out why button color is different on mobile than Chrome!
    For mobile "you agree to the rules" - add a modal which contains the rules of the webpage!
        Let's think about this one for a sec. How would I write a modal? The way I'm thinking about it is something like this:
        On click, a fixed div displays which contains the rules. The div is displayed until the user hits the X which closes the div. (I gotta do this after I clean up the app folders and whatnot!)
Let's revisit the main view and see what else needs to be made.

Login View - I don't have that yet! Let's do that right now.

React-Router-Dom Info:

Dynamic browser rendering - React Router keeps the URL up to date
as you navigate.

Router - renders the matching Route based on the Link that is pressed.

Switches look through the children Route elements and renders the one
whose path matches the URL. Switch is best used for multiple routes that you want to render once at a time.

React Router
--
Dynamically loaded pages that don't refresh

About component, Shop component, MainPage component, and a Nav component

from App.js, import everything! (About, Nav, etc.)

without react router: for example, if you do:
Nav
About
Shop

all of these components will be rendered but this isn't what you want.
What you want is for the component rendered to change depending on the route.

with react router:

you want to import BrowserRouter, Switch, and Route in the app.js

browserRouter allows you to handle routing, wrap any component you want routing functionality for in there

have router surround everything
<Router>
    <div>
    <Nav />
    <Route path="/about" component={About} />
    </div>
</Router>

now, if you go to the route you'll see the components rendered.

In an instance where you have a route for "/" but don't setup an exact path, if you have two routes like "/" and "/about", the homepage component will render on "/about" still.

When wrapped around a bunch of routes, the Switch will only render the first component that matches the URL. So for "/", "/about", and "/shop" if you enter "/about", "/" will be the component that is rendered.

If you use the exact keywords, it means that the component will only render when that path is exact.

In your nav - instead of <a> tag, you're going to import Link from
react-router-dom.

Wrap the <Link around the <li> and use the to parameter to specify
the route.

add styling for the <Link> too!

Creating dynamic routes!!!

Shop
with {useState} and {useEffect} from 'react'
    state holds API information
    effect runs fetch call after mount 

    when writing a fetch function, you can write an async function
    
    why would you use useState and/or useEffect instead of componentDidMount?

    <Route path="/shop/:id" />
    

Think about the app routing!


--
Alright, let's think about how we want to structure and organize this application and its routes. We have to make a checklist of everything I need to add and what
I need to work on.

We're going to start from top to bottom, first starting out with the navbar.

Skybound Arts      +      Menu

Menu contains Register, Sign In, and About.

I want to create my own form of of registration. I think it'd be nice because it'd give me more freedom and flexibility when it comes to things that I can use when creating users, etc.

---
So for the Nav view, I need to do the following:

Make Skybound Arts a <Link to ="/">

DECIDE ON PLUS VIEW (EVENTUALLY)

Make Register, Sign In, and About Link to's. I think it'd be better to have About as a full page rather than as a Modal.

Perhaps it'd be best to rename About as Rules because that's what it attempts to do.

On second thought, I really think that the Modal would be necessary.

That's it for this part of the app!
---
For the VOD List view, I need to do the following:

Fix characters dropdown
Add player 2 functionality
Add Link association with
    Characters (Clicking on image based on character dynamically routes to a character link containing all the character's VODs)
        Treat the P1 Character as a Button
    Players (Clicking on player name dynamically routes to a player link containing all the player's VODs)
    Event Name (Clicking on the Event Name dynamically routes to a link containing all the VODs from the event)
    Link association with PlayButton - PlayButton links to timestamped VOD
Report Modal

--
That's all the front-end changes that I need to make!!!

For starters, let's figure out how to make a modal.

That's one of today's goals!

Modal = current WIP (Ask Kris how it goes!)

---
Clean up the Nav next (everything besides Add View)
Then do Player 2 Functionality and Link Association



--
12/26 Update:

I like about being its own page - I think it's necessary!

Okay so what I can do with the about page is have it open in another browser tab when people access it via
the register page instead of moving them from the register page! This makes it so the only thing I need a modal
for probably is the Report functionality. I can just redirect people when they access the About from the
nav dropdown - no need for a modal at all!

need to make sykbound arts a <Link> - done!

Add styling for navMenu items. I think that the <Link> might be overwriting the <li>'s styling, see if assigning it
to the Link will fix things - done!

after this, try to add some functionality to the menu that makes it disappear when uses either:
click the x, click a menu item, or click anywhere outside of it. (i have an idea on how to do the first two 
but this third option sounds difficult to do...probably gonna have to look that functionality up.
)


VOD LIST VIEW WORK
DRAFT PLUS VIEW
BACKEND START

how do I fix this dropdown?

Fixed characters dropdown!
Adding in player 2 functionality rn.


--
add link association
Starting the backend.



Alright, let's give this some thought.

So I'm going to need two tables in this database.

The first table that I'm going to need is for the users, the second table that i'm going to need will be for the videos themselves.

The users table is going to be a lot easier to archive, because the only fields that I'm going to need are:
    Username
    Password
    Email
    Activated - boolean that determines whether or not the account has been activated via email.
    Use integer ID over GUID!
        When it comes to using integers, users can make inferences about what information is where.
        Do I want my URLs to be hackable by end users? What are my URLs going to even look like?
            Let's think about this one for a bit.
            So the following things are going to be updated in the URL when someone uses the site:
                Event Name
                Winner
                Character in general, regardless of player 1 or player 2
                Name of players, regardless of player 1 or player 2

Potentially having a Players table?!? Hmm....
    What would even be in this table?
        ID
        PlayerName
        PlayerCharacter

    In hindsight, I think this would work out really well. I can't really think of anything else to add to
    that table.

The awesome thing about this is that I can use email as a form of activation BUT the not-so-awesome thing about this is I have to wonder how I'm going to handle logging in. I think I can do something like:
    
    On second thought, it'd be WAY easier to do the method that's done by RedFox games. If I just have
    the user login via Email and Password, that would be WAY easier to do.

Okay, so TLDR:
    Logging in via Email and Password
    Users Table
        UserID
        Username
        Password
        Email
        Activated
    The big issue that I have with users is this. How will I handle logging in and logging out?
        Logging In:
            I think that this can be done by doing a GET request to the database, seeing if that email
            and password exists then signing the player in. Maybe this would be an asynchronous API call? I'm not too certain like how would the user STAY signed in? Would I have to set a boolean in the table that determines Online / Offline status?
        Logging Out: ?!?
    Players Table
        PlayerID
        PlayerName
        PlayerCharacter
    Events Table
        EventID
        EventName
    Videos Table
        What is this table going to contain?
        Event Name (references the Events Table)
        Winner  (This is going to be some Ghost data of sorts. The winner or loser will be displayed in the database but it won't be present in the actual UI like there won't be a Winner or Loser icon next to chaacters or anything of that sort.)
            Okay but here's the thing. So from the dropdown, the user will be able to select if they'd like either player 1 or player 2 as the winner. Say if Moon is set to player 1 and player 1 winner is selected.
            The program needs to be able to search for all the matches that have moon's playerID in it and if she won or not.
            Oh whoa can I have this be a foreign key that references either Player1's PlayerID or Player2's PlayerID?!? I think this would work out extremely well.
        Timestamp for Video. Smart to put timestamps / youtube links directly into database?
        How will I handle videos that are reported?!? I actually have no idea lmao
        Player1Name (how will I obtain this name?)
        Player2Name (how will I obtain this name?)
        Player1Character (how will I obtain this?)
        Player2Character (how will I obtain this?)

    Database Logging In / Logging Out
    Timestamps and Reports / Flags


You can save login sessions and require them to cancel one login session if they log in on another device
and just delete the login session completely when they're finished

---
Think about the things you'd want to store in the users table.
what informtion would I need to be able to access the database in general?



Flow of work would be something like this:
Create DB
connect DB with front end
when user creates account, store user information into DB
when user logs in, check if information entered matches a
database record.
if so, log them in. 


When it comes to the prototype of this site, The only thing that the user is going to be logged in for actually is adding entries to the website. For something like this, would cookies or saving login sessions be necessary? Hmm...I don't really think so.

--
why use post as a login form method instead of get?
set form action to auth? what are form acitons even?

express for handling sessions and HTTP requests
sessions package is used to determine if the user is logged in

--
Okay but why is logging in a post request instead of a get request?

set a session variable when login is successful
    it makes sense for the session variable to be a GUID
    session variable is stored in browser cookies?
check if that variable has been set to determine whether or not the user
is logged in
---
Working on backend


Authentication system
different auth flow

auth0 lets you support logging in via e-mail / password / or google oauth

auth tokens - sent by the server to client when the user authenticates themselves
auth token time limit?!?

signing in provides a id_token for profile info and access tokens (used by clients to access api)

create a new auth0 client, client id and domain can be found in tthe dashboard


so the api is created with c# / .net core?!?

how would I retrieve which user added that to the database? would i even want to store that?

little asp.net core book

---
Alright, let's think about what information is going to be stored via the API.

Something I'd like to look into storing in the database is the user who uploaded the content. I wonder if it's possible for me to do that but at the moment I'm uncertain.
    post-MVP, possibly?

Alright, let's look at the basic gist of everything that this API is going to contain and need.

--
Information that the API will contain:

Characters
	CharacterID GUID 
	CharacterName
Players
	PlayerID GUID
	PlayerName
Events
	EventID GUID
	EventName
Videos
	VideoID GUID
	Event Name (Foreign key, references event table)
	Player1Name (Foreign key, references players table)
	Player1Character (Foreign key, references characters table)
	Player2Name
	Player2Character
	VideoLink

steps took:
1. created all the models in an empty asp .net core project