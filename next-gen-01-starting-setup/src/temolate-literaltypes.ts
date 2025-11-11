//const userNametemp ='Max';
//const greeting = `Hello, ${userNametemp}! Welcome to our site.`;

type readperm  = 'read' | 'not-read';
type writeperm = 'write' | 'not-write';


type FilePermissions = `${readperm}-${writeperm}` ;
type DataFile ={
    data: string;
    permissions: FilePermissions;

}
type DataFileEventNames= `${keyof DataFile}Changed` | 'file-opened' | 'file-closed' ;
type DataFileEvent = `${DataFileEventNames}-event`;

const fileEvent1: DataFileEvent = 'file-opened-event';
const fileEvent2: DataFileEvent = 'file-closed-event';
//const fileEvent3: DataFileEvent = 'file-deleted-event'; // Error

let perm1: FilePermissions = 'read-write';