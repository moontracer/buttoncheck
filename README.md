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