import React from "react";
import Layout from "@theme/Layout";
import { AvatarBlock } from "@site/src/components/AvatarBlock";
import "./style-guide.scss";

interface ColorTableRowProps {
  colorName: string;
  token: string;
  usage: string;
  previewClass: string;
}

const ColorTableRow: React.FC<ColorTableRowProps> = ({
  colorName,
  token,
  usage,
  previewClass,
}) => {
  return (
    <tr>
      <td>
        <div className="color-table__swatch">
          <div className={`color-table__preview ${previewClass}`}></div>
          <span className="color-table__name">{colorName}</span>
        </div>
      </td>
      <td><code>{token}</code></td>
      <td>{usage}</td>
    </tr>
  );
};

interface FontTableRowProps {
  token: string;
  usage: string;
  previewClass: string;
  previewText: string;
}

const FontTableRow: React.FC<FontTableRowProps> = ({
  token,
  usage,
  previewClass,
  previewText,
}) => {
  return (
    <tr>
      <td>
        <span className="font-table__name">{token}</span>
      </td>
      <td>{usage}</td>
      <td>
        <div className={`font-table__preview ${previewClass}`}>
          {previewText}
        </div>
      </td>
    </tr>
  );
};

interface FontSizeTableRowProps {
  sizeName: string;
  token: string;
  usage: string;
  previewClass: string;
  previewText: string;
}

interface ComponentTableRowProps {
  componentName: string;
  description: string;
  usage: string;
  preview: React.ReactNode;
}

const FontSizeTableRow: React.FC<FontSizeTableRowProps> = ({
  sizeName,
  token,
  usage,
  previewClass,
  previewText,
}) => {
  return (
    <tr>
      <td>
        <span className="font-size-table__token">{token}</span>
      </td>
      <td>{usage}</td>
      <td>
        <div className={`font-size-table__preview ${previewClass}`}>
          {previewText}
        </div>
      </td>
    </tr>
  );
};

const ComponentTableRow: React.FC<ComponentTableRowProps> = ({
  componentName,
  description,
  usage,
  preview,
}) => {
  return (
    <tr>
      <td>
        <span className="component-table__name">{componentName}</span>
      </td>
      <td>
        <span className="component-table__description">{description}</span>
      </td>
      <td>{usage}</td>
      <td>
        <div className="component-table__preview">
          {preview}
        </div>
      </td>
    </tr>
  );
};

