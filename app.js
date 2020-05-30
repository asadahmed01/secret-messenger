const {hash} = window.location;
const message = atob(hash.replace('#', ''));

if(message)
{
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('#message').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (event) =>
{
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');
  const input = document.querySelector('#message-input');
  const encoded = btoa(input.value);
  const linkInput = document.querySelector('#link-input').value
   = `${window.location}#${encoded}`;


})

//copy link function
const copyContent = () =>
{
  const text = document.querySelector('#link-input');
  text.select();
  document.execCommand('copy');

  setTimeout(() =>
  {
    // document.querySelector('#link-form').classList.add('hide');
    document.querySelector('#alert').classList.remove('hide');
  },100);
  
  setTimeout(() =>
  {
    document.querySelector('#alert').classList.add('hide');
    //location.reload();
  }, 1000);
  
}
document.querySelector('#copy').addEventListener('click', copyContent);