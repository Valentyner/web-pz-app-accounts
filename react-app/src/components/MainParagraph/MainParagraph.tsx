import React from 'react';
import './MainParagraph.css'
import MyButton from '../UI/MyButton/MyButton';

const MainParagraph = () => {
    return (
        <div className='container'>
            <div className='page_paragraph'>
                Account list
                <MyButton type='submit'>Create account</MyButton>
            </div>

        </div>
    );
};

export default MainParagraph;