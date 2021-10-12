// utilities

import { quotes } from './content/quotes';

export const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];