"use script";

const { createApp } = Vue;

createApp({
    data(){
        return{
            message : 'Hello Vue!',
            textRed : 'red',
            numArray: [23, 45, 54],
        }
    },
    methods: {
        createSquare(){
            const appVue = document.getElementById('app');
            const square = document.createElement('div');
            square.className = 'square';
            appVue.append(square);
        }
    }
}).mount('#app')