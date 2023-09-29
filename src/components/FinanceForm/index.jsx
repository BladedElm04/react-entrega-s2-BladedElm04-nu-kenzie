import { useState } from "react"
import { Input } from "./Input"
import { Select } from "./Select"
import styles from "./style.module.scss"

export const FinanceForm = ({addList}) => {
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("Entrada")

    const submit = (e) => {
        e.preventDefault()
        addList(description, value, type)

        setDescription("")
        setValue("")
    }
    return (
        <form className={styles.form__container} onSubmit={submit}>
            <Input 
                label={"Descrição"}
                id={"description"}
                value={description}
                type={"text"}
                placeholder={"Digite aqui sua descrição"}
                setValue={setDescription}
                span={"Ex: Compra de roupas"}
            />

            <Input 
                label={"Valor (R$)"}
                id={"value"}
                value={value}
                type={"number"}
                placeholder={"1"}
                setValue={setValue}
                span={""}
            />
            
            <Select 
                label={"Tipo de valor"}
                id={"select"}
                value={type}
                setValue={setType}
                option1={"Entrada"}
                option2={"Despesa"}
            />

            <button type="submit">Inserir valor</button>
        </form>
    )
}