const ADD = 'ADD';
const DELETE = 'DELETE';
const SET_FRIENDS = 'SET-FRIEDNDS';

let initalState = { 
    users: [ 
        {id: 1, add: false, login: 'Jaques Amole', friend: '40 friends', ava: 'https://i.pinimg.com/originals/a8/bd/50/a8bd501a4a8994943eba503bdbef68bf.jpg'},
        {id: 2, add: false, login: 'Lucy Tania', friend: '12 friends', ava: 'https://yt3.ggpht.com/ytc/AKedOLTKKdx0_MMKkwsvy77mvH_xmJ90SIuMN-4uELss=s900-c-k-c0x00ffffff-no-rj'},
        {id: 3, add: false, login: 'Val Adictorian', friend: '0 friends', ava: 'https://i.ytimg.com/vi/jeoJjx-tVFo/maxresdefault.jpg'},
        {id: 4, add: false, login: 'Manny Petty', friend: '3 friends', ava: 'https://avatars.mds.yandex.net/i?id=1117ee96e1b1ff5a481caa80d3cc2f00-5220575-images-thumbs&n=13'},
        {id: 5, add: false, login: 'Marsha Mello', friend: '15 friends', ava: 'https://avatars.mds.yandex.net/i?id=3c26c51d115c529597bdc19ef47888be-5328534-images-thumbs&ref=rim&n=33&w=150&h=150'},
        {id: 6, add: false, login: 'Caire Innet', friend: '8 friends', ava: 'https://pixelbox.ru/wp-content/uploads/2021/03/anime-avatar-discord-76.jpg'},
        {id: 7, add: false, login: 'Gio Metric', friend: '10 friends', ava: 'https://avatars.mds.yandex.net/i?id=abe31944336f4cc3c92594c3263aeaa6-5646157-images-thumbs&n=13'},
        {id: 8, add: false, login: 'Paul Misunday', friend: '6 friends', ava: 'https://pbs.twimg.com/media/E1yRL4QVIAMgh9v.jpg'},
        {id: 9, add: false, login: 'Reanne Carnation', friend: '6 friends', ava: 'https://i.imgur.com/7zqKq9d.jpg'}
    ]
}

const friendReducer = (state = initalState, action) => {

    switch (action.type) {
        case ADD :
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, add: true}
                    }
                    return u;
                })
            }
        case DELETE :
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, add: false}
                    }
                    return u;
                })
            }
        case SET_FRIENDS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const addAC = (id) => {
    return {
        type: ADD, id
    }
}

export const deleteAC = (id) => {
    return {
        type: DELETE, id
    }
}
export const setFriends = (users) => {
    return {
        type: SET_FRIENDS, users
    }
}
export default friendReducer;