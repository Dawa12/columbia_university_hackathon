-- BEGIN;

-- DROP TABLE IF EXISTS location;
-- DROP TABLE IF EXISTS testing;

-- CREATE TABLE location (
--   id SERIAL PRIMARY KEY,
--   appName VARCHAR NOT NULL,
--   host VARCHAR NOT NULL,
--   latitude FLOAT(10) NOT NULL,
--   longitude FLOAT(10) NOT NULL,
--   locTime TIMESTAMP DEFAULT current_timestamp
-- );

-- CREATE TABLE testing (
--   id SERIAL PRIMARY KEY,
--   appName VARCHAR NOT NULL,
--   host VARCHAR NOT NULL,
--   latitude FLOAT(10) NOT NULL,
--   longitude FLOAT(10) NOT NULL,
--   locTime TIMESTAMP DEFAULT current_timestamp
-- );


-- COPY testing (appName, host, latitude, longitude, locTime)
-- FROM '/Users/donaldhighe/Desktop/DTL/columbia_university_hackathon/db/location.csv' with (format csv, delimiter ',');

-- COMMIT;

BEGIN;

DROP TABLE IF EXISTS location;

CREATE TABLE location (
  id SERIAL PRIMARY KEY,
  appName VARCHAR NOT NULL,
  host TEXT NOT NULL,
  latitude VARCHAR NOT NULL,
  longitude VARCHAR NOT NULL,
  locTime TIMESTAMP DEFAULT current_timestamp
);

COPY location (appName, host, latitude, longitude, locTime)
FROM '/Users/admin/code/hackathon/columbia_university_hackathon/db/location.csv' with (format csv, delimiter ',');

COMMIT;
