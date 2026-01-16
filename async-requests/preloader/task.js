let xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://students.netoservices.ru/nestjs-backend/slow-get-courses`);
xhr.responseType = 'json';
xhr.send();

  xhr.addEventListener(`load`, () => {
  const loader = document.getElementById('loader');
  loader.classList.remove('loader_active');
  
  const itemList = document.getElementById('items');
  const response = xhr.response;
  const valutes = response.response.Valute;
  for (let valuteCode in valutes) {
    const valute = valutes[valuteCode];
    const valuteElement = createItems(valute.CharCode, valute.Value);
    itemList.appendChild(valuteElement);
  }
});

function createItems(code, value) {
  const item = document.createElement('div');
  item.className = `item`;
  
  const itemCode = document.createElement(`div`);
  itemCode.className = `item__code`;
  itemCode.textContent = code;
  
  const itemValue = document.createElement(`div`);
  itemValue.className = `item__value`;
  itemValue.textContent = value;
  
  const itemCurrency = document.createElement(`div`);
  itemCurrency.className = `item__currency`;
  itemCurrency.textContent = `руб.`;
  
  item.appendChild(itemCode);
  item.appendChild(itemValue);
  item.appendChild(itemCurrency);
  
  return item;
}