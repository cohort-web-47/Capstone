DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS follow;
DROP TABLE IF EXISTS "like";
DROP TABLE IF EXISTS save;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS pet;
DROP TABLE IF EXISTS profile;


create table if not exists profile
(
    profile_id               uuid primary key,
    profile_hash             char(97) not null,
    profile_email            varchar(128) not null unique,
    profile_username         varchar(32) not null,
    profile_activation_token char(32)

);

create table if not exists pet
(
    pet_id          uuid primary key,
    pet_profile_id  uuid not null,
    pet_breed       varchar(64),
    pet_image_url   varchar(256),
    pet_name        varchar(64),
    pet_personality varchar(16),
    pet_size        varchar(16),
    pet_type        char(3) not null,
    foreign key (pet_profile_id) references profile (profile_id)
);
CREATE INDEX ON pet(pet_profile_id);

create table if not exists post
(
    post_id        uuid primary key,
    post_pet_id    uuid not null,
    post_caption   varchar(3200) not null,
    post_image_url varchar(256),
    post_datetime  timestamp not null,
    foreign key (post_pet_id) references pet (pet_id)
);
CREATE INDEX ON post(post_pet_id);

create table if not exists comment
(
    comment_id       uuid primary key,
    comment_pet_id   uuid not null,
    comment_post_id  uuid not null,
    comment_caption  varchar(3200),
    comment_datetime timestamp,
    foreign key (comment_pet_id) references pet (pet_id),
    foreign key (comment_post_id) references post (post_id)

);
CREATE INDEX ON comment(comment_pet_id);
CREATE INDEX ON comment(comment_post_id);


create table if not exists "like"
(
    like_pet_id   uuid      not null,
    like_post_id  uuid      not null,
    like_datetime timestamp not null,
    foreign key (like_pet_id) references pet (pet_id),
    foreign key (like_post_id) references post (post_id),
    primary key (like_pet_id, like_post_id)

);
CREATE INDEX ON "like"(like_pet_id);
CREATE INDEX ON "like"(like_post_id);


create table if not exists save
(
    save_post_id    uuid      not null,
    save_profile_id uuid      not null,
    save_datetime   timestamp not null,
    foreign key (save_post_id) references post (post_id),
    foreign key (save_profile_id) references profile (profile_id),

primary key (save_post_id, save_profile_id)
);
CREATE INDEX ON save(save_post_id);
CREATE INDEX ON save(save_profile_id);



create table if not exists follow
(
    follower_pet_id uuid not null,
    followee_pet_id uuid not null,
    foreign key (follower_pet_id) references pet (pet_id),
    foreign key (followee_pet_id) references pet (pet_id),
    primary key (follower_pet_id, followee_pet_id)
);
CREATE INDEX ON follow(follower_pet_id);
CREATE INDEX ON follow(followee_pet_id);