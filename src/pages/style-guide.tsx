import React from "react";
import Layout from "@theme/Layout";
import "./style-guide.scss";

const StyleGuide = () => {
  return (
    <Layout
      title="Style Guide"
      description="Design system and style guide for joekarasek.com"
    >
      <main className="style-guide">
        <div className="style-guide__header">
          <h1 className="style-guide__title">Style Guide</h1>
          <p className="style-guide__description">
            A comprehensive guide to the design system and visual standards used across this website.
          </p>
        </div>

        <div className="style-guide__content">
          <section className="style-guide__section">
            <h2 className="style-guide__section-title">Color Palette</h2>
            <p className="style-guide__section-description">
              The color system uses CSS variables that automatically adapt to light and dark themes. These swatches show the current theme's colors.
            </p>

            <div className="color-table-container">
              <table className="color-table">
                <thead>
                  <tr>
                    <th>Color</th>
                    <th>CSS Variable</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--primary"></div>
                        <span className="color-table__name">Primary</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-color-primary)</code></td>
                    <td>Main brand color, links, buttons</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--primary-dark"></div>
                        <span className="color-table__name">Primary Dark</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-color-primary-dark)</code></td>
                    <td>Hover states, active elements</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--primary-darker"></div>
                        <span className="color-table__name">Primary Darker</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-color-primary-darker)</code></td>
                    <td>Pressed states, emphasis</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--primary-darkest"></div>
                        <span className="color-table__name">Primary Darkest</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-color-primary-darkest)</code></td>
                    <td>Text on light backgrounds</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--primary-light"></div>
                        <span className="color-table__name">Primary Light</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-color-primary-light)</code></td>
                    <td>Subtle highlights, borders</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--primary-lighter"></div>
                        <span className="color-table__name">Primary Lighter</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-color-primary-lighter)</code></td>
                    <td>Light backgrounds, subtle accents</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--primary-lightest"></div>
                        <span className="color-table__name">Primary Lightest</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-color-primary-lightest)</code></td>
                    <td>Very light backgrounds, disabled states</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--background"></div>
                        <span className="color-table__name">Background</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-background-color)</code></td>
                    <td>Main page background</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--background-surface"></div>
                        <span className="color-table__name">Background Surface</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-background-surface-color)</code></td>
                    <td>Cards, panels, elevated surfaces</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--text-base"></div>
                        <span className="color-table__name">Base Text</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-font-color-base)</code></td>
                    <td>Primary text content</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color-table__swatch">
                        <div className="color-table__preview color-table__preview--text-secondary"></div>
                        <span className="color-table__name">Secondary Text</span>
                      </div>
                    </td>
                    <td><code>var(--ifm-font-color-secondary)</code></td>
                    <td>Supporting text, captions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default StyleGuide;
