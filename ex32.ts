const current_users: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];

// Initialize the list of new users
const new_users: string[] = ['eric', 'dave', 'Charlie', 'Eve', 'Frank'];

// Convert all current usernames to lowercase for comparison
const normalized_current_users = current_users.map(user => user.toLowerCase());

// Check each new username
for (let newUser of new_users) {
    // Convert the new username to lowercase
    let normalized_newUser = newUser.toLowerCase();
    
    // Check if the new username is already taken
    if (normalized_current_users.includes(normalized_newUser)) {
        console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}