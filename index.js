const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight);
    const height = parseInt(document.querySelector('#height').value)
    console.log(height);
    const result = document.querySelector('#result')

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a vaild height ${height}`
    } else if( weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML =  `Please give a vaild weight ${weight}`
    } else{
        const bmi = (weight / ((height * height) /10000)).toFixed(2)
        result.innerHTML = `Your BMI is ${bmi}`
    }
    
})