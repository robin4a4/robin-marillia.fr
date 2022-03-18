import HellowattLogo from "../assets/logo/hellowatt-logo.webp";
import SratiLogo from "../assets/logo/srati-logo.webp";
import SipartechLogo from "../assets/logo/sipartech-logo.webp";
import ImmersionLogo from "../assets/logo/immersion-logo.webp";
import FignossLogo from "../assets/logo/fignoss-logo.webp";

import FlyersFignossIllu from "../assets/images/flyers-fignoss-illu.webp";
import PosterFignossIllu from "../assets/images/poster-fignoss-illu.webp";
import TicketsFignossIllu from "../assets/images/tickets-fignoss-illu.webp";
import ArSolarScreen from "../assets/images/arsolar-screen.webp";
import BoomRender from "../assets/images/boom-render.webp";
import BoostrScreen from "../assets/images/boostr-screen.webp";
import BreadGrillRender from "../assets/images/bread-grill-render.webp";
import DesktopProjectorRender from "../assets/images/desktop-projector-render.webp";
import FusionRender from "../assets/images/fusion-render.webp";
import GlassRender from "../assets/images/glass-render.webp";
import PumpDrawing from "../assets/images/pump-drawing.webp";
import SbComponentScreen from "../assets/images/sb-component-screen.webp";

import FlyersFignossIlluMin from "../assets/images/min/256/flyers-fignoss-illu.webp";
import PosterFignossIlluMin from "../assets/images/min/256/poster-fignoss-illu.webp";
import TicketsFignossIlluMin from "../assets/images/min/256/tickets-fignoss-illu.webp";
import ArSolarScreenMin from "../assets/images/min/256/arsolar-screen.webp";
import BoomRenderMin from "../assets/images/min/256/boom-render.webp";
import BoostrScreenMin from "../assets/images/min/256/boostr-screen.webp";
import BreadGrillRenderMin from "../assets/images/min/256/bread-grill-render.webp";
import DesktopProjectorRenderMin from "../assets/images/min/256/desktop-projector-render.webp";
import FusionRenderMin from "../assets/images/min/256/fusion-render.webp";
import GlassRenderMin from "../assets/images/min/256/glass-render.webp";
import PumpDrawingMin from "../assets/images/min/256/pump-drawing.webp";
import SbComponentScreenMin from "../assets/images/min/256/sb-component-screen.webp";

export const isMobile = window.innerWidth < 768;

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
    logo: { image: HellowattLogo, width: 160, height: 160 },
    website: "https://www.hellowatt.fr/",
    from: "2020",
    to: "Today",
    title: "Fullstack engineer at Hello watt",
    text: "Fulltime job with development and release of new features every two weeks for the startup specialized in the energy market.",
    technologies: [
      TECHNOLOGY.DJANGO,
      TECHNOLOGY.REACTJS,
      TECHNOLOGY.MONGODB,
      TECHNOLOGY.AWS,
    ],
  },
  [COMPANIES.SRATI]: {
    logo: { image: SratiLogo, width: 195, height: 105 },
    website: "https://www.srati.com/",
    from: "2019",
    title: "Web development for SRATI.com",
    text: "During 6 month I developped an e-business platform for SRATI. They sell industrial ducts and wanted to expand their business on the web. I used WooCommerce and tweaked some plugins using PHP and Javascript to improve the user experience.",
    technologies: [TECHNOLOGY.WORDPRESS, TECHNOLOGY.PHP, TECHNOLOGY.JAVASCRIPT],
  },
  [COMPANIES.SIPARTECH]: {
    logo: { image: SipartechLogo, width: 477, height: 153 },
    website: "https://www.sipartech.com/",
    from: "2019",
    title: "Data science internship at Sipartech",
    text: "During a one month internship I had to develop a tool that automatically extracts numbers and information from the receipts of the company. I used Python and Tensorflow to create the script and PHP and Javascript to create an interface.",
    technologies: [
      TECHNOLOGY.PYTHON,
      TECHNOLOGY.PHP,
      TECHNOLOGY.JAVASCRIPT,
      TECHNOLOGY.TENSORFLOW,
    ],
  },
  [COMPANIES.FIGNOSS]: {
    logo: { image: FignossLogo, width: 1651, height: 711 },
    from: "2018",
    to: "2019",
    title: "Communication and design for La Nuit des Fignoss",
    text: "La Nuit des Fignoss is a Gala organized by the students of the Arts et Métiers school. More than 3000 people come each year to celebrate one of the most prestigious evening in the north of the France. I had to design the graphic charter, develop the web site and organize internal and external communication.",
    technologies: [
      TECHNOLOGY.PHOTOSHOP,
      TECHNOLOGY.ILLUSTRATOR,
      TECHNOLOGY.PREMIERE,
    ],
    images: [
      {
        image: FlyersFignossIllu,
        imageMin: FlyersFignossIlluMin,
        width: 3768,
        height: 2528,
      },
      {
        image: PosterFignossIllu,
        imageMin: PosterFignossIlluMin,
        width: 2732,
        height: 1920,
      },
      {
        image: TicketsFignossIllu,
        imageMin: TicketsFignossIlluMin,
        width: 1080,
        height: 1080,
      },
    ],
  },
  [COMPANIES.IMMERSION]: {
    logo: { image: ImmersionLogo, width: 720, height: 460 },
    website: "https://www.immersion.fr/",
    from: "2018",
    title: "Process and production internship at Immersion",
    text: "1 month internship at Immersion where I was tasked to improve the production process of a tactile table. I used Solidworks and a 3D printer to improve the reliability of the process of laying a large piece of glass on top of the metal frame. It helps the technicians to better align the pieces together and decrease the waste.",
    technologies: [TECHNOLOGY.SOLIDWORKS],
  },
};

export const personalExperiencesImages = [
  {
    image: SbComponentScreen,
    imageMin: SbComponentScreenMin,
    description: "React and React native UI components library",
    date: "2019",
    width: 612,
    height: 312,
  },
  {
    image: ArSolarScreen,
    imageMin: ArSolarScreenMin,
    description: "Little AR educational game to learn about solar system",
    date: "2018",
    width: 443,
    height: 443,
  },
  {
    image: PumpDrawing,
    imageMin: PumpDrawingMin,
    description: "Design and sizing of a pump for a school project",
    date: "2017",
    width: 613,
    height: 403,
  },
  {
    image: BreadGrillRender,
    imageMin: BreadGrillRenderMin,
    description: "3D render textures experiment 1",
    date: "2017",
    width: 401,
    height: 302,
  },
  {
    image: GlassRender,
    imageMin: GlassRenderMin,
    description: "3D render textures experiment 2",
    date: "2017",
    width: 348,
    height: 325,
  },
  {
    image: BoostrScreen,
    imageMin: BoostrScreenMin,
    description:
      "E-commerce website to coach or boost League of legend or CS:GO players",
    date: "2016",
    width: 443,
    height: 314,
  },
  {
    image: FusionRender,
    imageMin: FusionRenderMin,
    description:
      "Hardware product design experiment of a smartphone with detachable parts and its OS",
    date: "2014",
    width: 427,
    height: 279,
  },
  {
    image: BoomRender,
    imageMin: BoomRenderMin,
    description: "Hardware product design experiment of a wearable projector",
    date: "2014",
    width: 1920,
    height: 1080,
  },
  {
    image: DesktopProjectorRender,
    imageMin: DesktopProjectorRenderMin,
    description:
      "Hardware product design experiment of a desktop frame projector",
    date: "2014",
    width: 428,
    height: 387,
  },
];

export default MODEL_NAMES;
