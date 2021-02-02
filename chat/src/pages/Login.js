import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom' //react-router-domを利用してRedirectを読み込む
import { AuthContext } from '../AuthService'
import firebase from '../config/Firebase'

const Login = ({ history }) => {
        //Routeコンポーネントによって与えられるprops history を分割代入する

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(() => {
                history.push('/')//"/"に遷移
                //historyオブジェクトのpushメソッドを使用することで、引数に指定したパスにリダイレクトを行います
            })
            .catch(err => {
                console.log(err)
            })
        //ログインを実装する為authオブジェクトのsignInWithEmailAndPasswordメソッドを使用
    }

    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to={"/"} />
    }

    return (
        <>
            <h1>Login</h1>        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>メールアドレス</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='アドレス'
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
                        placeholder='パスワード' 
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>ログイン</button>
            </form>
        </>
    )
}

export default Login