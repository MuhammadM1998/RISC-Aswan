/***** Firebase Config *****/
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDuSEl_yrFqBNn8ezKrPL5LIvV781_x4DY',
    authDomain: 'risc-aswan-2022.firebaseapp.com',
    projectId: 'risc-aswan-2022',
    storageBucket: 'risc-aswan-2022.appspot.com',
    messagingSenderId: '707905185688',
    appId: '1:707905185688:web:30375c6f29dee44624eded',
};

// Init App
initializeApp(firebaseConfig);
// Init Services
const db = getFirestore();
// Collection Reference
const colRef = collection(db, 'form-data');

const form = document.querySelector('#contactForm');
const firstNameInput = document.querySelector('#first-name');
const firstNameRequired = document.querySelector('#first-name-required');
const firstNameInvalid = document.querySelector('#first-name-invalid');
const lastNameInput = document.querySelector('#last-name');
const lastNameRequired = document.querySelector('#last-name-required');
const lastNameInvalid = document.querySelector('#last-name-invalid');
const emailInput = document.querySelector('#email');
const emailInvalid = document.querySelector('#email-invalid');
const messageInput = document.querySelector('#message');
const messageRequired = document.querySelector('#message-required');
const messageInvalid = document.querySelector('#message-invalid');
const mailIllustration = document.querySelector('#mailbox');
const messageSentIllustration = document.querySelector('#message-sent');
const messageErrorIllustration = document.querySelector('#message-error');

const getInputValue = function(id) {
    return document.querySelector(`#${id}`).value;
};

const submitForm = function(e) {
    e.preventDefault();

    const firstNameValue = getInputValue('first-name');
    const lastNameValue = getInputValue('last-name');
    const emailValue = getInputValue('email');
    const messageValue = getInputValue('message');

    // Submit Form Data if all data is correct and not empty
    // and if the email is correct or empty
    if (validateForm(firstNameValue, lastNameValue, messageValue)) {
        saveMessages(firstNameValue, lastNameValue, emailValue, messageValue);
        MailboxSuccess();
    }
};

const validateForm = function(firstName, lastName, message) {
    resetForm();

    if (
        validateFirstName() &&
        validateLastName() &&
        validateEmail() &&
        validateMessage() &&
        !isEmpty(firstName) &&
        !isEmpty(lastName) &&
        !isEmpty(message)
    ) {
        return true;
    } else {
        if (isEmpty(firstName)) {
            AlertFirstName();
        }
        if (isEmpty(lastName)) {
            AlertLastName();
        }
        if (isEmpty(message)) {
            AlertMessage();
        }
        MailboxFail();
    }

    return false;
};

const isName = function(value) {
    const nameRegEx = /^[a-zA-Z]+(?:['-][a-zA-Z]+)*$/g;
    if (nameRegEx.test(value)) {
        return true;
    } else {
        return false;
    }
};

const isEmpty = function(value) {
    return value === '' ? true : false;
};

const validateFirstName = function() {
    resetFirstNameLabels();
    const firstNameValue = getInputValue('first-name');

    if (isName(firstNameValue)) {
        firstNameInput.classList.add('form-input--valid');
        return true;
    } else if (firstNameValue === '') {
        return false;
    } else {
        AlertFirstName();
        return false;
    }
};

const AlertFirstName = function() {
    firstNameInput.classList.add('form-input--invalid');
    firstNameRequired.classList.add('hidden');
    firstNameInvalid.classList.remove('hidden');
};

const validateLastName = function() {
    resetLastNameLabels();
    const lastNameValue = getInputValue('last-name');

    if (isName(lastNameValue)) {
        lastNameInput.classList.add('form-input--valid');
        return true;
    } else if (lastNameValue === '') {
        return false;
    } else {
        AlertLastName();
        return false;
    }
};

const AlertLastName = function() {
    lastNameInput.classList.add('form-input--invalid');
    lastNameRequired.classList.add('hidden');
    lastNameInvalid.classList.remove('hidden');
};

const validateEmail = function() {
    resetEmailLabels();

    const emailValue = getInputValue('email');
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (emailRegEx.test(emailValue)) {
        emailInput.classList.add('form-input--valid');
        return true;
    } else if (emailValue === '') {
        return true;
    } else {
        AlertEmail();
        return false;
    }
};

const AlertEmail = function() {
    emailInput.classList.add('form-input--invalid');
    emailInvalid.classList.remove('hidden');
};

const validateMessage = function() {
    resetMessageLabels();

    const messageValue = getInputValue('message');
    const messageRegEx = /^[a-zA-Z0-9\s\-\,]{4,}.\*?$/g;

    if (messageRegEx.test(messageValue)) {
        messageInput.classList.add('form-input--valid');
        return true;
    } else if (messageValue === '') {
        return false;
    } else {
        AlertMessage();
        return false;
    }
};

const AlertMessage = function() {
    messageInput.classList.add('form-input--invalid');
    messageRequired.classList.add('hidden');
    messageInvalid.classList.remove('hidden');
};

const MailboxEmpty = function() {
    mailIllustration.classList.remove('hidden');
    messageSentIllustration.classList.add('hidden');
};

const MailboxSuccess = function() {
    messageSentIllustration.classList.remove('hidden');
    messageErrorIllustration.classList.add('hidden');
    mailIllustration.classList.add('hidden');
};

const MailboxFail = function() {
    messageErrorIllustration.classList.remove('hidden');
    messageSentIllustration.classList.add('hidden');
    mailIllustration.classList.add('hidden');
};

const resetForm = function() {
    resetFirstNameLabels();
    resetLastNameLabels();
    resetEmailLabels();
    resetMessageLabels();
};

const resetFirstNameLabels = function() {
    firstNameInput.classList.remove('form-input--valid');
    firstNameInput.classList.remove('form-input--invalid');
    firstNameRequired.classList.remove('hidden');
    firstNameInvalid.classList.add('hidden');
};

const resetLastNameLabels = function() {
    lastNameInput.classList.remove('form-input--valid');
    lastNameInput.classList.remove('form-input--invalid');
    lastNameRequired.classList.remove('hidden');
    lastNameInvalid.classList.add('hidden');
};

const resetEmailLabels = function() {
    emailInput.classList.remove('form-input--valid');
    emailInput.classList.remove('form-input--invalid');
    emailInvalid.classList.add('hidden');
};

const resetMessageLabels = function() {
    messageInput.classList.remove('form-input--valid');
    messageInput.classList.remove('form-input--invalid');
    messageRequired.classList.remove('hidden');
    messageInvalid.classList.add('hidden');
};

const getCurrentDate = function() {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const currentDate = new Intl.DateTimeFormat('en-GB', options).format(date);

    return currentDate;
};

// Save Messages to firebase
const saveMessages = function(firstName, lastName, email, message) {
    addDoc(colRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        date: getCurrentDate(),
    }).then(() => {
        form.reset();
        resetForm();
        setInterval(() => {
            MailboxEmpty();
        }, 2000);
    });
};

form.addEventListener('submit', submitForm);
firstNameInput.addEventListener('blur', validateFirstName);
lastNameInput.addEventListener('blur', validateLastName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);
window.addEventListener('DOMContentLoaded', resetForm);