create database talaba;

create table if not exists admin(
    id serial primary key,
    username varchar(30),
    password varchar(64),
    status varchar(120) not null default 'activ'
);

create table if not exists course (
    id serial primary key,
    name varchar(64) not null,
    status varchar(30) not null default 'active'
);

create table if not exists student(
    id serial primary key,
    fullname varchar(30),
    phone varchar(15),
    year int not null,
    course_id int not null references course(id) on delete cascade,
    status varchar(30) not null default 'activ'
);

insert into admin(username, password) values('ali', 'b59c67bf196a4758191e42f76670ceba');

insert into course(name)values('NodeJS');
insert into course(name)values('Frontend');
insert into course(name)values('Go');
insert into course(name)values('Flutter');
insert into course(name)values('Android');

insert into users(username, password, phone, year, course, status) values('Ali', 'b59c67bf196a4758191e42f76670ceba', '998935206226', 1994, 3, 'admin' );
insert into users(username, password, phone, year, course, status) values('Burhon', '934b535800b1cba8f96a5d72f72f1611', '998907488782', 1995, 3, 'student');
 
insert into student(fullname, phone, year, course_id, status) values('Tolipov Abdulqodir', '998998515138', 2002, 3, 'activ');
insert into student(fullname, phone, year, course_id, status) values('Teshayev Shaxboz', '998914195596', 2002, 3, 'activ');
insert into student(fullname, phone, year, course_id, status) values('Doniyor Tolaganov', '998935918130', 2000, 4, 'activ');
insert into student(fullname, phone, year, course_id, status) values('Nurmuhammad Mahmudov', '+998909518012', 2001, 2, 'activ');
insert into student(fullname, phone, year, course_id, status) values('Zubair Salim', '+998940065500', 1999, 1, 'activ');
insert into student(fullname, phone, year, course_id, status) values('Ayyub Halimov', '+998946004939', 1999, 4, 'activ');
insert into student(fullname, phone, year, course_id, status) values('Muzakkir Sharipov', '+998990691000', 2001, 3, 'activ');
insert into student(fullname, phone, year, course_id, status) values('Zayd Saidov', '+998935455045', 2001, 4, 'activ');
insert into student(fullname, phone, year, course_id, status) values('Abdurouf Qaimov', '+998996959369', 1998, 3, 'activ');
insert into student(fullname, phone, year, course_id, status) values('Abdulloh Sobirov', '+998333930888', 1999, 2, 'activ');
insert into student(fullname, phone, year, course_id, status) values('MuhammadYusuf Jalolov', '+998983680110', 2001, 1, 'activ');