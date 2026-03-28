import { useEffect, useState } from "react";
import cls from "./ListCard.module.css"

export function Emoji() {
    const [emoji, setEmoji] = useState([])
    const [input, setInput] = useState('')
    console.log(emoji)
    const API_URL = 'http://localhost:3000/emoji'

    useEffect(() => {
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setEmoji(data))
    }, [])

    const cards = emoji
        .filter(card => card.title.includes(input) || card.keywords.includes(input))
        .map(item => (
            <div key={item.id} className={cls.item}>
                <div className={cls.symbol}>{item.symbol}</div>
                <div className={cls.symbolTitle}>{item.title}</div>
                <div className={cls.keywords}>{item.keywords}</div>
            </div>
        ))

    return (
        <div className={cls.container}>
            <div className={cls.colorContainer}>
                <h1 className={cls.title}>Emoji Finder</h1>
                <p className={cls.subtitle}>Find emoji by keywords</p>
            </div>
            <div className={cls.cardsContainer}>
                <input type="text" className={cls.input} onChange={event => setInput(event.target.value)} placeholder="Placeholder" />
                <div className={cls.cards}>{cards}</div>
            </div>
        </div>
    )

}