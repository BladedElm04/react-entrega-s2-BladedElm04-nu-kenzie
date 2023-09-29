import styles from "./style.module.scss"

export const TotalSection = ({list}) => {

    const total = list.map((elt) => {
        if(elt.type === "Entrada"){
            return parseInt(elt.value)
        } return parseInt(-elt.value)
    })

    const sum = total.reduce((acc, cur) => {
       return acc + cur
    }, 0 )
    
    return (
        <div className={styles.total_card__container}>
            <div className={styles.title__container}>
                <h3 className="title three">Valor total:</h3>
                <span className="body">O valor se refere ao saldo</span>
            </div>
            <div className={styles.total__container}>
                <span className="title three">{sum.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}</span>
            </div>
        </div>
    )
}