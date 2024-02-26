import GithubIcon from "@/public/GithubIcon";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="header__nav">
          {/* <h2 className="visually-hidden">Navigation</h2> */}
          <Link href="/" className="header__home">
            batyrkhan
            {/* <span className="visually-hidden">(to home page)</span> */}
          </Link>
          <Link
            href="https://github.com/batyr-qhan"
            target="_blank"
            className="header__social"
          >
            <GithubIcon />
          </Link>
          {/* <Link href="" className="header__social">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="23"
              aria-labelledby="socialFrontendMentor"
              role="img"
            >
              <title id="socialFrontendMentor">Frontend Mentor</title>
              <path
                fill="#FFF"
                d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z"
              />
            </svg>
          </Link> */}
          <Link
            href="https://www.linkedin.com/in/batyrqh/"
            target="_blank"
            className="header__social"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              aria-labelledby="socialLinkedIn"
              role="img"
            >
              <title id="socialLinkedIn">LinkedIn</title>
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
              />
            </svg>
          </Link>
          <Link
            href="https://twitter.com/nthroneo"
            target="_blank"
            className="header__social"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              aria-labelledby="socialTwitter"
              role="img"
            >
              <title id="socialTwitter">Twitter</title>
              <path
                fill="#FFF"
                d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
