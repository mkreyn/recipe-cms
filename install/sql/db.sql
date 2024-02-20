
DROP TABLE IF EXISTS recipe_ingredients_bundled;
DROP TABLE IF EXISTS recipe_ingredients;
DROP TABLE IF EXISTS user_recipes_favorites;

DROP TABLE IF EXISTS recipe_ratings;
DROP TABLE IF EXISTS recipe_photos;



DROP TABLE IF EXISTS cuisines;
DROP TABLE IF EXISTS logs;

DROP TABLE IF EXISTS recipe_comments;
DROP TABLE IF EXISTS recipe_steps;


DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS recipe_levels;
DROP TABLE IF EXISTS recipe_categories;
DROP TABLE IF EXISTS roles;

DROP TABLE IF EXISTS permissions;

CREATE TABLE roles (
    id int unsigned not null auto_increment primary key,
    role_name varchar(10) character set utf8 not null
);

CREATE TABLE permissions (
    id int unsigned not null auto_increment primary key,
    permission_name varchar(50) character set utf8 not null
);

CREATE TABLE recipe_levels (
    id int unsigned not null auto_increment primary key,
    level_name varchar(20) character set utf8 not null
);

CREATE TABLE recipe_categories (
    id int unsigned not null auto_increment primary key,
    parent_id int unsigned default 0,
    category_name varchar(50) character set utf8 not null,
    category_description mediumtext character set utf8 default ''
);

CREATE TABLE cuisines (
    id int unsigned not null auto_increment primary key,
    cuisine_name varchar(50) character set utf8 not null
);


CREATE TABLE recipes (
    id int unsigned not null auto_increment primary key,
    recipe_category_id int unsigned not null,
    cuisine_id int unsigned not null,
    title varchar(60) character set utf8 not null,
    recipe_level_id int unsigned not null,
    preparation_time time,
    cooking_time time not null,
    total_time time not null,
    servings int unsigned not null,
    yield int unsigned not null,
    steps_count int unsigned not null,
    recipe_ratings_count int unsigned default 0,
    recipe_general_note int unsigned default 0,
    recipe_count_5_notes int unsigned default 0,
    recipe_count_4_notes int unsigned default 0,
    recipe_count_3_notes int unsigned default 0,
    recipe_count_2_notes int unsigned default 0,
    recipe_count_1_notes int unsigned default 0,
    foreign key (recipe_level_id)  references recipe_levels (id),
    foreign key (recipe_category_id) references recipe_categories (id)
);

CREATE TABLE recipe_steps (
    id int unsigned not null auto_increment primary key,
    recipe_id int unsigned not null,
    step mediumtext character set utf8 not null,
    foreign key (recipe_id) references recipes (id)
);

CREATE TABLE recipe_ingredients (
    id int unsigned not null auto_increment primary key,
    ingredient varchar(50) character set utf8 not null
);

CREATE TABLE recipe_ingredients_bundled (
    id int unsigned not null auto_increment primary key,
    recipe_id int unsigned not null,
    ingredient_id int unsigned not null,
    foreign key (recipe_id) references recipes(id),
    foreign key (ingredient_id) references recipe_ingredients (id)
);


CREATE TABLE users (
    id int unsigned not null auto_increment primary key,
    role_id int unsigned not null,
    user_name varchar(40) character set utf8 not null,
    user_login varchar(15) character set utf8 not null,
    user_password varchar(100) character set utf8 not null,
    user_email varchar(50) character set utf8 not null,
    user_date_registered date,
    user_last_visit_date date,
    user_recipes_count int default 0,
    foreign key (role_id) references roles (id)
);

CREATE TABLE recipe_comments (
    id int unsigned not null auto_increment primary key,
    recipe_id int unsigned not null,
    comment_user_id int unsigned not null,
    comment_date datetime not null,
    comment_title varchar(100) character set utf8 not null,
    comment_text mediumtext character set utf8 not null,
    comment_rating int unsigned default 0,
    foreign key (recipe_id) references recipes (id),
    foreign key (comment_user_id) references users (id)
);

CREATE TABLE logs (
    id int unsigned not null auto_increment primary key,
    log_date datetime not null,
    log_user_id int unsigned not null,
    log_message mediumtext character set utf8 not null,
    foreign key (log_user_id) references users (id)
);

CREATE TABLE user_recipes_favorites (
    id int unsigned not null auto_increment primary key,
    user_id int unsigned not null,
    recipe_id int unsigned not null,
    foreign key (user_id) references users (id),
    foreign key (recipe_id) references recipes (id)
);

CREATE TABLE recipe_ratings (
    id int unsigned not null auto_increment primary key,
    recipe_id int unsigned not null,
    user_id int unsigned not null,
    rating int default 0,
    foreign key (recipe_id) references recipes (id),
    foreign key (user_id) references users (id)
);

CREATE TABLE recipe_photos (
    id int unsigned not null auto_increment primary key,
    recipe_id int unsigned not null,
    photo_original_file_name varchar(100) character set utf8 not null,
    photo_file_name varchar(100) character set utf8 not null,
    photo_file_extension varchar(5) character set utf8 not null,
    foreign key (recipe_id) references recipes (id)
);

