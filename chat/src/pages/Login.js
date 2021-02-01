import React, { useState, useContext } from 'react'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'
import { Redirect } from 'react-router-dom'//react-router-domを利用してRedirectを読み込む

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
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password'
                        placeholder='password' 
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login