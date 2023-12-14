import TrailBlazer from "../assets/aBetterTrailBlazer.png";
import TechBlog from "../assets/TechBlog1.png";
import WhatToWatch from "../assets/what_to_watch.png";
import WebDevQuiz from "../assets/Web-quiz1.png";
import TextEditor from "../assets/jate20.png";
import WeatherForecast from "../assets/weather0.png";

import SVG_Logo from "../assets/SVG-2.png";
import SocialNet from "../assets/SocNet1.png";
import ReactPortfolio from "../../images/react1.png";
import NoteTakerApp from "../assets/noteTakerApp-6.png";
import EmployeeManager from "../assets/EMA-4.png";
import BookSearchEngine from "../assets/bookSearch2.png";
import ECommerceBackEnd from "../assets/Insomnia-2.png";
import ProfessionalPortfolio from "../assets/image.png";
import PasswordApp from "../assets/web-app1.png";
import RefactorAccessibility from "../assets/image-1.png";
import WorkDayApp from "../assets/workDayApp-1.png";
import Melancholia from "../assets/melancholia-durer.jpg";
import UnityFund from "../assets/UnityFund.png";

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
    title: "Book Search Engine",
    description:
      "Refactoring: An already functioning App using RESTful routes was refactored so as to use the GraphQL API instead.",
    link: "https://jguemarez.github.io/WeatherDashApp/",
    repo: "https://github.com/jguemarez/BookSearchEngine",
    sourceCode: "https://github.com/coding-boot-camp/solid-broccoli",
    image: BookSearchEngine,
  },
  {
    title: "Social Network API",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: "https://jguemarez.github.io/WeatherDashApp/",
    repo: "https://github.com/jguemarez/SocialNetworkAPI",
    image: SocialNet,
  },
  {
    title: "E-Commerce Back End",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: "https://jguemarez.github.io/WeatherDashApp/",
    repo: "https://github.com/jguemarez/ECommerceBackEnd",
    image: ECommerceBackEnd,
  },
  {
    title: "Note Taker App",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: "https://jguemarez.github.io/WeatherDashApp/",
    repo: "https://github.com/jguemarez/NoteTakerApp .",
    image: NoteTakerApp,
  },
  {
    title: "Employee Manager App",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: "https://jguemarez.github.io/WeatherDashApp/",
    repo: "https://github.com/jguemarez/EmployeeManagerApp",
    image: EmployeeManager,
  },
  {
    title: "Pre-work Study Guide",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: "https://jguemarez.github.io/WeatherDashApp/",
    repo: "https://github.com/jguemarez/prework-study-guide",
    image: WeatherForecast,
  },
  {
    title: "React Portfolio",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: "https://jguemarez.github.io/WeatherDashApp/",
    repo: "https://github.com/jguemarez/ReactPortfolio",
    image: ReactPortfolio,
  },
  {
    title: "Horiseon Refactor",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: "https://jguemarez.github.io/WeatherDashApp/",
    repo: "https://github.com/jguemarez/RefactorAccessibleWebsite",
    image: RefactorAccessibility,
  },
  {
    title: "Work Day App",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: 'https://jguemarez.github.io/WorkDayApp/',
    repo: "https://github.com/jguemarez/WorkDayApp",
    image: WorkDayApp,
  },
  {
    title: "Personal Landing Page",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: 'https://jguemarez.github.io/PersonalLandingPage/',
    repo: "https://github.com/jguemarez/PersonalLandingPage",
    image: Melancholia,
  },
  {
    title: "Random Password Generator",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: 'https://jguemarez.github.io/RandomPasswordGen/',
    repo: "https://github.com/jguemarez/RandomPasswordGen",
    image: PasswordApp,
  },
  {
    title: "Dynamically Generated MarkDown File",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: 'https://jguemarez.github.io/RandomPasswordGen/',
    repo: "https://github.com/jguemarez/GenerateMarkDownApp",
    image: WeatherForecast,
  },
  {
    title: "SVG Logo Generator",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: 'https://jguemarez.github.io/RandomPasswordGen/',
    repo: "https://github.com/jguemarez/SVG_Logo",
    image: SVG_Logo,
  },
  {
    title: "My Professional Portfolio",
    description:
      "Plan ahead by choosing the city of your choice in a U.S. territory to find out about current and future weather conditions (up to five days in advance!)",
    link: 'https://jguemarez.github.io/MyProfessionalPortfolio/',
    repo: "https://github.com/jguemarez/MyProfessionalPortfolio",
    image: ProfessionalPortfolio,
  },
  {
    title: "Project 3: Unity Fund",
    description:
      "A Single Page Application (SPA) that allows people to join forces and campaign for or support causes and projects they like.",
    link: 'https://unity-fund-erno.onrender.com' ,
    repo: 'https://github.com/Clarisagonzalez/UnityFund',
    image: UnityFund,
  }
  
];

export default projects;