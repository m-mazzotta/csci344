-- Exercise 1 (done for you): Selecting all columns
SELECT * FROM users;



-- Exercise 2 (done for you): Selecting some columns
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3: Sorting
SELECT id, first_name, last_name FROM users order by last_name;



-- Exercise 4: Filtering
SELECT id, user_id, image_url FROM posts WHERE user_id = 26;



-- Exercise 5: Filtering with logical operators
SELECT id, user_id, image_url FROM posts WHERE user_id = 26 or user_id = 12;
--or where user_id in (26, 12)



-- Exercise 6: Using functions in a select statement
SELECT count(*) from posts;



-- Exercise 7: Aggregating data
select user_id, count(*) from posts group by user_id;



-- Exercise 8: Joining: two tables
--when want to ask question that can't be answered by only one table
select posts.id, posts.image_url, posts.user_id from posts join users on post.user_id = users.id
where users.first_name = 'Nicholas' or users.first_name = 'Rebecca';



-- Exercise 9: More joining practice: two tables
--all of the posts that belong to any of these users
select posts.id, post.pub_date, posts.user_id from posts join following on posts.user_id = following.following_id
where following.user_id = 26;





-- Exercise 10: More joining practice: three tables (Optional)
SELECT posts.id, posts.pub_date, following.following_id, users.username FROM posts
JOIN following ON posts.user_id = following.following_id JOIN users ON posts.user_id = users.id
WHERE following.user_id = 26 ORDER BY posts.pub_date DESC;



-- Exercise 11: Inserting records
insert into bookmarks (user_id, post_id, timestamp)
values (26,219, now());



-- Exercise 12: Deleting records
delete from bookmarks where user_id = 26 and post_id = 219;

delete from bookmarks where user_id = 26 and post_id = 220;

delete from bookmarks where user_id = 26 and post_id = 221;



-- Exercise 13: Updating records
update users set email = 'knick2022@gmail.com' where id = 26;



-- Exercise 14: More Querying Practice (Optional)
select posts.id, posts.caption, count(comments.id) as comment_count
from posts left join comments on posts.id = comments.post_id where posts.user_id = 26
group by posts.id, posts.caption;