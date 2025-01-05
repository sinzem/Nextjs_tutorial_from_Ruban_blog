"use client";

import { useEffect, useState } from "react";
import { AppLink } from "./shared/components/app-link";
import { ROUTING } from "./routing";
// import { articleStorage } from "./ArticleStorage";

type ArticlePreviewProps = {
    name: string;
    text: string;
  }
  
export const getLikeKey = (articleName: string) => `SomeBlog_like_${articleName}`;

export default function ArticlePreview({name, text}: ArticlePreviewProps) {

    // const likeKey = getLikeKey(name);
    // const [liked, setLiked] = useState(localStorage.getItem(likeKey) === "liked"); (работать с LS не получится - нужно или делать компонент полностью клиентским, или вынести функционал в useEffect)

    const [liked, setLiked] = useState(false);

    // const [liked, setLiked] = useState(articleStorage.liked(name)); /* (функционал по работе с LS вынесли в отдельный класс) */

    useEffect(() => {
        const likeKey = getLikeKey(name);
        const likeValue = localStorage.getItem(likeKey);
        setLiked(likeValue === "like"); 
    }, [name]); /* (Next рекомендует работать с LS через useEffect, но в д.с это вызывает скачек при перерисовке - с сервера загружаются непролайканые данные, на пользователе гидруются в лайки, так как данные берутся из LS, в реальных приложениях данные будут приходить из БД, проблема отпадет(или поставить задержку отрисовки на секунду)) */  

    const like = () => {
        const likeKey = getLikeKey(name);
        localStorage.setItem(likeKey, "like");
        // articleStorage.like(name);
        setLiked(true);
    }

    return (
        <>
        <AppLink href={ROUTING.article(name)}>
            {text}
        </AppLink>
        <button
            type="button"
            onClick={like}>
            {/* (при работе с LS через класс выдало ошибку - здесь лайк эмоджи, а на сервере - слово like, можно добавить аттрибут suppressHydrationWarning - подавляет эту ошибку, если мы уверены, что все правильно(реально ошибку подавил, но перерендер тоже - осталось словом like, как на сервере)) */}
            {liked ? "👍" : "like"}
        </button>
        </>
    )
}