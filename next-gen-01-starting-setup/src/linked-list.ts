class ListNode<T> {
    next?: ListNode<T>;
    constructor(public value: T){}


}


class LinkedList <T> {

    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length: number = 0;

    add(value: T){
        
        
        const node = new ListNode(value);
        if(!this.root|| !this.tail){
        this.root= node;
        this.tail= node;
    }else{
        this.tail!.next = node;
        this.tail = node;
     }
        this.length++;
    }
    public getNumberOfItems(): number {
        return this.length;
    }
    print(){
        let currentNode = this.root;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

}
const list = new LinkedList<string>();

numberList.add('First');
numberList.add('Second');
numberList.add('Third');
numberList.print();
console.log('Number of items:', numberList.getNumberOfItems());
const nameList = new LinkedList<string>();
nameList.add('Alice');
nameList.add('Bob');
nameList.print();
console.log('Number of items:', nameList.getNumberOfItems());

const numberList = new LinkedList<number>();
numberList.add(1);
numberList.add(2);
numberList.add(3);
numberList.print();
console.log('Number of items:', numberList.getNumberOfItems());


