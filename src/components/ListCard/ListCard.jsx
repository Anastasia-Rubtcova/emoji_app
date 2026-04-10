import { useEffect, useState } from "react";
import cls from "./ListCard.module.css"
import { Card } from "../Card/Card";

export function Emoji() {
    const [emoji, setEmoji] = useState([])
    const [input, setInput] = useState('')
    console.log(emoji)
    const API_URL = 'http://localhost:3000/emoji'

    function getUniqueKeywords(data) {
        return data.map(e => {
            let result = [...new Set(e.keywords.split(' '))].join(" ")

            return {
                ...e,
                keywords: result
            }
        })
    }


    useEffect(() => {
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setEmoji(data))
    }, [])
    console.log(getUniqueKeywords(emoji))
    const cards = getUniqueKeywords(emoji)
        .filter(card => card.title.toLowerCase().includes(input.toLowerCase()) || card.keywords.toLowerCase().includes(input.toLowerCase())
        )
        .map(item => <Card key={item.id} card={item}/>)

    return (
        <div className={cls.container}>
            <div className={cls.colorContainer}>
                <h1 className={cls.title}>Emoji Finder</h1>
                <p className={cls.subtitle}>Find emoji by keywords</p>
            </div>
            <div className={cls.cardsContainer}>
                <input type="text" className={cls.input} onChange={event => setInput(event.target.value.trim())} placeholder="Placeholder" />
                <div className={cls.cards}>{cards}</div>
            </div>
        </div>
    )

}