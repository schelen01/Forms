import styles from './header.module.css'; //importa somente o styles do module

export function Header(){
    return (
        <header className={styles.header}> {/*componentiza o estilo style.header*/}
            <h1> Meu Header</h1>
        </header>
    )
}
/*em projetos maiores, pode ocorrer repetição do className, para isso crie outro componente, 
no nosso caso se chama OutroHeader*/ 