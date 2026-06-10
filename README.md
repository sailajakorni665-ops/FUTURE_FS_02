# Client Lead Management System (Mini CRM)

## Project Overview

The Client Lead Management System (Mini CRM) is a full-stack web application designed to help businesses manage customer leads efficiently. It allows administrators to store, view, update, and track leads generated through contact forms or other business channels.

This project demonstrates the implementation of CRUD operations, database integration, API development, and frontend-backend communication using modern web development technologies.

---

## Objectives

* Store customer lead information.
* Track lead status throughout the sales process.
* Manage follow-up notes.
* Provide a centralized dashboard for lead management.
* Understand real-world business workflows.

---

## Features

### Core Features

* Add new leads
* View all leads
* Update lead status
* Delete leads
* Store lead information in MongoDB
* Responsive dashboard interface

### Lead Information

Each lead contains:

* Name
* Email
* Source
* Status
* Notes
* Created Date

### Status Tracking

Leads can be tracked using:

* New
* Contacted
* Converted

---

##  Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Development Tools

* VS Code
* GitHub

---

##  Project Structure

mini-crm/

├── server.js

├── package.json

├── index.html

├── script.js

├── style.css

└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone Repository

git clone <your-github-repository-url>

cd mini-crm

### 2. Install Dependencies

npm install

### 3. Start MongoDB

Ensure MongoDB is running locally.

Default connection:

mongodb://127.0.0.1:27017/minicrm

### 4. Start Server

npm start

or

npm run dev

### 5. Open Application

Open index.html in your browser.

Server runs at:

http://localhost:5000

---

## 📡 API Endpoints

### Create Lead

POST /api/leads

### Get All Leads

GET /api/leads

### Update Lead

PUT /api/leads/:id

### Delete Lead

DELETE /api/leads/:id

---

## 📊 Future Enhancements

* JWT Authentication
* Admin Login Panel
* Search & Filter Leads
* Follow-up Management
* Analytics Dashboard
* Lead Conversion Reports
* Email Notifications
* Responsive Mobile Dashboard

---

##  Learning Outcomes

Through this project, I learned:

* REST API Development
* CRUD Operations
* MongoDB Integration
* Express.js Backend Development
* Frontend and Backend Communication
* Data Management Workflows
* Full Stack Application Development

---

##  Project Outcome

This Mini CRM simulates a real-world lead management system used by agencies, freelancers, startups, and businesses to manage potential clients and track conversions effectively.

---

##  Author

Developed as part of the Future Interns Full Stack Web Development Internship Program (Task 2 - Client Lead Management System).
