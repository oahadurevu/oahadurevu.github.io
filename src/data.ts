export const profile = {
  name: 'Md. Oahadur Rahman Evu',
  displayName: 'Oahadur Rahman Evu',
  headline: 'Computer Science & Engineering Student | Software Developer | AI/ML Enthusiast',
  location: 'Rajshahi, Bangladesh',
  role: 'B.Sc. in Computer Science & Engineering (CSE) Student',
  university: 'Varendra University, Rajshahi',
  academicStatus: '3rd Year / 6th Semester',
  cgpa: '3.77 / 4.00',
  expectedGraduation: 'December 2027',
  github: 'https://github.com/oahadurevu',
  githubHandle: 'oahadurevu',
  linkedin: 'https://www.linkedin.com/in/md-oahadur-rahman-evu-95a627295',
  email: 'oahadur.rahman.evu@example.com',
  tagline: 'Building, learning, and turning ideas into technology.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const aboutText = [
  "I am a Computer Science and Engineering undergraduate at Varendra University, Rajshahi, interested in software development, AI/ML, networking, robotics, and solving practical problems through technology.",
  "I enjoy transforming ideas into working prototypes and applications. My academic journey and extracurricular activities have given me experience with software projects, AI/ML concepts, UI/UX, embedded systems, robotics, hackathons, research-oriented activities, and innovation projects.",
  "I am continuously improving my programming, software engineering, problem-solving, communication, and technical skills.",
];

export const currentlyExploring = [
  'Full-Stack Development',
  'React / Modern Frontend Development',
  'Flutter / Dart',
  'AI & Machine Learning',
  'Deep Learning',
  'Computer Networks',
  'Robotics & Embedded Systems',
  'UI/UX and Product Design',
];

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Varendra University, Rajshahi',
    period: '2024 – 2027',
    status: 'Current: 3rd Year / 6th Semester',
    detail: `CGPA: 3.77 / 4.00 · Expected Graduation: December 2027`,
    current: true,
  },
  {
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'Manda Momin Shahana Government College',
    period: 'Science Group',
    status: 'GPA: 4.58',
    detail: 'Science Group',
    current: false,
  },
];

export const skillCategories = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: ['C', 'C++', 'Java', 'Python', 'Dart'],
  },
  {
    title: 'Frontend / App Development',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Flutter'],
  },
  {
    title: 'AI / Machine Learning',
    icon: 'BrainCircuit',
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Computer Vision', 'CNN', 'Image Classification', 'Grad-CAM'],
  },
  {
    title: 'Backend / Web',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', 'REST API'],
  },
  {
    title: 'Database / Cloud / Tools',
    icon: 'Database',
    skills: ['Firebase', 'Git', 'GitHub', 'Figma'],
  },
  {
    title: 'Networking',
    icon: 'Network',
    skills: ['Computer Networks', 'TCP/IP', 'OSI Model', 'IPv4', 'Subnetting', 'Routing & Switching', 'LAN', 'Cisco Packet Tracer'],
  },
  {
    title: 'Operating Systems',
    icon: 'MonitorSmartphone',
    skills: ['OS Fundamentals', 'Process Management', 'CPU Scheduling', 'Linux', 'Windows'],
  },
  {
    title: 'Embedded / Robotics',
    icon: 'Cpu',
    skills: ['Arduino', 'ESP32', 'Sensors', 'Motor Control', 'PID Control', 'Line Following Robot', 'GPS / GSM', 'MPU6050'],
  },
  {
    title: 'Design',
    icon: 'Palette',
    skills: ['UI/UX', 'Figma', 'Product Interface Design'],
  },
];

