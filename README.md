# 👜 Bagnest

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38BDF8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

> A simple and elegant product showcase website built for a small-scale bag-selling business — making it easy for customers to browse bags and instantly connect via WhatsApp or Instagram.

---

## 📖 The Story Behind Bagnest

My sister runs a small bag-selling business — buying bags in bulk and selling them to neighbours, relatives, and people in her network. Every day she had to manually upload each product to her WhatsApp status, which was time-consuming and repetitive.

**Bagnest** solves that. It's a clean product display website where she can showcase all her bags in one place, and customers can reach out to buy directly through WhatsApp or Instagram — in just one tap.

---

## 🌟 Features

### 👥 For Customers
- Browse all available bags in a clean card layout
- Each product card shows:
  - Product image
  - Product name
  - Dimensions (height, width) and other attributes
- **WhatsApp button** — opens a pre-written message with product details directly to the seller's WhatsApp
- **Instagram button** — shares the product image and info to the seller's Instagram

### 🔐 For Admin (Sister)
- Secret admin access — **triple-click on the Bagnest logo** to reach the login page
- Secure login with **username & password authentication**
- Full product management from the admin panel:
  - ➕ Add new products with multiple images and videos
  - ✏️ Update existing product details
  - 🗑️ Delete products

---

## 🛠️ Tech Stack

| Layer            | Technology                      |
|------------------|---------------------------------|
| Framework        | React 19                        |
| Language         | JavaScript                      |
| Styling          | Tailwind CSS v4                 |
| Build Tool       | Vite                            |
| Routing          | React Router v7                 |
| Animations       | GSAP v3, Motion v12             |
| Icons            | Heroicons, React Icons          |
| Containerization | Docker (multi-stage build)      |
| Server           | `serve` (static file server)    |

---

## 📦 Getting Started

### Prerequisites

- Node.js `>= 20.x`
- npm `>= 9.x`
- Docker (optional, for containerized run)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/bagnest.git

# 2. Navigate into the project
cd bagnest

# 3. Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_ADMIN_USERNAME=your_admin_username
VITE_ADMIN_PASSWORD=your_admin_password
VITE_WHATSAPP_NUMBER=91XXXXXXXXXX
VITE_INSTAGRAM_ID=your_instagram_id
```

> ⚠️ Never commit your `.env` file. Refer to `.env.example` for the required keys.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧰 Available Scripts

| Command            | Description                        |
|--------------------|------------------------------------|
| `npm run dev`      | Start the development server       |
| `npm run build`    | Create a production build          |
| `npm run preview`  | Preview the production build       |
| `npm run lint`     | Run ESLint checks                  |

---

## 📁 Project Structure

```
bagnest/
├── public/                  # Static assets (logo, favicon)
├── src/
│   ├── assets/              # Images and media
│   ├── components/          # Reusable UI components
│   │   ├── ProductCard/     # Card with image, attributes, WA & Insta buttons
│   │   └── Navbar/          # Top navigation with hidden admin trigger
│   ├── pages/
│   │   ├── Home.jsx         # Product listing page
│   │   ├── Login.jsx        # Admin login page
│   │   └── AdminPanel.jsx   # Add / Update / Delete products
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Helper functions (message builders, etc.)
│   ├── App.jsx              # Root component & routing
│   └── main.jsx             # Entry point
├── Dockerfile               # Multi-stage Docker build
├── .env.example             # Environment variable template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json
```

---

## 🐳 Docker

Bagnest includes a multi-stage Dockerfile for a lightweight production container.

### Build & Run with Docker

```bash
# Build the Docker image
docker build -t bagnest .

# Run the container
docker run -p 8080:8080 bagnest
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### How the Dockerfile Works

```dockerfile
# Stage 1 — Build the React app
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 — Serve the production build
FROM node:20
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
CMD ["serve", "-s", "dist", "-l", "8080"]
```

- **Stage 1** installs dependencies and builds the app using Vite
- **Stage 2** serves the `/dist` folder on port `8080` using `serve`

---

## 🔐 Admin Access

The admin panel is intentionally hidden to prevent casual discovery.

1. Go to the home page
2. **Click the Bagnest logo 3 times** — this redirects to the login page
3. Enter your admin credentials
4. You're in the admin panel — manage products freely

> ⚠️ Keep your admin credentials secure and never expose them in public repositories.

---

## 📱 How Sharing Works

Each product card has two action buttons:

- **WhatsApp Button** — Generates a `wa.me` link with the product image URL and a pre-written message (product name, dimensions, etc.) and opens it directly in WhatsApp
- **Instagram Button** — Opens Instagram with the relevant product info ready to share

This makes it effortless for customers to reach out and for the seller to respond quickly.

---

## 🌍 Browser Support

| Browser | Supported  |
|---------|------------|
| Chrome  | ✅ Latest  |
| Firefox | ✅ Latest  |
| Safari  | ✅ Latest  |
| Edge    | ✅ Latest  |

---

## 🤝 Contributing

This is a personal project built for family, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Built with ❤️ for my sister's bag business 👜

---

_Bagnest — Because every bag deserves a showcase._
