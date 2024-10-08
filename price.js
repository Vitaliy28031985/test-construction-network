const prices = [
  {
    _id: "66fa964a5a79e9e9d4d3d1cf",
    title: "Шпаклювання",
    price: 150,
    owner: "66f6c3e7d73ab1cd2d54e6e6",
    createdAt: "2024-09-30T12:15:06.141Z",
    updatedAt: "2024-09-30T12:15:06.141Z"
  },
  {
    _id: "66faa739012fff17627f010d",
    title: "Шпаклювання",
    price: 150,
    owner: "66faa35bc535f5a4bdb799c3",
    createdAt: "2024-09-30T13:27:21.083Z",
    updatedAt: "2024-09-30T13:27:21.083Z"
  },
  {
    _id: "66faae4065abb5d753a66f4d",
    title: "Фарбування",
    price: 110,
    owner: "66faa35bc535f5a4bdb799c3",
    createdAt: "2024-09-30T13:57:20.688Z",
    updatedAt: "2024-09-30T13:57:20.688Z"
  },
  {
    _id: "66fab343bf14506397270b2b",
    title: "Штукатурка",
    price: 300,
    owner: "66faa35bc535f5a4bdb799c3",
    createdAt: "2024-09-30T14:18:43.741Z",
    updatedAt: "2024-09-30T14:18:43.741Z"
  },
  {
    _id: "66fab3c529a75b0dfb424893",
    title: "Наклеювання шпалер на стіни",
    price: 300,
    owner: "66faa35bc535f5a4bdb799c3",
    createdAt: "2024-09-30T14:20:53.105Z",
    updatedAt: "2024-09-30T14:20:53.105Z"
  },
  {
    _id: "66fd2a746395adf2431f5f9c",
    title: "Наклеювання шпалер на відкоси",
    price: 250,
    owner: "66faa35bc535f5a4bdb799c3",
    createdAt: "2024-10-02T11:11:48.628Z",
    updatedAt: "2024-10-03T11:26:01.256Z"
  },
  {
    _id: "6705301425e5a4fc2085cde7",
    title: "Наклеювання шпалер на стіни",
    price: 250,
    owner: "67052fa425e5a4fc2085cde0",
    createdAt: "2024-10-08T13:13:56.343Z",
    updatedAt: "2024-10-08T13:13:56.343Z"
  },
  {
    _id: "6705302a25e5a4fc2085cdea",
    title: "Штукатурка стін",
    price: 200,
    owner: "67052fa425e5a4fc2085cde0",
    createdAt: "2024-10-08T13:14:18.055Z",
    updatedAt: "2024-10-08T13:14:18.055Z"
  },
  {
    _id: "6705304025e5a4fc2085cded",
    title: "Шпаклювання стін",
    price: 190,
    owner: "67052fa425e5a4fc2085cde0",
    createdAt: "2024-10-08T13:14:40.697Z",
    updatedAt: "2024-10-08T13:14:40.697Z"
  },
  {
    _id: "670530ec25e5a4fc2085cdf9",
    title: "Шпаклювання стін",
    price: 190,
    owner: "6705309d25e5a4fc2085cdf2",
    createdAt: "2024-10-08T13:17:32.160Z",
    updatedAt: "2024-10-08T13:17:32.160Z"
  },
  {
    _id: "6705311f25e5a4fc2085cdfe",
    title: "Штукатурка стін",
    price: 230,
    owner: "6705309d25e5a4fc2085cdf2",
    createdAt: "2024-10-08T13:18:23.160Z",
    updatedAt: "2024-10-08T13:18:23.160Z"
  },
  {
    _id: "6705313d25e5a4fc2085ce01",
    title: "Наклеювання шпалер стіни",
    price: 400,
    owner: "6705309d25e5a4fc2085cdf2",
    createdAt: "2024-10-08T13:18:53.131Z",
    updatedAt: "2024-10-08T13:18:53.131Z"
  }
]

const dto1 = {
  title: "Штукатурка стін",
  unit: "м.кв",
  number: 30
}

const dto2 = {
  title: "Наклеювання шпалер стіни",
  unit: "м.кв",
  number: 30
}

const owners = []
let estimates = {};
  
const createEstimates = (dto) => {
 
  if(owners.length === 0) {
  
  for (let i = 0; i < prices.length; i++) {
    const isOwner = owners.some(item => item === prices[i].owner);
    if (!isOwner) {
    owners.push(prices[i].owner);
    } 
  }

  for (let i = 0; i < owners.length; i++) {
    const ownerIx = { [owners[i]]: []}
    estimates = {...estimates, ...ownerIx} ;
  }
}
  const findPrices = prices.filter(({ title }) => title === dto.title);

  for (let i = 0; i < findPrices.length; i++){
    const result = findPrices[i].price * dto.number;
    const newPrice = {
      title: dto.title,
      unit: dto.unit,
      number: dto.number,
      price: findPrices[i].price,
      result 
    }
    const key = findPrices[i].owner
    estimates[key].push(newPrice);
  }
  console.log(estimates)


}

createEstimates(dto1)
createEstimates(dto2)
