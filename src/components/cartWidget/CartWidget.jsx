import style from './CartWidget.module.css';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to="/cart">
            <Badge className={style["cartWidget"]} badgeContent={4} color="success">
                <LocalMallOutlinedIcon color="action" />
            </Badge>
        </Link>
    )
}

export default CartWidget;