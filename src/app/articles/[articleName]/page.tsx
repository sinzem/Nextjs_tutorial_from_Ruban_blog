import { getArticleByName } from "@/app/(server)/api";
import { Params } from "next/dist/server/request/params";

export default async function ArticlePage(/* props */{params}: Params) {

    // const {params} = props;
    const {articleName} = params; /* (берем имя из строки запроса) */
    const article = await getArticleByName(articleName);

    return (
        <>
            <h1>{article.header}</h1>
            {article.text.map((line, i) => (
                <p key={i}>{line}</p>
            ))}
        </>
    )
}