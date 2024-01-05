

const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const colorBtn = document.querySelector("#colorButton")
const hairstyleBtn = document.querySelector("#hairstyleButton")
const makeupBtn = document.querySelector("#makeupButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then(res => {
            const data = res.data;
            alert(data);

        });
};

const getHairstyle = () => {
    axios.get("http://localhost:4000/api/hairstyle/")
        .then(res => {
            const data = res.data;
            alert(data)
        });
};

const getMakeup = () => {
    axios.get("http://localhost:4000/api/makeup/")
        .then(res => {
            const data = res.data;
            alert(data)
        });
};
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
colorBtn.addEventListener('click', getColor)
hairstyleBtn.addEventListener('click', getHairstyle)
makeupBtn.addEventListener('click', getMakeup)