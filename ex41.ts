// Define an array of magician names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Function to show magicians
function show_magicians(magicianNames: string[]): void {
    magicianNames.forEach(name => {
        console.log(name);
    });
}

show_magicians(magicians);
