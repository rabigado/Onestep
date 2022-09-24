import React from 'react';
import {useRecoilValue} from 'recoil';
import {userNameSelector} from '../../store/selectors';

const LoginRoot = () => {
    const memberName = useRecoilValue(userNameSelector)

    return <div>
        <h1> Login Root </h1>
        <div>
            { memberName }
        </div>
    </div>
}

export default LoginRoot
