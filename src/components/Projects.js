// Import Assets
import uniswap from "../assets/uniswap.png";
import compound from "../assets/compound.png";
import aave from "../assets/aave.png";

const Projects = () => {
  return (
    <section className="projects" id="Projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Maze Saze</h3>
          <img src={uniswap} alt="Maze Saze" />
          <p>
            Visualization tool that provides a captivating and educational
            experience for exploring various pathfinding algorithms. This
            project offers an interactive platform where users can observe and
            understand the mechanics behind popular algorithms such as Dijkstra,
            BFS, DFS and A*.
          </p>

          <a href="https://maze-saze.netlify.app/" target="_blank">
            <button className="button">Site</button>
          </a>
          <a
            href="https://github.com/SuvrtSharma/Maze-Router-path-finding-algorithm-visulization"
            target="_blank"
          >
            <button className="button">Code</button>
          </a>
        </div>

        <div className="projects__card">
          <h3>Pixel Vault</h3>
          <img src={compound} alt="Pixel Vault" />
          <p>
            Pixel Vault is a blockchain based peer to peer image storage system
            . It allows user to upload , download and share image files via IPFS
            network . It connects via pinata NFT media management service that
            allows users to host, manage and share images files on the
            blockchain of their choice.
          </p>
          <a
            href="https://github.com/SakshamAngirash/Pixel-Vault-Blockchain-"
            target="_blank"
          >
            <button className="button">Code</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
