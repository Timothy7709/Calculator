import React, { useState } from 'react';
import './support.css';

function Report() {


    return(
        <div className='container2'>
            <div className='header'>
                <h3 >Support Ticket Form</h3>
                <a href={`/`} class="close"></a>
            </div>
            
            <div className='SupportTicket'>
                <div className='SupportText'>
                    <h4>Thank you for sending us your report, we will track the problem now</h4>
                </div>
                <div className='ticket'>ticket number : {Math.floor(Math.random() * 10000)}</div>
            </div>
            
        
        </div>
    );
}

export default Report;