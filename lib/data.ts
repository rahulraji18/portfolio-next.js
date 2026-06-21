export type SkillGroup = {
  key: string;
  title: string;
  items: string[];
  wide?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    key: '"backend"',
    title: 'Backend Development',
    items: ['Node.js', 'Adonis.js', 'Express.js', 'NestJS'],
  },
  {
    key: '"frontend"',
    title: 'Frontend Development',
    items: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    key: '"database"',
    title: 'Database Management',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    key: '"orm"',
    title: 'ORMs & Data Modeling',
    items: ['Lucid ORM', 'Sequelize', 'Mongoose'],
  },
  {
    key: '"integrations"',
    title: 'API & Integration',
    items: [
      'RESTful APIs',
      'OpenAI (ChatGPT)',
      'FedEx / DHL / Aramex / SMSA',
      'RazorPay',
      'Stripe',
      'Flywire',
      'Socket.io',
    ],
    wide: true,
  },
  {
    key: '"docs_testing"',
    title: 'API Documentation & Testing',
    items: ['Swagger', 'Postman', 'Apidog', 'RESTful APIs'],
    wide: true,
  },
];

export type Job = {
  role: string;
  company: string;
  status: 'active' | 'archived';
  dates: string;
  location: string;
  bullets: string[];
  link?: { label: string; href: string };
  stack?: string[];
};

export const jobs: Job[] = [
  {
    role: 'Software Developer',
    company: 'Syntrio Technologies',
    status: 'active',
    dates: 'Jan 2024 — Mar 2026',
    location: 'Thiruvananthapuram, Kerala',
    bullets: [
      'Develop and maintain scalable web applications using <b>Node.js, React.js, and Adonis.js</b>.',
      'Integrate global logistics APIs (<b>FedEx, DHL, Aramex, SMSA</b>) for real-time shipment management.',
      'Optimize database queries and indexing using <b>MySQL</b> to ensure maintainable, high-performance code.',
    ],
    link: { label: 'syntrio.in ↗', href: 'https://syntrio.in/' },
  },
  {
    role: 'Jr. Software Developer',
    company: 'Spericorn Technology',
    status: 'archived',
    dates: 'Jul 2022 — Oct 2023',
    location: 'Thiruvananthapuram, Kerala',
    bullets: [
      'Collaborated on web application maintenance and development using <b>Express.js and PostgreSQL</b>.',
      'Participated in rigorous code reviews and debugging to optimize system performance.',
      'Utilized <b>Jira</b> for efficient project planning and task tracking within a team environment.',
    ],
  },
  {
    role: 'Software Trainee',
    company: 'Logiprompt Techno Solutions',
    status: 'archived',
    dates: 'Oct 2021 — Jul 2022',
    location: 'Thiruvananthapuram, Kerala',
    bullets: [
      'Contributed to the planning, designing, creating, and testing phases of project development.',
      'Wrote efficient, clean code to ensure optimal performance and scalability for web applications.',
      'Developed a <b>Waste Management System</b> as a key project during this tenure.',
    ],
    stack: ['Node.js', 'React.js', 'Ionic', 'Bootstrap', 'Git', 'MongoDB'],
  },
];

export const contactItems = [
  {
    label: 'email',
    value: 'rahulrajesh474@gmail.com',
    href: 'mailto:rahulrajesh474@gmail.com',
  },
  { label: 'location', value: 'Kollam, Kerala', href: null },
  {
    label: 'github',
    value: 'github.com/rahulraji18',
    href: 'https://github.com/rahulraji18',
  },
  {
    label: 'linkedin',
    value: 'in/rahul-rajeevan',
    href: 'https://linkedin.com/in/rahul-rajeevan',
  },
];
