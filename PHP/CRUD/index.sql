create DATABASE courseraPDO;

-- GRANT / REVOKE command : used to give permission like select, all, execute to the user on database objects like tables, views, databases...

    -- (GRANT / REVOKE)+(ALL 'or other permission')+ON+(DATABASE)(.)(* "to indicate all")+TO+(USER 'from what adress eg : localhost or 127.0.0.1')+IDENTIFIED BY+(PASSWORD) 

GRANT ALL ON courseraPDO.* TO 'root'@'localhost' IDENTIFIED BY 'courseraPDO';

USE courseraPDO;

CREATE TABLE users (
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    email VARCHAR(128) NOT NULL,
    password VARCHAR(128) NOT NULL,
    index(email)
)ENGINE = InnoDB CHARSET = utf8;

