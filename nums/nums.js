let baseURL = "http://numbersapi.com"
const numList = document.getElementById('num-list');
const div = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')
const div4 = document.createElement('div')


let numPromise = axios.get(`${baseURL}/13?json`)
    .then(num1 => {
        numList.append(div)
        div.setAttribute('id', num1.data.number)
        div.append(`${num1.data.text}`)
        return axios.get(`${baseURL}/15?json`);
    })
    .then(num2 => {
        numList.append(div2)
        div2.setAttribute('id', num2.data.number)
        div2.append(`${num2.data.text}`)
        return axios.get(`${baseURL}/30?json`);
    })
    .then(num3 => {
        numList.append(div3)
        div3.setAttribute('id', num3.data.number)
        div3.append(`${num3.data.text}`)
        return axios.get(`${baseURL}/71?json`);
    })
    .then(num4 => {
        numList.append(div4)
        div4.setAttribute('id', num4.data.number)
        div4.append(`${num4.data.text}`)
    })
    .catch(err => {
        console.log(`Oops, there was a problem :( ${err}`);
      });


