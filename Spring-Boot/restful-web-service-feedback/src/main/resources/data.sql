insert into USER(user_id,username, email,password,category,section)
values(10001,'sunny', 'anurag@gmail', 'abc', 'student', 'A');

insert into USER(user_id, username, email,password,category,section)
values(10002,'anurag1', 'anurag@gmail', 'abcd', 'student', 'B');

insert into USER(user_id, username, email,password,category,section)
values(10003,'anurag2', 'anuragdhiman@gmail', 'd', 'teacher', 'C');

insert into USER(user_id, username, email,password,category,section)
values(10004,'anurag3', 'anuragdhiman@gmail', 'd', 'teacher', 'D');



--insert into ROLE(roleId,role)
--values(1, 'ADMIN');


insert into REVIEW(id,user_id, review,ratings,section)
values(1, 5, 'd', 'd', 'C');
