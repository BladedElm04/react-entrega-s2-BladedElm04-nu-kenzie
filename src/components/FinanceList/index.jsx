import { FinanceCard } from "./FinanceCard"
import styles from "./style.module.scss"

export const FinanceList = ({ list, removeList }) => {

    return (
        <section className={styles.list__section}>
            <h3 className="title three">Resumo financeiro</h3>
            {list.length > 0 ? (<ul className={styles.list__container}>
                {list.map((elt) => {
                    const { description, value, type, id } = elt
                    return (
                        <FinanceCard
                            removeList={removeList}
                            key={id}
                            id={id}
                            description={description}
                            value={value}
                            type={type}
                        />
                    )
                })}
            </ul>) : <h2 className="title two">Você ainda não possui nenhum lançamento</h2>
            }

        </section>
    )
}