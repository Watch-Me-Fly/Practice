CREATE DATABASE MTM_classes;

CREATE TABLE Account (
    account_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE, -- logical key
    name VARCHAR(255),
    PRIMARY KEY (account_id)
) ENGINE=InnoDB character set=utf8;

CREATE TABLE Course (
    course_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) UNIQUE,
    primary key (course_id)
) ENGINE=InnoDB character set=utf8;

CREATE TABLE Member (
    -- there is no primary key, no auto-increment
    -- we have 2 foreign keys
    -- we also have constraints capturing the links between tables
    account_id integer,
    course_id integer,
    role integer,
    -- in role : 0 = student, 1 = instructor
    
    CONSTRAINT FOREIGN KEY (account_id) REFERENCES Account (account_id) 
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    
    CONSTRAINT FOREIGN KEY (course_id) REFERENCES Course (course_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    PRIMARY KEY (account_id, course_id) -- concatenated primary keys (comobination is unique, setting up an index to allow easier looking things up)

) ENGINE=InnoDB character set=utf8;

INSERT INTO Account (name, email) VALUES ('Jane', 'jane@example.com');
INSERT INTO Account (name, email) VALUES ('Ed', 'Ed@example.com');
INSERT INTO Account (name, email) VALUES ('Sue', 'Sue@example.com');

INSERT INTO Course (title) VALUES ('Python');
INSERT INTO Course (title) VALUES ('SQL');
INSERT INTO Course (title) VALUES ('PHP');

-- meaning that jane (holder of id = 1, is in course 1 = python, as role 1 = instructor)
INSERT INTO Member (account_id, course_id, role) VALUES (1, 1, 1);
-- meaning that Ed is in python course as well but as a student (role = 0)
INSERT INTO Member (account_id, course_id, role) VALUES (2, 1, 0);
INSERT INTO Member (account_id, course_id, role) VALUES (3, 1, 0);

INSERT INTO Member (account_id, course_id, role) VALUES (1, 2, 0);
INSERT INTO Member (account_id, course_id, role) VALUES (2, 2, 1);

INSERT INTO Member (account_id, course_id, role) VALUES (2, 3, 1);
INSERT INTO Member (account_id, course_id, role) VALUES (3, 3, 0);

SELECT Account.name, Member.role, Course.title
FROM Account JOIN Member JOIN Course
ON Member.account_id = Account.account_id
AND Member.course_id = Course.course_id
ORDER BY Course.title, Member.role DESC, Account.name;
-- meaning that title is the most important sort, then members roles, then account names

