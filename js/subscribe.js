window.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".notify-container form");
    const submitButton = form.querySelector("button");
    const originalText = submitButton.textContent;

    async function handleSubmit(e) {
        e.preventDefault();
        submitButton.disabled = true;
        submitButton.textContent = "Subscribing...";

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                form.reset();
                submitButton.textContent = "Thanks for subscribing! ✨";
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }, 3000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error("Error:", error);
            submitButton.textContent = "Error! Try again";
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 3000);
        }
    }

    form.addEventListener("submit", handleSubmit);
});
