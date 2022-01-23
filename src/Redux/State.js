import { renderer } from "../render";

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
            {text: ' Hy , it\'s my first comment. I like this project !!! . I think he help me to quickly start in this language. I love React .' ,src: 'https://i.pinimg.com/originals/d6/95/f8/d695f8e6c24add370dcb184573595057.jpg'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' , src : 'https://i.pinimg.com/originals/ea/7a/c5/ea7ac5b5920d415d5e2d07098ad69cef.jpg'},
            {text: 'lias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut! ', src: 'https://i.pinimg.com/originals/0d/da/53/0dda53ffae77f3b91a1e34211a2c7e1a.jpg'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias illo vel reprehenderit similique voluptatibus libero ex et, dolor facere illum sit error deleniti officia consequuntur animi. Cum totam sequi aut!', src: 'https://i.pinimg.com/originals/70/da/6c/70da6c27b5eddd0689217b9fe3b676c5.jpg'}

        ]
    }
}

export let addPost = (postmess)=>{
    debugger;
    let newmess ={
        text : {postmess},
        src: 'https://i.pinimg.com/originals/d6/95/f8/d695f8e6c24add370dcb184573595057.jpg' 
    };
    state.mainreview.rev.push(newmess);
    renderer(state);
}
export default state;
