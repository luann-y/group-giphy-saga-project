-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

CREATE TABLE "favorites" (
 "id" VARCHAR (100) NOT NULL,
 "name" VARCHAR (100) NOT NULL,
 "url" VARCHAR,
 "category_id" integer DEFAULT 0
);
-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:

-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.

INSERT INTO favorites (id, name, url) 
VALUES 
  ('adk34jker43kt', 'Test Image 1', 'https://example.com/image1.gif'),
  ('jdkha8e7t39efhgp','Test Image 2', 'https://example.com/image2.gif'),
  ('af89rhfh39jf','Test Image 3', 'https://example.com/image3.gif');
