import React from "react";
import "./homepage.css";

const HomePage = () => {
  const isUnder768 = window.innerWidth < 768;
  return (
    <div className="homepage">
      <div className="homepage-wrapper">
        <section className="top-gif-wrapper">
          <div>
            <img
              src="https://ether-scape.com/assets/Banner_with_logo.gif"
              alt="top-git"
            />
          </div>
        </section>
        <section className="menu-wrapper">
          {isUnder768 ? (
            <nav class="navbar navbar-expand-md navbar-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  ETHERSCAPE!
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Dashboard
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Game Guide
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Lite Paper
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          ) : (
            <div>
              <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Game Guide</li>
                <li>Lite Paper</li>
                <li>Play Now</li>
              </ul>
            </div>
          )}
        </section>
        <section className="sec-1">
          <div className="wrapper">
            <div className="left">
              <h2>
                PLAY <br /> ETHERSCAPE!
              </h2>
              <span>start your adventure today</span>
              <a href="#">
                <img
                  src="https://ether-scape.com/assets/download.png"
                  alt="downlaod"
                />
              </a>
            </div>
            <div className="right">
              <h2>GRAB $SCAPE TOKEN</h2>
              <span>CONTINUE YOUR ADVENTURE!</span>
              <div className="">
                <button>BUY NOW</button>
                <button>VISA</button>
                <button>CHART</button>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-2">
          <div className="wrapper">
            <div className="left">
              <img
                src="https://ether-scape.com/assets/events_header.jpg"
                alt="left-img"
              />
              <div className="cards">
                <div className="card">
                  <img src="https://ether-scape.com/assets/Goblin.png" />
                  <div>
                    <div>
                      <span>Goblin Mayhem</span>
                      <span>01-03-24</span>
                    </div>
                    <span>Goblin Invasion</span>
                  </div>
                </div>
                <div className="card">
                  <img src="https://ether-scape.com/assets/Skil.png" />
                  <div>
                    <div>
                      <span>Skill&Shill</span>
                      <span>01-03-24</span>
                    </div>
                    <span>Goblin Invasion</span>
                  </div>
                </div>
                <div className="card">
                  <img src="https://ether-scape.com/assets/Whip.png" />
                  <div>
                    <div>
                      <span>Whip for glory</span>
                      <span>03-03-24</span>
                    </div>
                    <span>Big P2E whip tournament</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img
                src="https://ether-scape.com/assets/featured_news_header.png"
                alt="left-img"
              />
              <h3>Etherscape Info</h3>
              <p>
                Welcome to Etherscape – The only RuneScape seamless crypto
                experience on the market.
              </p>
              <p>Duel, Quest & Earn!</p>
              <p>
                Immerse yourself in the world of Gielinor and have your very own
                Falador massacre in your unique Falador Park! Our ecosystem
                offers in-game tokens, Adventurer NFTs, and Arena gambling.
              </p>
            </div>
          </div>
        </section>
        <section className="sec-3">
          <div className="wrapper">
            <div className="left">
              <img src="https://ether-scape.com/assets/etherscape_artical_header.jpg" />
              <div>
                <h2>article of the week</h2>
                <img src="https://ether-scape.com/assets/featured_article_1.jpg" />
                <h3>Etherscape Target Audience</h3>
                <p>
                  Everyone has their own RuneScape memories; our ecosystem is
                  fueled by this nostalgic high that makes the world spin these
                  days.
                </p>
              </div>
              <div className="more-up">
                <h2>MORE UPDATES</h2>
                <div className="cards">
                  <div className="car-d">
                    <div>
                      <span>Cook's Assistant Gone Wrong Complete</span>
                      <span> mission statement</span>
                    </div>
                    <img src="https://ether-scape.com/assets/moreupdate_1.jpg" />
                  </div>
                  <div className="car-d">
                    <div>
                      <span>Why EtherScape</span>
                      <span>Nostalgia in the modern age</span>
                    </div>
                    <img src="https://ether-scape.com/assets/moreupdate_2.jpg" />
                  </div>
                  <div className="car-d">
                    <div>
                      <span>Our go-to market strategy</span>
                      <span>See what we have planned!</span>
                    </div>
                    <img src="https://ether-scape.com/assets/moreupdate_3.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src="https://ether-scape.com/assets/recent_news_header.png" />
              <div className="cards">
                <div className="car-d">
                  <h2>Succesful Launch</h2>
                  <div>
                    <p>
                      Etherscape launched on the decentralized exchange (DEX)
                      Uniswap on the Ethereum network. The token utilizes a 5/5
                      taxation on every buy or sell to fuel the ecosystem. It
                      will be used for: Dueling, Questing and Earning.
                    </p>
                    <img src="https://ether-scape.com/assets/recent_news_bank.png" />
                  </div>
                </div>
                <div className="car-d">
                  <h2>Etherscape Private Server</h2>
                  <div>
                    <p>
                      The first Web3-integrated EtherScape private server, your
                      one-stop-shop for all gambling and questing needs. Utilize
                      our exclusive token for Duel Arena and other games within
                      our custom social gambling lobby server.
                    </p>
                    <img src="https://ether-scape.com/assets/recent_news_axe.png" />
                  </div>
                </div>
                <div className="car-d">
                  <h2>Tutorial Island NFT(404) Mint Phase</h2>
                  <div>
                    <p>
                      Initiating the first minting phase for early adopters and
                      earners before the public launch of our EtherScape P2E
                      game client. Trade & collect these exclusive OG’s
                      NFTs(404) using the “MINT NOW” button.
                    </p>
                  </div>
                  <button>Mint now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <p>
            This website and its contents are copyright © 2024 EtherScape Ltd.
          </p>
          <p>
            {" "}
            Use of this website is subject to our Terms & Conditions and Privacy
            Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
