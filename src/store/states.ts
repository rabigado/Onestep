import {atom} from 'recoil';
import {Member} from '../types/member';

export const userState = atom<{member:Member }>({
    key: 'userState',
    default: {
        member: {
            name: 'jhon',
            lastName: 'daaaaaa'
        }
    }
})
