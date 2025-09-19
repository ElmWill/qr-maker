# QR Code Generator App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-ready-blue?logo=docker)](https://www.docker.com/)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://react.dev/)

A simple web app to generate QR codes from links. Built with [Next.js](https://nextjs.org/) and Docker.

---

## 🚀 Features
- Input a link and generate a QR code  
- Download QR codes as PNG  
- Runs inside Docker for easy deployment  

---

## 📦 Tech Stack
- **Frontend/Backend**: Next.js (React + API routes)  
- **QR Code Library**: `qrcode`  
- **Containerization**: Docker  

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)  
- [Docker](https://www.docker.com/) (optional for containerized run)  
- Git  

### Installation
Clone the repo:
```bash
git clone https://github.com/yourusername/qr-code-generator.git
cd qr-code-generator
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

Docker
Build and run with Docker:

bash
Copy code
docker build -t qr-app .
docker run -p 3000:3000 qr-app
```
## 📖 Usage
Enter a link in the input field

Click Generate QR Code

Download the QR code as PNG
