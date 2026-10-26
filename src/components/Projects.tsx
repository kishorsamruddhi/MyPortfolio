import React, { useState, useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Github,
  Shield,
  Users,
  Code,
  Cloud,
  ArrowLeft,
  ArrowRight,
  Globe,
  Briefcase,
  FlaskConical,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* TYPES                                                               */
/* ------------------------------------------------------------------ */
type Category = 'work' | 'practice';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  period?: string;     // e.g. "Oct 2024 - Dec 2024" (grid card + footer)
  role?: string;       // e.g. "Frontend Developer" (footer, optional)
  description: string;
  technologies: string[];
  features: string[];
  domain: string;
  icon: LucideIcon;
  gradient: string;
  imageUrl?: string;
  previews?: string[]; // optional extra screenshots for the thumbnail row
  demoUrl: string;
  githubUrl: string;
}

/* ------------------------------------------------------------------ */
/* PRACTICE PROJECTS (all your current projects)                       */
/* ------------------------------------------------------------------ */
const practiceProjects: Project[] = [
  {
    id: 1,
    title: 'Flight Reservation System',
    subtitle: 'Scalable Microservices-Based Airline Booking Platform',
    description:
      'A distributed flight reservation system built using microservices architecture, enabling users to search flights, calculate fares, and complete bookings through independent, loosely coupled services. The system leverages service discovery, centralized configuration, asynchronous messaging, and caching to ensure scalability, reliability, and low-latency performance.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'REST APIs',
      'RabbitMQ',
      'Redis',
      'Eureka Service Discovery',
      'API Gateway',
      'Config Server',
    ],
    features: [
      'Microservices-based architecture for flight search, fare calculation, and booking',
      'API Gateway for centralized routing and request handling',
      'Service discovery using Eureka for dynamic service registration',
      'Centralized configuration management with Spring Cloud Config Server',
      'Asynchronous booking and notification processing using RabbitMQ',
    ],
    domain: 'Full-Stack Development | Distributed Systems',
    icon: Shield,
    gradient: 'from-blue-600 to-purple-600',
    imageUrl: 'fight.jpg',
    demoUrl: '#',
    githubUrl: 'https://github.com/kishorsamruddhi/flight-booking-system',
  },
  {
    id: 2,
    title: 'SportsWear Platform',
    subtitle: 'End-to-End Sportswear E-Commerce Platform',
    description:
      'A full-stack sportswear e-commerce web application that enables users to browse products, manage cart and wishlist, and place orders seamlessly. The platform supports secure JWT-based authentication, role-based access control, address management, order history, coupon application, and integrated Razorpay payments. Deployed using modern cloud hosting with Vercel for the frontend and Heroku for the backend.',
    technologies: [
      'React.js',
      'Redux',
      'REST APIs',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
      'Razorpay',
    ],
    features: [
      'User registration and secure JWT-based authentication',
      'Product browsing with cart and wishlist management',
      'Role-based access for users and administrators',
      'Address management, order history, and coupon support',
      'Secure online payments with Razorpay integration',
    ],
    domain: 'Fullstack Development',
    icon: Users,
    gradient: 'from-green-600 to-blue-600',
    imageUrl: 'nike.png',
    demoUrl: 'https://nike-clone-468u37uxv-samruddhis-projects-443f0d6e.vercel.app/',
    githubUrl: 'https://github.com/kishorsamruddhi/Nike-Clone',
  },
  {
    id: 3,
    title: 'Mera Bestie',
    subtitle: 'Seller-to-Consumer E-Commerce Platform',
    description:
      'A full-stack e-commerce web application that enables sellers to list and manage products while allowing buyers to browse, review, and purchase items through a clean, user-friendly interface. The platform streamlines order management and transaction workflows, resulting in faster processing times and an improved shopping experience.',
    technologies: [
      'React.js',
      'Material-UI',
      'Firebase Authentication',
      'Firebase Firestore',
      'Firebase Storage',
      'Firebase Hosting',
    ],
    features: [
      'Seller product listing and management dashboard',
      'Buyer-facing product browsing with reviews and ratings',
      'Secure user authentication and role-based access',
      'Order management with optimized processing workflows',
      'Responsive UI for seamless experience across devices',
    ],
    domain: 'Web Development',
    icon: Code,
    gradient: 'from-purple-600 to-pink-600',
    imageUrl: 'merabestie.png',
    demoUrl: 'https://merabestie-khaki.vercel.app/',
    githubUrl: 'https://github.com/kishorsamruddhi/EcommerceWebsite',
  },
  {
    id: 4,
    title: 'High-Concurrency Order Processing System',
    subtitle: 'Distributed Pre-Checkout Reservation & Inventory Management System',
    description:
      'A high-performance backend system designed to handle extreme traffic during flash-sale events. The platform ensures safe inventory allocation, prevents overselling, and delivers sub-100ms responses by leveraging Redis atomic operations, asynchronous messaging, and scalable microservice-based APIs.',
    technologies: [
      'Java',
      'Spring Boot',
      'Redis',
      'RabbitMQ',
      'MyBatis',
      'Thymeleaf',
      'Nginx',
      'REST APIs',
      'Distributed Systems',
    ],
    features: [
      'Pre-checkout inventory reservation using Redis atomic operations',
      'Overselling prevention under heavy concurrent traffic',
      'Asynchronous order processing with RabbitMQ',
      'High-throughput REST APIs built with Spring Boot',
      'Scalable architecture optimized for flash-sale traffic bursts',
    ],
    domain: 'High-Concurrency Systems',
    icon: Cloud,
    gradient: 'from-orange-600 to-red-600',
    imageUrl: 'high.png',
    demoUrl: '#',
    githubUrl: 'https://github.com/kishorsamruddhi/High-Concurrency-Order-Processing-System',
  },
  {
    id: 5,
    title: 'Sarkar Rental Vehicle',
    subtitle: 'Vehicle Rental Agency Platform',
    period: 'Jun 2026 - Aug 2026',
    description:
      'A full-stack vehicle rental platform built from scratch with vehicle listings, availability checks, end-to-end booking flows, secure authentication, OTP verification, booking emails, and Razorpay test-mode payments.',
    technologies: ['MERN Stack', 'Zustand', 'REST APIs', 'JWT Authentication', 'SMTP', 'Razorpay'],
    features: [
      'MongoDB schemas for vehicles, bookings, and users',
      'Zustand state management for a scalable client architecture',
      'JWT authentication with HTTP-only cookies and password hashing',
      'SMTP workflows for booking confirmations and OTP verification',
      'Razorpay payment order creation and verification',
    ],
    domain: 'MERN Stack Development',
    icon: Users,
    gradient: 'from-cyan-600 to-blue-600',
    imageUrl: 'sarkarrentalvehicl.png',
    demoUrl: 'https://sarkar-rental-vehicle.vercel.app/',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Digi Shiksha',
    subtitle: 'Learning Management System',
    period: 'Oct 2024 - Dec 2024',
    description:
      'A full-stack LMS with role-based access for admins and users, course enrollment and progress tracking, certificate generation, and an agentic AI assistant for personalized learning support.',
    technologies: [
      'MERN Stack',
      'Agentic AI',
      'OpenAI API',
      'Tool Calling',
      'Prompt Engineering',
      'JWT Authentication',
    ],
    features: [
      'Secure login and role-based authentication for admins and users',
      'Agentic AI assistant for course recommendations and learner queries',
      'Course enrollment, progress tracking, and certificate generation',
      'Admin panel for managing courses, users, and learning content',
      'Designed to support 20-30 users and 10+ courses',
    ],
    domain: 'MERN Stack Development',
    icon: Code,
    gradient: 'from-emerald-600 to-teal-600',
    imageUrl: 'lms.png',
    demoUrl: 'https://learning-management-azure.vercel.app/',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Manadhaar',
    subtitle: 'Marathi Literature Sharing Platform',
    description:
      "A platform for sharing poems and Shayari that celebrates Marathi literature, helping preserve the language's literary heritage and connect readers with meaningful creative works.",
    technologies: ['React.js', 'JavaScript', 'Responsive UI', 'Vercel'],
    features: [
      'Shared poems and Shayari for Marathi literature lovers',
      'A digital space dedicated to preserving Marathi literary culture',
      'Accessible reading experience across devices',
      'Production deployment on Vercel',
    ],
    domain: 'Web Development',
    icon: Shield,
    gradient: 'from-rose-600 to-orange-600',
    imageUrl: 'manadhar.png',
    demoUrl: 'https://manadhar.vercel.app/',
    githubUrl: '#',
  },
];

