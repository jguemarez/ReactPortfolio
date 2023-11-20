import TrailBlazer from "../assets/aBetterTrailBlazer.png";
import TechBlog from "../assets/TechBlog1.png";
import WhatToWatch from "../assets/what_to_watch.png";
import WebDevQuiz from "../assets/Web-quiz1.png";
import TextEditor from "../assets/jate20.png";
import WeatherForecast from "../assets/weather0.png";

const projects = [
  {
    title: "TrailBlazer",
    description:
      "Secure and user-friendly recipe blogging site with advanced security features.",
    link: "https://a-new-trail-blazer-e459cac1a517.herokuapp.com//",
    repo: "https://github.com/RobKaiser97/Recipe-Blog",
    image: TrailBlazer,
  },
  {
    title: "Text Editor PWA",
    description:
      "This editor uses CodeMirror for syntax highlighting and conforms to PWA specifications, including working offline, and being downloadable.",
    link: "https://a-better-text-editor-pwa-fefdee4d0ae6.herokuapp.com/",
    repo: "https://github.com/jguemarez/TextEditorPWA",
    image: TextEditor,
  },
  {
    title: "Tech Blog",
    description:
      "A CMS-style blog for people interested in development/software engineering that conforms to the REST API paradigm.",
    link: "https://a-better-tech-blog-bd58312a5967.herokuapp.com/",
    repo: "https://github.com/jguemarez/TechBlog",
    image: TechBlog,
  },
  {
    title: "Web Development Quiz",
    description:
      "Answer the provided questions in the alloted amout of time to earn your score and save it to local storage!",
    link: "https://jguemarez.github.io/WebDevQuiz/",
    repo: "https://github.com/jguemarez/WebDevQuiz",
    image: WebDevQuiz,
  },
  {
    title: "What to Watch",
    description: "A single-page app that allows you to search for info about highly-rated movies by genres. Find out in which streaming services are they available!",
    link: "https://trlivenp.github.io/What_to_Watch/",
    repo: "https://github.com/trlivenp/What_to_Watch",
    image: WhatToWatch,
  },
  {
    title: "Weather Dashboard App",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: "https://jguemarez.github.io/WeatherDashApp/",
    repo: "https://github.com/jguemarez/WeatherDashApp",
    image: WeatherForecast,
  },
];

export default projects;