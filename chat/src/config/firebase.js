import firebase from 'firebase/app'
//FirebaseAppをインポート。これはFirebaseApp(Firebase SDKの主要ライブラリ)です。

import 'firebase/auth'
//FirebaseAuthenticationを使用するために、firebase/authを読み込んでいます。

const firebaseConfig = {
    apiKey: "AIzaSyAOa_OqjCZS3cQ_jXsGz_uqkluTLyP92-A",
    authDomain: "chat-app-3e419.firebaseapp.com",
    projectId: "chat-app-3e419",
    storageBucket: "chat-app-3e419.appspot.com",
    messagingSenderId: "36891509288",
    appId: "1:36891509288:web:a0f1840ccc9a5b2b9ceb1d"
}
//各人の認証情報

firebase.initializeApp(firebaseConfig)
//認証情報に引数を与えてFirebaseAppの初期化を行っている。

export default firebase