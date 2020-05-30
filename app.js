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

const copyContent = () =>
{
  const text = document.querySelector('#link-input');
  text.select();
  document.execCommand('copy');
}
document.querySelector('#copy').addEventListener('click', copyContent);