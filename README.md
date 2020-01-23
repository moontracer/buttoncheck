The ButtonCheck is now known as Skybound Arts, which is a video archiving website created with HTML, CSS, JavaScript, React, C#, and ASP .NET Core.

This contains the front-end code that Skybound Arts has been written with.

By running `npm start`, the program will run on http://localhost:3000 and the view will be displayed in the browser.

Currently, the only view that this site has been optimized for is iPhone 6/7/8 Plus.

As the launch of this site comes closer (February 2020 release), this will certainly be
optimized for Desktop and other views - as well as utilizing a fully-functional backend.

## Issue List

1. Skybound Arts is a bit difficult to see as well as the font being really
small.
    Solution:
        *Make Skybound Arts transparent, add the word Match Finder under
        it as well as increasing the size of the + and menu icons.
        (Basically, just like Bungie's webpage)*

        ALSO ADD FORUM WORD

Next thing that I need to do is add the words match finder

2. Issues with Character Menu
    Solutions:
            *If the user clicks outside of the character menu's div, close
            the character menu.*
        On click, if the user selects an item from the character menu
        (how would I reflect this?)
            *Close the menu and replace the Player1Character selection with a character icon image.*
                Also, note that this would trigger an API request made to retrieve all videos containing said character in database. (But what if the user enters the name first and the character second?)

3. Fill event list with dbcontent (backend ToDo)

4. Winner?!? This I do not know how to handle, actually.
    p1 noir p2 moon
    or
    p1 moon p2 noir

    outcome should stay the same.
    (backend issue)
    i guess the important to do would be to assign winner to the player's
    db id?!? but idk.

5. When someone clicks character image on VOD list, trigger API request that retrieves all videos containing said character in database
6. When someone clicks player name, trigger API request that retrieves all videos containing said player in database.
7. Play button containing timestamp of video (Do I want youtube links as strings in my database? Is that okay?)
8. Report functionality (Still do not know how to handle this)


How am I going to handle this report functionality?

Email!!!


What's wrong with the video?
--
Usage of Hate Speech (Racism, Transphobia, etc.)
Incorrect Video Link / Video Unavailable
Other (Please elaborate below)

If other was selected or you'd like to elaborate on either of the above points, please feel the field below.


Submit

The main question that I have right now is this:

How will I know which video the user is reporting when they click that button? It's the thing that's currently tossing me for the biggest loop.


--
Semantic UI Dropdown
Create database
    (I should probably handle this tonight or tomorrow morning)


ReadME Update (1/20):

Database has been completed. The next task that I must do is hook up the database with my Entity Framework Application!

Next, I'm going to define all the requests that we're going to use for this API and backend.

So! We have the following tables: Characters, Events, Players, and Videos - plus I'm going to need CRUD functionality here (Create, Read, Update, Delete).

What aspects of the character functionality are important? Let's think about that here....
Create Character
    Well, I don't need to write an API call for this as this is something I will only handle in the database.
Get Character
    This will be used when the user submits a video.

    On second thought, I'm gonna say never mind and say that I stand corrected here actually. The user is going to be selecting either
    "Any Character" (BIG NOTE WRITE CODE FOR THAT - Not too sure on how I'm going to handle that right now but we'll see as the app develops) OR they'll be selecting a character from 1 of 11.

    So! To loop around and correct myself, this will be used when the user submits a video but not for verification purposes.

    This will also be used when the user attempts to search by character, it will grab all VODs featuring character X.

Update Character
    Not important and not relevant
Delete Character
    Not important and not relevant

Events
    Create Event
        Events will be created (if they don't exist) when the user submits a video
    Get Events
        When the user attempts to search by event name, it will grab all VODs tagged with event X.
    Update Events
        Not important and not relevant FOR NOW but I can always add this functionality later! This is post-MVP most definitely.
    Delete Events
        Not important and not relevant

Players
    Create Player
        Players will be created (if they don't exist) when the user submits a video
    Get Player
        When the user attempts to search by player name, it will grab all VODs featuring player X.
    Update Player
        Not impotant and not relevant atm, something I can just do from the backend if an issue arises.
    Delete Player
        Not important and not relevant

Videos
    Create Videos
        Of course users need the permission to do this!! Big part of the application.

        IMPORTANT TIDBIT ON UPDATING VIDEOS
        Hmmm....I dunno really. I think that I like the idea of not implementing this into the application right away and see what the reception and usage is like. I'm a bit wary that users will tamper with the website and I'd also have to look into who edited the site and made changes.

        This also calls to mind one other question I have.

        If I use Discourse as my SSO Provider, I wonder if it'd be possible for me to see the user who uploaded something to the website in the backend. Perhaps a UploadedUser field in the database? I wonder if that would be possible. I'll look into it after I get more of this backend stuff handled.

    Get Videos
        I can't really think of a reason why I would grab a video by its ID.
    Delete Videos
        Something that I'll handle from the backend directly with TSQL, not a frontend necessity atm.

So, this is the final list of API calls that I need / things I will use:

Create Videos (w/ UploadedUser post-implementation, perhaps an uploadDate column too so I can just present information like that? Hmm...)
Create Player (will be done when the user submits a video if the player doesn't already exist in the player database)
Get Player (user able to search by player name and find all VODs featuring player X - THis actually applies to 
the videos section, I'd have to do API searches that checks Player1Character then Player2Character for a name
)
Create Event (will be done when the user submits a video if the event doesn't already exist in the event database)
Get Event (will search the Videos table for all VODs tagged with event X)
GetCharacter (will search the Videos table for all VODs featuring character X)

Startup.cs
services provide your app functionality

in configureservices, dependencies are registered

configure sets up request pipeline

SkyboundController

move connection string in skyboundcontext out of optionsBuilder.UseSqlServer and to the appsettings.json

I think I'm going to need a different controller for each of my classes possibly? Hmm...

Yeah, that's the most ideal thing to do. One controller for each database table.

We're going to go with synchronous programming due to the fact that the operations themselves are rather simple, not taxing, and essential to the program's overall flow.

ActionResult retun type for each API CRUD action

Would I have to import a migration based on the current status of my database when doing a database first approach?

--

Okay!

Let's see all the routes that are going to be needed today.

DONE Search Videos By Character (VideosController)
DONE Create Event (EventController)
DONE Search Videos By Event Name (VideoController)
DONE Seearch Videos By Player Name (VideoController)
DONE Create Player (PlayerController)
Create Video (VideoController)

I believe that I'm gonna have to create one HTTP Get request for Video Controller and allow the user to pass in parameters.
Certain things will have to be taken into consideration though. For instance, which parameters will the user be able to search with, how will it be done, etc.?

_context.Events.Find()


hmmm

DONE on second thought, i am going to have to get all the events
DONE and all the players


DONE and all the characters

DONE Get all the characters
DONE Creating a character


because the user will access them when they load the webpage. Let's start with getting all the events first then backtracking.


There's 4 Database Tables:

Characters - simple table that has an ID and name for each of the characters in the video
    API options:
    - Get all the characters in the table. This command will be ran when the app is first loaded so users can choose to select
    the character they'd like to see videos of.
Events - simple table that has an ID and name for each event that a video is filmed at
    API options:
    - Get all the events. This command will also be ran when the app is first loaded so users can choose to select the event that they'd like to see videos from.
    - Create event. This command will be ran after the user creates a new video. If the video is tagged with an event that isn't in the database, it'll be added with this command. Otherwise, the attempt to add an event to this table will fail due to the Event's Name field having a Unique constraint.
Person - table featuring an ID and name for each person that's featured in the video
    API options:
    - Get all the people. This command will also be ran when the app is first loaded so users can choose to select which person they'd like to see videos from.
    - Create person. This command will be ran after the user creates a new video. If the video is tagged with a person that isn't in the database, it'll be added with this command. Otherwise, the attempt to add a person to this table will fail due to the Person's Name field having a Unique constraint.
Videos - table that contains the video links as well as metadata such as Events, People, etc. The most important table.
    API options:
    - Get All Videos. Ran when the app is first loaded.
    - Search videos by character. When the user selects a specific character they'd like to see videos of, the API loads all the entries in the table where the character name is the same one as the parameter
    -Search Videos By Person Name
    - Search Videos By Event Name
    Both of these API commands follow the same rule as Search Videos By Character
    Then there's simple create video and delete video commands.

The main question you posed to me - "can it not be one call?" makes me think I can create one Search command and have all of the parameters be optional, only searching based on parameters that the user sets. That'd be the best way to handle this right?

Alright, now that I have an idea on how I want to structure the API and think that's going to take a big bulk of the workload for the rest of the development cycle, I'm going to get the smaller yet important tasks such as making the page responsive and setting up the forum handled. First things first, let's look into responsive design and the forum.