// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'About',
    href: 'request',
  },
  {
    name: 'Help',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Login',
    href: 'login',
  },
];

export const heroData = {
  title: `Student visa made easy`,
  subtitle:
    'Whether you\'re planning to study abroad, pursue higher education, or attend language courses, our comprehensive visa advisory services are tailored to meet your specific needs.',
  btnText: 'Learn more',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'We are dedicated to helping students navigate...',
  subtitle:
    'The place to store various data thatWhether youre planning to study abroad, pursue higher education, or attend language courses, our comprehensive visa advisory services are tailored to meet your specific needs. We understand the challenges you may face during the application process, and...',
};

export const featuresData = {
  title: 'Services',
  subtitle:
    'Some of the features and advantages that we provide for those of you who need to study while working.',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Visa Assessment',
      description:
        ' Our knowledgeable advisors will assist you in understanding the visa requirements, document preparation, and submission process. Well ensure you have a clear...',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Document Preparation',
      description:
        'Application Support - We recognize that each student\'s situation is unique. Well guide you through the entire visa application process...',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Interview Preparation',
      description:
        'As your application progresses, we\'ll keep you informed about any updates or changes in visa regulations, ensuring you stay up to date with the latest information.',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Peace of Mind',
      description:
        'Applying for a student visa can be stressful. Let us alleviate that burden. With our expertise and support, you can focus on your studies while we handle the intricacies of the visa application process.',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'John Fang',
    web: 'wordfaang.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Jane Doe',
    web: 'janedoee.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Jim Ferry',
    web: 'jimjimf.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Try for free!',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'Warehouse Society, 234 Bahagia Ave Street PRBW 29281',
  email: 'info@warehouse.project',
  phone: '1-232-3434 (Main)',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.',
  icon: <BsChatDotsFill />,
};
