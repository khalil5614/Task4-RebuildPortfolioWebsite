import hardy from "../assets/hardy.png";
import "../styles/portfolio.css";

const HeaderComponent = () => {
  return (
    <header class="header secondary-bg">
      <nav>
        <h3 class="nav-title">
          Ma<span class="text-primary">r</span>y
        </h3>

        <ul>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>
            {" "}
            <a href="">
              {" "}
              <button class="btn-primary">Hire Me</button>
            </a>
          </li>
        </ul>
      </nav>
      <div class="banner">
        <div class="banner-content">
          <h4 class="banner-greetings">Hi, I am</h4>
          <h1 class="banner-title">Mary Hardy</h1>
          <p class="banner-description">
            {" "}
            Shot what able cold new see hold.Friendly as an betrayed formerly
            he. Morning because as to society behaved moments.
          </p>
          <button class="btn-primary btn-margin5">Download CV</button>
          <button class="btn-primary btn-margin5">
            {" "}
            <i class="bi bi-telephone-fill"></i> Contact
          </button>
        </div>

        <img
          class="banner-profile-pic"
          src={hardy}
          alt="Profile Picture of Hard"
        />
      </div>
    </header>
  );
};

export default HeaderComponent;
