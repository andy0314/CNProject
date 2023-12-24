import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function App() {

  const loginbtn = (
    <>
      <button onClick={() => {setPage(loginPage)}}>login</button>
      <button onClick={() => {setPage(signupPage)}}>signup</button>
    </>
  )

  const logout = () => {
    setUser("You haven't logged in!")
    setCurprofile({
      name: "none",
      profile: "none"
    })
    setCurpost([])
    setIslogin(false)
    setBtn(loginbtn)
  }

  const logoutbtn = (
      <button onClick={() => {logout()}}>logout</button>
  )

  const [page, setPage] = useState()
  const [user, setUser] = useState()
  const [curprofile, setCurprofile] = useState({
    name: "none",
    profile: "none"
  })
  
  const [islogin, setIslogin] = useState(false)
  const [curpost, setCurpost] = useState([])
  const [btn, setBtn] = useState(loginbtn)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  useEffect(() =>{

    setPage((<>Baby forum</>))

    setUser("You haven't logged in!")
    setCurprofile({
      name: "none",
      profile: "none"
    })
    setCurpost([{user: "a", content: "bb"}])
    setIslogin(false)
    setBtn(loginbtn)
  }, [])

  const login = () => {
    console.log("login", username, password)
  }

  const signup = () => {
    console.log("signup", username, password)
  }

  const getUser = (user) => {
    console.log("get", user)
  }

  const loginPage = (
    <>
      <input type='text' name='username' value={username} onChange={(e) => setUsername(e)} placeholder="Username" />
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e)} placeholder="Password" />
      <button onClick={() => login()}>login</button>
    </>
  )

  const signupPage = (
    <>
      <input type='text' name='username' value={username} onChange={(e) => setUsername(e)} placeholder="Username" />
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e)} placeholder="Password" />
      <button onClick={() => signup()}>signup</button>
    </>
  )

  const profilePage = (
    <>
      <div>name: {curprofile.name}</div>
      <div>profile: {curprofile.profile}</div>
    </>
  )
  
  const postPage = (
    <>
      <form action="/post" method='post'>
        <input type="text" name="content" placeholder="Content" />
        <input type="submit" value="post" />
      </form>
      <div>--------------------------------------------------</div>
      <div>
        {curpost.map((e) => <div onClick={() => getUser(e.user)}>{e.user}: {e.content}</div>)}
      </div>
    </>
  )

  const friendPage = (
    <>
      <form action='/friend' method='post'>
        <input type='text' name='account' placeholder='account' />
        <input type="submit" value="send request" />
      </form>
      <div>--------------------------------------------------</div>
      <div>requests: </div>
      {}
      <div></div>
      <div>--------------------------------------------------</div>
      <div>friends: </div>
      {}
      <div></div>
    </>
  )

  const streamPage = (
    <>
      stream
    </>
  )

  return (
    <>
      <button onClick={() => console.log(document.cookie)}>cookie</button>
      <div>
        {btn}
        <button onClick={() => {setPage(profilePage)}}>profile</button>
        <button onClick={() => {setPage(postPage)}}>post</button>
        <button onClick={() => {setPage(friendPage)}}>friend</button>
        <button onClick={() => {setPage(streamPage)}}>stream</button>
      </div>
      <div>--------------------------------------------------</div>
      <div>
        {user}
      </div>
      <div>--------------------------------------------------</div>
      <div>
        {page}
      </div>
    </>
  );
}

export default App; 