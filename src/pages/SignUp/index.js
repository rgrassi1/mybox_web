import React, { useState } from 'react';
import Confirm from './Confirm';
import Register from './Register';

const SignUp = props => {
    const [user, setUser] = useState(null);
    if (user) {
        return <Confirm user={user}/>
    }
    return <Register setUser={setUser}/>
}

export default SignUp;