# Andrés Muñoz - Personal Brand Website

Professional portfolio website for Andrés Muñoz, Principal DevOps Architect and Cloud Solutions Expert.

## Features

- **Modern Design**: Built with Next.js 15, React, and Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Performance**: Optimized images and fast loading times
- **Contact Form**: Functional contact form with email integration
- **CV Download**: Downloadable PDF resume

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment

This project is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the Next.js framework
3. The build settings are configured in `netlify.toml`
4. Deploy!

### Environment Variables

No environment variables are required for basic functionality.

## Project Structure

```
personal-brand/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Experience.tsx    # Experience section
│   ├── Projects.tsx      # Projects section
│   └── Contact.tsx       # Contact section
├── public/               # Static assets
│   ├── logos/           # Company logos
│   └── cv/              # CV PDFs
├── lib/                 # Utility functions
│   └── utils.ts         # Helper utilities
└── netlify.toml         # Netlify configuration
```

## Sections

1. **Hero**: Introduction with key metrics and CTAs
2. **About**: Core competencies and education
3. **Skills**: Technical skills categorized by domain
4. **Experience**: Professional experience with achievements
5. **Projects**: Notable projects with measurable impact
6. **Contact**: Contact information and form

## Customization

To customize the content:

1. Edit component files in the `components/` directory
2. Update metadata in `app/layout.tsx`
3. Replace logos in `public/logos/`
4. Update CVs in `public/cv/`

## License

© 2025 Andrés Muñoz. All rights reserved.

## Contact

- **Email**: andreco87@hotmail.com
- **Phone**: (203) 918-1392
- **LinkedIn**: [linkedin.com/in/andres-munoz](https://www.linkedin.com/in/andres-munoz)
- **Location**: Stamford, CT, USA
