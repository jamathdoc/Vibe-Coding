  // Toggle Password Visibility
document.getElementById('togglePass').addEventListener('click', function() {
    const pass = document.getElementById('password');
    const confirm = document.getElementById('confirmPassword');
    const type = pass.type === 'password' ? 'text' : 'password';
    pass.type = type;
    confirm.type = type;
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Real-time Validation
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        const errorSpan = document.getElementById(`${input.id}Error`);
        if (input.value.length > 0) {
            errorSpan.textContent = ""; // Clear errors when user types
        }
    });
});

// Form Submission
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Profile Created Successfully! 🚀");
});