import {taxInspectionLocators, MLAIInfo, clusteringLocators, openSystem, tracingLocators, anomalyLocators, globalLocators } from "./ML-Locators";

class executeModels{
    open(){
        cy.get(openSystem.MLAISystem).click()
    }

    taxInspectionModel(){
        cy.get(taxInspectionLocators.executeModel).click();
        cy.get(taxInspectionLocators.tin).type(MLAIInfo.tin);
        cy.get(taxInspectionLocators.fieldYear).select('2023');
        //cy.get(taxInspectionLocators.selectYear).click();
        cy.get(taxInspectionLocators.nextButton).click();
        cy.get(taxInspectionLocators.executeBtn).click();
        cy.wait(19000);

        cy.get(taxInspectionLocators.openResult).invoke('attr', 'href').then((url) => {
            cy.visit('http://dmas.daniam.am/complex-audit?modelCode=complex_model'); 
            cy.wait(10000);
            cy.get(taxInspectionLocators.complexModel).should('exist');
        });
        
    }

    clusteringModel(){
        cy.get(clusteringLocators.executeModel).click();
        cy.get(clusteringLocators.sectorField).select(MLAIInfo.sectorValue);
        cy.get(clusteringLocators.yearField).select(MLAIInfo.clusteringYear);
        cy.get(clusteringLocators.clusterField).select('7')
        //cy.get(taxInspectionLocators.selectYear).click();
        cy.get(clusteringLocators.nextButton).click();
        cy.get(clusteringLocators.executeBtn).click();
        cy.wait(10000);

        cy.get(clusteringLocators.openResult).invoke('attr', 'href').then((url) => {
            cy.visit('http://dmas.daniam.am/clustering?modelCode=clustering_model'); 
            cy.wait(7000);
            cy.get(clusteringLocators.clusteringResult).should('exist');
        });
        
    }

    tracingModel(){
        cy.get(tracingLocators.executeModel).click();
        cy.get(tracingLocators.tinField).type(MLAIInfo.tin);
        cy.get(tracingLocators.subCategory).type(MLAIInfo.subCategory);
        cy.get(tracingLocators.brandField).type(MLAIInfo.brand);
        //cy.get(tracingLocators.threshold).type();
        cy.get(tracingLocators.nextButton).click();
        cy.get(tracingLocators.executeBtn).click();
        cy.wait(10000);

        cy.get(clusteringLocators.openResult).invoke('attr', 'href').then((url) => {
            cy.visit('http://dmas.daniam.am/product-tracing?modelCode=product-tracing'); 
            cy.wait(7000);
            cy.get(tracingLocators.tracingResult).should('exist');
        });
        
    }

    anomalyModel(){
        cy.get(anomalyLocators.executeModel).click();
        cy.get(anomalyLocators.tinField).type(MLAIInfo.tin);
        cy.get(anomalyLocators.receiptDate).click();
        cy.get(anomalyLocators.last30Days).click();
        //cy.get(anomalyLocators.last3Months).click();
        //cy.get(anomalyLocators.last6Months).click();
        //cy.get(anomalyLocators.last12Months).click();
        //cy.get(anomalyLocators.last2Years).click();
        //cy.get(anomalyLocators.last3Years).click();
        cy.get(anomalyLocators.applyBtn).click();
        cy.get(tracingLocators.nextButton).click();
        cy.get(tracingLocators.executeBtn).click();
        cy.wait(10000);
        cy.get(tracingLocators.openResult).should('exist');

       /* cy.get(clusteringLocators.openResult).invoke('attr', 'href').then((url) => {
            cy.visit('http://dmas.daniam.am/product-tracing?modelCode=product-tracing'); 
            cy.wait(7000);
            cy.get(tracingLocators.tracingResult).should('exist');
        }); */
        
    }

}

class globalExecute{
    open(){
        cy.get(openSystem.MLAISystem).click()
    }

    selectModel(modelType, modelName) {
        cy.get(globalLocators.modelType).select(modelType);
        cy.get(globalLocators.modelName).select(modelName);
        cy.get(globalLocators.nextBtn).click();
    }

    globalExecution(){
        
        // First Execution
        cy.get(globalLocators.globalExecute).click();
        this.selectModel(MLAIInfo.modeltype1, MLAIInfo.modelName1);
        cy.get(globalLocators.modelHeader).should('contain', 'Product Tracing Model');
        cy.get(globalLocators.backBtn).click();

        // Second Execution
        this.selectModel(MLAIInfo.modeltype2, MLAIInfo.modelName2);
        cy.get(globalLocators.modelHeader).should('contain', 'Taxpayer Clustering and Outlier Detection Model');
        cy.get(globalLocators.backBtn).click();

        // Third Execution
        this.selectModel(MLAIInfo.modeltype2, MLAIInfo.modelName3);
        cy.get(globalLocators.modelHeader).should('contain', 'Anomaly Detection in Time Series Data');
        cy.get(globalLocators.backBtn).click();

        // Fourth Execution
        this.selectModel(MLAIInfo.modeltype3, MLAIInfo.modelName4);
        cy.get(globalLocators.modelHeader).should('contain', 'Complex Tax Inspection Model');
        cy.get(globalLocators.backBtn).click();
   
        
    }

}


export {executeModels, globalExecute};