import { useEffect, useState } from "react";

export function Emoji() {
    const [emoji, setEmoji] = useState([])
    console.log(emoji)
    const API_URL = 'http://localhost:3000/emoji'

    useEffect(() => {
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setEmoji(data))
    }, [])

    // emoji.forEach((item) => {
    //     console.log(item.symbol)
    // })

    return (
        <div>
            <div>Emoji</div>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>{emoji.map(item => (
                <li key={item.id} style={{border: '0.3px solid gray', listStyle: 'none'}}>
                    <div>{item.title}</div>
                    <div>{item.symbol}</div>
                    <div style={{fontSize: '12px'}}>{item.keywords}</div>
                </li>
            ))}
            </ul>
        </div>
    )

}