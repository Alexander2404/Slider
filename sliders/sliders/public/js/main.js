const rangeSlider1 = document.getElementById('range-slider1');
const rangeSlider2 = document.getElementById('range-slider2');
const rangeSlider3 = document.getElementById('range-slider3');

const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');
const input2_0 = document.getElementById('input2-0');
const input2_1 = document.getElementById('input2-1');
const input3_0 = document.getElementById('input3-0');
const input3_1 = document.getElementById('input3-1');

let maxValue = 10;

input1.placeholder  = maxValue;
input2_1.placeholder = maxValue;
input3_1.placeholder = maxValue;

const createRangeSlider=(slider,inputMin,inputMax,maxValue)=>{
	if (slider) {
		noUiSlider.create(slider, {
		start: [0, maxValue],
		connect: true,
		step: 1,
		range: {
			'min': [0],
			'max': [maxValue]
		}
		});
	
		const inputs = [inputMin, inputMax];
	
		slider.noUiSlider.on('update', function(values, handle){
			inputs[handle].value = Math.round(values[handle]);
		});
	
		inputs.forEach((el, index) => {
			el.addEventListener('change', (e) => {
				console.log(index);
				setRangeSlider(index, e.currentTarget.value,slider);
			});
		});
	}
}

const setRangeSlider = (i, value,slider) => {
	let arr = [null, null];
	arr[i] = value;
	slider.noUiSlider.set(arr);
};

function sendValue(){
    let data = {
         slider1:[input0.value,input1.value],
         slider2:[input2_0.value,input2_1.value],
         slider3:[input3_0.value,input3_1.value],
     };
     
     fetch('/submit', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(
           data
         )
       })
     .then(response => response.json())
     .catch(error => console.error(error));
 
 }
createRangeSlider(rangeSlider1,input0,input1,maxValue);
createRangeSlider(rangeSlider2,input2_0,input2_1,maxValue);
createRangeSlider(rangeSlider3,input3_0,input3_1,maxValue);
document.getElementById('btn').addEventListener('click',()=>sendValue())
 