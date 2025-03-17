import React from "react";
import clsx from "clsx";
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from "@docusaurus/plugin-content-docs/client";
import DocCard from "@theme/DocCard";
import type { Props } from "@theme/DocCardList";

async function getData() {
  const url = "/frontMatter.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

function getFrontMatterByPath(docId, frontMatter) {
  if (!frontMatter) {
    return null;
  }
  const frontMatterByPath = frontMatter.find((item) => item.filePath === docId);
  return frontMatterByPath;
}

export default function DocCardList(props: Props): JSX.Element {
  const { items, className } = props;
  const [frontMatter, setFrontMatter] = React.useState(null);

  React.useEffect(() => {
    getData().then((data) => {
      setFrontMatter(data);
    });
  }, []);

  console.log({ frontMatter });

  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx("row", className)}>
      {filteredItems.map((item, index) => {
        console.log({ item: getFrontMatterByPath(item.docId, frontMatter) });
        return (
          <article key={index} className="col col--6 margin-bottom--lg">
            <DocCard item={item} />
          </article>
        );
      })}
    </section>
  );
}
