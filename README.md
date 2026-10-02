# 📚 BookHub

BookHub is a responsive book discovery web application built with **Next.js, TypeScript, Tailwind CSS, and shadcn/ui**.

The application uses the **Open Library API** to allow users to explore books and view detailed information about each book.

## 🚀 Live Demo

https://bookhub-zeta-woad.vercel.app/

## 💻 GitHub Repository

https://github.com/Y0uss3f99/BookHub

## ✨ Features

* 📚 Browse and explore books
* 🔍 Search and discover books using Open Library
* 📖 Dynamic book details pages
* 📱 Fully responsive design
* 🧩 Reusable React components
* 💀 Loading skeletons for better user experience
* 🧭 Responsive navigation
* 🎨 Modern UI using Tailwind CSS and shadcn/ui
* ⚡ Fast performance with Next.js
* ☁️ Deployed with Vercel

## 🛠️ Technologies Used

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Open Library API**
* **Vercel**

## 📂 Project Structure

```text
BookHub/
├── app/
│   ├── aboutUs/
│   ├── book/
│   │   └── [id]/
│   ├── _components/
│   └── page.tsx
├── api/
│   └── bookCard.ts
├── public/
├── components/
├── package.json
├── next.config.ts
└── README.md
```

## 🔌 API

BookHub uses the **Open Library API** to retrieve book information.

Example endpoint:

```text
https://openlibrary.org/search.json?q=javascript&limit=20
```

The application uses information such as:

* Book title
* Author
* Cover image
* First publication year
* Book ID

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Y0uss3f99/BookHub.git
```

Navigate to the project:

```bash
cd BookHub
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## 📱 Responsive Design

The application is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

## 🎯 Project Goal

This project was built as part of my **10 Projects in 30 Days** challenge.

The goal is to strengthen my frontend development skills by building real-world projects with modern technologies and focusing on:

* Clean UI
* Responsive design
* API integration
* Component reusability
* TypeScript
* Modern Next.js development

## 👨‍💻 Author

**Youssef Mohamed**

Frontend Developer

GitHub: https://github.com/Y0uss3f99

---

⭐ If you like this project, feel free to give it a star!
