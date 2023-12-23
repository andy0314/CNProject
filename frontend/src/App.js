import { useEffect, useState } from 'react';

function App() {
  const [page, setPage] = useState()
  const [user, setUser] = useState()
  const [curprofile, setCurprofile] = useState({
    name: "none",
    profile: "none"
  })
  const [curpost, setCurpost] = useState([])
  useEffect(() =>{
    setPage((<>Baby forum</>))
    setUser("You haven't logged in!")
    setCurprofile({
      name: "none",
      profile: "none"
    })
    setCurpost([{user: "a", content: "bb"}])
  }, [])

  const loginPage = (
    <form action="/login" method='post'>
      <input type='text' name='username' placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <input type="submit" value="login" />
    </form>
  )

  const signupPage = (
    <form action="/signup" method='post'>
      <input type='text' name='username' placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <input type="submit" value="signup" />
    </form>
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
        {curpost.map((e) => <div>{e.user}: {e.content}</div>)}
      </div>
    </>
  )

  const friendPage = (
    <>
      <form action='/friend' method='post'>
        <input type='text' name='account' placeholder='account' />
        <input type="submit" value="send request"/>
      </form>
      <div>--------------------------------------------------</div>
      <div>requests: </div>
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
      <div>
        <button onClick={() => {setPage(loginPage)}}>login</button>
        <button onClick={() => {setPage(signupPage)}}>signup</button>
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