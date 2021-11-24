const User = require('../src/user')

describe('User class',()=>{
test('is an instance of a user',()=>{

    let testUser =new User('Anna',"243435355","dhdgd@gmail.com","2445354545",20);
    // const testUser = new User('Anna','abana@gmail.com','23243435','12')
    expect(testUser instanceof User).toBeTruthy()
})
test('has a name',()=>{
    let testUser =new User('Anna',"243435355","dhdgd@gmail.com","2445354545",20);
    expect(testUser.name).toBe('Anna')
})
test('has a license',()=>{
    let testUser =new User('Anna',"243435355","dhdgd@gmail.com","2445354545",20);
    expect(testUser.license).toBe('243435355')
})
test('has a email',()=>{
    let testUser =new User('Anna',"243435355","dhdgd@gmail.com","2445354545",20);
    expect(testUser.email).toBe('dhdgd@gmail.com')
})
test('has a phone',()=>{
    let testUser =new User('Anna',"243435355","dhdgd@gmail.com","2445354545",20);
    expect(testUser.phone).toBe('2445354545');
})
test('has a age',()=>{
    let testUser =new User('Anna',"243435355","dhdgd@gmail.com","2445354545",20);
    expect(testUser.age).toBe(20);
})



})