# Pravesh Rana - Technical Salesforce Consultant Portfolio

A professional, responsive portfolio website built with pure HTML, CSS, and JavaScript. No build process required - perfect for GitHub Pages deployment!

## 🚀 Live Demo
[View Portfolio](https://pravesh242.github.io/pravesh-portfolio)

## 👨‍💻 About
Technical Salesforce Consultant specializing in:
- Lightning Web Components (LWC)
- Enterprise Salesforce Implementations  
- CPQ and Experience Cloud
- API Integrations and Automation
- Technical Team Leadership

## 🏢 Featured Client Work
- **Rippling** - Digital Experience & CTI Integration
- **Gusto** - Service Cloud Modernization
- **IPfolio** - IP Management Integrations  
- **Workday** - CPQ Implementation

## 🛠️ Built With
- Pure HTML5
- CSS3 with CSS Grid & Flexbox
- Vanilla JavaScript (ES6+)
- Inter Font from Google Fonts
- SVG Icons for performance
- Responsive Design (Mobile-First)

## 📁 File Structure
```
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Base styles and variables
│   ├── components.css      # Component-specific styles
│   └── responsive.css      # Responsive breakpoints
├── js/
│   └── main.js            # Interactive functionality
├── assets/
│   ├── logos/             # Company logos
│   │   ├── rippling.png
│   │   ├── gusto.svg
│   │   ├── workday.png
│   │   └── ipfolio.png
│   └── pravesh-headshot.png
└── README.md
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create GitHub Repository**
   ```bash
   # Create new repository at github.com/pravesh242/pravesh-portfolio
   ```

2. **Clone and Upload Files**
   ```bash
   git clone https://github.com/pravesh242/pravesh-portfolio.git
   cd pravesh-portfolio
   
   # Copy all files from this directory to your repository
   # Commit and push
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Your site will be available at: `https://pravesh242.github.io/pravesh-portfolio`

### Option 2: Netlify

1. **Drag & Drop Deployment**
   - Go to [netlify.com](https://netlify.com)
   - Drag the entire folder to deploy
   - Get instant live URL

2. **Git Integration**
   - Connect your GitHub repository
   - Auto-deploy on every push

### Option 3: Vercel

1. **Import Project**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with one click

### Option 4: Traditional Web Hosting

Simply upload all files via FTP to your web hosting provider's public_html or www folder.

## 🏃‍♂️ Local Development

No build process required! Simply:

1. **Open in Browser**
   ```bash
   # Open index.html in any web browser
   open index.html
   ```

2. **Local Server (Optional)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Then visit http://localhost:8000
   ```

## ✨ Features

- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Professional Layout**: Clean, modern, and portfolio-focused
- **Fast Loading**: Optimized images and minimal dependencies
- **SEO Friendly**: Semantic HTML and meta tags
- **Accessible**: WCAG compliant with proper ARIA labels
- **Contact Form**: Functional form with validation (easily connected to backend)
- **Smooth Animations**: Subtle transitions and hover effects
- **Print Friendly**: Optimized for PDF generation

## 🎨 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --bg-page: #2a2a2a;          /* Main background */
    --bg-card: #3a3a3a;          /* Card backgrounds */
    --text-primary: #ffffff;      /* Primary text */
    --text-secondary: #b0b0b0;    /* Secondary text */
    --accent-primary: #ffffff;    /* Accent color */
}
```

### Content
- **Personal Info**: Update `index.html` directly
- **Images**: Replace files in `assets/` folder
- **Sections**: Modify HTML structure as needed

### Styling
- **Layout**: Edit `css/components.css`
- **Responsive**: Adjust `css/responsive.css`
- **Base Styles**: Modify `css/styles.css`

## 🔧 Contact Form Integration

The contact form currently shows a demo. To connect to a real backend:

1. **Formspree** (Easiest)
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

2. **Netlify Forms**
   ```html
   <form name="contact" netlify>
   ```

3. **Custom Backend**
   - Update the `simulateFormSubmission` function in `js/main.js`
   - Point to your API endpoint

## 📧 Contact Information

- **Email:** pravesh242@gmail.com
- **LinkedIn:** [Pravesh Rana](https://www.linkedin.com/in/pravesh-rana-41aa3318)
- **Location:** Burnaby, British Columbia, Canada

## 📝 License

© 2024 Pravesh Rana. All rights reserved.

---

## 🚀 Quick Deploy Commands

```bash
# GitHub Pages deployment
git clone https://github.com/yourusername/pravesh-portfolio.git
cd pravesh-portfolio
# Copy files here
git add .
git commit -m "Deploy portfolio"
git push origin main
# Enable Pages in GitHub settings
```

**Your professional portfolio will be live in minutes!** 🎉
