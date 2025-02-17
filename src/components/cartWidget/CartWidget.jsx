import styles from './CartWidget.module.css';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';



const CartWidget = () => {
    return (
        <Badge className={styles.cartWidget} badgeContent={4} color="success">
            <LocalMallOutlinedIcon color="action" />
        </Badge>
    )
}

export default CartWidget;