export const projects = [
  {
    title: 'MediQ',
    type: 'Healthcare Platform / Full-Stack Concept',
    description:
      'A healthcare management platform concept designed to connect hospitals, doctors, nurses, and patients in one ecosystem.',
    features: [
      'Doctor appointments & Find doctors',
      'Pharmacy & Emergency ambulance',
      'Laboratory reports & Blood bank',
      'Find hospital wards & Bed management',
      'Patient services & Vitals',
      'Doctor / Nurse dashboards',
      'Prescription management',
      'Critical requests & Waiting management',
    ],
    problem:
      'Healthcare services are fragmented — patients struggle to connect with the right hospital, doctor, or service quickly.',
    solution:
      'A unified platform bringing hospitals, doctors, nurses, and patients into one connected ecosystem with role-based dashboards.',
    technologies: ['React', 'Node.js', 'Express.js', 'REST API', 'UI/UX'],
    contribution: 'Concept, UI/UX design, and frontend development of the platform interface.',
    live: 'https://mediqq.vercel.app/',
    github: null,
    featured: true,
    accent: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'CourierFast',
    type: 'Innovation / Startup / Delivery Platform',
    description:
      'An urgent parcel delivery service designed for areas where conventional courier branches are unavailable, especially around bus/CNG stops.',
    features: [
      'App + website',
      'Live tracking',
      'ID / OTP based pickup',
      'Secure parcel box concept',
      'Delivery window 7 AM – 10 PM',
      'Parcel limit ~2 kg',
      'Lower-cost delivery concept',
    ],
    problem:
      'Conventional courier branches are unavailable in many areas, making urgent parcel delivery difficult.',
    solution:
      'A lightweight delivery network operating near transit stops with OTP-verified pickup and live tracking for lower-cost, fast delivery.',
    technologies: ['Flutter', 'Dart', 'UI/UX', 'Product Design'],
    contribution:
      'Innovation Hub team project — product thinking, UI/UX design, and concept development as part of the Query Fast / Courier Fast Team.',
    live: null,
    github: null,
    featured: true,
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Smart Warehouse Delivery Robot',
    type: 'Robotics / Embedded Systems',
    description:
      'A smart delivery robot designed around intelligent line following and warehouse delivery.',
    features: [
      'Line following navigation',
      'PID control for smooth movement',
      'Motor driver & sensor integration',
      'Embedded programming',
    ],
    problem:
      'Manual warehouse delivery is slow and labor-intensive for repetitive routes.',
    solution:
      'An autonomous line-following robot using PID control to navigate warehouse paths and deliver items along fixed routes.',
    technologies: ['Arduino', 'Line Following Sensors', 'Motor Driver', 'PID Control', 'Embedded C'],
    contribution: 'Hardware design, sensor calibration, PID tuning, and embedded programming.',
    live: null,
    github: null,
    featured: true,
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'ZeroBite',
    type: 'Social Impact / Food Rescue / App Concept',
    description:
      'A food rescue platform connecting restaurants, hotels, bakeries, events, NGOs, and people to reduce food waste.',
    features: [
      'Connects food providers with NGOs & people',
      'Reduces food waste from events & businesses',
      'Supports SDG 2: Zero Hunger',
      'Supports SDG 9: Industry, Innovation and Infrastructure',
      'Supports SDG 12: Responsible Consumption and Production',
    ],
    problem:
      'Surplus food from restaurants, hotels, and events is wasted while people nearby face food insecurity.',
    solution:
      'A platform that connects food providers with NGOs and individuals to redirect surplus food to those who need it.',
    technologies: ['App Concept', 'UI/UX', 'Product Design'],
    contribution: 'Concept development and product design for social impact.',
    live: null,
    github: null,
    featured: false,
    accent: 'from-lime-500/20 to-green-500/20',
  },
  {
    title: 'ResQ',
    type: 'Emergency / Embedded / Safety Technology',
    description:
      'An accident detection and alert system designed to automatically detect crashes and send emergency alerts.',
    features: [
      'GPS location tracking',
      'GSM alert messaging',
      'Accelerometer / gyroscope input',
      'Tilt detection',
      'OBD-II concept integration',
    ],
    problem:
      'After accidents, delayed response can be critical — especially in remote or low-traffic areas.',
    solution:
      'An embedded system that detects accident-like motion patterns and automatically sends location-based emergency alerts.',
    technologies: ['GPS', 'GSM', 'MPU6050', 'Accelerometer', 'Embedded Systems'],
    contribution: 'Concept, hardware selection, and prototype design.',
    live: null,
    github: null,
    featured: false,
    accent: 'from-red-500/20 to-rose-500/20',
  },
];

