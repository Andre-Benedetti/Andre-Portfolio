/* Variables */
:root {
  --header-bg: #f4f4f4;
  --btn-black: #000000;
  --text-light-gray: #e0e0e0; /* Very light gray for nav text */
  --btn-gray-dark: #333333;   /* Dark gray for Resume button */
  --heading-font: "Raleway", sans-serif;
  --body-font: "Roboto", sans-serif;
}

body { font-family: var(--body-font); color: #272829; background: #fff; }

/* Header Styling */
.header { 
  background-color: var(--header-bg); 
  border-bottom: 2px solid #000; 
  padding: 15px 0; 
}

.logo { text-decoration: none !important; }
.logo h1 { 
  color: #000; 
  font-weight: 700; 
  margin: 0; 
  font-size: 24px; 
  text-decoration: none !important; 
}

/* Nav Buttons Side-by-Side */
.navmenu ul { 
  display: flex !important; 
  flex-direction: row !important; 
  gap: 10px; 
  list-style: none; 
  margin: 0; 
  padding: 0; 
}

.btn-nav {
  background-color: var(--btn-black);
  color: var(--text-light-gray) !important;
  padding: 10px 20px;
  border-radius: 0px; /* Rectangular */
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  text-decoration: none !important;
  transition: 0.3s;
}

.btn-nav:hover, .btn-nav.active {
  background-color: #444;
  color: #fff !important;
}

.header-social-links a { 
  color: #000; 
  font-size: 22px; 
  margin-left: 15px; 
  text-decoration: none; 
}

/* Hero Section */
.hero { padding: 80px 0; }
.profile-container {
  width: 100%; max-width: 320px; height: 420px; 
  overflow: hidden; border: 4px solid #000; 
  margin: 0 auto; box-shadow: 10px 10px 0px rgba(0,0,0,0.05);
}
.profile-container img { width: 100%; height: 100%; object-fit: cover; }

.hero h2 { font-size: 40px; font-weight: 700; font-family: var(--heading-font); }
.hero-text { font-size: 1.15rem; line-height: 1.6; text-align: justify; margin: 20px 0; }

/* Dark Gray Resume Button */
.btn-resume-gray {
  background-color: var(--btn-gray-dark);
  color: #fff !important;
  padding: 12px 30px;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;
}
.btn-resume-gray:hover { background-color: #000; }

/* Resume Styling */
.resume .resume-title { font-size: 26px; font-weight: 700; margin: 20px 0; }
.resume .resume-item { 
  padding: 0 0 20px 20px; 
  border-left: 2px solid #000; 
  position: relative; 
}
.resume .resume-item h4 { color: #000; font-weight: 700; text-transform: uppercase; }
.resume .resume-item h5 { background: #f4f4f4; padding: 5px 15px; display: inline-block; }