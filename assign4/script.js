let courses = []; // Array to store courses

// Function to display courses
function displayCourses() {
    let courseOutput = document.getElementById("courseOutput");
    courseOutput.innerHTML = ""; // Clear previous courses

    if (courses.length === 0) {
        courseOutput.innerText = "No courses added yet.";
    } else {
        courseOutput.innerText = "Your courses:";
        for (let i = 0; i < courses.length; i++) {
            courseOutput.innerHTML += `<br>${i + 1}. ${courses[i]}`;
        }
    }
}

// Function to add course
function addCourse() {
    let inputCourse = document.getElementById("inputCourses").value.trim(); // Retrieve course input
    if (inputCourse !== "") {
        courses.push(inputCourse);
        displayCourses(); // Update displayed courses immediately
        document.getElementById("inputCourses").value = ""; // Clear the input field after adding the course
    }
}

// Function to greet the user and create a person object
// Function to greet the user and update the list of students
function greet() {
    let name = document.getElementById("inputName").value.trim();
    let age = parseInt(document.getElementById("inputAge").value);
    let isStudent = document.getElementById("inputStudent").checked;

    // Check for numeric characters in the name
    if (/\d/.test(name)) {
        // Display an error message
        document.getElementById("output").innerText = "Please enter a valid name without numbers.";
        return;
    }

    if (name === "") {
        document.getElementById("output").innerText = "Please enter your name.";
        return;
    }

    if (isNaN(age) || age <= 0) {
        document.getElementById("output").innerText = "Please enter a valid age.";
        return;
    }

    // Create a person object
    const person = {
        name: name,
        age: age,
        isStudent: isStudent
    };

    // Update the greeting message
    let message = `Hello, ${person.name}! You are ${person.age} years old.`;
    if (person.isStudent) {
        message += " You are a student.";
    } else {
        message += " You are not a student.";
    }
    document.getElementById("output").innerHTML = message;

}



