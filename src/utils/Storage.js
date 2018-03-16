    export default class Storage {
        static setData(key, data) {
            return localStorage.setItem( key, JSON.stringify(data) );
        }

        static getData(key) {
            return JSON.parse( localStorage.getItem(key) );
        }

        static clearData() {
            return localStorage.clear();
        }
    }