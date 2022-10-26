"use script";

const { createApp } = Vue;

createApp({
    data(){
        return{
            message : 'Hello Vue!',
            textRed : 'red',
            date: new Date(),
            img: 'https://picsum.photos/300',
            imgInfo: 'Random pic',
            checked: [],
            items: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'],
            images: [
                {
                    id: 1,
                    url: 'https://picsum.photos/300?random=1'
                },
                {
                    id: 2,
                    url: 'https://picsum.photos/300?random=2'
                },
                {
                    id: 3,
                    url: 'https://picsum.photos/300?random=3'
                }
            ]   
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
