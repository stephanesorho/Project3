import React from 'react'

export default function NewCommuItem(props) {
  const listOfFriends = props.listOfFriends;
  const deleteFriend = props.deleteFriend;
  const updateFriend = props.updateFriend;
    return (
      <div>
        {/* {
          items.map((item)=>{
              // return <HomeHistoryItem key= {history.number} number={history.number} mintDate={history.mintDate} />
              // use 批量传递props 
              return <h1>Someone says:" {item}"</h1>
          })
        } */}
          {listOfFriends.map((val) => {
          return (
            <div key={val._id}>
              <div> {val.name} : {val.comment}</div>
              <button onClick={() => {updateFriend(val._id)}} >update message</button>
              <button onClick={() => {deleteFriend(val._id)}}>X</button>
            </div>
            )
        })}
      </div>
    )
  }