import cls from "./AppLink.module.scss"
import {classNames} from "shared/aliases/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";
export enum AppLinkTheme {
    PRIMARY='primary',
    SECONDARY='secondary'
}
interface AppLinkProps  extends  LinkProps {
    className?:string,
    theme?:AppLinkTheme
}
export const AppLink:FC<AppLinkProps> = (props) => {

    const {
        className,
        to,
        theme=AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props

    return (
        <Link to={to}
              className={classNames(cls.AppLink,{},[className,cls[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    );
};
