import HellowattLogo from "../assets/logo/hellowatt-logo.png";
import SratiLogo from "../assets/logo/srati-logo.png";
import SipartechLogo from "../assets/logo/sipartech-logo.png";
import ImmersionLogo from "../assets/logo/immersion-logo.jpeg";
import FignossLogo from "../assets/logo/fignoss-logo.png";

import FlyersFignossIllu from "../assets/images/flyers-fignoss-illu.jpg";
import PosterFignossIllu from "../assets/images/poster-fignoss-illu.jpg";
import TicketsFignossIllu from "../assets/images/tickets-fignoss-illu.png";

export const MODEL_NAMES = {
  MACBOOK: "macbook",
  MUG: "mug",
  PENCIL: "pencil",
  RUBBER: "rubber",
  RUBIX_CUBE: "rubix_cube",
};

export const TECHNOLOGY = {
  DJANGO: "django",
  PYTHON: "python",
  REACTJS: "reactjs",
  SOLIDJS: "solidjs",
  NODEJS: "nodejs",
  AWS: "aws",
  MONGODB: "mongodb",
  TAILWINDCSS: "tailwindcss",
  BOOTSTRAP: "bootstrap",
  WORDPRESS: "wordpress",
  PHP: "php",
  JAVASCRIPT: "javascript",
  TENSORFLOW: "tensorflow",
  SOLIDWORKS: "solidworks",
  PHOTOSHOP: "photoshop",
  ILLUSTRATOR: "illustrator",
  PREMIERE: "premiere",
};

export const COMPANIES = {
  HELLOWATT: "hellowatt",
  SRATI: "srati",
  SIPARTECH: "sipartech",
  FIGNOSS: "fignoss",
  IMMERSION: "immersion",
};

export const COMPANIES_CONTENT = {
  [COMPANIES.HELLOWATT]: {
    logo: HellowattLogo,
    website: "https://www.hellowatt.fr/",
    from: "2020",
    to: "Today",
    title: "Fullstack engineer at Hello watt",
    text: "Fulltime job with devlopment and release of new features every two weeks for the startup specialized in the energy market.",
    technologies: [
      TECHNOLOGY.DJANGO,
      TECHNOLOGY.REACTJS,
      TECHNOLOGY.MONGODB,
      TECHNOLOGY.AWS,
    ],
  },
  [COMPANIES.SRATI]: {
    logo: SratiLogo,
    website: "https://www.srati.com/",
    from: "2019",
    title: "Web development for SRATI.com",
    text: "During 6 month I developped an e-business platform for SRATI. They sell industrial ducts and wanted to expand their business on the web. I used WooCommerce and tweaked some plugins using php and javascript to improve the user experience.",
    technologies: [TECHNOLOGY.WORDPRESS, TECHNOLOGY.PHP, TECHNOLOGY.JAVASCRIPT],
  },
  [COMPANIES.SIPARTECH]: {
    logo: SipartechLogo,
    website: "https://www.sipartech.com/",
    from: "2019",
    title: "Data science internship at Sipartech",
    text: "During a one month internship I had to develop a tool that automatically extracts numbers and information from the receipts of the company. I used python and Tensorflow to create the script and PHP and Javascript to create an interface.",
    technologies: [
      TECHNOLOGY.PYTHON,
      TECHNOLOGY.PHP,
      TECHNOLOGY.JAVASCRIPT,
      TECHNOLOGY.TENSORFLOW,
    ],
  },
  [COMPANIES.FIGNOSS]: {
    logo: FignossLogo,
    from: "2018",
    to: "2019",
    title: "Communication and design for La Nuit des Fignoss",
    text: "La Nuit des Fignoss is a Gala organized by the students of the Arts et Métiers school. More than 3000 people come each year to celebrate one of the most prestigious evening in the north of the France. I had to design the graphic charter, develop the web site and organize internal and external communication.",
    technologies: [
      TECHNOLOGY.PHOTOSHOP,
      TECHNOLOGY.ILLUSTRATOR,
      TECHNOLOGY.PREMIERE,
    ],
    images: [FlyersFignossIllu, PosterFignossIllu, TicketsFignossIllu],
  },
  [COMPANIES.IMMERSION]: {
    logo: ImmersionLogo,
    website: "https://www.immersion.fr/",
    from: "2018",
    title: "Process and production internship at Immersion",
    text: "1 month internship at Immersion where I was tasked to improve the production process of a tactile table. I used Solidworks and a 3D printer to improve the reliability of the process of laying a large piece of glass on top of the metal frame. It helps the technicians to better align the pieces together and decrease the waste.",
    technologies: [TECHNOLOGY.SOLIDWORKS],
  },
};

export default MODEL_NAMES;
