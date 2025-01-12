import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
},  {
    id: '2',
    deliveryDays: 3,
    priceCents: 499

},  {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}]

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption

    deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
        deliveryOption = option
    }
    });

    return deliveryOption || deliveryOptions[0]
}

function isWeekend(deliveryDateDAYstring) {
    if (deliveryDateDAYstring === 'Saturday' || deliveryDateDAYstring === 'Sunday') {
      return true
    } else {return false}
  }


// 15m 15:34:22

export function calculateDeliveryDate(deliveryOption) {
    const today = dayjs();
    let deliveryDate = today;

    let daysToAdd = deliveryOption.deliveryDays;

    while (daysToAdd > 0) {
        deliveryDate = deliveryDate.add(1, 'days');
        const deliveryDateDAYstring = deliveryDate.format('dddd');

        // Check if the new delivery date is a weekend
        if (!isWeekend(deliveryDateDAYstring)) {
            daysToAdd--; // Only decrement if it's not a weekend
        }
    }

    const dateString = deliveryDate.format('dddd, MMMM D');
    return dateString; // Return the formatted delivery date string
}



// export function calculateDeliveryDate(deliveryOption) {
    
//     const today = dayjs()
//     const deliveryDate = today.add(
//         deliveryOption.deliveryDays,
//         'days'
//     )
//     let deliveryDateDAYstring = deliveryDate.format('dddd')
//     const dateString = deliveryDate.format('dddd, MMMM, D')
    
//     while (isWeekend(deliveryDateDAYstring) === true) {
        
//         // deliveryDate.add(1, 'days')
//         // console.log(deliveryDate.format('dddd'))
//     }
// }