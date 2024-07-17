nameInput.addEventListener('input', () => {
  const userName = nameInput.value.trim();
  welcomeMessage.textContent = userName ? `Welcome, ${userName}!` : 'Welcome!';
});
