import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children } = props;

    const handleClick = () => {
        console.log("Button Clicked")
    }

    return (
        <button {...props} onClick={() => handleClick()}>
            {children}
        </button>
    );
};
