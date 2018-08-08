function cardComponent (user) {
  return `
    <div class="cardComponent">
      <div class="leftColumn">
        <img src="" alt="alt">
      </div>
      <div class="rightColumn">
        <h2 class="username">${user.name.first}</h2>
        <h2 class="username">${user.name.last}</h2>
        <article class="userInfo">
          <ul class="userAttr">
            <li>email</li>
            <li>Age</li>
            <li>Nationality</li>
          </ul>

          <ul class="userData">
            <li>${user.email}</li>
            <li>${user.dob.age}</li>
            <li>${user.nat}</li>
          </ul>
        </article>
      </div>
    </div>
  `
}

const API = "https://randomuser.me/api/?results=10&inc=name,email,dob,nat"

$.get(API, function (data) {
  let userCards = '';

  data.results.forEach(user => {
    userCards += cardComponent(user);
  });

  $('.container').append(userCards);
});
