function fetchUser(id, callback) {
	const users = {
		1: {
			uid: 1,
			name: 'John Doe',
			age: 22
		}
	};

	const selectedUser = users[id];

	const error = selectedUser ? null : 'No User Found';

	setTimeout(function () {
		callback(error, selectedUser)
	}, 500)
}

const promisify = (fn) => {
    return function (params) {
        return new Promise(function (resolve, reject) {
            fn(params, (err, user)=> {
                if (err === null) {
                    resolve(user)
                }
                reject(err);
            });
        });
    }
   }
   
   const promisifiedFetchUser = promisify(fetchUser);
   
   promisifiedFetchUser(2)
    .then(response => console.log('User data:', response))
    .catch(error => console.log('An error happened:', error));