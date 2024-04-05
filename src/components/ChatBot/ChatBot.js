import './ChatBot.scss';

export default function ChatBot(){

    const handleSubmit = (e) => {
        e.preventDefault();
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

                        </div>
                        <form className='chat__query' onSubmit={handleSubmit}>
                            <input className='chat__input' type='text' placeholder='Type Here' />
                            <button className='chat__send-icon'></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}