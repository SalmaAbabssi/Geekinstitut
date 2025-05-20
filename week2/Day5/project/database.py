import psycopg2

DATABASE_URL = "postgresql://postgres:S%40lma@localhost:5432/apiusers"

#fast api connect to postgreSQL.
def get_db_connection():
    return psycopg2.connect(DATABASE_URL)

def create_table():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL ,
                age INTEGER NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL 
            )
    """)
pip install fastapi uvicorn sqlalchemy asyncpg psycopg2-binary python-jose passlib
    # Commit the changes
    conn.commit()

    # Close the cursor and connection
    cur.close()
    # Close the connection
    conn.close()

create_table()