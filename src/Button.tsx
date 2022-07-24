import React, { HTMLAttributes, ReactNode } from "react";
import classNames from 'classnames';
export interface Props extends HTMLAttributes<HTMLElement> {
    /**Provide a text for the button */
    children: ReactNode;

    /**Which variant look you would like to use? */
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    
    /** Large button: lg, Small Button: sm */
    size?: 'lg' | 'sm';
    
    disabled?: boolean;
    href?: string;
    isBusy: boolean;    
}


/**pd-react-components>Button */
export const Button = ({variant = 'primary', size, href, disabled, isBusy = false, ...props}: Props) => {
    const classnames = classNames('btn', 
    variant && `btn-${variant}`, 
    size && `btn-${size}`,
    (disabled || isBusy) && 'disabled',
    props.className);
    if (href) {
        return (
            <a {...props}
                className={classnames} role="button" href={href}>
                {props.children}
            </a>            
        )
    } else {
        return (            
            <button {...props}
                className={classnames}>                    
                {props.children}                
            </button>            
        )        
    }
    
}

export const CloseButton = () => {
    return <Button  variant={"primary"} size={undefined} isBusy={false} className="btn-close btn-close-white" > </Button>
    
}