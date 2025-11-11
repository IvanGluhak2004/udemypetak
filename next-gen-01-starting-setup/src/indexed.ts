const appUser= {
    name: "John Doe",
    age: 35,
    permisions:[
        {
            id: "1",
            title: "Admin",
            description: "Has full access to all resources"
        }
    ]
}

type AppUser = {
    name: string;
    age: number;
    permisions:{
        id: string;
        title: string;
        description: string;
    }[];
}
type AppUserKeys = keyof AppUser; // 'name' | 'age' | 'permisions'
type Perms= AppUser['permisions'][0]; // Type of a single permission object

