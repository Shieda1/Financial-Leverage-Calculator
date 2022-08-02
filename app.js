// https://calculator.swiftutors.com/financial-leverage-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const financialLeverageRadio = document.getElementById('financialLeverageRadio');
const totalDebtRadio = document.getElementById('totalDebtRadio');
const shareholdersEquityRadio = document.getElementById('shareholdersEquityRadio');

let financialLeverage;
let totalDebt = v1;
let shareholdersEquity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

financialLeverageRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Debt';
  variable2.textContent = 'Shareholders Equity';
  totalDebt = v1;
  shareholdersEquity = v2;
  result.textContent = '';
});

totalDebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Financial Leverage';
  variable2.textContent = 'Shareholders Equity';
  financialLeverage = v1;
  shareholdersEquity = v2;
  result.textContent = '';
});

shareholdersEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Financial Leverage';
  variable2.textContent = 'Total Debt';
  financialLeverage = v1;
  totalDebt = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(financialLeverageRadio.checked)
    result.textContent = `Financial Leverage = ${computeFinancialLeverage().toFixed(2)}`;

  else if(totalDebtRadio.checked)
    result.textContent = `Total Debt = ${computeTotalDebt().toFixed(2)}`;

  else if(shareholdersEquityRadio.checked)
    result.textContent = `Shareholders Equity = ${computeShareholdersEquity().toFixed(2)}`;
})

// calculation

function computeFinancialLeverage() {
  return Number(totalDebt.value) / Number(shareholdersEquity.value);
}

function computeTotalDebt() {
  return Number(financialLeverage.value) * Number(shareholdersEquity.value);
}

function computeShareholdersEquity() {
  return Number(totalDebt.value) / Number(financialLeverage.value);
}