export const robotics = [
  { name: 'Arduino UNO', icon: 'Cpu' },
  { name: 'ESP32', icon: 'Cpu' },
  { name: 'L298N Motor Driver', icon: 'Cpu' },
  { name: 'TCRT5000 Sensors', icon: 'Cpu' },
  { name: 'DC Motors', icon: 'Cpu' },
  { name: 'PID Control', icon: 'Cpu' },
  { name: 'GPS Module', icon: 'Cpu' },
  { name: 'GSM Module', icon: 'Cpu' },
  { name: 'MPU6050', icon: 'Cpu' },
  { name: 'Embedded Programming', icon: 'Cpu' },
];

export const achievements = [
  {
    title: 'Robo Spark 1.0 — Varendra University',
    items: [
      '1st Runner-Up in Poster Presentation',
      'Participated in Line Follower Robot',
      'Participated in Robo Soccer',
    ],
    type: 'Robotics Competition',
  },
  {
    title: 'Innovation Hub',
    items: [
      'Worked on CourierFast / Query Fast Team practical project',
      'Product / problem-solving and innovation experience',
    ],
    type: 'Innovation Project',
  },
  {
    title: 'AI Hackathon',
    items: ['Participated'],
    type: 'Hackathon',
  },
  {
    title: 'Research Hackathon',
    items: ['Participated'],
    type: 'Hackathon',
  },
  {
    title: 'NSDA Level 6',
    items: ['Machine Learning in Immersive Technology'],
    type: 'Technical Training / Qualification',
  },
];

export const studyAreas = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Concepts',
  'Computer Networks',
  'Operating Systems',
  'Software Engineering',
  'Computer Architecture',
  'Theory of Computation',
  'Digital Signal Processing / Signals',
  'Mathematics',
  'Numerical Methods',
  'Communication Engineering',
  'AI / Machine Learning Fundamentals',
];

export const careerJourney = [
  { title: 'Academic Foundation', desc: 'Started B.Sc. in CSE at Varendra University' },
  { title: 'Programming & Computer Science', desc: 'C, C++, Java, Python — building core fundamentals' },
  { title: 'Networking & Operating Systems', desc: 'TCP/IP, routing, Linux, process management' },
  { title: 'AI / ML Exploration', desc: 'Machine learning, deep learning, computer vision' },
  { title: 'Robotics & Embedded Systems', desc: 'Arduino, ESP32, PID control, line-following robots' },
  { title: 'Hackathons & Research', desc: 'AI Hackathon, Research Hackathon participation' },
  { title: 'Innovation Hub Projects', desc: 'CourierFast team project & product innovation' },
  { title: 'Software / Full-Stack Development', desc: 'React, Node.js, REST APIs — building real applications' },
];

export const experienceItems = [
  {
    title: 'Innovation Hub Project Work',
    desc: 'Developed CourierFast as part of the Query Fast / Courier Fast Team — product thinking, UI/UX, and innovation.',
    type: 'Team Project',
  },
  {
    title: 'Hackathon Participation',
    desc: 'Participated in AI Hackathon and Research Hackathon — building under time pressure and exploring new ideas.',
    type: 'Hackathon',
  },
  {
    title: 'Robotics Projects',
    desc: 'Built line-following and delivery robots using Arduino, sensors, and PID control.',
    type: 'Robotics',
  },
  {
    title: 'Software Projects',
    desc: 'Developed MediQ — a healthcare platform concept with dashboards and service modules.',
    type: 'Software',
  },
  {
    title: 'AI/ML Project Work',
    desc: 'Explored machine learning, deep learning, CNNs, and computer vision concepts.',
    type: 'AI/ML',
  },
  {
    title: 'UI/UX & Product Development',
    desc: 'Designed product interfaces and user experiences for app concepts and platforms.',
    type: 'Design',
  },
];
