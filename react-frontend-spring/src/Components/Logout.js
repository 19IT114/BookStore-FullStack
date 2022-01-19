import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '546477040521-an51cfq96se9ulkpjvjm11m2c541vivf.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;