// export const metadata: Metadata = {
//   title: "Some blog",
//   description: "NextJS tutorial",
// }; /* (пример подключения метатегов, в д.с перекрываются метатегами из layout.tsx) */

import Link from "next/link";
import { getAllArticles } from "./(server)/api";
import { ROUTING } from "./routing";

/* (серверный компонент, может работать с async, вотличии от react) */
export default async function Home() {

  const articles = await getAllArticles();

  return (
    <>
      <h1>Some blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.name}>
            <Link href={ROUTING.article(article.name)}>
              {article.header}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
