import React from "react";

import "./footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by&nbsp;
        <a
          href="https://github.com/lauraanderson-projects/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Laura Anderson
        </a>
        &nbsp;and is on&nbsp;
        <a
          href="https://github.com/orgs/lauraanderson-projects/repositories"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        &nbsp;and hosted on&nbsp;
        <a
          href="https://weather-app-reactjsx.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
