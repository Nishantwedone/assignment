CREATE TABLE campaigns (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  company VARCHAR(255),
  campaign_id INTEGER REFERENCES campaigns(id),
  status VARCHAR(50),
  last_contact TIMESTAMP
);
