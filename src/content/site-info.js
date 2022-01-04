// General Site Info

export const version = '0.7.8';

export const pages = [
  { id: 'bio',     color: 'pink',   pos: 1 },
  { id: 'resume',  color: 'blue',   pos: 2 },
  { id: 'code',    color: 'green',  pos: 3 },
  { id: 'writing', color: 'orange', pos: 4 },
];

export const bio  = 'bio';
export const res  = 'resume';
export const code = 'code';
export const writ = 'writing';

export const pageIds = pages.map(page => page.id);