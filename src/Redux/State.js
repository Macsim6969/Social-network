const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'
const ADD_COMM = 'ADD-COMM'
const CHANGE_NEW_COMM = "CHANGE-NEW-COMM"
const CHANGE_SAVE = 'CHANGE-SAVE'
const CHANGE_NEW_SAVE = 'CHANGE-NEW-SAVE'
const ADD_DIALOG = 'ADD-DIALOG'
const  ADD_NEW_DIALOG = 'ADD-NEW-DIALOG'

let store = {
    _state :{
    
        message : { 
            mess : [
                {name: 'Vanya' , id :5 },
                {name:'Dmitryi', id :6 },
                {name: 'Oleg' , id: 4}, 
                {name:'Andreu' , id:3 },
                {name:'ALya' , id:1},
                {name:'MAcs', id :2}
            ],
            dia: [
                {name: 'HI'},
                {name: ' i love you'},
                {name: 'Hi , i too))'}
            ],
            newdialog : ''
        },
        acount:{
            info:[
                {name: 'Posts' , number: 880},
                {name: 'Followers' , number: 400},
                {name: 'Following' , number: 330}
            ] ,
            mainlink:[
                {name: 'Timeline'},
                {name: 'About'},
                {name: 'Friends'},
                {name: 'Photos'}
            ]   
        },
        mainreview :{
            rev : [
                {text: ' Hy , it\'s my first comment. I like this project !!! . I think he help me to quickly start in this language. I love React .' ,src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
                {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' , src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
                {text: 'lias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut! ', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
                {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut!', src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'}
    
            ],
            text :[
                {message : 'Hy alsp i died' ,src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
                {message : 'Hy alsp i died' ,src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
                {message : 'Hy alsp i died' ,src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'},
                {message : 'Hy alsp i died' ,src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'}
            ],
            postMewMessage: ' Hi how are you ',
            postText : '',
            postSave : 'I love you'
        }
    },
    getState(){
        return this._state;
    },
    rerenderTree (){

    },
    subscribe (observer){
        this.rerenderTree = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST) {
            let newrev = {
                text : this._state.mainreview.postMewMessage ,
                src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'
            }
            this._state.mainreview.rev.push(newrev);
            this._state.mainreview.postMewMessage ='';
            this.rerenderTree(store);
        } else if(action.type === CHANGE_NEW_POST){
            this._state.mainreview.postMewMessage = action.newpostText;
            this.rerenderTree(store);
        } else if(action.type === ADD_COMM ){
            let newtext = {
                message: this._state.mainreview.postText,
                src : 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'
            }
            this._state.mainreview.text.push(newtext);
            this._state.mainreview.postText = '';
            this.rerenderTree(store);
        } else if(action.type === CHANGE_NEW_COMM){
            this._state.mainreview.postText = action.newpostText;
            this.rerenderTree(store)
        } else if (action.type === CHANGE_SAVE){
            let newsave = {
                message : this._state.mainreview.postSave,
            }
            this._state.mainreview.text.push(newsave);
            this._state.mainreview.postSave = '';
            this.rerenderTree(this._state);
        }else if(action.type === CHANGE_NEW_SAVE ){
            this._state.mainreview.postSave = action.newSaveText;
            this.rerenderTree(this._state);
        }else if ( action.type ===ADD_NEW_DIALOG){
            this._state.message.newdialog = action.newSaveDialog;
            this.rerenderTree(this._state); 
        }else if(action.type === ADD_DIALOG){
            let text  = this._state.message.newdialog ;
            this._state.message.dia.push({name: text});
            this._state.message.newdialog = '';
            this.rerenderTree(this._state); 
        }
    }
     
}

export const addPostActionCreater = () =>{

    return{
        type : ADD_POST
    }
}

export const postChangeActionCreater = (text) =>{
    return{
        type : CHANGE_NEW_POST ,newpostText:text 
    }
}

export const addCommActionCreater = () =>{
    return {
        type : ADD_COMM
    }
}

export const postChangeComCreater = (text) =>{
    return{
        type :CHANGE_NEW_COMM , newpostText:text
    }
}

export const addSaveAction = () =>{
    return{
        type :CHANGE_SAVE
    }
}

export const postSaveCreater = (text) =>{
    return{
        type : CHANGE_NEW_SAVE , newSaveText:text
    }
}

export const addSaveDialog = () =>{
    return{
        type :ADD_DIALOG
    }
}

export const postSaveDialog = (text) =>{
    return{
        type : ADD_NEW_DIALOG , newSaveDialog: text
    }
}
window.store= store;

export default store;