/* ------------------------------------------------------------------ */
/* WORK PROJECTS – add yours here, same shape as above.                */
/* Optional fields: role, period, previews: ['a.png', 'b.png', ...]    */
/* ------------------------------------------------------------------ */
// Images live in  public/<folder>/img1.png, img2.png, ...
const WORK_IMG_BASE = '';
const imgs = (folder: string, count: number): string[] =>
  Array.from({ length: count }, (_, i) => encodeURI(`${WORK_IMG_BASE}/${folder}/img${i + 1}.png`));

// Builds a work project; descriptions/tech/features get filled in as you send them.
const workItem = (
  id: number,
  title: string,
  folder: string,
  count: number,
  extra: Partial<Project> = {}
): Project => ({
  id,
  title,
  subtitle: '',
  description: 'Description coming soon.',
  technologies: [],
  features: [],
  domain: 'Client Project',
  icon: Briefcase,
  gradient: 'from-teal-600 to-emerald-600',
  previews: imgs(folder, count),
  demoUrl: '#',
  githubUrl: '#',
  ...extra,
});

const workProjects: Project[] = [
  workItem(101, 'Ikra Tourism', 'Ikraa', 5, {
    subtitle: 'Travel & Visa Assistance Website',
    description:
      'Website for iKra Tourism that brings visa assistance, holiday packages and UAE experiences together, with a journey-planning enquiry form to turn visitors into leads.',
    features: [
      'Visa pages for Europe, UK, USA & Canada, Australia, Asia and Africa',
      'Dubai & UAE experiences: city tours, desert safari, cruises',
      '"Plan Your Journey" enquiry modal with country-code phone input',
    ],
    domain: 'Travel & Tourism',
    demoUrl: 'https://ikratourism.com',
  }),
  workItem(102, 'Rising Sun', 'rising sun', 4, {
    subtitle: 'Construction Chemicals Company Website',
    description:
      'Corporate site for Rising Sun, an authorized Mapei distributor, showcasing waterproofing, concrete admixtures, tile adhesives and structural repair solutions.',
    features: [
      'Product catalogue across five construction-chemical categories',
      'Solutions, gallery and blog sections',
      'Get Quote and contact flow for dealer enquiries',
    ],
    domain: 'Construction Chemicals',
    demoUrl: 'https://risingsungroup.co.in/',
  }),
  workItem(103, 'Autus', 'Autus', 4, {
    subtitle: 'Environmental Technology Website',
    description:
      'Redesigned website for Autus Environment Protection Technologies, built around its world of water, air and life, with a polished "coming soon" makeover page during the transition.',
    features: [
      'Branded coming-soon page with contact call-to-action',
      'Redesigned SuperEx, Applications, Home and Contact pages',
      'Built on WordPress with Elementor',
    ],
    domain: 'Environmental Technology',
    demoUrl: 'https://autus.in',
  }),
  workItem(104, 'Insteel', 'Insteel', 6, {
    subtitle: 'Engineering & EPC Showcase Website',
    description:
      'Portfolio website for Insteel Engineers showcasing large-scale EPC work across buildings, bridges, airports and railway stations, filterable by sector and region.',
    features: [
      'Project gallery with category and region filters',
      'What We Do, Careers, Blog and Partner With Us pages',
      'Corporate brochure download and engineer enquiry CTA',
    ],
    domain: 'Engineering & EPC',
    demoUrl: 'https://insteelengg-eight.vercel.app/',
  }),
  workItem(105, 'Amset', 'amset', 5, {
    subtitle: 'IoT & SCADA Solutions Website',
    description:
      'Website for AMSET Technologies presenting IoT and SCADA automation for water, energy and industrial infrastructure, with 15+ years of experience front and centre.',
    features: [
      'Smart infrastructure, field instruments and engineering services sections',
      'Offerings pages for solutions, products and services',
      'Enquire Now lead capture on every page',
    ],
    domain: 'IoT & Automation',
    demoUrl: 'https://amset.in/',
  }),
  workItem(106, 'Sharang', 'sharang', 7, {
    subtitle: 'Electronics Manufacturing Solutions Website',
    description:
      'Website for Sharang Corporation (est. 1996) covering seven verticals from electronics assembly and ESD protection to material handling, led by an "Engineering Uptime" hero.',
    features: [
      'Animated hero with machinery showcase and key stats',
      'Seven-vertical solutions ecosystem with product catalogue',
      'Featured machinery slider',
    ],
    domain: 'Electronics Manufacturing',
    demoUrl: 'https://sharang.ashida.site/',
  }),
  workItem(107, 'White Country', 'WhiteCountry', 4, {
    subtitle: 'Pure A2 Buffalo Milk Brand Website',
    description:
      'Brand website for White Country Dairy Farm, presenting farm-fresh buffalo milk in glass bottles with product pricing, customer testimonials and a free-trial call to action.',
    features: [
      'Farm story, benefits and sustainability sections',
      'Product cards for Standardised and Full Cream milk',
      'Testimonials, app download and Get a Free Trial CTA',
    ],
    domain: 'Dairy & Food',
  }),
  workItem(108, 'EMST', 'emst', 8, {
    subtitle: 'PCB Assembly Equipment Website',
    description:
      'Website for EMST Technologies showcasing SMT and THT equipment such as stencil printers, reflow ovens and wave soldering machines, with a clear consultation-to-commissioning process.',
    features: [
      'Six product category pages with dedicated detail pages',
      'Five-step process: consultation to support',
      'Request a Quote and expert contact CTAs',
    ],
    domain: 'Electronics Manufacturing',
    demoUrl: 'https://emst.ashida.site/',
  }),
  workItem(109, 'Agrocore', 'Agrocore', 5, {
    subtitle: 'Freeze-Dried Fruit Snacks Store',
    description:
      'Shopify storefront for Agrocore Nurture, a Pune-based brand turning real fruit into light, crispy freeze-dried snacks like mango, pineapple, strawberry, jamun and jackfruit.',
    features: [
      'Shop with single packs and combo bundles',
      'Brand story, mission and promise sections',
      'FAQ, blog and contact pages',
    ],
    domain: 'E-Commerce | Food',
    demoUrl: 'https://agrocore.in/',
  }),
  workItem(110, 'MytJeet', 'mytjeet', 3, {
    subtitle: 'All-in-One Daily Life & eCommerce Platform',
    description:
      'A single platform to manage daily needs and run an eCommerce business, bringing multiple services together in one place.',
    domain: 'E-Commerce Platform',
  }),
  workItem(111, 'Sarkar Cab', 'sarkarcab', 5, {
    subtitle: 'Cab Booking Platform',
    description:
      'Cab and vehicle booking web platform with a simple booking flow and easy-to-use interface for customers.',
    domain: 'Travel & Transport',
  }),
  workItem(112, 'BrightTech', 'brighttech', 4, {
    subtitle: 'IT Training & Placement Institute Website',
    description:
      'Website for Bright InfoTech, an ISO 9001 certified IT training institute, promoting courses, placements and branches across Pune and Latur, with a course enquiry form.',
    features: [
      'Course tracks with MERN Stack program and enquiry form',
      'Placement stories, hiring partners and alumni sections',
      'Branch details, news & events and refer-and-earn',
    ],
    domain: 'Education & Training',
  }),
];