const StyleGuide = () => {
  return (
    <Layout
      title="Style Guide"
      description="Design system and style guide for joekarasek.com"
    >
      <main className="style-guide">
        <div className="container margin-vert--xl">
          <div className="style-guide__header">
          <h1 className="style-guide__title">Style Guide</h1>
          <div className="style-guide__description">
            <p>This style guide documents the design language and visual standards used across this website.</p>
            <p>It also serves as a practical learning tool for understanding Docusaurus's theming system.</p>
            <p>Explore the color palettes, typography, and component styles below to see how CSS custom properties and Infima design tokens create a cohesive, themeable design system.</p>
          </div>
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
                    <th>Token</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <ColorTableRow
                    colorName="Primary"
                    token="--ifm-color-primary"
                    usage="Main brand color, links, buttons"
                    previewClass="color-table__preview--primary"
                  />
                  <ColorTableRow
                    colorName="Primary Dark"
                    token="--ifm-color-primary-dark"
                    usage="Hover states, active elements"
                    previewClass="color-table__preview--primary-dark"
                  />
                  <ColorTableRow
                    colorName="Primary Darker"
                    token="--ifm-color-primary-darker"
                    usage="Pressed states, emphasis"
                    previewClass="color-table__preview--primary-darker"
                  />
                  <ColorTableRow
                    colorName="Primary Darkest"
                    token="--ifm-color-primary-darkest"
                    usage="Text on light backgrounds"
                    previewClass="color-table__preview--primary-darkest"
                  />
                  <ColorTableRow
                    colorName="Primary Light"
                    token="--ifm-color-primary-light"
                    usage="Subtle highlights, borders"
                    previewClass="color-table__preview--primary-light"
                  />
                  <ColorTableRow
                    colorName="Primary Lighter"
                    token="--ifm-color-primary-lighter"
                    usage="Light backgrounds, subtle accents"
                    previewClass="color-table__preview--primary-lighter"
                  />
                  <ColorTableRow
                    colorName="Primary Lightest"
                    token="--ifm-color-primary-lightest"
                    usage="Very light backgrounds, disabled states"
                    previewClass="color-table__preview--primary-lightest"
                  />
                  <ColorTableRow
                    colorName="Background"
                    token="--ifm-background-color"
                    usage="Main page background"
                    previewClass="color-table__preview--background"
                  />
                  <ColorTableRow
                    colorName="Background Surface"
                    token="--ifm-background-surface-color"
                    usage="Cards, panels, elevated surfaces"
                    previewClass="color-table__preview--background-surface"
                  />
                  <ColorTableRow
                    colorName="Base Text"
                    token="--ifm-font-color-base"
                    usage="Primary text content"
                    previewClass="color-table__preview--text-base"
                  />
                  <ColorTableRow
                    colorName="Secondary Text"
                    token="--ifm-font-color-secondary"
                    usage="Supporting text, captions"
                    previewClass="color-table__preview--text-secondary"
                  />
                </tbody>
              </table>
            </div>
          </section>

          <section className="style-guide__section">
            <h2 className="style-guide__section-title">Font Families</h2>
            <p className="style-guide__section-description">
              Typography system using carefully selected font families for optimal readability and visual hierarchy.
            </p>

            <div className="font-table-container">
              <table className="font-table">
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>Usage</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  <FontTableRow
                    token="--ifm-font-family-heading"
                    usage="Headings, display text"
                    previewClass="font-table__preview--heading"
                    previewText="The quick brown fox jumps over the lazy dog"
                  />
                  <FontTableRow
                    token="--ifm-font-family-base"
                    usage="Body text, UI elements"
                    previewClass="font-table__preview--body"
                    previewText="The quick brown fox jumps over the lazy dog"
                  />
                  <FontTableRow
                    token="--ifm-font-family-monospace"
                    usage="Code, technical content"
                    previewClass="font-table__preview--mono"
                    previewText="The quick brown fox jumps over the lazy dog"
                  />
                </tbody>
              </table>
            </div>
          </section>

          <section className="style-guide__section">
            <h2 className="style-guide__section-title">Font Sizes</h2>
            <p className="style-guide__section-description">
              Typography scale using responsive font sizes that adapt to different screen sizes for optimal readability.
            </p>

            <div className="font-size-table-container">
              <table className="font-size-table">
                <thead>
                  <tr>
                    <th>Value</th>
                    <th>Usage</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  <FontSizeTableRow
                    sizeName="Base"
                    token="--ifm-font-size-base"
                    usage="Base font size for body text, paragraphs"
                    previewClass="font-size-table__preview--base"
                    previewText="Base - The quick brown fox jumps over the lazy dog"
                  />
                  <FontSizeTableRow
                    sizeName="H1"
                    token="--ifm-h1-font-size"
                    usage="Main headings, page titles"
                    previewClass="font-size-table__preview--h1"
                    previewText="H1&nbsp;Heading"
                  />
                  <FontSizeTableRow
                    sizeName="H2"
                    token="--ifm-h2-font-size"
                    usage="Section headings"
                    previewClass="font-size-table__preview--h2"
                    previewText="H2 Heading"
                  />
                  <FontSizeTableRow
                    sizeName="H3"
                    token="--ifm-h3-font-size"
                    usage="Subsection headings"
                    previewClass="font-size-table__preview--h3"
                    previewText="H3 Heading"
                  />
                  <FontSizeTableRow
                    sizeName="H4"
                    token="--ifm-h4-font-size"
                    usage="Minor headings"
                    previewClass="font-size-table__preview--h4"
                    previewText="H4 Heading"
                  />
                  <FontSizeTableRow
                    sizeName="H5"
                    token="--ifm-h5-font-size"
                    usage="Small headings"
                    previewClass="font-size-table__preview--h5"
                    previewText="H5 Heading"
                  />
                  <FontSizeTableRow
                    sizeName="H6"
                    token="--ifm-h6-font-size"
                    usage="Smallest headings"
                    previewClass="font-size-table__preview--h6"
                    previewText="H6 Heading"
                  />
                  <FontSizeTableRow
                    sizeName="Code"
                    token="--ifm-code-font-size"
                    usage="Inline code, technical content"
                    previewClass="font-size-table__preview--code"
                    previewText="const example = 'code';"
                  />
                  <FontSizeTableRow
                    sizeName="List"
                    token="--ifm-font-size-list"
                    usage="List items, secondary content"
                    previewClass="font-size-table__preview--list"
                    previewText="List item - The quick brown fox jumps over the lazy dog"
                  />
                </tbody>
              </table>
            </div>
          </section>

          <section className="style-guide__section">
            <h2 className="style-guide__section-title">Vertical Rhythm</h2>
            <p className="style-guide__section-description">
              Vertical rhythm creates consistent spacing and line heights throughout the design, ensuring optimal readability and visual harmony.
            </p>

            <div className="vertical-rhythm-table-container">
              <table className="vertical-rhythm-table">
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>Value</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="vertical-rhythm-table__token">--ifm-line-height-base</span>
                    </td>
                    <td>
                      <span className="vertical-rhythm-table__value">1.65</span>
                    </td>
                    <td>
                      <div className="vertical-rhythm-table__preview vertical-rhythm-table__preview--base">
                        This is an example of base line height. It provides comfortable reading with proper spacing between lines for body text and general content.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="vertical-rhythm-table__token">--ifm-line-height-h1</span>
                    </td>
                    <td>
                      <span className="vertical-rhythm-table__value">1.15</span>
                    </td>
                    <td>
                      <div className="vertical-rhythm-table__preview vertical-rhythm-table__preview--h1">
                        H1&nbsp;Heading
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="vertical-rhythm-table__token">--ifm-line-height-h2</span>
                    </td>
                    <td>
                      <span className="vertical-rhythm-table__value">1.25</span>
                    </td>
                    <td>
                      <div className="vertical-rhythm-table__preview vertical-rhythm-table__preview--h2">
                        H2&nbsp;Heading
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="vertical-rhythm-table__token">--ifm-line-height-h3</span>
                    </td>
                    <td>
                      <span className="vertical-rhythm-table__value">1.35</span>
                    </td>
                    <td>
                      <div className="vertical-rhythm-table__preview vertical-rhythm-table__preview--h3">
                        H3&nbsp;Heading
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="vertical-rhythm-table__token">--ifm-spacing-lg</span>
                    </td>
                    <td>
                      <span className="vertical-rhythm-table__value">1.5rem</span>
                    </td>
                    <td>
                      <div className="vertical-rhythm-table__preview vertical-rhythm-table__preview--spacing">
                        <div className="vertical-rhythm-spacing-demo">
                          <div className="vertical-rhythm-spacing-demo__item">Element 1</div>
                          <div className="vertical-rhythm-spacing-demo__item">Element 2</div>
                          <div className="vertical-rhythm-spacing-demo__item">Element 3</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="vertical-rhythm-table__token">--ifm-spacing-md</span>
                    </td>
                    <td>
                      <span className="vertical-rhythm-table__value">1rem</span>
                    </td>
                    <td>
                      <div className="vertical-rhythm-table__preview vertical-rhythm-table__preview--spacing">
                        <div className="vertical-rhythm-spacing-demo horizontal">
                          <div className="vertical-rhythm-spacing-demo__item">Item</div>
                          <div className="vertical-rhythm-spacing-demo__item">Item</div>
                          <div className="vertical-rhythm-spacing-demo__item">Item</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="style-guide__section">
            <h2 className="style-guide__section-title">Components</h2>
            <p className="style-guide__section-description">
              Reusable UI components that follow the design system principles and can be used throughout the website.
            </p>

            <div className="component-table-container">
              <table className="component-table">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Description</th>
                    <th>Usage</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  <ComponentTableRow
                    componentName="AvatarBlock"
                    description="Displays a person's photo, name, title, and social links in a compact card format"
                    usage="Author profiles, team member cards, contact information"
                    preview={
                      <AvatarBlock
                        name="John Doe"
                        title="Senior Software Engineer"
                        link="https://example.com"
                        image="/img/joe-professional.png"
                        linkedin="https://linkedin.com/in/johndoe"
                        github="https://github.com/johndoe"
                      />
                    }
                  />
                  <ComponentTableRow
                    componentName="Tag"
                    description="Small labels used to categorize content or indicate status"
                    usage="Blog post tags, category labels, status indicators"
                    preview={
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: 'var(--ifm-color-primary-lightest)',
                          color: 'var(--ifm-color-primary-darkest)',
                          borderRadius: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}>
                          Design Systems
                        </span>
                        <span style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: 'var(--ifm-color-emphasis-100)',
                          color: 'var(--ifm-font-color-base)',
                          borderRadius: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}>
                          Development
                        </span>
                      </div>
                    }
                  />
                </tbody>
              </table>
            </div>

            <div className="component-showcase">
              <h3 className="component-showcase__title">AvatarBlock Component</h3>
              <p className="component-showcase__description">
                The AvatarBlock component is used to display author information with social links. It's commonly used in blog posts and team pages.
              </p>
              
              <div className="component-showcase__example">
                <AvatarBlock
                  name="Jane Smith"
                  title="Design System Lead"
                  link="https://example.com"
                  image="/img/joe-professional.png"
                  linkedin="https://linkedin.com/in/janesmith"
                  github="https://github.com/janesmith"
                />
              </div>
              
              <div className="component-showcase__code">
{`<AvatarBlock
  name="Jane Smith"
  title="Design System Lead"
  link="https://example.com"
  image="/img/joe-professional.png"
  linkedin="https://linkedin.com/in/janesmith"
  github="https://github.com/janesmith"
/>`}
              </div>
            </div>

            <div className="component-showcase">
              <h3 className="component-showcase__title">Tag Component</h3>
              <p className="component-showcase__description">
                Tags are used to categorize content and provide visual context. They can be styled with different colors and sizes based on their importance.
              </p>
              
              <div className="component-showcase__example">
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'var(--ifm-color-primary-lightest)',
                    color: 'var(--ifm-color-primary-darkest)',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Primary Tag
                  </span>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'var(--ifm-color-emphasis-100)',
                    color: 'var(--ifm-font-color-base)',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Secondary Tag
                  </span>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'var(--ifm-color-emphasis-200)',
                    color: 'var(--ifm-font-color-base)',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Tertiary Tag
                  </span>
                </div>
              </div>
              
              <div className="component-showcase__code">
{`<span className="tag tag--primary">Primary Tag</span>
<span className="tag tag--secondary">Secondary Tag</span>
<span className="tag tag--tertiary">Tertiary Tag</span>`}
              </div>
            </div>
          </section>
        </div>
        </div>
      </main>
    </Layout>
  );
};

export default StyleGuide;
