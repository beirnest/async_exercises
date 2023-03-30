let baseURL = "http://numbersapi.com";

async function getNum(){
    let n1Promise = axios.get(`${baseURL}/13?json`);
    let n2Promise = axios.get(`${baseURL}/15?json`);
    let n3Promise = axios.get(`${baseURL}/31?json`);
    let n4Promise = axios.get(`${baseURL}/7?json`);

    let n1 = await n1Promise;
    let n2 = await n2Promise;
    let n3 = await n3Promise;
    let n4 = await n4Promise;

    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML = `${n1.data.text}<br> ${n2.data.text} <br>${n3.data.text}<br>${n4.data.text} `
}

getNum();