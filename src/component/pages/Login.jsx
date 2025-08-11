import './Login.css';

const Login =()=> {
  return(
    <>
      <div className='wrap'>
         <h1><img src="/lifemindlogo.png" alt="lifemind" /></h1>

         <form>
          <fieldset>
            <legend>회원 로그인</legend>

            <div className="input-box">
              아이디<input type="text" placeholder='' />
              비밀번호<input type="password" placeholder=''/>
              <button type='submit'>로그인</button>
            </div>{/* .input-box */}

            <div className="find-join">
              <a href="#">아이디 찾기</a>
              <a href="#">비밀번호 찾기</a>
            </div>{/* .find-join */}

            <div className="join">
              <a href="#">회원가입</a>
            </div>{/* .-join */}

          </fieldset>
        </form>

      </div>
    </>
  )
}

export default Login