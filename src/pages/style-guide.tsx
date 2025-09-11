import React from "react";
import Layout from "@theme/Layout";
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
            This style guide serves two purposes: it documents the design language and visual standards used across this website, and it functions as a practical learning tool for understanding Docusaurus's theming system. By exploring the color palettes, typography, and component styles below, you can see how Docusaurus's CSS custom properties and Infima design tokens work together to create a cohesive, themeable design system.
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
                  <tr>
                    <td>
                      <span className="font-table__name">--ifm-font-family-heading</span>
                    </td>
                    <td>Headings, display text</td>
                    <td>
                      <div className="font-table__preview font-table__preview--heading">
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-table__name">--ifm-font-family-base</span>
                    </td>
                    <td>Body text, UI elements</td>
                    <td>
                      <div className="font-table__preview font-table__preview--body">
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-table__name">--ifm-font-family-monospace</span>
                    </td>
                    <td>Code, technical content</td>
                    <td>
                      <div className="font-table__preview font-table__preview--mono">
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </td>
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
