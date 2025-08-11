const Login =()=> {
  return(
    <>
      <div className='wrap'>
         <h1><img src="/lifemindlogo.png" alt="lifemind" /></h1>

         <form>
          <fieldset>
            <legend>회원 로그인</legend>

            <div className="input-box">
              <input type="text" placeholder='아이디입력' />
              <input type="password" placeholder='비밀번호입력'/>
              <button type='submit'>로그인</button>
            </div>{/* .input-box */}

            <div className="find-join">
              <a href="#">비밀번호 찾기</a>
              <a href="#">회원가입</a>
            </div>{/* .find-join */}

          </fieldset>
        </form>

      </div>
    </>
  )
}

export default Login