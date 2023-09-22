# **Database Schema**

## `users`

| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | not null, primary key     |
| username    | string    | not null,                 |
| email       | string    | not null, unique          |
| created_at  | datetime  | not null                  |
| updated_at  | datetime  | not null                  |
 
## `posts`

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| content     | string    | not null              |
| userId      | integer   | not null, foreign key |
| created_at  | datetime  | not null              |
| updated_at  | datetime  | not null              |

* `userId` references `users` table

## `notes`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key | 
| content       | string    | not null              |
| userId        | integer   | not null, foreign key |
| postId        | integer   | not null, foreign key |
| created_at    | datetime  | not null              |
| updated_at    | datetime  | not null              |

* `userId` references `users` table
* `postId` references `posts` table

## `likes`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| userId        | integer   | not null, foreign key          | 
| postId        | integer   | foreign key                    |


* `userId` references `users` table
* `postId` references `posts` table

