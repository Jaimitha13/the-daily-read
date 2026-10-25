
# The Daily Read 📚

The Daily Read is a modern, multi-page blog website built with **Next.js** and **React**. It allows readers to explore articles, search for content, browse categories, and read individual blog posts through a clean and user-friendly interface.

## Features

- **Home Page** - Discover the blog and explore content.
- **Articles Page** - Browse articles and search for content.
- **Category Filtering** - Find articles based on different categories.
- **Dynamic Category Pages** - View articles belonging to a specific category.
- **Individual Article Pages** - Read articles on dedicated pages.
- **About Page** - Learn about The Daily Read.
- **Navigation Bar** - Navigate easily between pages.
- **Responsive Design** - Clean layouts for different screen sizes.

## Technologies Used

- **Next.js** - React framework for routing and web application development.
- **React** - Component-based user interface development.
- **JavaScript** - Application logic and data handling.
- **CSS** - Styling and responsive layouts.
- **Git and GitHub** - Version control and project hosting.

## How It Works

The Daily Read uses the Next.js App Router to create separate pages for different sections of the website.

- **Routing:** Files inside the `app` directory define the website's routes.
- **Article Data:** Blog posts are stored in `lib/posts.js` and displayed on the relevant pages.
- **Search and Filtering:** Readers can search for articles and filter them by category.
- **Dynamic Routes:** Routes such as `/blog/[slug]` display individual articles, while `/categories/[category]` displays articles from a selected category.
- **Reusable Components:** Components such as the navigation bar and article explorer help organize the interface.
- **Global Styling:** `app/globals.css` provides shared styles for the website.

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

Replace `YOUR-USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR-USERNAME/the-daily-read.git
```

**2. Navigate to the project directory**

```bash
cd the-daily-read
```

**3. Install the dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

---

Built with Next.js and a passion for learning and creating.
