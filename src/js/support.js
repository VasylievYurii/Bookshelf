import data from '../data/support.json';

const fundList = document.querySelector('.fund-list');

data.forEach(function (data) {
  const listItem = `
    <li>
      <a href="${data.url}">${data.title}</a>
    </li>
  `;

  fundList.insertAdjacentHTML('beforeend', listItem);
});
