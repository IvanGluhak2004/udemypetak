type FileSource= {type : 'file' ; path : string };
const fileSource: FileSource= {type: 'file', path : '/user/home/document.txt'};

type DBSource={type: 'db', connectionUrl: string };
const dbSource: DBSource= {type: 'db', connectionUrl : 'mongodb://localhost:27017'};
type Source = FileSource | DBSource;

function loadData(source: Source) {
   if(typeof source === 'object' && 'path' in source) {
    
    return ;
   }
}
function loadData2(source: Source) {
   if(source.type == "file") {
    source.path;
   }   
    source.connectionUrl;
}
class Usera{
    constructor(permisions: string[]){

    }
}

class Admin{
    constructor(permisions: string[]){
    }
    scan(){
        
    }
}
const user1 = new Usera(['read']);
const admin1 = new Admin(['read','write']);
type Entity = Usera | Admin;
function accessEntity(entity: Entity) {
    if(entity instanceof Usera) {
        entity.join();
        return ;
    }
    entity.scan();
}

function init(entity: Entity) {

    if (entity instanceof Admin) {
        entity.join();
        return;
    }
    entity.scan();
}
    
