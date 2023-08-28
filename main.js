// Define data structures to store users and meetings
let users = [];
let meetings = [];

// DOM elements
const userForm = document.getElementById('user-form');
const meetingForm = document.getElementById('meeting-form');
const userList = document.getElementById('user-list');

// User creation handler
userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form values
    const name = userForm.elements['name'].value;
    const photo = userForm.elements['photo'].value;
    const cell = userForm.elements['cell'].value;
    const username = userForm.elements['username'].value;
    const email = userForm.elements['email'].value;
    const address = userForm.elements['address'].value;
    const notes = userForm.elements['notes'].value;
    const meetingsObj = [];
    
    // Create user object
    const user = { name, photo, cell, username, email, address, notes, meetingsObj };
    
    // Add user to the users array
    users.push(user);
    
    // Clear form fields
    userForm.reset();
    
    // Update user database display
    updateUserList();
});

// Meeting creation handler
meetingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form values
    const selectedUser = meetingForm.elements['selectedUser'].value;
    const date = meetingForm.elements['date'].value;
    const time = meetingForm.elements['time'].value;
    
    // Check for conflicting meetings
    const isConflicting = meetings.some(meeting => meeting.selectedUser === selectedUser && meeting.date === date && meeting.time === time);
    
    if (isConflicting) {
        alert("Meeting clashes with an existing appointment.");
        return;
    }
    
    // Create meeting object
    const meeting = { selectedUser, date, time };
    
    // Add meeting to the meetings array
    meetings.push(meeting);
    
    // Clear form fields
    meetingForm.reset();
});

// Update user list display
function updateUserList() {
    userList.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = user.name;
        userList.appendChild(userItem);
    });
}
