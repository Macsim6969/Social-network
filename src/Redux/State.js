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
                {name: ' i love you'}
            ]
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
            postMewMessage: ' Hi how are you '
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
        if(action.type === 'ADD-POST') {
            let newrev = {
                text : this._state.mainreview.postMewMessage ,
                src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'
            }
            this._state.mainreview.rev.push(newrev);
            this._state.mainreview.postMewMessage ='';
            this.rerenderTree(store);
        } else if(action.type === 'CHANGE-NEW-POST'){
            this._state.mainreview.postMewMessage = action.newpostText;
            this.rerenderTree(store);
        } else if(action.type === 'ADD-COMM' ){
            let newtext ={
                message: action.postComm,
                src :'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'
            }
            this._state.mainreview.text.push(newtext);
            this.rerenderTree(store);
        }
    }
     
}

window.store= store;

export default store;
