CREATE DATABASE cineplanet;
use cineplanet;

drop table if exists premieres;
drop table if exists candystore;

create table premieres(
  id int(11) not null auto_increment primary key,
  description varchar(50) not null,
  image varchar(150) not null
);

create table candystore(
  id int(11) not null auto_increment primary key,
  name varchar(150) not null,
  description varchar(50) not null,
  price float not null
);

insert into premieres(description,image) 
values
("Acción","3925c0ea3a23654c9fb977e931649d82.jpg"),
("Comedia","1617855911_622089_1617856002_sumario_normal.jpg"),
("Ciencia Ficción","e7b670c72cd5a8a683dc9f6c05db801e.jpg"),
("Animes","movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg"),
("Terror","3925c0ea3a23654c9fb977e931649d82.jpg"),
("Drama","poster-peliculas-terror-2019-prodigy-1578395572.jpg");

insert into candystore(name,description,price) 
values
("D_NQ_NP_845031-MPE25556131302_052017-O.jpg","Cancha regular",10.00),
("D_NQ_NP_845031-MPE25556131302_052017-O.jpg","Cancha mediana",15.00),
("D_NQ_NP_845031-MPE25556131302_052017-O.jpg","Cancha regular",30.00),
("images_1.jpg","Combo",10.00),
("images_2.jpg","Combo",15.00),
("7d0c665f-75a4-48b6-b67f-b27450e20e83.jpg","Combo duo",19.90),
("images_4.jpg","Combo",18.70);