insert into USER(user_id, username, email,password,category,section)
values(10001,'anurag1', 'anurag@gmail', 'd', 'admin', '');

insert into USER(user_id, username, email,password,category,section)
values(10002,'anurag2', 'anuragdhiman@gmail', 'd', 'teacher', 'C');

insert into USER(user_id, username, email,password,category,section)
values(10003,'anurag3', 'anuragdhiman@gmail', 'd', 'teacher', 'C');

insert into USER(user_id, username, email,password,category,section)
values(10010,'anurag9', 'anuragdhiman@gmail', 'd', 'teacher', 'D');

insert into USER(user_id, username, email,password,category,section)
values(10006,'sunny1', 'anuragdhiman@gmail', 'd', 'student', 'C');

insert into USER(user_id, username, email,password,category,section)
values(10004,'anurag4', 'anuragdhiman@gmail', 'd', 'student', 'D');

insert into USER(user_id, username, email,password,category,section)
values(10005,'anurag5', 'anuragdhiman@gmail', 'd', 'student', 'D');

insert into USER(user_id, username, email,password,category,section)
values(10007,'anurag6', 'anuragdhiman@gmail', 'd', 'student', 'A');

insert into USER(user_id, username, email,password,category,section)
values(10008,'anurag7', 'anuragdhiman@gmail', 'd', 'student', 'B');

insert into USER(user_id, username, email,password,category,section)
values(10009,'anurag8', 'anuragdhiman@gmail', 'd', 'student', 'A');



--Insert into Review table
insert into REVIEW(id,user_id, review,section,question1,question2,question3,question4,question5)
values(1, 5, 'You are smart', 'A',1,'','','','');

insert into REVIEW(id,user_id, review,section,question1,question2,question3,question4,question5)
values(2, 6, 'You are awesome','B','',1,'','','');

insert into REVIEW(id,user_id, review,section,question1,question2,question3,question4,question5)
values(3, 7, 'You are great','C','','',1,'','');

insert into REVIEW(id,user_id, review,section,question1,question2,question3,question4,question5)
values(4, 8, 'You are good','D','','','',1,'');

insert into REVIEW(id,user_id, review,section,question1,question2,question3,question4,question5)
values(5, 9, 'You are cool','A','','','','',1);
