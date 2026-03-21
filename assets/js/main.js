/*--------------------------------------------------------------
# Global Settings & Variables
--------------------------------------------------------------*/
:root {
  --default-font: "Roboto", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  --heading-font: "Raleway", sans-serif;
  --nav-font: "Poppins", sans-serif;

  /* Color Palette */
  --background-color: #ffffff;
  --header-bg: #f4f4f4; /* Light gray for the top bar */
  --accent-color: #000000; /* Main accent is black */
  --heading-color: #050d18;
  --text-color: #272829;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

body {
  color: var(--text-color);
  font-family: var(--default-font);
  background-color: var(--background-color);
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: #555;
}

/*--------------------------------------------------------------
# Header & Navigation (Buttons Side-by-Side)
--------------------------------------------------------------*/
.header {
  padding: 15px 0;
  transition: all 0.5s;
  z-index: 997;
}

.navmenu ul {
  margin: 0;
  padding: 0;
  display: flex !important;
  flex-direction: row !important;
  gap: 10px;
  list-style: none;
}

.btn-nav {
  background-color: #000; /* Black background */
  color: #fff !important; /* White text */
  padding: 10px 20px;
  border-radius: 0px; /* Square professional look */
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.5px;
  transition: 0.3s;
  display: block;
}

.btn-nav:hover, 
.btn-nav.active {
  background-color: #555; /* Dark gray on hover */
  color: #fff !important;
}

/* Mobile Adjustments for Buttons */
@media (max-width: 768px) {
  .btn-nav {
    padding: 8px 12px;
    font-size: 11px;
  }
  .navmenu ul {
    gap: 5px;
  }
}

/*--------------------------------------------------------------
# Hero Section (Home Page)
--------------------------------------------------------------*/
.hero {
  width: 100%;
  padding: 80px 0;
}

.hero h2 {
  margin-bottom: 20px;
  padding: 0;
  font-size: 48px;
  font-weight: 700;
  color: var(--heading-color);
  font-family: var(--heading-font);
}

.btn-get-started {
  background: var(--accent-color);
  padding: 12px 30px;
  color: #fff;
  border-radius: 0px;
  transition: 0.5s;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
}

.btn-get-started:hover {
  background: #444;
  color: #fff;
}

/*--------------------------------------------------------------
# Resume Section (Timeline Style)
--------------------------------------------------------------*/
.resume .resume-title {
  color: var(--heading-color);
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
}

.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #000; /* Vertical timeline line */
  position: relative;
}

.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: var(--nav-font);
  color: var(--accent-color);
  margin-bottom: 10px;
}

.resume .resume-item h5 {
  font-size: 16px;
  background: #f4f4f4;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #000;
}

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow: hidden;
  background-color: var(--background-color);
  transition: all 0.6s ease-out;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid var(--accent-color);
  border-top-color: #e2e2e2;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: animate-preloader 1s linear infinite;
}

@keyframes animate-preloader {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.footer {
  padding: 30px 0;
  font-size: 14px;
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
.section-title {
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #173b6c;
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: var(--accent-color);
  bottom: 0;
  left: 0;
}