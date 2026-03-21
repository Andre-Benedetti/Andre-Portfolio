/*--------------------------------------------------------------
# Google Fonts
--------------------------------------------------------------*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Raleway:wght@700&family=Roboto:wght@400;700&display=swap');

/*--------------------------------------------------------------
# Global Reset & Variables
--------------------------------------------------------------*/
:root {
  --default-font: "Roboto", sans-serif;
  --heading-font: "Raleway", sans-serif;
  --nav-font: "Poppins", sans-serif;
  
  /* Primary Colors based on your professional profile */
  --header-bg: #f4f4f4;         /* Light gray top bar */
  --nav-btn-bg: #000000;       /* Solid black buttons */
  --nav-btn-text: #e0e0e0;     /* Light gray text */
  --nav-btn-hover: #444444;    /* Dark gray hover */
  --accent-blue: #000000;      /* Solid black for name and icons */
}

body {
  margin: 0;
  font-family: var(--default-font);
  background-color: #ffffff;
  color: #333;
}

/*--------------------------------------------------------------
# Header & Navigation (Fixed to match your screenshots)
--------------------------------------------------------------*/
.header {
  background-color: var(--header-bg) !important;
  border-bottom: 2px solid #000 !important;
  padding: 15px 0;
  width: 100%;
}

.header .logo h1 {
  margin: 0;
  font-family: var(--heading-font);
  font-size: 24px;
  font-weight: 700;
  color: var(--accent-blue) !important;
  text-decoration: underline;
}

/* Navigation Buttons Styling */
.navmenu ul {
  display: flex !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  gap: 10px;
}

.navmenu a {
  display: block !important;
  background: var(--nav-btn-bg) !important;
  color: var(--nav-btn-text) !important;
  padding: 10px 20px !important;
  text-decoration: none !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  font-size: 13px !important;
  border-radius: 0 !important; /* Forces rectangular shape */
  transition: 0.3s;
}

.navmenu a:hover, 
.navmenu .active {
  background: var(--nav-btn-hover) !important;
  color: #ffffff !important;
}

/* Header Social Links */
.header-social-links a {
  color: var(--accent-blue) !important;
  font-size: 22px;
  text-decoration: none;
  transition: 0.3s;
}

.header-social-links a:hover {
  opacity: 0.7;
}

/*--------------------------------------------------------------
# Main Content & Layout
--------------------------------------------------------------*/
.main-content {
  padding: 60px 0;
}

h2 {
  font-family: var(--heading-font);
  color: #000;
}

p {
  line-height: 1.6;
  text-align: justify;
}

/* Profile Image Frame */
.profile-frame {
  border: 4px solid #000;
  overflow: hidden;
  max-width: 320px;
  margin: 0 auto;
}

.profile-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Action Buttons (e.g., View My Resume) */
.btn-action {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 12px 30px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 20px;
  transition: 0.3s;
}

.btn-action:hover {
  background: #000;
  color: #fff;
}

/*--------------------------------------------------------------
# Resume Timeline (For your Resume page)
--------------------------------------------------------------*/
.resume-item {
  padding: 0 0 20px 20px;
  border-left: 2px solid #000;
  position: relative;
  margin-bottom: 10px;
}

.resume-item::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  background: #000;
  left: -7px;
  top: 5px;
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.footer {
  padding: 40px 0;
  text-align: center;
  font-size: 14px;
  background: #fff;
}