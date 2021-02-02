import React, { useState } from 'react'
import firebase from '../config/Firebase'
//初期化済みのFirebaseAppをインポート。

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(email,password)
        //stateで管理しているemailとpasswordを引数に与えている

            .then(({ user}) => {
                user.updateProfile({
                    displayName: name
                })
            })

            .catch(err => {
                console.log(err)
            })
        //処理が失敗したときは、catchメソッドの関数が実行されます
    }
    //submitイベントハンドラーの標準の挙動をキャンセル。

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            {/*fromにイベントハンドラーを設定。*/}
                <div>
                    <label htmlFor='name'>ニックネーム</label>
                    <input
                        type='name'
                        id='name'
                        name='name'
                        placeholder='name'
                        onChange={e => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='email'>メールアドレス</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email'
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>パスワード</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp