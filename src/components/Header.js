// Import Assets
import profile from "../assets/profile.png";

const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="John Doe" />

      <div className="header__content">
        <h1>Hi, I'm Saksham Angirash</h1>
        <p>Blockchain Developer</p>
        <a href="mailto:sakshamsharma3161@gmail.com" target="_blank">
          <button className="button">Get in Touch</button>
        </a>
      </div>
    </section>
  );
};

export default Header;
