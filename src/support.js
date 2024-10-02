    // support.js
    import React, { useState } from 'react';
    import './support.css';

    function Support() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');

    const isFormValid = firstName && lastName && email && topic;

    const handleButtonClick = () => {
        if (isFormValid) {
        // Perform action when the button is clicked and the form is valid
        console.log('Form is valid! Submitting...');
        } else {
        // Display an error or take appropriate action if the form is not valid
        console.log('Form is not valid. Please fill in all required fields.');
        }
    };
    return (
        <div className='container1'>
            <div className='header'>
                <h3 >Support Ticket Form</h3>
                <a href={`/`} class="close"></a>
            </div>
            
            <div className='wrapper1'>
                <div className='left'>
                        <div className='form__input-group'>
                        <p>Name <span class="red-asterisk">*</span></p>
                        <input type="text" className="form__input" autofocus required placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                        <input type="text" className="form__input" autofocus required placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                        <div class="form__input--error-message"></div>
                    </div>
                    <div className='form__input-group'>
                        <p>Email <span class="red-asterisk">*</span></p>
                        <input type="email" className="form__input email-input" autofocus required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <div class="form__input--error-message"></div>
                    </div>
                    <div className='form__input-group'>
                        <p>Topic <span class="red-asterisk">*</span> </p>
                        <div className='dottedbox'>
                            <p>What can we help you today?</p>
                            <div className='box-checkbox'>
                                <input type='radio'value={'General'} name='problem' className='radioBtn'checked={topic === 'General'} onChange={() => setTopic('General')}/>General
                            </div>
                            <div className='box-checkbox'>
                                <input type='radio'value={'General'} name='problem' className='radioBtn' checked={topic === 'Bug'} onChange={() => setTopic('Bug')}/>Bug
                            </div>
                        </div>
                </div>
            
                </div>
                <div className='right'>
                    <div className='form__input-group'>
                        <p>Description <span class="opl">Optional</span></p>
                        <input type="email" className="form__input desc-input" autofocus placeholder="Description Report" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                        <div class="form__input--error-message"></div>
                        <a href={`/report`} className='link'>
                            <div className={`btn1 orange ${isFormValid ? '' : 'disabled'}`} onClick={handleButtonClick} disabled={!isFormValid}>SEND</div>
                        </a>
                        
                    </div>
                </div>  
            </div>
            
        
        </div>
    );
    }

    export default Support;
