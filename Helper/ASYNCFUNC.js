// GET DATA
// window.location = url на страницата където искаш да отидеш
//new FormData : reset(), get()
//session storage : getItem,setItem, clear(), removeItem

// creating fragment const fragment = document.createDocumentFragment();
//create element fragment.appendChild(element ref);
// add to HTML file document.body.appendChild(fragment);
async function getData() {
    const url = ``

    /*if you wnat to access with authorization

    const options = {headers: {}};
    const token = sessionStorage.getItem('token');
    if(token !== null){
        options.headers['X-Authorization'] = token;
    }

    */
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}

// GET DATA BY ID

async function getDataByID(id) {
    const url = `` + id;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

// make post req

async function makePost(data){
    const url = ``
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }

    const res = await fetch(url,options);
    const result = await res.json();

    //if you want authorization after registration

    const token = result // .'name for token in the returned data for example accessToken'
    //save token in session

    sessionStorage.setItem('token', token);

    return result;
}


//UPDATE data

async function updateRequest(data){
    const url = `` + id;
    
    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    
    const res = await fetch(url,options);
    const result = await res.json();
    
    return result;
}

//delete request 

async function deleteRequest(id){
    const url = `` + id;

    const options = {
        method: 'DELETE'
    }

    const res = await fetch(url,options);
    const data = await res.json();

    return data;
}

//create DOM element

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------

//MODULES!!!!!!!!!!!!!

//<script src="......." type= "module"></script>

export function sumNumber(a,b){
    return a + b
}

//you can export multiple items as well

export {
    sumNumber,
    //.....,
    //....
}

import {sumNumber} from './fileName';

//if you want to improt but change the name

import {sumNumber as sum} from './fileName';

//---------------------------------------------------------------------------------------------------------
//FOR PLAYWRIGHT !!!!!

const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

describe('E2E tests', function() {

before(async () => { browser = await chromium.launch(); });
after(async () => { await browser.close(); });
beforeEach(async () => { page = await browser.newPage(); });
afterEach(async () => { await page.close(); });
});


// ROUTING

const hash = window.location.hash;
//hashchange event
//popstate event
window.history.go();//-1 или 5 САМО ЧИСЛА
window.history.back();
window.history.forward();
window.history.pushState({}, 'title', '#catalog');
window.history.replaceState({}, 'title', '#catalog');

page('url', func);
page.redirect('/','/home');
page.start();
