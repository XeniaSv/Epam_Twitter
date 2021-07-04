// Данная функция округляет большие значения для количества фолловеров, подписок, лайков, ретвитов.
// Пример: 250000 <=> 250K
export default function Formater(labelValue) {
    return (Math.abs(Number(labelValue)) >= 1.0e9
    ? `${Math.abs(Number(labelValue)) / 1.0e9}B`
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? `${Math.abs(Number(labelValue)) / 1.0e6}M`
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? `${Math.abs(Number(labelValue)) / 1.0e3}K`
    : Math.abs(Number(labelValue)))
}
