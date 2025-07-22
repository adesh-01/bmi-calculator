const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
// ^ this usecase will give you empty val

form.addEventListener('submit', (evnt) => {
    evnt.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid height ${weight}`
    }else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        
        const bmiVal = parseFloat(bmi);
        let category = ""

        if (bmiVal < 18.6){
            category = "your are underweight.";
        } else if ( bmiVal >= 18.6 && bmiVal <= 24.9){
            category = "you have normal weight.";
        }else {
            category = "you are overweight";
        }

        results.innerHTML = `<span> Your BMI is: <strong>${bmi}</strong> <br> ${category} </span>`

    }
})
