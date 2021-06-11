const state={
    name:'John',
    address:{
        city:'London',
        country:{
            countryName:'United Kingdom',
            countryCode:'Uk'
        }
    }
}

//I need to make changes into this object immutably
// let copy = state;
// copy.name='Alexander';

// console.log(state);
// console.log(copy);
//change dono m reflect hoga memory diag se dekho

// let copy={...state};
// copy.name='Alexander';
// console.log(state);
// console.log(copy);
// copy.address["city"]="Seatle";
// console.log(state);
// console.log(copy);

// let copy ={...state,address:{...state.address}};
// copy.address.city="Delhi";
// console.log(state);
// console.log(copy);

let copy={...state,address:{...state.address,country:{...state.address.country}}};
copy.address.country.countryName ="Nepal";
console.log(state);
console.log(copy);