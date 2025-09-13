import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import './NotFound.scss';

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('not-found', className)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="not-found__content">
              <h1 className="not-found__title">404</h1>
              <h2 className="not-found__subtitle">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  Page Not Found
                </Translate>
              </h2>
              <div className="not-found__message">
                <p>
                  <strong>This website is a work in progress!</strong>
                </p>
                <p>
                  The page you're looking for doesn't exist yet, but it might be coming soon. 
                  I'm actively building and improving this site.
                </p>
                <p>
                  While you're here, feel free to check out the content that's already available:
                </p>
              </div>
              
              <div className="not-found__links">
                <Link to="/" className="not-found__link not-found__link--primary">
                  ← Back to Home
                </Link>
                <Link to="/blog" className="not-found__link">
                  Read My Writings
                </Link>
                <Link to="/resume" className="not-found__link">
                  View Resume
                </Link>
              </div>

              <div className="not-found__wip-notice">
                <p>
                  <em>
                    🚧 Under Construction - More content coming soon! 🚧
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
