export const profile = {
  name: 'Jesús Fajardo',
  role: 'Senior Software Engineer · Backend & Full Stack',
  location: 'Barcelona, España',
  email: 'jesfaj7@gmail.com',
  phone: '+34 671 170 577',
  linkedin: 'https://linkedin.com/in/jesus-fajardo-46873817',
  github: 'https://github.com/basshamut',
  roadmap: 'https://roadmap.sh/u/jesfaj7',
  cv: '/CV_Jesus_Fajardo.pdf',
  summary: `Ingeniero de Software Full-Stack Senior con experiencia en aplicaciones empresariales escalables. Especialista en backend con Java/Spring y tecnologias afines(Kotlin, Groovy), complementado con frontend en React/Vite/Javascript. Conocimiento profundo del ciclo de vida del dato (MySQL, PostgreSQL, OracleElasticSearch, MongoDB, RabbitMQ), entornos cloud (AWS, GCP) y cultura DevOps. Pragmático, enfocado en mantenibilidad, principios de desarrollo e software (sin caer en fanatismos) y entrega continua de valor.`
};

export const skills = [
  { title: 'Lenguajes & Backend', items: ['Java 8/11/17/21', 'Kotlin', 'Groovy', 'Spring Boot 3', 'Spring Security', 'Spring Data', 'Node.js', 'PHP', 'Python', 'REST', 'Microservicios', 'API Gateway'] },
  { title: 'Frontend', items: ['React 18/19', 'TypeScript', 'Angular', 'Vue.js 2', 'Vite', 'Redux Toolkit', 'TanStack Query', 'Zustand', 'PrimeReact', 'TailwindCSS', 'Astro', 'PWA', 'Capacitor'] },
  { title: 'Bases de Datos', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis', 'ElasticSearch', 'Flyway', 'PL/SQL'] },
  { title: 'Cloud & Infra', items: ['AWS (EC2, S3, Lambda, EKS)', 'GCP (Cloud Run, Cloud SQL)', 'Docker', 'Kubernetes', 'OpenShift', 'Koyeb', 'Vercel', 'Supabase'] },
  { title: 'CI/CD & DevOps', items: ['GitLab CI/CD', 'Jenkins', 'GitHub Actions', 'Bamboo', 'Git'] },
  { title: 'Testing & Monitoreo', items: ['JUnit 4/5', 'Mockito', 'Cucumber', 'Swagger/OpenAPI', 'Prometheus', 'Actuator'] }
];

export const experience = [
  { company: 'Altia', role: 'Ingeniero de Software', period: 'Jul 2025 — Actualidad', location: 'Barcelona', description: 'Full-stack en microservicios. Backend Java/Spring Boot y Node.js, frontend Angular, despliegues Docker/Kubernetes con CI/CD. Clientes: Kids and Us, Madrid Digital.' },
  { company: 'SILENCE Urban Ecomobility', role: 'Java Developer', period: 'Dic 2024 — Jun 2025', location: 'Barcelona', description: 'Servicios RESTful con Java y Spring Boot como microservicios en Kubernetes con bases multi-tenant en GCP. Pruebas con JUnit y Mockito.' },
  { company: 'NTT DATA', role: 'Senior Software Engineer', period: 'Ene 2019 — Dic 2024', location: 'Barcelona', description: 'Backend empresarial con Java y Spring. Diseño técnico, optimización con Redis, pipelines CI/CD (Jenkins, Bamboo, GitHub Actions) en AWS. Clientes: SEAT, Correos, ULMA, INDITEX.' },
  { company: 'Posma Group / Neuvoo', role: 'Developer', period: 'Oct 2013 — Mar 2019', location: 'Caracas', description: 'Full-stack: minería de datos a gran escala con CasperJS/PHP, servicios REST, administración Apache. Stack: PHP, JS, ElasticSearch, RabbitMQ, MySQL.' },
  { company: 'Infosoft', role: 'Java Developer', period: 'Abr 2013 — Oct 2013', location: 'Venezuela', description: 'Web Services sobre Oracle WebLogic (OSB/Java) para Mercantil Seguros. JSF 2.0, PrimeFaces, Spring, PL/SQL.' },
  { company: 'TCS', role: 'Consultor e Integrador de Sistemas', period: 'Abr 2008 — Abr 2013', location: 'Venezuela', description: 'Soluciones Java y Oracle para Movilnet, Digitel y Movistar. Web Services, JSF, PL/SQL, estimación y coordinación de equipos.' }
];

export const projects = [
  { name: 'OpenEduGo', stack: 'Java 17 · Spring Boot 3.4 · React 19 · Vite', description: 'Sistema de gestión educativa con microservicios. JWT, Spring Security, Flyway, Swagger. Módulos académico, administrativo y financiero.', links: [{ label: 'Frontend', url: 'https://github.com/Undergrub/ft_openedugo' }, { label: 'Backend', url: 'https://github.com/Undergrub/bk_openedugo' }] },
  { name: 'Virtual Karate Dojo', stack: 'Kotlin · Spring Boot 3 · React 18 · MongoDB', description: 'Plataforma para venta de clases de karate online. Stripe Checkout, Cloudinary, Spring Mail, rate limiting con Caffeine. Monitoreo Prometheus.', links: [{ label: 'Frontend', url: 'https://github.com/basshamut/virtual-karate-dojo' }, { label: 'Backend', url: 'https://github.com/basshamut/virtual-karate-dojo-api' }] },
  { name: 'ResiManager', stack: 'Java 21 · Spring Boot 3 · React 19 · AdminLTE', description: 'Gestión integral de condominios con arquitectura multi-tenant y RBAC. JWT + HttpOnly Cookies, PostgreSQL, Flyway. Desplegado en Koyeb y Vercel.', links: [{ label: 'SPA', url: 'https://github.com/Floor5AndHalfSoftware/resimanager-spa' }, { label: 'Backoffice', url: 'https://github.com/Floor5AndHalfSoftware/resimanager-backoffice' }] },
  { name: 'Grúas Tre-Mart', stack: 'Java 21 · Spring Boot 3 · React · Astro', description: 'Gestión de servicios de grúas con mapas Leaflet, Supabase auth, precios inteligentes y app Android con Capacitor. Landing en Astro + Tailwind.', links: [{ label: 'Landing', url: 'https://github.com/basshamut/gruas-tremart-landing' }, { label: 'SPA', url: 'https://github.com/basshamut/gruastremart-spa' }, { label: 'API', url: 'https://github.com/basshamut/gruastremart-core-api' }] },
  { name: 'Atomo Gaming', stack: 'Java 21 · Groovy · Spring Boot 3 · React 18/19', description: 'Plataforma multi-marca de casino, apuestas y lotería. Microservicios (gateway, core, pagos, juegos, CMS), migración Vue 2 → React, AWS EKS. Integraciones KYC, CRM y proveedores de juego.', links: [] },
  { name: 'SIPRO', stack: 'Java · Spring Boot · ReactJS', description: 'Plataforma para compra de planes de facturación con integración Greenpay. APIs RESTful y SPA en React.', links: [] }
];

export const education = [
  { school: 'IUT-RC "Dr. Federico Rivero Palacio"', degree: 'T.S.U. en Análisis y Diseño de Sistemas', period: '2002 — 2007' }
];

export const certifications = [
  'Curso RESTful Java Spring Boot',
  'Desarrollo Web con Spring 4',
  'AWS Curso Básico para Desarrolladores Web',
  'Docker for the Absolute Beginner – Hands On – DevOps',
  'Curso Básico de MongoDB'
];
