import React from 'react';
import useInputState from './hooks/useInputState';

const SimpleFormInputHook = () => {
  const [email, updateEmail, resetEmail] = useInputState('');
  const [password, updatePassword, resetPassword] = useInputState('');
  return (
    <div>
      <h1>
        The value is...{email} & {password}
      </h1>
      <input type='text' value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Reset Email</button>
      <br></br>
      <input type='text' value={password} onChange={updatePassword} />
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
};

export default SimpleFormInputHook;
