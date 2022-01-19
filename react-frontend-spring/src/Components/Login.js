import React from 'react';
import  { Redirect } from 'react-router-dom'

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
const clientId =
  '546477040521-an51cfq96se9ulkpjvjm11m2c541vivf.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
      );
      refreshTokenSetup(res);
      return <Redirect to='/book' />

      // this.history.router.push("/book");
    
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 `
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        href = "#/book"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;