resultEle = document.querySelector('.result');
detailsEle = document.querySelector('.details');


//Third
resultEle.addEventListener('click', (e) => {
    e.stopPropagation();
    const username = e.target.getAttribute('data-abc');
    if (username) {
        const items = document.querySelectorAll('.item');
        items.forEach(item => item.classList.remove('active'));
        e.target.parentElement.classList.add('active');
        fetchRepos(username);
    }
});


//Second

const renderUsers = (users) => {
    resultEle.innerHTML = users.map(user => {
        return `
        <div class="item" style="display:flex; align-items:center; justify-content:space-between;" >
            <img src="${user.avatar_url}" height="150" style="margin:3px 0;" />
            <h1>${user.login}</h1>
            <button data-abc="${user.login}">Show Details</button>
        </div>
    `
    }).join('');
};



//Fifth
const renderRepos = (repos) => {
    detailsEle.innerHTML = repos
        .map(repo =>
            `<p><ul><li>${repo.full_name}</li></ul></p>`
        )
        .join('');
};


//Fourth
const fetchRepos = async(login) => {
    detailsEle.innerHTML = '';
    const response = await fetch(`https://api.github.com/users/${login}/repos`);
    const result = await response.json();
    renderRepos(result);
};


//First
const fetchUsers = async() => {
    const response = await fetch('https://api.github.com/users');
    const result = await response.json();
    renderUsers(result);
};

fetchUsers();