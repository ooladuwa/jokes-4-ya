import type { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

const Index = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h1>
          S. Frame's <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='jokes'>Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Index;
