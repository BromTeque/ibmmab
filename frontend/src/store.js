import Vue from "vue";

export const store = Vue.observable({
   isNavOpen: false
});

export const mutations = {
        toggleNav() {
            store.isNavOpen = !store.isNavOpen
        }
};

var sWord = "";

export const searchWord = {
    set(word) {
        sWord = word;
    },

    get(){
        return sWord;
    }
};
