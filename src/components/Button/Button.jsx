import s from "./Button.module.scss";

import Loader from "../Loader/Loader";

const Button = ({ onClickProp, isLoading }) => {


    return (
        <button type="button" className={s.Button} onClick={onClickProp}>
            Load more {isLoading && <Loader/>}
        </button>
    );
};

export default Button;