import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Message.css';

const Message = forwardRef(({messages, username}, ref) =>{
    const isUser = username === messages.username;

    return (
        <div ref={ref} className={`messages ${isUser && 'messages_user'}`}>
            <Card className={isUser ? 'messages_userCard' : 'messages_guestCard'}>
                <CardContent>
                    <Typography
                    color='white'
                    variant='h5'
                    component='h2'
                    >
                    <b>{!isUser && `${messages.username || 'Unknown User'}:`}</b> {messages.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
