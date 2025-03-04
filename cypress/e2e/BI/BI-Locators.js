const salesDataRegion = {
    BISystem: 'div.dashboard-grid>div:nth-child(3)',
    regionDashboard: 'a[href="http://192.168.150.222:5173"]',
    startDate: 'header>div>div:nth-child(1)>div:nth-child(2)>input',//'#\:r1\:', 
    endDate: '#\\:r5\\:',
    minValue: '#\\:r9\\:',
    maxValue: '#\\:rb\\:',
    ATGCode: '#\\:rd\\:',
    tin: '#\\:rf\\:',
    subCategory: '#\\:rh\\:',
    brand: '#\\:rl\\:',
    tokenType: '#\\:rp\\:',
    anvanum: '#fuzzy_input',
    circle1: 'div:nth-child(2) > div.MuiBox-root.css-6yylm0>div:nth-child(1)',
    circle2: 'div:nth-child(2) > div.MuiBox-root.css-6yylm0>div:nth-child(2)',
    statistic: 'div:nth-child(2) > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation3.css-1fsgf8o-MuiPaper-root',
    map:  'div:nth-child(6) > div:nth-child(1) > div', //'div.legend',  
    selectBrindz: 'div[role = "presentation"]>div',
    selectGallo: 'div[role = "presentation"]>div>ul>li:nth-child(3)',

    submitBtn: 'header>div>button:nth-child(11)',
    cancellBtn: 'header>div>button:nth-child(11)'
}

const salesDataInfo = {
    startDate: "01-01-2024",
    endDate: "12-31-2024",
    minValue: "10000",
    maxValue: "90000",
    tin: "02538542",
    subCategory: "Բրի",
    brand: "Gall",
    ATGCode: "1006",
    anvanum: "Բրինձ սև «Գալլո» 500գ",

    wrongMin: "80000",
    wrongMax: "10000",
    wrongTin:'00',
    wrongSub: 'aa',
    wrongBrand: 'bb',
    wrongATG: '11111111'
}

const salesProductData ={
    BISystem: 'div.dashboard-grid>div:nth-child(3)',
    productSalesDashboard: "div.cards-container>div:nth-child(2)",
    hideButthon: '#filterButton',
    crn: '#\\:r1\\:',
    tin: '#\\:r3\\:',
    anvanum: '#\\:r5\\:',
    atg: '#\\:r7\\:',
    brand: '#\\:r9\\:',
    subCategory: '#\\:rd\\:',
    minValue: '#\\:rh\\:',
    maxValue: '#\\:rj\\:',
    startDate: '#\\:rl\\:',
    endDate: '#\\:rp\\:',
    more: 'div > div:nth-child(13) > button',
    ancyalTari: 'div[role = "presentation"] > div:nth-child(3) > ul > li:nth-child(3)',
    amenatank: 'div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(1)',
    amenavacharvac: 'div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)',
    map: 'div.App>div>div>div:nth-child(2)>div:nth-child(1)>div',
    productTable: 'div.App>div>div>div:nth-child(2)>div:nth-child(2)>div>div',
    selectCxaxot: 'div[role = "presentation"]>div>ul>li:nth-child(1)',
    selectWinston: 'div[role = "presentation"]>div>ul>li',
    submitBtn: 'div > button:nth-child(14)',
    cancellBtn: 'div > button:nth-child(15)'

}

const salesProductInfo = {
    startDate: "01-07-2024",
    endDate: "12-31-2024",
    minValue: "10000",
    maxValue: "75000",
    tin: '02538542',
    crn: '51650738',
    subCategory: 'Ծխա',
    brand: 'Wins',
    anvanum: 'Ծխախոտ Winston silver',
    
    wrongMin: "90000",
    wrongMax: "10000",
    wrongTin: '00',
    wrongCRN: '665',
    wrongSub: 'aa',
    wrongBrand: 'bb',
    wrongAnvanum: 'abababab'
}

export {salesDataRegion, salesDataInfo, salesProductData, salesProductInfo}