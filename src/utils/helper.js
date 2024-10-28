export const timePassed = (timestamp) =>{
    // Convert the timestamp to a Date object
    const givenTime = new Date(timestamp);
    
    // Get the current date and time
    const currentTime = new Date();
    
    // Calculate the difference in milliseconds
    const timeDifference = currentTime - givenTime;
    
    // Calculate different time units
    const totalSeconds = Math.floor(timeDifference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalMonths = Math.floor(totalDays / 30); // Approximate
    const totalYears = Math.floor(totalMonths / 12);
    
    // Determine the largest unit of time that has passed
    if (totalYears > 0) {
        return `${totalYears} year${totalYears > 1 ? 's' : ''} ago`;
    } else if (totalMonths > 0) {
        return `${totalMonths} month${totalMonths > 1 ? 's' : ''} ago`;
    } else if (totalDays > 0) {
        return `${totalDays} day${totalDays > 1 ? 's' : ''} ago`;
    } else if (totalHours > 0) {
        return `${totalHours} hour${totalHours > 1 ? 's' : ''} ago`;
    } else if (totalMinutes > 0) {
        return `${totalMinutes} minute${totalMinutes > 1 ? 's' : ''} ago`;
    } else {
        return `${totalSeconds} second${totalSeconds > 1 ? 's' : ''} ago`;
    }
}


export const generateRandomName = () => {
    const firstNames = [
        // Male names
        "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh",
        "Krishna", "Ayaan", "Ishaan", "Rohan", "Yash", "Siddharth", "Kabir",
        "Aryan", "Kunal", "Rudra", "Aakash", "Harsh", "Pranav", "Karan",
        
        // Female names
        "Mira", "Anaya", "Diya", "Aditi", "Riya", "Shreya", "Priya", "Sneha",
        "Meera", "Isha", "Kavya", "Naina", "Tara", "Sanya", "Tanvi", "Radhika",
        "Nidhi", "Pooja", "Lakshmi", "Swati", "Bhavna", "Simran", "Pallavi",
        
        // Unisex names
        "Anmol", "Aniket", "Dev", "Aman", "Gauri", "Tejas", "Nishant", 
        "Amar", "Raj", "Nihar", "Suman", "Chirag", "Charu", "Daksh", 
        "Samir", "Divya"
    ];
    
    const lastNames = [
        // Common last names across regions
        "Sharma", "Verma", "Singh", "Patel", "Gupta", "Mehta", "Joshi",
        "Khan", "Reddy", "Rao", "Chopra", "Das", "Malhotra", "Mishra",
        "Pillai", "Nair", "Kulkarni", "Shukla", "Ghosh", "Bhat", "Kapoor",
        
        // South Indian surnames
        "Iyer", "Menon", "Murthy", "Iyengar", "Nayak", "Pillai", "Shetty",
        
        // North Indian surnames
        "Bhardwaj", "Chauhan", "Pandey", "Tiwari", "Saxena", "Chandra",
        
        // East Indian surnames
        "Sarkar", "Banerjee", "Mukherjee", "Sen", "Roy", "Dutta", "Bose",
        
        // West Indian surnames
        "Deshmukh", "Thakur", "Desai", "Modi", "Gaikwad", "Sawant"
    ];
    
    // Select a random first and last name
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    // Combine and return the full name
    return `${randomFirstName} ${randomLastName}`;
}


export const generateRandomMessage = () => {
    const messages = [
        "Hello! How are you? 😊",
        "Hey there! What's up? 👋",
        "Good morning! 🌞",
        "Can anyone help me with this? 🆘",
        "I'm so excited about this project! 🚀",
        "Thank you for your help! 🙏",
        "Let’s meet tomorrow to discuss this. 📅",
        "I’m not sure I understand. Can you explain again? 🤔",
        "Great job on that last task! 👏",
        "What are your thoughts on this? 💭",
        "I’ll check and get back to you soon. ⏳",
        "That sounds amazing! 😍",
        "Just finished my part, sending it over. 📤",
        "Let me know if you need any assistance! 🤗",
        "Can you share the document link? 📎",
        "Any updates on the project? 📈",
        "It was nice talking with you! 😊",
        "Could we go over this together? 🤝",
        "How’s everyone doing? 🌟",
        "I’ll be out of office tomorrow. 🏖️",
        "Got it, thanks! 👍",
        "See you later! 👋",
        "Sorry, I missed that. Could you repeat? 🔄",
        "I’ll handle it from here. 💪",
        "Here’s what I found… 🔍",
        "Looking forward to our meeting! 💼",
        "I’ll send you the details in a bit. 📬",
        "What’s our deadline for this? ⏰",
        "Hey, quick question! ❓",
        "Let’s keep in touch! 💌",
        "Oops, was that supposed to be a reply-all? 😬",
        "Do I smell coffee, or am I just imagining it? ☕",
        "Is it Friday yet? 😅",
        "I think my brain is out of storage space! 🧠💾",
        "If lost, please send coffee. ☕",
        "Just here for the snacks. 🍿",
        "Can I get a time machine for this deadline? 🕰️",
        "When’s the next coffee break? ☕🕓",
        "If anyone needs me, I’ll be procrastinating. 🙈",
        "Anyone else need a nap, or just me? 💤",
        "On a scale of 1 to productive, I’m at snack time. 🍫",
        "Is it okay to ask for a redo on Monday? 🗓️😅",
        "I think my inbox just doubled in size. 📩😳",
        "I may need a backup brain for this project. 🤯",
        "Sending positive vibes and extra coffee! ☕✨",
        "Who knew ‘tomorrow’ could come so fast? 🕰️",
        "BRB, going to rescue my to-do list. 📝🦸",
        "I can multitask... watching videos counts, right? 🎥😂",
        "Someone please tell me what day it is! 📅😵",
    ];

    // Select a random message from the array
    return messages[Math.floor(Math.random() * messages.length)];
};
