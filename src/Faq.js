import React from 'react';
import data from './data';
import FaqItem from './component/FaqItem';

const Faq = () => {  
    return (
        <div className='faq-container'>
            <div className="title">
                <h1>Question and answer about shipping</h1>
            </div>
            <div className='faq-list'>
                {data.map((item) => {
                    return (
                        <FaqItem key={item.id} {...item}/>
                    );
                })}
                
            </div>
        </div>
    );
};

export default Faq;