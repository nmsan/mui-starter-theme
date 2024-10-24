import style from "./wdInputContainer.module.css";
export default function WdInputContainer({children}) {

    return <div className={style.container}>
        {children}
    </div>
}
