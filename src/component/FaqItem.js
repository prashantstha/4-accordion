import React, { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const FaqItem = (item) => {
    const { question, answer } = item;
    const [accordionToggle, setAccordionToggle] = useState(false);
    const handleToglle = () => {
        setAccordionToggle(!accordionToggle);
    }

    return (
        <div className="faq-list--item">
            <h3 className='question'>{question} <button className='toggle-btn' onClick={handleToglle}>{ accordionToggle ? <AiOutlineMinusCircle /> : < AiOutlinePlusCircle/>}</button></h3>
            { accordionToggle ? (<div className='answer'>{answer}</div>) : '' }            
        </div>
    );
};

export default FaqItem;