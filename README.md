# Guru Prasath - Senior Developer Portfolio Website

A modern, responsive portfolio website showcasing professional experience, technical skills, and project achievements. Built with vanilla HTML5, CSS3, and JavaScript for optimal performance.

## 🎯 Features

- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Modern UI** - Clean, professional design with smooth animations
- ✅ **Fast Loading** - Static site with minimal dependencies
- ✅ **Contact Form** - Functional email form with validation
- ✅ **Smooth Navigation** - Easy navigation with sticky header
- ✅ **SEO Optimized** - Semantic HTML and meta tags
- ✅ **Accessible** - WCAG compliant with proper semantic markup
- ✅ **No Dependencies** - Pure HTML, CSS, and JavaScript

## 📁 Project Structure

```
AIPortfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet with responsive design
├── js/
│   └── script.js          # Interactive features and form handling
├── assets/                 # (Optional) Images and media
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Local Development

Open `index.html` in your web browser:
```bash
# Navigate to the project folder
cd AIPortfolio

# Open with Python's built-in server (recommended for testing)
python -m http.server 8000

# Then visit: http://localhost:8000
```

### 2. File Customization

Before deploying, update these files with your information:

**index.html:**
- Replace email addresses with your actual email
- Update phone number in contact section
- Update social media links (LinkedIn, GitHub, Twitter)
- Modify experience and projects as needed

**Contact Form Setup:**
1. Sign up for free at [Formspree](https://formspree.io)
2. Create a new form and get your form ID
3. In `js/script.js`, find this line:
   ```javascript
   const response = await fetch('https://formspree.io/f/xyzabc123', {
   ```
4. Replace `xyzabc123` with your Formspree form ID

## 📧 Contact Form Configuration

### Option 1: Formspree (Recommended)

**Pros:**
- Free tier: 50 submissions/month
- No backend needed
- Email notifications included
- Simple setup

**Setup:**
1. Go to [Formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form
4. Copy your form ID
5. Update the fetch URL in `js/script.js`

### Option 2: EmailJS

**Pros:**
- Free tier available
- Client-side email sending
- Works without backend

**Setup:**
1. Go to [EmailJS](https://www.emailjs.com)
2. Sign up and create a service
3. Get your Service ID, Template ID, and Public Key
4. Update the `js/script.js` with EmailJS configuration

### Option 3: Simple Mailto Link

For simplest setup, users click "Contact" and email client opens:
```html
<a href="mailto:your-email@example.com">Send Email</a>
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub account
2. Create a new repository named `yourusername.github.io`
3. Push your files to the repository
4. Your site will be live at `https://yourusername.github.io`

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Option 2: Netlify (Free & Powerful)

1. Go to [Netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Deploy! Site will be live in minutes

**Features:**
- Free SSL certificate
- Automatic deployments from Git
- Built-in form handling
- Custom domain support

### Option 3: Vercel (Free & Fast)

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy with one click

### Option 4: AWS S3 + CloudFront

For production-grade hosting:

1. Create S3 bucket
2. Enable static website hosting
3. Upload files
4. Set up CloudFront distribution
5. Configure custom domain (optional)

## ✨ Customization Guide

### Change Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0f3460;      /* Change this */
    --secondary-color: #16213e;
    --accent-color: #e94560;       /* Highlight color */
    --text-dark: #1a1a1a;
    --text-light: #ffffff;
    /* ... more variables ... */
}
```

### Update Logo/Branding

In `index.html`, change the navbar brand:

```html
<div class="nav-brand">
    <h1>Your Name Here</h1>
</div>
```

### Add Your Photo

Place a photo in `assets/images/` folder and reference in HTML:

```html
<img src="assets/images/profile.jpg" alt="Your Name">
```

### Modify Sections

Edit the content directly in `index.html`:
- Hero section (line 40-47)
- About section (line 50-90)
- Skills section (line 93-160)
- Experience section (line 163-250)
- Projects section (line 253-315)
- Education section (line 318-340)
- Contact section (line 343-405)

## 📱 Responsive Breakpoints

Website is optimized for:
- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🔍 SEO Optimization

Already included:
- Meta tags for description and keywords
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- Mobile viewport configuration
- Open Graph meta tags (optional - can be added)

To further improve SEO:
1. Add more specific keywords in meta description
2. Create a `robots.txt` file
3. Create a `sitemap.xml` file
4. Submit to Google Search Console

## 🚀 Performance Tips

1. **Optimize Images:**
   - Convert to WebP format
   - Compress before uploading
   - Use appropriate sizes

2. **Caching:**
   - GitHub Pages/Netlify handle this automatically
   - Set cache headers for static assets

3. **Minimize CSS/JS:**
   - Current files are already lean
   - Minify if needed for production

4. **Lazy Loading:**
   - Already implemented in `script.js`
   - Images load only when visible

## 🐛 Troubleshooting

### Contact Form Not Working

1. **Check Formspree ID:** Make sure form ID is correct in `js/script.js`
2. **Verify Email:** Confirm email is verified on Formspree
3. **Check Console:** Open browser DevTools (F12) and check for errors
4. **CORS Issues:** Formspree handles CORS, should work fine

### Mobile Menu Not Closing

- Usually works fine, check for conflicting CSS
- Clear browser cache and refresh

### Form Validation Errors

- Ensure email format is correct
- Check browser console for specific errors
- Verify all required fields are filled

## 📄 License

This portfolio template is free to use and modify for personal and professional use.

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review Formspree documentation
3. Check browser console for errors
4. Ensure all files are in correct folders

## 🎓 Learning Resources

- [HTML5 Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Formspree Documentation](https://formspree.io/docs/)

## 🎉 Next Steps

1. ✅ Customize all content with your information
2. ✅ Set up email form service (Formspree/EmailJS)
3. ✅ Test on mobile devices
4. ✅ Deploy to your chosen platform
5. ✅ Share your portfolio!

---

**Created:** February 28, 2026  
**Built with:** HTML5, CSS3, JavaScript (No frameworks)  
**Fully Static:** No backend or server required
