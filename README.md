# 🧠 Blogpedia

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://blogpedia-six.vercel.app/)

**Blogpedia** is a community-driven platform for developers passionate about **AI**, **Full Stack**, and **MERN** technologies.  
It empowers users to **write**, **share**, and **engage** with insightful content on modern web and AI trends.

---

## 🚀 Features

- 📝 Write and publish technical blogs  
- 🔍 Search and explore blogs on AI, MERN, and Full Stack topics  
- 🔐 OAuth-based login using `next-auth`  
- 👤 User dashboard to manage your blogs  
- 🌐 Responsive design, mobile-first UX  

---

## 🛠️ Tech Stack

| Technology      | Description                                  |
|------------------|----------------------------------------------|
| **Next.js**     | React framework for production-ready apps     |
| **React.js**    | Core library for UI components                |
| **MongoDB**     | NoSQL database for blogs and user data        |
| **NextAuth.js** | Secure user authentication using OAuth        |
| **Tailwind CSS**| (If used) Utility-first CSS framework         |

---

## 📁 Project Structure

.
├── .vscode              # VS Code settings (optional)
├── app/                 # Next.js App Router pages & routes
│   ├── api/             # API routes (e.g., for auth, blog endpoints)
│   ├── blog/[id]/       # Dynamic blog view page
│   ├── create-blog/     # Create blog form/page
│   ├── profile/         # User profile pages
│   ├── update-blog/     # Blog update/edit page
│   ├── layout.jsx       # Global layout wrapper
│   ├── loading.jsx      # Loading skeleton/page
│   ├── not-found.jsx    # 404 not found page
│   └── page.jsx         # Root landing page (Homepage)
│
├── components/          # Reusable UI components (Navbar, BlogCard, etc.)
├── models/              # MongoDB schemas/models (e.g., Blog, User)
├── public/              # Static files (images, icons, etc.)
├── styles/              # CSS/Tailwind/global styles
├── utils/               # Utility functions (e.g., formatters, helpers)
├── .gitignore           # Git ignored files
└── README.md            # Project documentation


---
## 📦 Installation

```bash
git clone https://github.com/Sundareeshwaran/blogpedia.git
cd blogpedia
npm install
