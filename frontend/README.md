# My Portfolio

A fully responsive and customizable developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. This portfolio showcases my work, skills, projects, and provides a contact form for potential clients or collaborators. It also supports **dark/light theme toggle** for better user experience.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Tech Stack](#tech-stack)  
3. [Installation & Setup](#installation--setup)  
4. [Customization](#customization)  
5. [Features](#features)  
6. [Contribution Guidelines](#contribution-guidelines)  
7. [License](#license)  
8. [Screenshots / Demo](#screenshots--demo)  
9. [Author](#author)

---

## Project Overview

This portfolio project is designed to showcase personal skills, projects, and contact information in a modern and interactive way. It includes responsive layouts, theme toggling, hover animations, and a contact form integrated with a backend API.

---

## Tech Stack

- **Frontend:** React.js  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion, React Simple Typewriter  
- **Icons:** React Icons  
- **Backend (optional for contact form):** Node.js / Express  
- **Version Control:** Git  

---

## Installation & Setup

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# 2. Install dependencies
npm install

# 3. Run the development server
npm start

# 4. Build for production
npm run build

# 5. Open http://localhost:3000 in your browser to view the portfolio.

## Customization

You can customize the portfolio by editing the configuration file `config/portfolioData.json`. This allows you to update your personal info, skills, projects, and contact details.  

**Skill Icons Mapping:**  

If you want to add new skills, the icons are mapped in the frontend using a predefined set. To ensure new skills display correctly:

- Open `Skills.js` in `components/`
- Update the `skillIcons` object with the new skill name and corresponding React Icon component
- Example format: `"Skill Name": IconComponent`

This ensures new skills added in `portfolioData.json` display with the correct icon and progress bar.

**Backend & Environment Variables (Optional for Contact Form)**

The contact form requires a backend server to send emails. In this project, a **serverless function** is used for sending emails via **Nodemailer**.  
You only need to update the fetching URL in the frontend if you host the backend separately which I already have implemented here (instead of using the default serverless function).


To enable the contact form on your deployment (e.g., Vercel), you need to add the following environment variables:

| Variable      | Description                              |
|---------------|------------------------------------------|
| `SMTP_HOST`   | SMTP server host (e.g., smtp.gmail.com)  |
| `SMTP_PORT`   | SMTP server port (e.g., 465 for SSL)    |
| `EMAIL_USER`  | Your email address used to send emails   |
| `EMAIL_PASS`  | Your email account password or app token |

**Steps:**

1. Go to your deployment platform (like Vercel).
2. Navigate to your project’s **Settings → Environment Variables**.
3. Add each variable with the appropriate value.
4. Redeploy your project for changes to take effect.

> **Note:** These environment variables are only needed for the contact form functionality. The frontend will work without them, but emails won’t be sent.



## Features

- Responsive design for desktop and mobile devices
- Light/Dark theme toggle
- Sections included:
  - Home (Introduction with typewriter effect)
  - About Me (Profile, bio, stats)
  - Projects (Filterable project gallery)
  - Skills (Skill levels with progress bars)
  - Contact (Contact info & form)
- Smooth animations using **Framer Motion**
- Customizable via a single `portfolioData.json` file
- Open-source and easily extendable

## Contribution Guidelines

> This project is open-source. Contributions are welcome!

# 1. Fork the repository
# 2. Create a new branch for your feature or fix
git checkout -b feature-name

# 3. Commit your changes
git commit -m "Add feature"

# 4. Push to your branch
git push origin feature-name

# 5. Open a Pull Request describing your changes


## Demo

https://my-portfolio-navy-mu-69.vercel.app/


##Author

Name: E A Vishmi Bhagya Edirisinghe
Email: vishmibhagya886@gmail.com
GitHub: https://github.com/vishmi11
LinkedIn: https://www.linkedin.com/in/vishmi-bhagya-757a32373

