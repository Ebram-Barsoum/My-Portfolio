# Ebram Barsoum — Portfolio

A personal portfolio showcasing my projects, skills, and experience as a Next.js and React.js developer.

🌐 **Live:** [https://ebram-barsoum.vercel.app/](https://ebram-barsoum.vercel.app/)

---

## Tech Stack

- **Framework** — Next.js 16 (App Router).
- **Language** — TypeScript.
- **Styling** — Tailwind CSS.
- **Animation** — GSAP.
- **Typing Animattion** — React typing animation.
- **Froms & Validation** — React-hook form & zod.
- **Email** — Nodemailer + React Email.
- **Deployment** — Vercel.

---

## Features

- Responsive design across all devices.
- Projects showcase with filteration.
- Contact form with client & server-side validation and email delivery.
- Smooth animations with GSAP & React typing animation.

---

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── features/
│ ├── about/
│ │ ├── components/
│ │ └── index.ts
│ ├── contact/
│ │ ├── actions/            # Server actions
│ │ ├── components/         # ContactForm component
│ │ ├── config/             # Nodemailer transporter
│ │ ├── emails/             # React Email templates
│ │ ├── hooks/              # useContact hook
│ │ ├── schema/             # Zod schema
│ │ ├── types/              # ContactState type
│ │ └── utils/              # sendEmail utility
│ ├── home/
│ │ ├── components/         # Component related to home
│ │ └── index.ts
│ └── projects/
│ ├── components/
│ └── index.ts
└── shared/
├── animation/              # GSAP animation wrapper.
├── config/                 # Navigation, projects filter, buttons, and social links.
├── data/                   # Education & projects & skills static data.
├── providers/              # theme provider
├── types/
└── ui/                     # Reusable UI Component across the entire project.
```

---

### Environment Variables

Create a `.env.local` file in the root:

```bash
SENDER_EMAIL=your_gmail@gmail.com
SENDER_PASSWORD=your_app_password
CONTACT_EMAIL=where_you_receive_emails@gmail.com
```

---

### Installation

```bash
git clone https://github.com/Ebram-Barsoum/My-Portfolio.git
cd My-Portfolio
npm install
```
