# Next.js Dashboard Application

This is my completed project from the **[Next.js App Router Course](https://nextjs.org/learn)** by Vercel.  
It’s a fully functional dashboard built with the latest Next.js **App Router** features.

## 🚀 Features
- **Next.js 14 App Router** for file-based routing
- **Server & Client Components**
- **Dynamic & Static Rendering**
- **API Routes with Route Handlers**
- **Data Fetching (Server Actions, Async/Await)**
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Authentication** with NextAuth.js
- **Protected Dashboard Pages**
- Interactive UI components:
  - Invoices table with pagination
  - Customer list
  - Revenue charts
  - Search functionality
  - Create/Edit/Delete invoices

## 📂 Project Structure
app/
├── dashboard/ # Protected pages (Customers, Invoices, Overview)
├── ui/ # Reusable UI components
├── lib/ # Data fetching & server actions
├── auth.ts # Authentication config
├── layout.tsx # Root layout
└── page.tsx # Home page

markdown
Copy
Edit

## ⚙️ Tech Stack
- [Next.js](https://nextjs.org/) – React Framework
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/) – Authentication
- [PostgreSQL](https://www.postgresql.org/) – Database
- [Vercel](https://vercel.com/) – Deployment

## 🔑 Environment Variables
Create a `.env` file in the root and add:
DATABASE_URL=your_database_url
AUTH_SECRET=your_auth_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret

bash
Copy
Edit

## 🛠️ Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
Install dependencies:

bash
Copy
Edit
npm install
Set up the .env file (see above).

Run the development server:

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

📦 Build & Deploy
bash
Copy
Edit
npm run build
npm start
Deploy easily to Vercel for free.

📜 License
This project is open-source under the MIT License.

yaml
Copy
Edit

---

If you want, I can also make a **shorter, portfolio-style version** so it looks more like your own project instead of just a course completion. That would be perfect for placements.






Ask ChatGPT

