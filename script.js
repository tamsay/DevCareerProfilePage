var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        // document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        // document.documentElement.setAttribute('data-theme', 'light')
    }

    let body = document.body;
    let pictureCol = document.querySelector('#pictureCol')
    let profileCol = document.querySelector('#profileCol')

    body.classList.toggle('dark-mode')
    pictureCol.classList.toggle('pictureColDark')
    profileCol.classList.toggle('profileColDark')
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}