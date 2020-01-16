/*

USE SkyboundArts

CREATE TABLE dbo.Videos (
	VideoID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	VODEventID INT NOT NULL,
	FOREIGN KEY (VODEventID)
	REFERENCES dbo.Events(EventID),
	P1_NameID INT NOT NULL,
	P2_NameID INT NOT NULL,
	WinnerPlayer INT NOT NULL,
	FOREIGN KEY (P1_NameID, P2_NameID, WinnerPlayer)
	REFERENCES dbo.Players(PlayerID),
	P1_Character INT NOT NULL,
	P2_Character INT NOT NULL,
	WinnerCharacter INT NOT NULL,
	FOREIGN KEY (P1_Character, P2_Character, WinnerCharacter)
	REFERENCES dbo.Characters(CharacterID),
	VideoLink VARCHAR(100) NOT NULL
);

GO

*/

CREATE TABLE dbo.Videos (
	VideoID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Event_Name NVARCHAR(100) NOT NULL,
	FOREIGN KEY (Event_Name)
	REFERENCES dbo.Events(Name),

);

GO

/*
EventID and Name (Unique) for Events

players table - ?!? IDK! Look into this. Drop the players table and have it reference the Videos table.
	Gonna have two fields - PlayerID and Name. Name is going to be unique.

Characters table - two fields. CharacterID and Name. Make name unique.

A foreign key constraint does not have to be linked only to a primary key constraint in another table; 
it can also be defined to reference the columns of a UNIQUE constraint in another table.

Things that would be unique - (ex. Emails)
in this instance, what would be unique is a player's name?!?
	Revisit this.

So the thing that determines whether or not a player is in the players table is if they have been featured in a video
Meaning, that I was seeing things backwards. Instead of Videos referencing Players, Players should be referencing videos.

P1Char, P2Char, WinnerChar should all reference the Characters table
Multiple columns to reference the same foreign key - it'd make most sense to target by characterID
I think that I'd have to create 3 foreign keys

Another thing that would be unique - Events
	This means that instead of targeting EventID, you can directly use the event name
Another thing that would be unique - Video Links
	This means that Video Links can be unique in the Videos table

So we can have a table of player names right and 

So, from reading this - define FKs as unique and not null



CREATE TABLE dbo.Characters (
	CharacterID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
)

*/