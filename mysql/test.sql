DROP DATABASE IF EXISTS `store`;
CREATE DATABASE `store`;
USE `store`;

CREATE TABLE `game_gal` (
  `gal_id` INT NOT NULL AUTO_INCREMENT,
  `img1` varchar(50),
  `img2` varchar(50),
  `img3` varchar(50),
  `img4` varchar(50),

  PRIMARY KEY (`gal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `game_gal` VALUES (1, 'img1.1.jpg', 'img1.2.jpg', 'img1.3.jpg', 'img1.4.jpg');
INSERT INTO `game_gal` VALUES (2, 'img2.1.jpg', 'img2.2.jpg', 'img2.3.jpg', 'img2.4.jpg');
INSERT INTO `game_gal` VALUES (3, 'img3.1.jpg', 'img3.2.jpg', 'img3.3.jpg', 'img3.4.jpg');
INSERT INTO `game_gal` VALUES (4, 'img4.1.jpg', 'img4.2.jpg', 'img4.3.jpg', 'img4.4.jpg');
INSERT INTO `game_gal` VALUES (5, 'img5.1.jpg', 'img5.2.png', 'img5.3.jpg', 'img5.4.jpg');
INSERT INTO `game_gal` VALUES (6, 'img6.1.jpg', 'img6.2.jpg', 'img6.3.jpg', 'img6.4.jpg');
INSERT INTO `game_gal` VALUES (7, 'img7.1.jpg', 'img7.2.jpg', 'img7.3.jpg', 'img7.4.jpg');
INSERT INTO `game_gal` VALUES (8, 'img8.1.jpeg', 'img8.2.jpg', 'img8.3.jpeg', 'img8.4.jpg');
INSERT INTO `game_gal` VALUES (9, 'img9.1.jpg', 'img9.2.jpg', 'img9.3.jpg', 'img9.4.jpg');
INSERT INTO `game_gal` VALUES (10, 'img10.1.jpg', 'img10.2.jpg', 'img10.3.jpg', 'img10.4.jpg');
INSERT INTO `game_gal` VALUES (11, 'img11.1.jpg', 'img11.2.jpg', 'img11.3.jpg', 'img11.4.jpg');
INSERT INTO `game_gal` VALUES (12, 'img12.1.jpg', 'img12.2.jpg', 'img12.3.jpg', 'img12.4.jpg');
INSERT INTO `game_gal` VALUES (13, 'img13.1.jpg', 'img13.2.jpg', 'img13.3.jpg', 'img13.4.jpg');
INSERT INTO `game_gal` VALUES (14, 'img14.1.jpg', 'img14.2.jpg', 'img14.3.jpg', 'img14.4.jpg');
INSERT INTO `game_gal` VALUES (15, 'img15.1.jpg', 'img15.2.jpg', 'img15.3.jpg', 'img15.4.jpg');
INSERT INTO `game_gal` VALUES (16, 'img16.1.jpg', 'img16.2.jpg', 'img16.3.jpg', 'img16.4.jpg');
INSERT INTO `game_gal` VALUES (17, 'img17.1.jpg', 'img17.2.jpg', 'img17.3.jpg', 'img17.4.jpg');
INSERT INTO `game_gal` VALUES (18, 'img18.1.jpg', 'img18.2.jpg', 'img18.3.jpg', 'img18.4.jpg');
INSERT INTO `game_gal` VALUES (19, 'img19.1.jpg', 'img19.2.jpg', 'img19.3.jpg', 'img19.4.jpg');
INSERT INTO `game_gal` VALUES (20, 'img20.1.jpg', 'img20.2.jpg', 'img20.3.jpg', 'img20.4.jpg');
INSERT INTO `game_gal` VALUES (21, 'img21.1.jpg', 'img21.2.jpg', 'img21.3.jpg', 'img21.4.jpg');

CREATE TABLE `game` (
  `game_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `unit_price` DECIMAL(5,2) NOT NULL,
  `user_rating` ENUM('1', '2', '3', '4', '5') NOT NULL,
  `rating` ENUM('E', 'E-10', 'T', 'M') NOT NULL,
  `release_year` YEAR,
  `img` varchar(50),
  `game_imgs` INT,

  PRIMARY KEY (`game_id`),
  FOREIGN KEY (`game_imgs`) REFERENCES game_gal(`gal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `game` VALUES (1,'D.M.C. Devil May Cry',19.95, '4', 'M', 2013, 'img1.jpg', 1);
INSERT INTO `game` VALUES (2,'Fortnite', 0.00, '4', 'E-10', 2017, 'img2.jpg', 2);
INSERT INTO `game` VALUES (3,'Horizon Zero Dawn',14.95, '5', 'T', 2017, 'img3.jpg', 3);
INSERT INTO `game` VALUES (4,'Jack & Dexter',5.95, '4', 'E', 2001, 'img4.jpg', 4);
INSERT INTO `game` VALUES (5,'Jack 2',14.95, '4', 'T', 2003, 'img5.jpg', 5);
INSERT INTO `game` VALUES (6,'Jack 3',14.95, '5', 'T', 2004, 'img6.jpg', 6);
INSERT INTO `game` VALUES (7,'Kingdom Hearts', 19.95, '5', 'E', 2002, 'img7.jpg', 7);
INSERT INTO `game` VALUES (8,'Kingdom Hearts 2',19.95, '5', 'E-10', 2005, 'img8.jpeg', 8);
INSERT INTO `game` VALUES (9,'Minecraft',26.95, '5', 'E-10', 2011, 'img9.jpeg', 9);
INSERT INTO `game` VALUES (10,'Pokemon Legends: Arceus',59.95, '4', 'E', 2022, 'img10.jpeg', 10);
INSERT INTO `game` VALUES (11,'Ratchet & Clank',14.95, '4', 'T', 2002, 'img11.jpg', 11);
INSERT INTO `game` VALUES (12,'Ratchet & Clank',19.95, '4', 'E-10', 2016, 'img12.jpg', 12);
INSERT INTO `game` VALUES (13,'Ratchet & Clank: Going Commando',14.95, '4', 'T', 2003, 'img13.jpg', 13);
INSERT INTO `game` VALUES (14,'Ratchet & Clank: Size Matters',14.95, '4', 'E-10', 2007, 'img14.jpg', 14);
INSERT INTO `game` VALUES (15,'Ratchet & Clank: Up Your Arsenal',14.95, '5', 'T', 2004, 'img15.jpg', 15);
INSERT INTO `game` VALUES (16,'Ratchet: Deadlocked',14.95, '4', 'T', 2005, 'img16.jpg', 16);
INSERT INTO `game` VALUES (17,'Resident Evil: 4',19.95, '5', 'M', 2005, 'img17.jpg', 17);
INSERT INTO `game` VALUES (18,'Super Mario World',9.95, '5', 'E-10', 1990, 'img18.png', 18);
INSERT INTO `game` VALUES (19,'The Last of Us',19.95, '5', 'M', 2013, 'img19.jpg', 19);
INSERT INTO `game` VALUES (20,'The Witcher 3',19.95, '5', 'M', 2007, 'img20.jpg', 20);

CREATE TABLE `customer` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `admin` varchar(5),
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `customer` VALUES (1,'admin','account', 'admin@gmail.com', 'password', 'true');
INSERT INTO `customer` VALUES (2,'Jim','Halpert', 'something2@gmail.com', 'password', null);
INSERT INTO `customer` VALUES (3,'Stan','Little', 'something3@gmail.com', 'password', null);
INSERT INTO `customer` VALUES (4,'Frank','Necaise', 'something4@gmail.com', 'password', null);
INSERT INTO `customer` VALUES (5,'Debs','Jackson', 'something5@gmail.com', 'password', null);
INSERT INTO `customer` VALUES (6,'Ashley','Mc Clain', 'something6@gmail.com', 'password', null);
INSERT INTO `customer` VALUES (7,'Sabrina','Jefferson', 'something7@gmail.com', 'password', null);
INSERT INTO `customer` VALUES (8,'Aaron','Potter', 'something8@gmail.com', 'password', null);

CREATE TABLE `customer_game`(
    `customer_game_id` INT NOT NULL AUTO_INCREMENT,
    `account_id` INT NOT NULL,
    `game_owned` INT NOT NULL,
    PRIMARY KEY (`customer_game_id`),
    FOREIGN KEY (`game_owned`) REFERENCES game(`game_id`),
    FOREIGN KEY (`account_id`) REFERENCES customer(`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `customer_game` VALUES (1, 2, 7);
INSERT INTO `customer_game` VALUES (2, 3, 2);
INSERT INTO `customer_game` VALUES (3, 3, 3);
INSERT INTO `customer_game` VALUES (4, 4, 7);
INSERT INTO `customer_game` VALUES (5, 3, 4);
INSERT INTO `customer_game` VALUES (6, 2, 5);
INSERT INTO `customer_game` VALUES (7, 4, 6);



select * FROM customer_game AS cs
	JOIN customer ON cs.account_id = customer.customer_id
  JOIN game ON cs.game_owned = game.game_id; 

SELECT * FROM game AS g
   JOIN game_gal ON g.game_imgs = game_gal.gal_id;