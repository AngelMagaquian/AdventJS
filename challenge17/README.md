
  

# Challenge 17

  

  

**[Challenge 17](https://adventjs.dev/challenges/17)**

  

  
  
  
  
  
  


Delivery companies 📦 are gearing up for the holiday season and the shipping madness that awaits them.

The company operates with fleets of vans 🚛 and trucks 🚚. The fleets have an organizational chart, as there are experience level ranks.

We need to know the number of packages a person is going to be able to manage in a day. This is done by counting the number of packages that person can carry and all the carriers he has in his team. The bad thing is that the data is stored in a bit of a weird way in an array:

The array contains other arrays that contain the data of each carrier

 - carrier[0] -> Carrier name/ID
 - carrier[1] -> Packages handled in a day
 - carrier[2] -> Array with its subordinates

To see it in code, both the array and the two-parameter function to get the desired number:
```
const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 form dapelu, 2 form  midu y 2 form jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 form camila, 4 form sergiomartinez, 3 form conchaasensio, 2 form facundocapua y 1 form faviola = 15
```
Be careful! As you have seen in the second example, the organization chart can have different levels and we get information that we may not need. We must take into account the `carrierID` parameter to calculate the number and count all your equipment.