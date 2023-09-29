import styles from "./style.module.scss"


export const FinanceCard = ({description, type, value, id, removeList}) => {
    const formatedValue = parseInt(value)
    const valueBrl = formatedValue.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })
    return (
        <li className={
            `${styles.card__container} ${type === "Entrada" ? styles.green : styles.grey}`}>
            <div className={styles.card_title__container}>
                <h2 className={`${styles.card__title} title three`}>{description}</h2>
                <span className={`${styles.card__type} body`}>{type}</span>
            </div>
            <div className={styles.card_value__container}>
                <span className={`${styles.card} body`}>{valueBrl}</span>
                <button className={styles.card__button} onClick={() => removeList(id)}>Excluir</button>
            </div>
        </li>
    )
}