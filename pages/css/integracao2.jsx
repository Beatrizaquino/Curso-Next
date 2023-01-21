// alem de utilizar um classnames filhas apra diferenciar no global.css pode utilizar o metodo next para facilitar a integração
import styles from './integracao2.module.css'

export default function integracao2() {
    return (
    <div id={styles.integracao2}>
        <div className={styles.vermelha}>Titutlo #1</div>
        <div className={styles.azul}>Titulo #2</div> 
        <div className={styles.branco}>Titulo #3</div>
    </div>
    )
}

//utiliza-se os pontos porque eles fazema integração como se fossem objetos