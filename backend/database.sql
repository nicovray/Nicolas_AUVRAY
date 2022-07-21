DROP DATABASE IF EXISTS creation;

CREATE DATABASE creation
    DEFAULT CHARACTER SET = 'utf8';

USE creation;

CREATE TABLE `projet` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category_id` int NOT NULL,
  `detail` varchar(1000),
  `image` varchar(255)
);

CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);


ALTER TABLE `projet` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);


INSERT INTO category (name) VALUES ("Perso"),("Wild"), ('Hackathon');


INSERT INTO projet (name, `category_id`, detail, image) VALUES
  ("Pick and Learn",1, "Création et administration d'un site web éco-conçu pour une formatrice freelance","/src/assets/picka.png"),
  ("Mutum",1,"Création de mon site Internet de freelance virtuel dans le cadre d'une formation Wordpress","/src/assets/mutum.png"),
  ("Gym Studio",2,"Création d'un site web mobile first et responsive.","/src/assets/gymstudio.png"),
	("MAP",2,"- Monuments, Art & Patrimoine. Partez à l'Aventure de la Culture !","/src/assets/map.png"),
  ("Avenir Franco-Ukrainien",2,"Site web de l'Association Avenir Franco-Ukrainien pour venir en aide aux victimes de la guerre.","/src/assets/fruk.png"),
	("I Have A Green",3,"Application de mise en relation à l'échelle locale permettant le partage et la transmission de savoir et de savoir-faire réduire notre impact environnemental.","/src/assets/ihaveagreen.png"),
  ("Ap'Seed",3,"Solution user-friendly et intuitive permettant de faciliter la collaboration des équipes, l'émergence de projets et la mobilisation de l'intelligence collective afin que ces projets deviennent de véritables solutions innovantes pour les équipes d'Apside et leurs clients.","/src/assets/apseed.png");