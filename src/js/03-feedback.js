import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const INFO_INPUT = {};

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputTextArea = document.querySelector('[name="message"]');

form.addEventListener('submit', sendForm);
inputEmail.addEventListener('input', throttle(onCurrentInput1, 500));
inputTextArea.addEventListener('input', throttle(onCurrentInput2, 500));

const formLocalStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if(formLocalStorageData) {
if (formLocalStorageData.email) {
   inputEmail.value = formLocalStorageData.email;
};
if (formLocalStorageData.message) {
   inputTextArea.value = formLocalStorageData.message;
};}

function onCurrentInput1(e) {
   e.preventDefault();
   if (e.target === inputEmail) {
      INFO_INPUT.email = e.target.value;
   };
   localStorage.setItem(STORAGE_KEY, JSON.stringify(INFO_INPUT));
   if(formLocalStorageData) {
      if (formLocalStorageData.message) {
         INFO_INPUT.message = formLocalStorageData.message;
      };
   };
};

function onCurrentInput2(e) {
   e.preventDefault();
   if (e.target === inputTextArea) {
      INFO_INPUT.message = e.target.value;
   };
   localStorage.setItem(STORAGE_KEY, JSON.stringify(INFO_INPUT));
   if(formLocalStorageData) {
      if (formLocalStorageData.email) {
         INFO_INPUT.email = formLocalStorageData.email;
      };
   };
};

function sendForm(e) {
   e.preventDefault();
   if (inputEmail.value === '' || inputTextArea.value === '') {
    return console.log('Please fill in all the fields!');
  } else {
   
   e.currentTarget.reset();
   localStorage.removeItem(STORAGE_KEY);
   console.log(`Form sent, your email: ${INFO_INPUT.email}, and your message: ${INFO_INPUT.message}`);
   inputEmail.value = '';
      inputTextArea.value = '';
      }
};











// const formLocalStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
// console.log(STORAGE_KEY);
// const formLocalStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY))
// console.log(formLocalStorageData.email);


// if (formLocalStorageData.email) {
//    inputEmail.value = formLocalStorageData.email;
// };


//=====================================================

// // const _ = require('lodash');

// import throttle from 'lodash.throttle';

// const feedbackForm = document.querySelector('.feedback-form');

// // submiting
// //

// feedbackForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, message },
//   } = event.target;

//   if (email.value === '' || message.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(` ------> submited email: "${email.value}", message: "${message.value}"`);

//   localStorage.removeItem(localStorageLable);

//   event.target.reset();
// }

// // logging

// const localStorageLable = 'feedback-form-state';
// const localStorageFormData = localStorage.getItem(localStorageLable);

// let formData = JSON.parse(localStorageFormData);
// if (formData === null) {
//   formData = {
//     email: '',
//     message: '',
//   };
// }

// printFormData(formData);

// function printFormData(storage) {
//   document.querySelector('input[name=email]').value = storage.email;
//   document.querySelector('textarea[name=message]').textContent = storage.message;
// }

// feedbackForm.addEventListener('input', throttle(logInputedString, 500));

// function logInputedString(e) {
//   const name = e.target.name;
//   const value = e.target.value;
//   switch (name) {
//     case 'email':
//       loggingEmailMessage(name, value);
//       break;

//     case 'message':
//       loggingEmailMessage(name, value);
//       break;

//     default:
//       break;
//   }
// }

// function loggingEmailMessage(name, value) {
//   formData[name] = value;

//   localStorage.setItem(localStorageLable, JSON.stringify(formData));
// }