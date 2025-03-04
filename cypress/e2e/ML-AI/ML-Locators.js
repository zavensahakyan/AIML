
const openSystem = {
    MLAISystem: 'div.dashboard-grid>div:nth-child(6)',
}

const taxInspectionLocators = {
    executeModel: 'tr:nth-child(1) > td:nth-child(7) > button:nth-child(1)',
    tin: 'input[name = \'TIN\']',
    fieldYear: 'select.gradient-select',
    selectYear: 'option[value="2023"]',
    backButton: 'div.ml-navigation-buttons>button:nth-child(1)',
    nextButton: 'div.ml-navigation-buttons>button:nth-child(2)',
    executeBtn: 'div.ml-navigation-buttons>button:nth-child(2)',
    openResult: 'a.execution-link',
    complexModel: 'div.clustering-result:nth-child(1)',
    complexModel2: 'div.clustering-result:nth-child(2)'
}

const clusteringLocators = {
    executeModel: 'tr:nth-child(2) > td:nth-child(7) > button:nth-child(1)',
    sectorField: 'select[name = "sector"]',
    yearField: 'select[name = "year"]',
    clusterField: 'select[name = "n_clusters"]',
    backButton: 'div.ml-navigation-buttons>button:nth-child(1)',
    nextButton: 'div.ml-navigation-buttons>button:nth-child(2)',
    executeBtn: 'div.ml-navigation-buttons>button:nth-child(2)',
    openResult: 'a.execution-link',
    clusteringResult: 'div.clustering-result'

}

const tracingLocators = {
    executeModel: 'tr:nth-child(3) > td:nth-child(7) > button:nth-child(1)',
    tinField: 'input[name="HDM_tin"]',
    subCategory: 'input[name="Category"]',
    brandField: 'input[name="Brand"]',
    threshold: 'input[name="Threshold"]',
    receiptDate: 'div.clustering-params-container > div > div:nth-child(2) > div > button',
    declarationDate: 'div.clustering-params-container > div > div:nth-child(4) > div > button',
    invoiceDate: 'div.clustering-params-container > div > div:nth-child(6) > div > button',
    backButton: 'div.ml-navigation-buttons>button:nth-child(1)',
    nextButton: 'div.ml-navigation-buttons>button:nth-child(2)',
    executeBtn: 'div.ml-navigation-buttons>button:nth-child(2)',
    openResult: 'a.execution-link',
    tracingResult: '#main-info'

}

const anomalyLocators = {
    executeModel: 'tr:nth-child(4) > td:nth-child(7) > button:nth-child(1)',
    tinField: 'input[name="single_TIN"]',
    receiptDate: 'div.clustering-params-container > div > div:nth-child(2) > div > button',
    last30Days: 'div.date-sidebar>ul>li:nth-child(1)',
    last3Months: 'div.date-sidebar>ul>li:nth-child(2)',
    last6Months: 'div.date-sidebar>ul>li:nth-child(3)',
    last12Months: 'div.date-sidebar>ul>li:nth-child(4)',
    last2Years: 'div.date-sidebar>ul>li:nth-child(5)',
    last3Years: 'div.date-sidebar>ul>li:nth-child(6)',
    applyBtn: 'button.apply-date-button',
    cancelBtn: 'button.cancel-date-button',
    backButton: 'div.ml-navigation-buttons>button:nth-child(1)',
    nextButton: 'div.ml-navigation-buttons>button:nth-child(2)',
    executeBtn: 'div.ml-navigation-buttons>button:nth-child(2)',
    openResult: 'a.execution-link'
}

const globalLocators = {
    globalExecute: 'button.ml-execute-button',
    modelType: 'div.ml-form-container>label:nth-child(2)>select',
    modelName: 'div.ml-form-container>label:nth-child(3)>select',
    nextBtn: 'button.ml-navigation-fwd-buttons',
    backBtn: 'button.ml-navigation-back-buttons',
    modelHeader: 'div.ml-form-container>h2'

}

const MLAIInfo = {
    tin: '02538542',
    sectorValue: 'G46.90',
    clusteringYear: '2024',
    subCategory: 'Կաթ',
    brand: 'Parmalat',
    modeltype1: 'Analytical',
    modeltype2: 'Unsupervised',
    modeltype3: 'Supervised',
    modelName1: 'product_tracing',//'Product Tracing Model',
    modelName2: 'clustering_model', //'Taxpayer Clustering and Outlier Detection Model',
    modelName3: 'time_series_model',//'Anomaly Detection in Time Series Data',
    modelName4: 'complex_model',//'Complex Tax Inspection Model'

}

export {openSystem, taxInspectionLocators, clusteringLocators, MLAIInfo, tracingLocators, anomalyLocators, globalLocators};