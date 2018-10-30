export default class DBC {
    constructor(type, data) {
        var db, request, objectStore;
        this.type = type;
        this.items = [];
        const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
        request = indexedDB.open("todos", 3);
        request.onerror = (e) => {
            console.log('数据库打开失败！');
        };
        request.onupgradeneeded = (e) => {
            db = request.result;
            if (!db.objectStoreNames.contains('items')) {
              objectStore = db.createObjectStore('items', { keyPath: 'id' });
              objectStore.createIndex('id', 'id', { unique: false });
              objectStore.createIndex('finished', 'finished', { unique: true });
            }
        }
        request.onsuccess = (e) => {
            console.log('数据库成功打开！');
            db = request.result;
            switch(this.type) {
                case 'insert':
                    this.insert(db, data);
                    break;
                case 'select':
                    this.select(db);
                    break;
                case 'delete':
                    this.delete(db, data);
                    break;
                case 'update':
                    this.update(db, data);
                    break;
                default:
                break;
            }
            db.close();
        }
    }

    insert(db, data) {
        const transaction = db.transaction(['items'], 'readwrite');
        let objectStore = transaction.objectStore('items');
        objectStore.put(data);
    }

    delete(db, data) {

    }

    update(db, data) {

    }

    select(db) {
        const transaction = db.transaction(['items'], 'readonly');
        let objectStore = transaction.objectStore('items');
        let request = objectStore.openCursor();
        request.onsuccess = (e) => {
            let cursor = e.target.result;
            if(cursor) {
                let item = cursor.value;
                console.log('item', item);
                this.items.push(Object.assign(item));
                console.log('items', this.items);
                cursor.continue();
            }
        };
    }

    getItems() {
        let items = this.items;
        return items;
    }

};
