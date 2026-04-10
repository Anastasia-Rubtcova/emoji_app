import cls from "./Card.module.css"

export function Card(props) {
    console.log(props)
    return (
        <div className={cls.item}>
            <div className={cls.symbol}>{props.card.symbol}</div>
            <div className={cls.symbolTitle}>{props.card.title}</div>
            <div className={cls.keywords}>{props.card.keywords}</div>
        </div>
    )
}