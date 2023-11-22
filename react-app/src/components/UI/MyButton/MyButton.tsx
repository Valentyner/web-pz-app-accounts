import React, { FC} from 'react';
import "./MyButton.css"

export interface MyButtonProps {
    type: string,
    children: string,
}

const MyButton: FC<MyButtonProps> = ({ type, children }) => {
    return (
        <>
            {type === "submit" ?
                <button className="submit_VH">{children}</button> 
                :
                type === "edit" 
                ?
                <button className='edit_VH'>{children}</button>
                :
                <button className="delete_VH">{children}</button>
            }
        </>
    );
};

export default MyButton;