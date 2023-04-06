import React from 'react'

import { DialogItem } from './DialogItem'
import { Message } from './Message'

import classes from './Dialogs.module.css'

export const Dialogs = ({
  sendMessageClick,
  newMessageChange,
  value,
  dialogs,
  messages }) => {
  const onClick = () => sendMessageClick()
  const onChange = (e) => newMessageChange(e.target.value)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogs.map((item) =>
          <DialogItem
            key={item.id}
            name={item.name}
            id={item.id}
          />
        )}
      </div>
      <div className={classes.messages}>
        <div>
          {messages.map((item) =>
            <Message
              key={item.id}
              message={item.message}
            />)}
        </div>
        <div>
          <div>
            <textarea
              onChange={onChange}
              value={value}
              placeholder='Enter your message' />
          </div>
          <div>
            <button onClick={onClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
