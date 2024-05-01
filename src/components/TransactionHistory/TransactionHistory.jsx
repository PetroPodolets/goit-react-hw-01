import css from "./TransactionHistory.module.css"
import clsx from "clsx"


export default function TransactionHistory({ items }) {
    const info = clsx(css.content, css.info)
    const header = clsx(css.content, css.header)
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={header}>Type</th>
                    <th className={header}>Amount</th>
                    <th className={header}>Currency</th>
                </tr>
            </thead>
            <tbody >
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={css.line} key={id}>
                        <td className={info}>{type}</td>
                        <td className={info}>{amount}</td>
                        <td className={info}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}