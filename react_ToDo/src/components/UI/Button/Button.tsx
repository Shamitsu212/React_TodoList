import styles from './Button.module.css'

interface Props {
  text: string,
  onClick?: () => void,
}

function Button( {text, onClick} :Props) {

  return (
    <button
      className={styles.button}
      onClick={onClick}
    >

      {text}

    </button>
  )
}

export default Button