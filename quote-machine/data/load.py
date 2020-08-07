import json
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

DATABASE_URL = "postgres://localhost/quotes"
engine = create_engine(DATABASE_URL)
db=scoped_session(sessionmaker(bind=engine))

# open and load the json file
with open("new.json","r") as f:
    quotes = json.load(f)

# reset the database
db.execute("DELETE FROM quotes")
try:    
    db.commit()
except Exception as e:
    db.rollback()
finally:
    db.close()


# parse and load json to database
for data in quotes:
    print(data)
    db.execute("INSERT INTO quotes (id, quote, author) VALUES (:id, :quote, :author)", 
                {"id": data['id'], "quote": data['quote'], "author": data['author']})

# commit the change to the database
try:    
    db.commit()
except Exception as e:
    db.rollback()
    print(e)
finally:
    db.close()
