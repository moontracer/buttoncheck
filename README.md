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

