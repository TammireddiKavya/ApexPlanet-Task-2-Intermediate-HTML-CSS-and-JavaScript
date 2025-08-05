// --- Form validation ---
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

form.addEventListener('submit', function (e) {
  let valid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Invalid email format';
    valid = false;
  }

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message is required';
    valid = false;
  }

  if (!valid) {
    e.preventDefault();
  } else {
    alert('Form submitted successfully!');
  }
});

// --- To-Do List functionality ---
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.classList.add('delete-btn');
  delBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(delBtn);
  todoList.appendChild(li);

  todoInput.value = '';
});
