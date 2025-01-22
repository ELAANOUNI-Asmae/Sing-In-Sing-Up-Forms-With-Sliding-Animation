const byId = (id) => document.getElementById(id);
const $signUpButton = byId('signUp');
const $signInButton = byId('signIn');
const $container = byId('container');

$signUpButton.addEventListener('click', () => {
    console.log('Sign Up button clicked');
    $container.classList.add('right-panel-active');
});

$signInButton.addEventListener('click', () => {
    console.log('Sign In button clicked');
    $container.classList.remove('right-panel-active');
});
