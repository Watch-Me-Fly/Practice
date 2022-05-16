CREATE DATABASE Music;

/*
    to create a data base where there are multiple tables :
        - work from the outside in (leaves of the tree before branches)
        - the less dependable then dependable.
*/

CREATE TABLE Artist (
    artist_id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    PRIMARY KEY(artist_id)
) ENGINE = InnoDB;

CREATE TABLE Album (
    album_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    artist_id INT,
    PRIMARY KEY (album_id),
    INDEX USING BTREE (title), -- logical key

/*
    In the following :
    establising arrow relationships between tables :
        the column artist_id in this table, references an column in 
        the artist table named artist_id
*/

    CONSTRAINT FOREIGN KEY (artist_id)
        REFERENCES Artist (artist_id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE Genre (
    genre_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY(genre_id),
    INDEX USING BTREE (name)
) ENGINE = InnoDB;

CREATE TABLE Track (
    track_id INT NOT NULL AUTO_INCREMENT, -- primary key
    title VARCHAR(255), -- logical key
    len INT, -- data
    rating INT, -- data
    count INT,  -- data
    
    album_id INT, -- foreign key
    genre_id INT, -- foreign key
    PRIMARY KEY (track_id), -- what is the primary
    INDEX USING BTREE (title), -- logical key
    
    /*
        linking track to album ad genre :
            - to inform sql about the workflow
    */
    CONSTRAINT FOREIGN KEY (album_id) REFERENCES Album (album_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FOREIGN KEY (genre_id) REFERENCES Genre (genre_id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

--- --- --- --- --- --- --- --- --- ---

INSERT INTO artist (name) values ('shakira');
INSERT INTO artist (name) values ('Pink');

INSERT INTO Genre (name) values ('pop');
INSERT INTO Genre (name) values ('pop rock');

/*
    this will assign it to the artist number 2, it will also work
        as a link to the artist, telling us it is coming from another 
        table
*/
INSERT INTO Album (title, artist_id) values ('Beautiful trauma', 2); 
INSERT INTO Album (title, artist_id) values ('laundy service', 1);

INSERT INTO Track (title, rating, len, count, album_id, genre_id) values ('about to rock', 5, 313, 0, 1, 2);
INSERT INTO Track (title, rating, len, count, album_id, genre_id) values ('whenever', 5, 207, 0, 2, 1);


--- --- --- --- --- --- --- --- --- --- 

/*
    the JOIN operation :
        - links across several tables as part of a select operation
            -- JOIN is between the 2 tables to link
            -- JOIN meaning we are getting info from both tables

        - must tell the JOIN 'how to use the keys' that make the connection between the tables using an 'ON clause'
            -- ON says in the following case:
                when, Album.artist_id = Artist.artist_id is true => connect them;
            -- When there is no ON clause : we will see all combinations of all rows

        result : 
        - shows me the names of cells instead of key numbers (for reading only)
        - there can be more than one album for an artist : many-to-one
*/



SELECT Album.title, Artist.name FROM Album JOIN Artist 
ON Album.artist_id = Artist.artist_id;

-- same as above:
SELECT Album.title, Artist.artist_id, Artist.artist_id, Artist.name
FROM Album JOIN Artist 
ON Album.artist_id = Artist.artist_id;

--example to connect 4 tables, and find 3 relationships :
SELECT Track.title, Artist.name, Album.title, Genre.name -- what we want to see
FROM Track JOIN Genre JOIN Album JOIN Artist -- the tables holding data
ON Track.genre_id = Genre.genre_id -- how tables are linked 3 relationships
AND Track.album_id = Album.album_id
AND Album.artist_id = Artist.artist_id;

