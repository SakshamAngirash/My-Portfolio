import blkimg from "../assets/blockchain.jpg";
import webdev from "../assets/webdev.jpg";
import programming from "../assets/programming.jpg";
const Experience = () => {
  return (
    <section className="projects" id="Skills">
      <h2>SkillSet</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Blockchain Development</h3>
          <img src={blkimg} alt="BlockChain Development" />
          <p>
            Proficient in{" "}
            <strong>
              Solidity, Ethers.js, Web3.js, Hardhat, Truffle, DApp development,
              and IPFS,
            </strong>{" "}
            I deliver exceptional results in Blockchain development, crafting
            cutting-edge decentralized applications for the future.
          </p>
        </div>

        <div className="projects__card">
          <h3>Full Stack Web Development</h3>
          <img src={webdev} alt="Web Development" />
          <p>
            Skilled in <strong>MERN</strong> stack, I excel at building modern
            web applications using
            <strong> MongoDB, Express.js, React, and Node.js,</strong>{" "}
            delivering seamless user experiences and robust functionality.
          </p>
        </div>

        <div className="projects__card">
          <h3>Programming Languages</h3>
          <img src={programming} alt="Web Development" />
          <p>
            Experienced in <strong>C, C++, Python, JavaScript, </strong> and{" "}
            <strong>DSA,</strong> I leverage my versatile programming skills to
            develop efficient and dynamic solutions across various domains,
            emphasizing strong <strong>data structures and algorithms</strong>{" "}
            knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
