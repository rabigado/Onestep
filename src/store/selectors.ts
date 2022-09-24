import {selector} from 'recoil';
import {userState} from './states';

export const userNameSelector = selector({
    key: 'userNameSelector',
    get: ({get}) => {
        const { member } = get(userState)
        return `${ member.name } ${ member.lastName }`
    }
})
