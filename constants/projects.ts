import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    title: 'Calculator',
    description: 'A fully functional calculator web application built with vanilla JavaScript, HTML, and CSS. This project demonstrates clean code practices and responsive design, featuring arithmetic operations, clear/delete functions, decimal support, and error handling.',
    imageUrl: 'https://i.ytimg.com/vi/PGCwVJ-2ovc/maxresdefault.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://jashkumarr.github.io/Calculator/',
    codeUrl: 'https://github.com/jashkumarr/Calculator',
  },
  {
    title: 'TaskFlow',
    description: 'TaskFlow is a modern, offline-first to-do list app. Organize tasks with priorities, due dates, and tags. Its unique "Smart Schedule" feature intelligently plans your workload. All data is saved directly in your browser, ensuring privacy and instant access. Features filtering, sorting, and progress tracking in a sleek dark interface.',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.mfz5bkoZJkS2ufRGVZ5H2wHaGw?pid=Api&P=0&h=180',
    tags: ['React', 'Socket.IO', 'Node.js', 'TailwindCSS'],
    liveUrl: 'https://jashkumarr.github.io/TaskFlow/',
    codeUrl: 'https://github.com/jashkumarr/TaskFlow?tab=readme-ov-file',
  },
  {
    title: 'Project Management Tool',
    description: 'A Kanban-style board with drag-and-drop functionality for effective task management.',
    imageUrl: 'https://picsum.photos/seed/kanban/600/400',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'dnd-kit'],
    liveUrl: '#',
    codeUrl: '#',
  },
];
