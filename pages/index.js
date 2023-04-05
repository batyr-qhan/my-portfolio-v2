import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Link from "next/link";
import PatternRings from "@/public/PatternRings";
import PatternCircle from "@/public/PatternCircle";
import IconInvalid from "@/public/IconInvalid";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BtK_Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main">
        <section className="hero">
          <div className="wrapper hero__wrapper bottom-border">
            <div className="hero__content">
              <picture>
                <source
                  media="(min-width: 62.5em)"
                  srcset="image-profile-desktop.webp"
                />
                <source
                  media="(min-width: 37.5em)"
                  srcset="image-profile-tablet.webp"
                />
                <img
                  className="hero__image"
                  src="image-profile-mobile.webp"
                  alt="picture of Adam Keyes"
                  width-="200"
                  height="500"
                />
              </picture>

              <PatternRings className="hero__rings" />

              <PatternCircle className="hero__circle" />

              <div className="hero__text">
                <h1 className="hero__headline header-xl">
                  Nice to meet you! I`m <span>Batyr Khan</span>.
                </h1>
                <p className="hero__description">
                  I`m a front-end developer and react native developer who
                  enjoys building web and mobile apps that users love.
                </p>
                <div className="hero__actions-item">
                  <Link href="#contact" className="hero__contact underline">
                    Contact me
                  </Link>
                </div>
                <div className="hero__actions-item">
                  <Link
                    href="cv_batyrkhan_2023_orange.pdf"
                    className="hero__contact underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="wrapper skills__wrapper bottom-border">
            {/* <h2 className="visually-hidden">Skills</h2> */}
            <div className="skills__item">
              <h3 className="skills__title">JavaScript</h3>
              <p className="skills__description">3 Years Experience</p>
            </div>
            <div className="skills__item">
              <h3 className="skills__title">CSS</h3>
              <p className="skills__description">3 Years Experience</p>
            </div>
            <div className="skills__item">
              <h3 className="skills__title">React</h3>
              <p className="skills__description">3 Years Experience</p>
            </div>
            <div className="skills__item">
              <h3 className="skills__title">TypeScript</h3>
              <p className="skills__description">1 Year Experience</p>
            </div>
            <div className="skills__item">
              <h3 className="skills__title">React Native</h3>
              <p className="skills__description">1 Year Experience</p>
            </div>
            <div className="skills__item">
              <h3 className="skills__title">Sass</h3>
              <p className="skills__description">2 Years Experience</p>
            </div>
          </div>
          <PatternRings className="skills__rings" />
        </section>

        <section className="projects">
          <div className="wrapper projects__wrapper">
            <div className="projects__grid">
              <h2 className="projects__headline header-xl">Projects</h2>
              <a href="#contact" className="projects__contact underline">
                Contact me
              </a>

              <div className="projects__item">
                <picture className="projects__picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcset="thumbnail-project-1-large.webp"
                  />
                  <img
                    className="projects__image"
                    src="thumbnail-project-1-small.webp"
                    alt="screenshot of design portfolio website"
                    width-="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">My First Portfolio (2022)</h3>
                <p className="projects__tags">
                  <span>NEXT.JS</span>
                  <span>SCSS</span>
                  <span>FRAMER MOTION</span>
                </p>
                <div className="projects__links">
                  <a
                    href="https://batyr-qhan-portfolio.vercel.app/"
                    className="underline"
                    target="_blank"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/batyr-qhan/my-portfolio"
                    className="underline"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcset="thumbnail-project-2-large.webp"
                  />
                  <img
                    className="projects__image"
                    src="thumbnail-project-2-small.webp"
                    alt="screenshot of learning platform website with different courses"
                    width-="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">React Native Expo Mobile App</h3>
                <p className="projects__tags">
                  <span>REACT NATIVE</span>
                  <span>EXPO</span>
                </p>
                <div className="projects__links">
                  <a
                    href="https://www.loom.com/share/7b88c6a42ae44bc2acf973c10c0d035e"
                    target="_blank"
                    className="underline"
                  >
                    View Project
                  </a>
                  {/* <a href="" className="underline">
                    View Code
                  </a> */}
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcset="thumbnail-project-3-large.webp"
                  />
                  <img
                    className="projects__image"
                    src="thumbnail-project-3-small.webp"
                    alt="screenshot of To Do App showing a list of active and complete tasks"
                    width-="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">My Chat Room</h3>
                <p className="projects__tags">
                  <span>React</span>
                  <span>CSS</span>
                  <span>Firebase</span>
                </p>
                <div className="projects__links">
                  <a
                    href="https://batyr-qhan.github.io/cool-chat-react-app/"
                    target="_blank"
                    className="underline"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/batyr-qhan/cool-chat-react-app"
                    target="_blank"
                    className="underline"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* <div className="projects__item">
                <picture className="projects__picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcset="thumbnail-project-4-large.webp"
                  />
                  <img
                    className="projects__image"
                    src="thumbnail-project-4-small.webp"
                    alt="screenshot of video player app with grid of thumbnails of movies and TV shows"
                    width-="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">Entertainment Web App</h3>
                <p className="projects__tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </p>
                <div className="projects__links">
                  <a href="" className="underline">
                    View Project
                  </a>
                  <a href="" className="underline">
                    View Code
                  </a>
                </div>
              </div> */}

              {/* <div className="projects__item">
                <picture className="projects__picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcset="thumbnail-project-5-large.webp"
                  />
                  <img
                    className="projects__image"
                    src="thumbnail-project-5-small.webp"
                    alt="screenshot of 4-player memory game with circular tiles that have symbols"
                    width-="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">Memory Game</h3>
                <p className="projects__tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </p>
                <div className="projects__links">
                  <a href="" className="underline">
                    View Project
                  </a>
                  <a href="" className="underline">
                    View Code
                  </a>
                </div>
              </div> */}

              {/* <div className="projects__item">
                <picture className="projects__picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcset="thumbnail-project-6-large.webp"
                  />
                  <img
                    className="projects__image"
                    src="thumbnail-project-6-small.webp"
                    alt="grid of thumbnails of famous works of art"
                    width-="343"
                    height="253"
                  />
                </picture>
                <h3 className="projects__name">Art Gallery Showcase</h3>
                <p className="projects__tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </p>
                <div className="projects__links">
                  <a href="" className="underline">
                    View Project
                  </a>
                  <a href="" className="underline">
                    View Code
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section id="contact" className="contact bg-less-dark">
          <div className="wrapper contact__wrapper bottom-border">
            <div className="contact__text">
              <h2 className="contact__headline header-xl">Contact</h2>
              <p className="contact__description">
                I would love to hear about your project and how I could help.
                Please fill in the form, and I`ll get back to you as soon as
                possible.
              </p>
            </div>
            <form action="" className="contact__form">
              <div className="contact__control">
                <label for="name" className="visually-hidden">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <IconInvalid className="contact__invalid-icon" />
              </div>
              <div className="contact__control">
                <label for="email" className="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <IconInvalid className="contact__invalid-icon" />
              </div>
              <div className="contact__control">
                <label for="message" className="visually-hidden">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  required
                ></textarea>
                <IconInvalid className="contact__invalid-icon" />
              </div>
              <div className="contact__control align-right">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>

          <PatternRings className="contact__rings" />
        </section>
      </main>
    </>
  );
}
