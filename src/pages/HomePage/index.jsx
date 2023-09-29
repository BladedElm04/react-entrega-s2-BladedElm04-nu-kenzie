import { FinanceForm } from "../../components/FinanceForm"
import { FinanceList } from "../../components/FinanceList"
import { TotalSection } from "../../components/TotalSection"

export const HomePage = ({list, addList, removeList}) => {
    return (
        <main className="main__container">
            <section className="form_section__container">
                <FinanceForm addList={addList} />
                {list.length > 0 ? <TotalSection list={list} /> : <></>}
                
            </section>
            <FinanceList list={list} removeList={removeList} />
        </main>
    )
}