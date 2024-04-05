import { useEffect, useRef, useState } from 'react';
import './ChatBot.scss';

export default function ChatBot(){

    const initial = [
        {
            role: 'assistant',
            message: 'Hello Pete! Welcome to Brewmance\'s returns assistance.',
            link: null
        },
        {
            role: 'assistant',
            message: 'I\'m here to assist you with returns and exchanges. Whether you need to return a product, exchange an item, or have any questions, feel free to ask.',
            link: null
        },
        {
            role: 'assistant',
            message: 'Before we proceed, here\'s a quick overview of our returns policy: ',
            link: null
        }
    ];

    useEffect(() => {
        bottomScroll.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
    });

    const checkboxesRef = useRef([]);
    const bottomScroll = useRef();
    const isInputDisabled= useRef(true);
    
    const [inputValue, setInputValue] = useState(''); 
    console.log(inputValue);

    const [chatHistory, setChatHistory] = useState([...initial]);

    const errorRef = useRef({});

    const chatRef = useRef(null);

    const bindInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const answer = parseInt(e.target['user-input'].value);
        const newChatHistory = [...chatHistory];
        if(answer && !chatRef.current){
            newChatHistory.push({
                role: 'user',
                message: answer + ''
            });
            console.log('Thank you for confirming! What is the reason for your return?' === chatRef.current);
            if(checkboxesRef.current.length){
                const item = checkboxesRef.current.pop();
                newChatHistory.push({
                    role: 'assistant',
                    message: `How many bags of ${item} do you want to return out of the 40 bags?`
                });
            }
            else if(!chatRef.current){
                newChatHistory.push({
                role: 'assistant',
                message: 'Thank you for confirming! What is the reason for your return?'
            });
            chatRef.current = 'Thank you for confirming! What is the reason for your return?'
            }
        }
        else if(chatRef.current === 'Thank you for confirming! What is the reason for your return?'){
            newChatHistory.push({
                role: 'user',
                message: e.target['user-input'].value
            });
            newChatHistory.push({
                role: 'assistant',
                message: 'Has the coffee been opened?'
            });
            chatRef.current = 'Has the coffee been opened?';
        }
        else if(chatRef.current === 'Has the coffee been opened?'){
            newChatHistory.push({
                role: 'user',
                message: e.target['user-input'].value
            });
            newChatHistory.push({
                role: 'assistant',
                message: 'Ok, great! Since you are a valued customer, would you like a refund or credit towards your next purchase?'
            });
            chatRef.current = 'Ok, great! Since you are a valued customer, would you like a refund or credit towards your next purchase?';
        }
        else if(chatRef.current === 'Ok, great! Since you are a valued customer, would you like a refund or credit towards your next purchase?'){
            newChatHistory.push({
                role: 'user',
                message: e.target['user-input'].value
            });
            newChatHistory.push({
                role: 'assistant',
                message: 'Do you have any questions?'
            });
            chatRef.current = 'Do you have any questions?';
        }
        else if(chatRef.current === 'Do you have any questions?'){
            newChatHistory.push({
                role: 'user',
                message: e.target['user-input'].value
            });
            newChatHistory.push({
                role: 'assistant',
                message: 'You’re welcome, have a great day! '
            });
            chatRef.current = 'You’re welcome, have a great day! ';
        }
        else{
            errorRef.current.input = {
                isValid: false,
                message: 'Must be a number'
            };
        }
        setChatHistory(newChatHistory);
        e.target.reset();

    };

    const handleProduct = (selected) => {
        const newChatHistory = [...chatHistory];
        newChatHistory.push({
            role: 'user',
            message: selected
        });
        setChatHistory(newChatHistory);
    };

    const handleSelect = (e) => {
        const newChatHistory = [...chatHistory];

        newChatHistory.push({
            role: 'assistant',
            message: 'Which order do you want to return?'
        });

        newChatHistory.push({
            role: 'user',
            message: e.target.value
        });
        setChatHistory(newChatHistory);
    };

    const removeError = () => {
        errorRef.current = {};
    }

    const handleCheckboxes = (e) => {
        e.preventDefault();
        for(let element of e.target.check){
            if(element.checked){
                checkboxesRef.current.push(element.value);
            }
        }
        const newChatHistory = [...chatHistory];

        newChatHistory.push({
            role: 'assistant',
            message: 'Which product are you looking to return?'
        });

        newChatHistory.push({
            role: 'user',
            message: checkboxesRef.current.join(', ')
        });

        const currentitem = checkboxesRef.current.pop();

        newChatHistory.push({
            role: 'assistant',
            message: `How many bags of ${currentitem} do you want to return out of the 40 bags?`
        });
        
        isInputDisabled.current = false;
        setChatHistory(newChatHistory);
    };

    return (
        <>
            <div className='overlay'>
                <div className='chat'>
                    <section className='chat__head'>
                        <h1 className='chat__store'>Bremance's</h1>
                        <p className='chat__description'>Return Support</p>
                    </section>
                    <div className='chat__body'>
                        <div className='chat__message'>
                            {
                                chatHistory.map((chat, index) => {
                                    return (
                                        <div className={`message ${chat.role === 'user' ? 'message--right' : ''}`} key={index}>
                                            <p className='message_text'>{chat.message}</p>
                                        </div>
                                    );
                                })
                            }
                            {
                                chatHistory.length === 3 &&
                                <div className='message__buttons'>
                                    <button className='message__button' onClick={() => handleProduct('Return Product')}>Return Product</button>
                                    <button className='message__button' onClick={() => handleProduct('Exchange Product')}>Exchange Product</button>
                                </div>
                            }
                            {
                                chatHistory.length === 4 &&
                                <div className='message__dropdown'>
                                    <label className='message__label' htmlFor="item">Which order do you want to return?</label>
                                    <select className='message__select' name="item" id="item" onChange={handleSelect}>
                                        <option className='message__option' value="" hidden>Select a reason to return</option>
                                        <option className='message__option' value="#1093 - Delivered Oct 14">#1093 - Delivered Oct 14</option>
                                        <option className='message__option' value="#1090 - Delivered Sept 14">#1090 - Delivered Sept 14</option>
                                    </select>
                                </div>
                            }
                            {
                                chatHistory.length === 6 &&
                                <div className='message__checkboxes'>
                                    <p className='message__prompt'>Which product are you looking to return?</p>
                                    <form className='message__list' onSubmit={handleCheckboxes}>
                                        <div className='message__checkbox-container'><input className='message__checkbox' type="checkbox" id='check-1' name='check' value='Premium roasted coffee' /><label htmlFor="check-1"> Premium roasted coffee</label></div>
                                        <div className='message__checkbox-container'><input className='message__checkbox' type="checkbox" id='check-2' name='check' value='Ultimate blend coffee beans' /><label htmlFor="check-2"> Ultimate blend coffee beans</label></div>
                                        <div className='message__checkbox-container'><input className='message__checkbox' type="checkbox" id='check-3' name='check' value='Blast blend coffee' /><label htmlFor="check-3"> Blast blend coffee</label></div>
                                        <button className='button--vector'><span className='icon--vector'></span></button>
                                    </form>
                                </div>
                            }
                            <span ref={bottomScroll}></span>
                        </div>
                        <form className='chat__query' onSubmit={handleSubmit}>
                            <input className={`chat__input ${isInputDisabled.current ? 'chat__input--disabled' : ''}`} type='text' placeholder='Type Here' name='user-input' disabled={isInputDisabled.current} onChange={bindInput} />
                            <button className={`chat__send-icon ${isInputDisabled.current ? 'chat__send-icon--disabled' : ''} ${!isInputDisabled.current && inputValue.length ? 'chat__send-icon--fill' : ''}`} disabled={isInputDisabled.current}></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}