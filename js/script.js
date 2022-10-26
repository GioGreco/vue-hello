"use script";

const { createApp } = Vue;

createApp({
    data(){
        return{
            message : 'Hello Vue!',
            textRed : 'red',
            date: '2022-10-26',
            img: 'https://picsum.photos/300',
            imgInfo: 'Random pic'
        }
    },
    methods: {
        createSquare(){
            const test = document.getElementById('test');
            const square = document.createElement('div');
            square.className = 'square';
            test.append(square);
        },
        parsedDate(time){
            const dateP = moment(time, "YYYY-MM-DD").format("Do MMMM YYYY");
            return dateP
        }
    }
}).mount('#app')

