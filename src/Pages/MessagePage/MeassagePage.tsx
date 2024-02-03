import React from 'react'
import Row from '../../CommonField/RowField'
import Column from '../../CommonField/ColumnField'
import MeassageUsers from '../../Components/Message/MeassageUsers/MeassageUsers'
import SendNewMessage from '../../Components/Message/SendNewMeassage/SendNewMessage'

const MeassagePage = () => {
  return (
    <Row >
      <MeassageUsers />
      <SendNewMessage />
    </Row>
  )
}

export default MeassagePage