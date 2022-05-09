CREATE DATABASE trackRecords;

/*
    to create a data base where there are multiple tables :
        - work from the outside in (leaves of the tree before branches)
        - the less dependable then dependable.
*/

CREATE TABLE Artist (
    artist_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
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
        the column artist_id in this table, references an column in the artist table named artist_id
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
    
    album_id INT,
    genre_id INT,
    PRIMARY KEY (track_id),
    INDEX USING BTREE (title),
    
    CONSTRAINT FOREIGN KEY (album_id) REFERENCES Album (album_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FOREIGN KEY (genre_id) REFERENCES Album (genre_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
) ENGINE = InnoDB;