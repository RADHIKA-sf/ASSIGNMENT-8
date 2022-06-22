import {User} from '../public/user';


export function findIndex(id:Number,data:User[]){
    return data.findIndex((user) => user.Id === id);
    }

export async function getRoles(myURL: string) { 
    const res = await fetch(myURL + '/roles');
    const data1 = await res.json();
    const RoleList = [];
    for (let i = 0; i < data1.length; i++) {
        RoleList.push(data1[i].name);
    }
    return RoleList;
}
export async function getRoleKeys(myURL: string, role: string) {
    const res = await fetch(myURL + '/roles/' + `${role}`);  
    const data1 = await res.json();
    return data1;
}
export async function getCustomerId(myURL: string, name: string) {
    const res = await fetch(myURL + '/customers/' + `${name}`);   
    const data1 = await res.json();
    return data1;

}
export async function getCustomer(myURL: string) {
    const res = await fetch(myURL + '/customer');  
    const dataC = await res.json();

    const customerList = [];
    for (let i = 0; i < dataC.length; i++) {
        customerList.push(dataC[i].name);
    }
    return customerList;
}
