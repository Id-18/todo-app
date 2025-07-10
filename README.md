# 📝 MEAN Stack To-Do App

This is a responsive full-stack To-Do List web application built with the **MEAN stack** (MongoDB, Express, Angular, and Node.js). It supports complete CRUD operations (Create, Read, Update, Delete), search, sorting, pagination, toast messages, and modals with a clean light-themed UI.

---

## 🚀 Features

- ✅ Add, Edit, Delete tasks using modal popups
- ✅ Bootstrap Toast notifications on success
- ✅ Responsive UI (works on mobile, tablet, desktop)
- ✅ Pagination & Sorting (on Due Date & Priority)
- ✅ Search/filter tasks live
- ✅ Light color Bootstrap-based design

---



---

## ⚙️ Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Frontend   | Angular 16, Bootstrap |
| Backend    | Node.js + Express |
| Database   | MongoDB (Local or Atlas) |
| UI Design  | Bootstrap 5 (light theme) |

---

## 📸 Screenshots

| 📋 Task List | ➕ Add Task |
|--------------|-------------|
| ![TaskList](screenshots/screen-1.png) | ![AddTask](screenshots/screen-2.png) |

| ✏️ Edit Modal | 🗑️ Delete Modal |
|---------------|------------------|
| ![EditModel](screenshots/screen-3.png) | ![DeleteModel](screenshots/screen-4.png) |

## 🛠️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Id-18/todo-mean-app-
cd todo-mean-app


# Setup Backend

cd backend
npm install
node server.js

#Setup Frontend
cd ../frontend
npm install
ng serve
Then open: http://localhost:4200