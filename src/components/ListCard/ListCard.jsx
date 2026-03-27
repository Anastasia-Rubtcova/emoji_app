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
        .filter(card => card.title.includes(input))
        .map(item => (
            <div key={item.id} className={cls.item}>
                <div>{item.title}</div>
                <div>{item.symbol}</div>
                <div className={cls.keywords}>{item.keywords}</div>
            </div>
        ))

    return (
        <div className={cls.container}>
            <div><h1>Emoji</h1></div>
            <div><input type="text" onChange={event => setInput(event.target.value)} placeholder="find emoji" /></div>
            <div><div className={cls.cards}>{cards}</div></div>
        </div>
    )

}