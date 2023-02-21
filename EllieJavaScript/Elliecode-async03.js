
// Callback Hell example => promise and then input
class UserStorage {
  loginUser( id, password) {
    return new promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id); 
        } else {
          reject(new Error('no found'));
        }
      }, 2000);
      
    });
  };
   
  getRoles(user) {
    return new promise((resolve, reject) => {
      setTimeout(() => {
        if ( user === 'ellie') {
          resolve({ name : 'ellie', role : 'admin'});
          } else {
            reject (new Error('no access'));
          }
        }, 1000);  
    });
  }
};

const userStorge = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorge
.loginUser(id, password)
.then(userStorge.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);
