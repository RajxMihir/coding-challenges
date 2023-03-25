const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

const url1 = 'http://www.example.com';
const url2 = 'https://example.com';
const url3 = 'http://123.45.67.89';
const url4 = 'https://example.co.uk';
const url5 = 'http://example.com/page.html#anchor';
const url6 = 'http://example.com';
const url7 = 'http://';

if (regex.test(url1)) {
  console.log(`${url1} is a valid URL`);
} else {
  console.log(`${url1} is not a valid URL`);
}

if (regex.test(url2)) {
  console.log(`${url2} is a valid URL`);
} else {
  console.log(`${url2} is not a valid URL`);
}

if (regex.test(url3)) {
  console.log(`${url3} is a valid URL`);
} else {
  console.log(`${url3} is not a valid URL`);
}

if (regex.test(url4)) {
  console.log(`${url4} is a valid URL`);
} else {
  console.log(`${url4} is not a valid URL`);
}

if (regex.test(url5)) {
  console.log(`${url5} is a valid URL`);
} else {
  console.log(`${url5} is not a valid URL`);
}

if (regex.test(url6)) {
  console.log(`${url6} is a valid URL`);
} else {
  console.log(`${url6} is not a valid URL`);
}

if (regex.test(url7)) {
  console.log(`${url7} is a valid URL`);
} else {
  console.log(`${url7} is not a valid URL`);
}
