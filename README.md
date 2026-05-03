# Next.js MySQL Items App

This project is developed as part of a technical assessment.  
It demonstrates a simple full-stack application using Next.js (SSR) and MySQL.

---

## 🚀 Features

- Server-side rendering (SSR)
- MySQL database integration
- Tailwind CSS styling
- NextUI components
- Pagination support (bonus requirement)
- Error handling for database connection and queries

---

## 🛠️ Tech Stack

- Frontend: Next.js (App Router), React
- Styling: Tailwind CSS
- UI Library: NextUI
- Backend: Next.js Server Components
- Database: MySQL
- Driver: mysql2

---

## 📦 Installation & Setup

1. Clone the repository  
git clone https://github.com/fuaadtarmizi/databaseAssessment.git  
cd databaseAssessment  

2. Install dependencies  
npm install  

3. Create environment file  

Create `.env.local` in root:  

DB_HOST=127.0.0.1  
DB_USER=root  
DB_PASSWORD=  
DB_NAME=sample_db  
DB_PORT=3306  

4. Setup MySQL database  

Run this SQL:  

CREATE DATABASE sample_db;  
USE sample_db;  

CREATE TABLE items (  
  id INT AUTO_INCREMENT PRIMARY KEY,  
  name VARCHAR(255),  
  description TEXT  
);  

INSERT INTO items (name, description) VALUES  
('Laptop', 'A powerful laptop for development work.'),  
('Mouse', 'Wireless mouse with ergonomic design.'),  
('Keyboard', 'Mechanical keyboard for fast typing.');  

5. Run the project  
npm run dev  

6. Open browser  
http://localhost:3000  

---

## ⚠️ Note

Database is not included.  
Please run the SQL script above to set it up locally.

---

## 👨‍💻 Author

Fuaad Tarmizi
