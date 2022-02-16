import HellowattLogo from "../assets/logo/hellowatt-logo.png"
import SratiLogo from "../assets/logo/srati-logo.png"

export const MODEL_NAMES = {
    MACBOOK: "macbook",
    MUG: "mug",
    PENCIL: "pencil",
    RUBBER: "rubber",
    RUBIX_CUBE: "rubix_cube",
}

export const TECHNOLOGY = {
    DJANGO: "django",
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
}

export const COMPANIES = {
    HELLOWATT: "hellowatt",
    SRATI: "srati",
    SIPARTECH: "sipartech",
    IMMERSION: "immersion",
}

export const COMPANIES_CONTENT = {
    [COMPANIES.HELLOWATT]: {
        logo: HellowattLogo,
        title: "Fullstack engineer at Hello watt",
        text: "Fulltime job with devlopment and release of new features every two weeks for the startup specialized in the energy market.",
        technologies: [TECHNOLOGY.DJANGO, TECHNOLOGY.REACTJS, TECHNOLOGY.MONGODB, TECHNOLOGY.AWS]
    },
    [COMPANIES.SRATI]: {
        logo: SratiLogo,
        title: "Web development for SRATI.com",
        text: "During 6 month I developped an e-business platform for SRATI. They sell industrial ducts and wanted to expand their business on the web. I used WooCommerce and tweaked some plugins using php and javascript to improve the user experience.",
        technologies: [TECHNOLOGY.WORDPRESS, TECHNOLOGY.PHP, TECHNOLOGY.JAVASCRIPT]
    },
}


export default MODEL_NAMES;