const TABS: { key: Category; label: string; icon: LucideIcon }[] = [
  { key: 'work', label: 'Work Projects', icon: Briefcase },
  { key: 'practice', label: 'Practice Projects', icon: FlaskConical },
];

/* ------------------------------------------------------------------ */
/* COMPONENT                                                           */
/* ------------------------------------------------------------------ */
const Projects: React.FC = () => {
  // Opens on Practice while the work list is empty
  const [category, setCategory] = useState<Category>(workProjects.length ? 'work' : 'practice');
  const [selected, setSelected] = useState<number | null>(null); // null = grid view
  const [activePreview, setActivePreview] = useState(0);
  const [lightbox, setLightbox] = useState(false); // large image viewer

  const list = category === 'work' ? workProjects : practiceProjects;
  const counts: Record<Category, number> = {
    work: workProjects.length,
    practice: practiceProjects.length,
  };

  // Show the first screenshot again whenever a different project opens
  useEffect(() => {
    setActivePreview(0);
    setLightbox(false);
  }, [selected, category]);

  const switchCategory = (key: Category) => {
    setCategory(key);
    setSelected(null);
  };

  const next = () => setSelected((p) => (p === null ? 0 : (p + 1) % list.length));
  const prev = () => setSelected((p) => (p === null ? 0 : (p - 1 + list.length) % list.length));

  const current = selected !== null ? list[selected] : null;

  // Screenshots of the open project
  const shots: string[] = current
    ? current.previews && current.previews.length
      ? current.previews
      : current.imageUrl
      ? [current.imageUrl]
      : []
    : [];

  const nextShot = () => setActivePreview((i) => (shots.length ? (i + 1) % shots.length : 0));
  const prevShot = () =>
    setActivePreview((i) => (shots.length ? (i - 1 + shots.length) % shots.length : 0));

  // Keyboard: ← → to move between projects, Esc to go back to the grid.
  // While the large image is open: ← → switch images, Esc closes it.
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (lightbox) {
        if (e.key === 'ArrowRight') nextShot();
        if (e.key === 'ArrowLeft') prevShot();
        if (e.key === 'Escape') setLightbox(false);
        return;
      }
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, list.length, lightbox, shots.length]);

  // Stop the page behind from scrolling while the large image is open
  useEffect(() => {
    if (!lightbox) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header + tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
            <div className="w-24 h-1 bg-white" />
          </div>

          <div
            role="tablist"
            aria-label="Project category"
            className="inline-flex self-start md:self-auto p-1.5 rounded-xl bg-gray-900 border border-gray-800"
          >
            {TABS.map(({ key, label, icon: Icon }) => {
              const active = category === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => switchCategory(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    active ? 'bg-teal-900/60 text-teal-200' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                  <span
                    className={`ml-1 px-1.5 min-w-[1.25rem] text-xs rounded-full text-center ${
                      active ? 'bg-teal-400/20 text-teal-200' : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {counts[key]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ---------------- GRID VIEW ---------------- */}
        {current === null &&
          (list.length === 0 ? (
            <p className="text-gray-400 text-center py-16">No projects added here yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelected(index)}
                  className="group text-left rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <div className="relative h-52 overflow-hidden bg-gray-800">
                    {(project.imageUrl ?? project.previews?.[0]) && (
                      <img
                        src={project.imageUrl ?? project.previews?.[0]}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {project.period ?? project.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ))}

        {/* ---------------- DETAIL VIEW ---------------- */}
        {current !== null &&
          (() => {
            const mainShot = shots[activePreview] ?? shots[0];

            return (
              <div className="max-w-6xl mx-auto">
                <button
                  onClick={() => setSelected(null)}
                  className="mb-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All {category === 'work' ? 'work' : 'practice'} projects
                </button>

                <div className="rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-800/60 via-black to-black">
                  {/* Top: preview (left) + info (right) */}
                  <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
                    {/* Left: screenshot + previews */}
                    <div className="p-6 md:p-10 flex flex-col">
                      <button
                        type="button"
                        onClick={() => mainShot && setLightbox(true)}
                        aria-label="View large image"
                        className="group relative block w-full rounded-xl overflow-hidden bg-gray-900 border border-gray-800 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        {mainShot && (
                          <img
                            src={mainShot}
                            alt={current.title}
                            className="w-full aspect-[16/9] object-cover object-top"
                          />
                        )}
                        {mainShot && (
                          <span className="absolute top-3 right-3 p-1.5 rounded-md bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-4 h-4" />
                          </span>
                        )}
                      </button>

                      {shots.length > 1 && (
                        <div className="mt-8">
                          <h4 className="text-sm font-semibold text-white mb-3">Previews</h4>
                          <div className="flex gap-3 flex-wrap">
                            {shots.map((src, i) => (
                              <button
                                key={src + i}
                                onClick={() => setActivePreview(i)}
                                aria-label={`Preview ${i + 1}`}
                                className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                                  i === activePreview
                                    ? 'border-white'
                                    : 'border-gray-600 hover:border-gray-400'
                                }`}
                              >
                                <img src={src} alt="" className="w-full h-full object-cover" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: title, scrollable text, tech tags */}
                    <div className="p-6 md:p-10 lg:border-l border-t lg:border-t-0 border-gray-800 flex flex-col">
                      <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">
                        {current.title}
                      </h3>
                      <p className="text-blue-400 text-sm mt-1">{current.subtitle}</p>

                      <div className="mt-5 max-h-72 overflow-y-auto pr-3 text-sm leading-relaxed text-gray-200">
                        <p>{current.description}</p>
                        {current.features.length > 0 && (
                          <>
                            <p className="mt-3 font-semibold text-white">Features</p>
                            <ul className="mt-1 space-y-1">
                              {current.features.map((f, i) => (
                                <li key={i}>- {f}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      {current.technologies.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-800">
                          <h4 className="text-sm font-bold text-white uppercase mb-3">
                            Framework &amp; Libraries
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {current.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 bg-white text-black text-xs border border-gray-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 md:px-10 py-5 border-t border-gray-800">
                    <p className="text-xs text-gray-200 font-mono">
                      {current.role ? `${current.role.toUpperCase()}  •  ` : ''}
                      {current.period ?? current.domain}
                    </p>

                    <div className="flex items-stretch bg-white rounded-sm text-black text-xs divide-x divide-gray-300 self-start sm:self-auto">
                      {list.length > 1 && (
                        <button
                          onClick={prev}
                          className="flex items-center gap-1 px-3 py-1.5 hover:bg-gray-200"
                        >
                          <ArrowLeft className="w-3 h-3" /> Previous
                        </button>
                      )}
                      {current.demoUrl !== '#' && (
                        <a
                          href={current.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 hover:bg-gray-200"
                        >
                          <Globe className="w-3 h-3" /> Website
                        </a>
                      )}
                      {current.githubUrl !== '#' && (
                        <a
                          href={current.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 hover:bg-gray-200"
                        >
                          <Github className="w-3 h-3" /> Code
                        </a>
                      )}
                      {list.length > 1 && (
                        <button
                          onClick={next}
                          className="flex items-center gap-1 px-3 py-1.5 hover:bg-gray-200"
                        >
                          Next <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Large image viewer */}
                {lightbox && mainShot && (
                  <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${current.title} image ${activePreview + 1} of ${shots.length}`}
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
                    onClick={() => setLightbox(false)}
                  >
                    {shots.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevShot();
                        }}
                        aria-label="Previous image"
                        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                      >
                        <ChevronLeft className="w-7 h-7" />
                      </button>
                    )}

                    <div
                      className="relative max-w-[75vw] max-h-[70vh] flex"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={mainShot}
                        alt={current.title}
                        className="max-w-[75vw] max-h-[70vh] object-contain rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setLightbox(false)}
                        aria-label="Close"
                        className="absolute -top-3 -right-3 p-1.5 rounded-full bg-white text-black hover:bg-gray-200 shadow-lg transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {shots.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextShot();
                        }}
                        aria-label="Next image"
                        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                      >
                        <ChevronRight className="w-7 h-7" />
                      </button>
                    )}

                    {shots.length > 1 && (
                      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-300 font-mono">
                        {activePreview + 1} / {shots.length}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })()}
      </div>
    </section>
  );
};

export default Projects;