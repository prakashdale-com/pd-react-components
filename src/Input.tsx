import React, { HTMLAttributes} from "react";


export interface Props extends HTMLAttributes<HTMLInputElement> {
    type: 
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    value?: string;
}

export const Input = ({type = 'text', value, placeholder, disabled = false, readonly = false, ...props}: Props) => {
    //const classnames = classNames(disabled && 'disabled', props.className)
    return <input value={value} disabled={disabled} readOnly={readonly} type={type} placeholder={placeholder} {...props}></input>
}