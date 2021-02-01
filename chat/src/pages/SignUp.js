import React, { useState } from 'react'
import firebase from '../config/firebase'
//初期化済みのFirebaseAppをインポート。

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(email,password)
            .catch(err => {
                console.log(err)
            })
        //stateで管理しているemailとpasswordを引数に与えている
        //処理が失敗したときは、catchメソッドの関数が実行されます
    }
    //submitイベントハンドラーの標準の挙動をキャンセル。

    return (
        <div>
            <h1>Sign Up</h1>
            <form onsubmit={handleSubmit}>
            {/*fromにイベントハンドラーを設定。*/}
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email'
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp