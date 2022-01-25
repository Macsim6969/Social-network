import { rerenderTree } from "../render";


let state = {
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
        postMessage:[
            {text: 'Hi  me , how are you ?'}
        ]
    }
}

export let addPost  = (postMessage) =>{
    let newrev = {
        text : postMessage,
        src: 'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'
    }
    state.mainreview.rev.push(newrev);
    rerenderTree(state);
}

export let addComm = ( postComm) =>{
    let newtext ={
        message: postComm,
        src :'https://animesher.com/orig/1/116/1162/11622/animesher.com_circle-icons-anime-boy-manga-1162282.jpg'
    }
    state.mainreview.text.push(newtext);
    rerenderTree(state);
}


export default state;
