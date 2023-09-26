import styles from "./style.module.scss"

export const FinanceForm = () => {
    return (
        <form className={styles.form__container} action="">
            
            <label className="body" htmlFor="description">Descrição</label>
            <input className="headline" id="description" type="text" placeholder="Digite aqui sua descrição" />
            <span className="body">Ex: Compra de roupas</span>
            <label className="body" htmlFor="value">Valor (R$)</label>
            <input id="value" type="number" placeholder="1" />
            <label className="body" htmlFor="value-type">Tipo de valor</label>
            <select name="value_type" id="value-type">
                <option value="entry">Entrada</option>
                <option value="expense">Despesa</option>
            </select>
            <button>Inserir valor</button>
        </form>
    )
}