# **Database Schema**

## `users`

| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | not null, primary key     |
| username    | string    | not null,                 |
| email       | string    | not null, unique          |
| created_at  | datetime  | not null                  |
| updated-at  | datetime  | not null                  |

## `posts`

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| content     | string    | not null              |
| userId      | integer   | not null, foreign key |
| created_at  | datetime  | not null              |
| updated-at  | datetime  | not null              |

* `userId` references `users` table

## `notes`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| content       | string    | not null              |
| userId        | integer   | not null, foreign key |
| postId        | integer   | not null, foreign key |
| created_at    | datetime  | not null              |
| updated-at    | datetime  | not null              |

* `userId` references `users` table
* `postId` references `posts` table

## `likes`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| userId        | integer   | not null, foreign key          | 
| postId        | integer   | foreign key                    |
| noteId        | integer   | foreign key                    |

* `userId` references `users` table
* `postId` references `posts` table
* `noteId` references `notes` table
