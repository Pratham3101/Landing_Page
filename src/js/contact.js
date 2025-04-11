document.addEventListener("DOMContentLoaded", function() {
    const nameInput       = document.querySelector('input[placeholder="Name"]');
    const emailInput      = document.querySelector('input[placeholder="Email Adress"]');
    const companyInput    = document.querySelector('input[placeholder="Company Name"]');
    const phoneInput      = document.querySelector('input[placeholder="Contact Number"]');
    const messageTextarea = document.querySelector('.contact-message');
    const termsCheckbox   = document.querySelector('.checkbox');
    const submitBtn       = document.querySelector('.submit-btn');
    const formSection     = document.querySelector('.form-section');
    const submitSection   = document.querySelector('.submit-section');
    let termsErrorElem;

    submitBtn.addEventListener("click", function(e) {
        e.preventDefault(); 

        if (termsErrorElem) {
            termsErrorElem.remove();
            termsErrorElem = null;
        }

        // 1) Required Fields control
        if (
            !nameInput.value.trim() ||
            !emailInput.value.trim() ||
            !companyInput.value.trim() ||
            !phoneInput.value.trim() ||
            !messageTextarea.value.trim()
        ) {
            Swal.fire({
                icon: "error",
                title: "Required Fields Missing!",
                text: "Please fill in all required fields.",
                confirmButtonColor: "#043A53" 
            });
            return;
        }

        // 2) Terms & Conditions checkbox control
        if (!termsCheckbox.checked) {
            termsErrorElem = document.createElement("div");
            termsErrorElem.className = "terms-error";
            termsErrorElem.textContent = "*Please agree to the Terms & Conditions!";
            termsErrorElem.style.color = "#f44336";
            termsErrorElem.style.fontSize = "14px";
            termsErrorElem.style.marginTop = "8px";
            formSection.parentNode.insertBefore(termsErrorElem, submitSection);
            return;
        }

        // 3) If all conditions are met, a success message
        Swal.fire({
            title: "Your form has been successfully submitted!",
            icon: "success",
            text: "We will contact you soon.",
            confirmButtonColor: "#043A53",  
            didClose: () => {
                console.log("User Information:");
                console.log("Name:", nameInput.value);
                console.log("Email:", emailInput.value);
                console.log("Company Name:", companyInput.value);
                console.log("Contact Number:", phoneInput.value);
                console.log("Message:", messageTextarea.value);

                nameInput.value = "";
                emailInput.value = "";
                companyInput.value = "";
                phoneInput.value = "";
                messageTextarea.value = "";
                termsCheckbox.checked = false;
            }
        });
    });
});