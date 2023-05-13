const Footer = () => {
  return (
    <footer className="footer" id="Contact">
      <div className="footerbtns">
        <a href="mailto:sakshamsharma3161@gmail.com" target="_blank">
          <button className="button">Mail</button>
        </a>
        <a
          href="https://www.linkedin.com/in/saksham-angirash-2277ba257/"
          target="_blank"
        >
          <button className="button">LinkedIN</button>
        </a>
        <a href="https://github.com/SakshamAngirash" target="_blank">
          <button className="button">Github</button>
        </a>
      </div>
      <p>
        <small>SakshamAngirash&copy;2023</small>
      </p>
    </footer>
  );
};

export default Footer;
