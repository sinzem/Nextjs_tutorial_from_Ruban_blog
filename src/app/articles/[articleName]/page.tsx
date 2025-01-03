import { Params } from "next/dist/server/request/params";

export default function ArticlePage(/* props */{params}: Params) {

    // const {params} = props;
    const {articleName} = params; /* (берем имя из строки запроса) */

    return <>This is article: {articleName}</>
}