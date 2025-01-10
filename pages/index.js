import "../styles/App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <span className="dot"></span>
          MyeongSoo Choi
        </div>
        <nav className="nav">
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="main">
        <div className="intro">
          <div className="profile-pic">
            <img src="/profile.jpeg" alt="Profile Picture" layout="fill" className="image" />
          </div>
          <div className="intro-text">
            <span className="title">Hello</span>
            <span className="subtitle">My name is MyeongSoo Choi</span>
            <p>
              I'm Backend Developer. <br />
              I usally use Node.js and MongoDB, MS Azure. <br />
              Thank you for visit my page.
            </p>
            <div className="buttons">
              <a href="#resume" className="button resume">Resume</a>
              <a href="#projects" className="button projects">Projects</a>
              <a href="#contact" className="button contact">Contact</a>
          </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-item">
            <span className="footer-item-title">Phone</span>
            <span className="footer-item-content">010-8754-5027</span>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">Email</span>
            <span className="footer-item-content">mongus.c@gmail.com</span>
          </div>
          <div className="footer-item"  >
            <span className="footer-item-title">Follow Me</span>
            <span>
              <a href="https://www.linkedin.com/in/myeongsoo-choi-4b939b138">
                <img src="/linkedin.avif" alt="LinkedIn" className="footer-icon-img" />
              </a>
              <a href="https://github.com/MongusChoi">
                <img src="/github.png" alt="Github" className="footer-icon-img" />
              </a>
            </span>
          </div>
          <div className="footer-item">
            <p className="copyright">
              &copy; 2025 By MyeongSoo Choi.<br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;