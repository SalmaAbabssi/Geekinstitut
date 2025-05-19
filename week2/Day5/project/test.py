from database import get_db_connection

def create_user(name : str , age : int , email : str):
    # Connect to the database
    conn = get_db_connection()
    # Connect cursor to the database
    cur = conn.cursor()

    # Execute the insert query
    cur.execute("INSERT INTO users (name, age, email) VALUES (%s, %s, %s) RETURNING id;", (name, age, email)) 
    user_id = cur.fetchone()[0]

    # Confermation
    # Commit the changes to the database
    conn.commit()

    cur.close()
    conn.close()

    return {"id": user_id, "name": name, "age": age, "email": email}

def get_user(user_id : int):
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("SELECT * FROM users WHERE id = %s;", (user_id,))
    user = cur.fetchone()

    cur.close()
    conn.close()

    return user or {"error": "user not found"}

def delete_user (user_id : int):
    # Connect to the database
    conn = get_db_connection()
    cur = conn.cursor()

    # Execute the delete query
    cur.execute("DELETE FROM users WHERE id = %s;", (user_id,))

    # Confermation
    conn.commit()

    # Check if any rows were deleted
    cur.close()
    conn.close()
    return {"message": "user deleted"}

def update_user(user_id: int, name: str, age: int, email: str):
    # Connect to the database
    conn = get_db_connection()
    # Connect cursor to the database
    cur = conn.cursor()

    # Execute the update query
    cur.execute("""
        UPDATE users SET name = %s, age = %s, email = %s WHERE id = %s RETURNING id, name, age, email;
    """, (name, age, email, user_id))
    user = cur.fetchone()

    # Confermation
    conn.commit()

    # close the cursor and connection
    cur.close()
    # close the connection
    conn.close()
    return user or {"error": "User not found"}

def get_all_users():
    conn = get_db_connection()
    cur = conn.cursor()

    # Fetch all users from the database 
    cur.execute("SELECT id, name, age, email FROM users;")
    users = cur.fetchall()

    # Close the cursor and connection
    cur.close()
    # Close the connection
    conn.close()
    
    if not users:
        return {"message": "No users founded"}
    
    return [{"id": user[0], "name": user[1], "age": user[2], "email": user[3]} for user in users]