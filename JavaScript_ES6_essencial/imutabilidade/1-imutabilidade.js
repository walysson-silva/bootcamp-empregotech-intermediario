const user = {
    name: 'Walysson',
    lastName: 'Silva'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${use.name} ${use.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);