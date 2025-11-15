# Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing projects, skills, and contact information. Features smooth animations, an interactive UI, and a functional contact form.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with dark theme
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Interactive Background**: Animated particle background using tsparticles
- **Responsive Layout**: Fully responsive design that works on all devices
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Display featured projects with links to demos and repositories
- **Skills Section**: Organized skill categories with visual cards
- **Intro Animation**: Engaging intro animation on page load

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Particles**: [@tsparticles/react](https://www.npmjs.com/package/@tsparticles/react)
- **Email**: [Nodemailer](https://nodemailer.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/ChaitanyaDhiman/my-portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
```

> **Note**: For Gmail, you'll need to generate an [App Password](https://support.google.com/accounts/answer/185833) if you have 2-Step Verification enabled.

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── about/          # About page
│   ├── api/
│   │   └── contact/    # Contact form API endpoint
│   ├── contact/        # Contact page
│   ├── projects/       # Projects showcase page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── about/          # About page components
│   ├── projects/       # Project-related components
│   ├── AnimatedBackground.tsx
│   ├── Avatar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── IntroAnimation.tsx
│   ├── Navigation.tsx
│   └── SocialLinks.tsx
├── public/             # Static assets
└── assets/             # Additional assets
```

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## 🌐 Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

| Variable | Description |
|----------|-------------|
| `EMAIL_USER` | Your Gmail address |
| `EMAIL_APP_PASSWORD` | Your Gmail App Password |

## 📝 License

This project is private and proprietary.

## 👤 Author

**Chaitanya Dhiman**

- Portfolio: [chaitanyadhiman.com](https://www.chaitanyadhiman.com/)
- GitHub: [@ChaitanyaDhiman](https://github.com/ChaitanyaDhiman)

---

Built with ❤️ using Next.js and TypeScript
