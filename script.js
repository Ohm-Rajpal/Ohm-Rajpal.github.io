document.addEventListener('DOMContentLoaded', () => {
    console.log('entered')
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        responseMessage.style.color = 'green'; // You can style the message as needed

        console.log(`name: ${name}`)
        console.log(`email: ${email}`)
        console.log(`message: ${message}`)

        form.reset();
    });
});