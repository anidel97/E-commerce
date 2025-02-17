import styles from './itemListContainer.module.css';

const ItemListContainer  = ({ greeting }) => {
    return (
        <div className={styles.itemListContainer}>
            <h1>Hola,{greeting}. Bienvenida a AnDeStudio.</h1>
            <p>Haz tu primera compra y recibe un <span>20% off</span> con envío GRATIS</p>
        </div>
        
    );
}
export default ItemListContainer;