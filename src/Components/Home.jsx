import React, { useEffect, useState, useRef } from "react";
import { images } from "./Images";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <main className="content-section">
        {/* Left Navigation Bar */}
        <section className="left-section">
          <div className="menu-bar">
            <div>
              <p className="fs-14 heading-color fw-700">Rihana</p>
            </div>

            <div className="browse-menu mt-50">
              <p className="fs-14 select-color fw-700">Browser</p>
              <div>
                <p className="fs-13">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </p>
                <p className="fs-13 ml-21">Discover</p>
              </div>
              <div>
                <p className="fs-13">
                  <FontAwesomeIcon icon={faHeadphones} />
                </p>
                <p className="fs-13 ml-21">Songs</p>
              </div>
              <div>
                <p className="fs-13">
                  <FontAwesomeIcon icon={faChartBar} />
                </p>
                <p className="fs-13 ml-21">Top charts</p>
              </div>
              <div>
                <p className="fs-13">
                  <FontAwesomeIcon icon={faPerson} />
                </p>
                <p className="fs-13 ml-21">Something</p>
              </div>
            </div>
            <div className="browse-menu mt-18">
              <p className="fs-14 select-color fw-700">Playlist</p>
              <div>
                <p className="fs-13">
                  <FontAwesomeIcon icon={faHeart} />
                </p>
                <p className="fs-13 ml-21">Favourite</p>
              </div>
              <div>
                <p className="fs-13">
                  <FontAwesomeIcon icon={faClockRotateLeft} />
                </p>
                <p className="fs-13 ml-21">Recent</p>
              </div>
            </div>
            <div className="playlist-menu mt-18">
              <div className="playlist-heading">
                <p className="fs-14 select-color fw-700">My Music</p>
                <p className="fs-13">
                  <FontAwesomeIcon icon={faPlus} />
                </p>
              </div>
              <div className="playlist-songs">
                <p>High is hope</p>
                <p>Shape of you</p>
                <p>All we know</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section right */}
        <section className="right-section">
          <div className="header">
            <div>
              <input
                type="text"
                placeholder="Enter Keywords        &#8981;"
              ></input>
            </div>
            <div className="user">
              <div className="user-avatar">
                <img src={images.music_3} className="imgStyle" />
              </div>
              <div className="user-name">
                <p>Nabil</p>
              </div>
            </div>
          </div>
          <div className="hero-section">
            <div className="headline">
              <h1>This weekend</h1>
              <div className="desc">
                <p>
                  As i was walking down the road to bethhem one night <br></br>i
                  looked up to the sky and there
                </p>
              </div>
              <div className="play-btn mt-2">
                <p>Play</p>
              </div>
              <div className="new-release">
                <p className="release-tittle">New releases</p>
                <div className="songs">
                  <div>
                    <div className="song-details">
                      <div className="song-img">
                        <img src={images.music_1}></img>
                      </div>
                      <div className="name">
                        <p className="fs-14 fw-700">Rihana</p>
                        <p className="fs-13 fw-400 95a6d3">Singer</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="song-details">
                      <div className="song-img">
                        <img src={images.music_2}></img>
                      </div>
                      <div className="name">
                        <p className="fs-14 fw-700">Rihana</p>
                        <p className="fs-13 fw-400 95a6d3">Singer</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="song-details">
                      <div className="song-img">
                        <img src={images.music_3}></img>
                      </div>
                      <div className="name">
                        <p className="fs-14 fw-700">Rihana</p>
                        <p className="fs-13 fw-400 95a6d3">Singer</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="song-details">
                      <div className="song-img">
                        <img src={images.music_4}></img>
                      </div>
                      <div className="name">
                        <p className="fs-14 fw-700">Rihana</p>
                        <p className="fs-13 fw-400 95a6d3">Singer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="banner">
              <img src={images.rockstar}></img>
            </div>
          </div>

          {/* Music Section -  New Played and Popular Songs*/}
          <div className="music-sec">
            <div className="new-played">
              New Played
              <div className="new-played-songs">
                <div className="new-played-songs-lists">
                  <img src={images.music_1} className="imgStyle" />
                  <p>High is Hope</p>
                  <p>Rahima</p>
                  <p>5:32</p>
                </div>
                <br></br>
                <div className="new-played-songs-lists">
                  <img src={images.music_1} className="imgStyle" />
                  <p>Shape of you</p>
                  <p>Ed Sheeran</p>
                  <p>5:32</p>
                </div>
              </div>
            </div>
            <div>
              Popula Songs
              <div className="video">
                <video width="250" height="120" controls>
                  <source
                    src="https://www.youtube.com/watch?v=BQ0mxQXmLsk&ab_channel=CamilaCabelloVEVO"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer>
            <div>
              <div className="footer-music">
                <img src={images.music_1} className="imgStyle" />
                <div className="footer-music-singer">
                  <div>
                    <p>All we know</p>
                    <p>Rihana</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faHamburger} />
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Home;
