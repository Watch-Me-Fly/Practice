CREATE DATABASE roster;

DROP TABLE IF EXISTS Member;
DROP TABLE IF EXISTS `User`;
DROP TABLE IF EXISTS Course;

CREATE TABLE `User` (
    user_id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE,
    -- ensures that all values in a column are different
    PRIMARY KEY (user_id)
) ENGINE=InnoDB CHARACTER SET=utf8;

CREATE TABLE Course (
    course_id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) UNIQUE,
    PRIMARY KEY (course_id)
) ENGINE=InnoDB CHARACTER SET=utf8;

CREATE TABLE Member (
    user_id       INTEGER,
    course_id     INTEGER,
    role          INTEGER,

    CONSTRAINT FOREIGN KEY (user_id) REFERENCES `User` (user_id)
      ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FOREIGN KEY (course_id) REFERENCES Course (course_id)
       ON DELETE CASCADE ON UPDATE CASCADE,

    PRIMARY KEY (user_id, course_id)
) ENGINE=InnoDB CHARACTER SET=utf8;

-- normalizing data
INSERT INTO `User` (name) VALUES ('Taliesin');
INSERT INTO `User` (name) VALUES ('Denver');
INSERT INTO `User` (name) VALUES ('Juwairiyah');
INSERT INTO `User` (name) VALUES ('Kainui');
INSERT INTO `User` (name) VALUES ('Zoya');
INSERT INTO `User` (name) VALUES ('Aisha');
INSERT INTO `User` (name) VALUES ('Artemis');
INSERT INTO `User` (name) VALUES ('Danna');
INSERT INTO `User` (name) VALUES ('Dennis');
INSERT INTO `User` (name) VALUES ('Tyler');
INSERT INTO `User` (name) VALUES ('Kirstin');
INSERT INTO `User` (name) VALUES ('Allisha');
INSERT INTO `User` (name) VALUES ('Carra');
INSERT INTO `User` (name) VALUES ('Idahosa');
INSERT INTO `User` (name) VALUES ('Iliana');

INSERT INTO `Course` (title) VALUES ('si106');
INSERT INTO `Course` (title) VALUES ('si110');
INSERT INTO `Course` (title) VALUES ('si206');

-- instructor = 1
-- learner = 0
INSERT INTO Member (user_id, course_id, role) VALUES (1, 1, 1);
INSERT INTO Member (user_id, course_id, role) VALUES (2, 1, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (3, 1, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (4, 1, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (5, 1, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (6, 2, 1);
INSERT INTO Member (user_id, course_id, role) VALUES (7, 2, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (8, 2, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (9, 2, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (10, 2, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (11, 3, 1);
INSERT INTO Member (user_id, course_id, role) VALUES (12, 3, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (13, 3, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (14, 3, 0);
INSERT INTO Member (user_id, course_id, role) VALUES (15, 3, 0);



-- display
SELECT User.name, Course.title, Member.role
FROM User JOIN Course JOIN Member 
ON User.user_id = Member.user_id 
AND Member.course_id = Course.course_id
ORDER BY Course.title, Member.role DESC, User.name; 