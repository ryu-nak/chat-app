import React, { useState, useEffect } from 'react'
import firebase from '../config/firebase'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                //onSnapshotメソッドは指定したデータベースを監視し変更があればそれを通知したり、変更の差分を受け取ったりできる。
                //チャットでメッセージを書き込むとfirestoreにデータが追加されるのでonSnapshotで監視しておくと差分が発生し、通知されます。
                //それをトリガーにして新しいチャットを読み込むことでリアルタイムに新しいメッセージを受け取ることが出来ます。
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    },[])

    return (
        <>
            <h1>Room</h1>
            <ul>
                <li>
                    sample user : sample message
                </li>
            </ul>
            <form>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
            {/*//サインアウトはfirebase.auth.().signOutメソッドを実行するのみ*/}
        </>
    )
}

export default Room