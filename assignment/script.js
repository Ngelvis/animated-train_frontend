class Portfolio {
    constructor() {
        // Initialize portfolio data from JSON
        this.portfolioData = {
            bio: "As a frontend developer with a master's degree in electrical engineering, I bring a unique blend of technical expertise and creativity to my work...",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            projects: [
                {
                    name: "Project 1",
                    description: "Description of Project 1",
                    technologies: ["HTML", "CSS", "JavaScript"]
                },
                {
                    name: "Project 2",
                    description: "Description of Project 2",
                    technologies: ["React", "Node.js", "Express"]
                }
            ]
        };
    }

   


    // Method to validate email using regular expression
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Method to handle form submission
    handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('mail').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!this.validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Process form data (e.g., send to server)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Reset form fields after submission
        document.getElementById('contactForm').reset();
    }
}

// Create an instance of Portfolio class
const myPortfolio = new Portfolio();

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', (event) => {
    myPortfolio.handleSubmit(event);
});

