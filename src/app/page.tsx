// export const metadata: Metadata = {
//   title: "Some blog",
//   description: "NextJS tutorial",
// }; /* (пример подключения метатегов, в д.с перекрываются метатегами из layout.tsx) */

import { getAllArticles } from "./(server)/api";
import { AppLink } from "./shared/components/app-link";
import ArticlePreview from "./ArticlePreview";

const ARTICLES_PER_PAGE = 10;
/* (серверный компонент, может работать с async, вотличии от react) */
export default async function Home({searchParams}: {
  searchParams: Record<string, string>
}) {

  const page = Number.parseInt(searchParams.page ?? 1);
  const allArticles = await getAllArticles(); 
  const articles = allArticles.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);

  const nextPageUrl = {
    search: new URLSearchParams({
      page: (page + 1).toString()
    }).toString()
  }

  return (
    <>
      <h1>Some blog, page {page}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.name}>
            <ArticlePreview name={article.name} text={article.header}/>
          </li>
        ))}
      </ul>

      <AppLink href={nextPageUrl}>
        Next
      </AppLink>
    </>
  );
}


