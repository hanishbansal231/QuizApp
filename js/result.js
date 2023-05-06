// show the result
function result(){
    let user = sessionStorage.getItem('name');
    let point = sessionStorage.getItem('points');
    document.querySelector('.name').innerHTML = user;
    document.querySelector('.point').innerHTML = point;
}
result();