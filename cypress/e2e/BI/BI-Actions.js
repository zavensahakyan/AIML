import { salesDataRegion, salesDataInfo, salesProductData, salesProductInfo } from "./BI-Locators"

class dataRegion{
    open(){
        
        cy.get(salesDataRegion.BISystem).click()
    }

    filterValue(){
        
        cy.get(salesDataRegion.regionDashboard).should("have.attr", "href").then((url) => {
            cy.origin("http://192.168.150.222:5173/", { args: { locators: salesDataRegion, info: salesDataInfo} }, ({locators, info}) => {
                cy.visit('http://192.168.150.222:5173/');
                //Positive Test
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);
                cy.get(locators.minValue).type(info.minValue);
                cy.get(locators.maxValue).type(info.maxValue);
                cy.get(locators.submitBtn).click();
                cy.wait(5000);
                cy.get(locators.circle1).should('exist');
                cy.get(locators.circle2).should('exist');
                cy.get(locators.statistic).should('exist');
                cy.get(locators.map).should('exist');
                
                //Negative Test
                cy.get(locators.cancellBtn).click();
                cy.wait(2000);
                //cy.get(locators.startDate).type(info.startDate);
                //cy.get(locators.endDate).type(info.endDate);
                cy.get(locators.minValue).type(info.wrongMin);
                cy.get(locators.maxValue).type(info.wrongMax);
                cy.get(locators.submitBtn).click();
                cy.wait(7000);
                cy.log('🔹 ASSERTION: NEGATIVE CASE');
                cy.get(locators.circle1).should('not.exist');
                cy.get(locators.circle2).should('not.exist');
                cy.get(locators.statistic).should('not.exist');
            }); 
        });
    }; 
    
    tinAtg(){
        
        cy.get(salesDataRegion.regionDashboard).should("have.attr", "href").then((url) => {            
            cy.origin("http://192.168.150.222:5173/", { args: { locators: salesDataRegion, info: salesDataInfo} }, ({locators, info}) => {
                cy.visit('http://192.168.150.222:5173/');
                //Positive Test
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);             
                cy.get(locators.tin).type(info.tin);
                cy.get(locators.ATGCode).type(info.ATGCode);
                cy.get(locators.submitBtn).click();
                cy.wait(7000);
                cy.get(locators.circle1).should('exist');
                cy.get(locators.circle2).should('exist');
                cy.get(locators.statistic).should('exist');
                cy.get(locators.map).should('exist');
                
                //Negative Test
                cy.get(locators.cancellBtn).click();
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);
                cy.get(locators.tin).type(info.wrongTin);
                cy.get(locators.ATGCode).type(info.wrongATG);
                cy.get(locators.submitBtn).click();
                cy.wait(7000);
                cy.log('🔹 ASSERTION: NEGATIVE CASE');
                cy.get(locators.circle1).should('not.exist');
                cy.get(locators.circle2).should('not.exist');
                cy.get(locators.statistic).should('not.exist');

            }); 
        }); 
    }; 

    brandSubcategory(){
        
        cy.get(salesDataRegion.regionDashboard).should("have.attr", "href").then((url) => {   
            cy.origin("http://192.168.150.222:5173/", { args: { locators: salesDataRegion, info: salesDataInfo} }, ({locators, info}) => {
                cy.visit('http://192.168.150.222:5173/');
                //Positive Test
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);
                cy.get(locators.brand).type(info.brand, { timeout: 2000 });
                cy.get(locators.selectGallo).click();
                cy.get(locators.subCategory).type(info.subCategory, { timeout: 2000 });
                cy.get(locators.selectBrindz).click();
                cy.get(locators.submitBtn).click();
                cy.get(locators.circle1).should('exist');
                cy.get(locators.circle2).should('exist');
                cy.get(locators.statistic).should('exist');
                cy.get(locators.map).should('exist');
               
                //Negative Test
                cy.get(locators.cancellBtn).click();
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);
                cy.get(locators.brand).type(info.wrongBrand);
                cy.get(locators.subCategory).type(info.wrongSub);
                cy.get(locators.submitBtn).click();
                cy.wait(7000);
                cy.log('🔹 ASSERTION: NEGATIVE CASE');
                cy.get(locators.circle1).should('not.exist');
                cy.get(locators.circle2).should('not.exist');
                cy.get(locators.statistic).should('not.exist');
                

            });
        });
    };

    filterAnvanum(){

        cy.get(salesDataRegion.regionDashboard).should("have.attr", "href").then((url) => {   
            cy.origin("http://192.168.150.222:5173/", { args: { locators: salesDataRegion, info: salesDataInfo} }, ({locators, info}) => {
                cy.visit('http://192.168.150.222:5173/');
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);
                cy.get(locators.anvanum).type(info.anvanum);
                cy.get(locators.submitBtn).click();
                cy.wait(7000);
                cy.get(locators.circle1).should('exist');
                cy.get(locators.circle2).should('exist');
                cy.get(locators.statistic).should('exist');
                cy.get(locators.map).should('exist');

                /* Wrong request
                cy.get(locators.circle1).should('not.exist');
                cy.get(locators.circle2).should('not.exist');
                cy.get(locators.statistic).should('not.exist');
                */

            });            
        });
    };

      
}

class productData{
    open(){
        
        cy.get(salesProductData.BISystem).click()
    }

    filterValue(){
        
        cy.get(salesProductData.productSalesDashboard).then((url) => {
            cy.origin("http://192.168.150.222:5055/", { args: { locators: salesProductData, info: salesProductInfo} }, ({locators, info}) => {
                cy.visit('http://192.168.150.222:5055/');
                //Positive Test
                cy.wait(7000);
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);
                cy.get(locators.minValue).type(info.minValue);
                cy.get(locators.maxValue).type(info.maxValue);
                cy.get(locators.submitBtn).click();
                cy.wait(7000);
                cy.get(locators.amenatank).should('exist');
                cy.get(locators.amenavacharvac).should('exist');
                cy.get(locators.map).should('exist');
                cy.get(locators.productTable).should('exist');

                //Negative Test
                cy.get(locators.cancellBtn).click();
                cy.wait(7000);
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);
                cy.get(locators.minValue).type(info.wrongMin);
                cy.get(locators.maxValue).type(info.wrongMax);
                cy.get(locators.submitBtn).click();
                cy.wait(7000);   
                cy.log('🔹 ASSERTION: NEGATIVE CASE');
                cy.get('div:nth-child(1) > p').should('contain', 'Սխալ:');
                cy.get('div:nth-child(2) > p').should('contain', 'Սխալ:'); //Սխալ գրաֆիկների տվյալները բեռնելիս
                cy.get('div[style = "color: red;"]').should('contain', 'Քարտեզի սխալ:'); // Քարտեզի սխալ հարցում: Internal Server Error
                
          
            }); 
        });
    }; 

    tinCrn(){
        
        cy.get(salesProductData.productSalesDashboard).then((url) => {            
            cy.origin("http://192.168.150.222:5055/", { args: { locators: salesProductData, info: salesProductInfo} }, ({locators, info}) => {
                cy.visit('http://192.168.150.222:5055/');
                //Positive Test
                cy.wait(7000);
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);         
                cy.get(locators.tin).type(info.tin);
                cy.get(locators.crn).type(info.crn);
                cy.get(locators.submitBtn).click();
                cy.wait(10000);
                cy.get(locators.amenatank).should('exist');  
                cy.get(locators.amenavacharvac).should('exist');
                cy.get(locators.map).should('exist');
                cy.get(locators.productTable).should('exist');
                
                //Negative Test
                cy.get(locators.cancellBtn).click();
                cy.wait(10000);
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);         
                cy.get(locators.tin).type(info.wrongTin);
                cy.get(locators.crn).type(info.wrongCRN);
                cy.get(locators.submitBtn).click();
                cy.wait(10000);
                cy.log('🔹 ASSERTION: NEGATIVE CASE');
                cy.get('div:nth-child(1) > p').should('contain', 'Սխալ:');
                cy.get('div:nth-child(2) > p').should('contain', 'Սխալ: Սխալ գրաֆիկների տվյալները բեռնելիս');
                cy.get('div[style = "color: red;"]').should('contain', 'Քարտեզի սխալ: Քարտեզի սխալ հարցում: Internal Server Error');
                
            }); 
        }); 
    }; 

    brandSubcategory(){
        
        cy.get(salesProductData.productSalesDashboard).then((url) => {            
            cy.origin("http://192.168.150.222:5055/", { args: { locators: salesProductData, info: salesProductInfo} }, ({locators, info}) => {
                cy.visit('http://192.168.150.222:5055/');
                //Positive Test
                cy.wait(7000);
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);         
                cy.get(locators.brand).type(info.brand, { timeout: 2000 });
                cy.get(locators.selectWinston).click();
                cy.get(locators.subCategory).type(info.subCategory, { timeout: 2000 });
                cy.get(locators.selectCxaxot).click();
                cy.get(locators.submitBtn).click();
                cy.wait(10000);
                cy.get(locators.amenatank).should('exist');  
                cy.get(locators.amenavacharvac).should('exist');
                cy.get(locators.map).should('exist');
                cy.get(locators.productTable).should('exist');

                //Negative Test
                cy.get(locators.cancellBtn).click();
                cy.wait(7000);
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);         
                cy.get(locators.brand).type(info.wrongBrand);
                cy.get(locators.subCategory).type(info.wrongSub);
                cy.get(locators.submitBtn).click();
                cy.wait(10000);
                cy.log('🔹 ASSERTION: NEGATIVE CASE');
                cy.get('div:nth-child(1) > p').should('contain', 'Սխալ:');
                cy.get('div:nth-child(2) > p').should('contain', 'Սխալ: Սխալ գրաֆիկների տվյալները բեռնելիս');
                cy.get('div[style = "color: red;"]').should('contain', 'Քարտեզի սխալ: Քարտեզի սխալ հարցում: Internal Server Error');  
            }); 
        }); 
    }; 


    filterAnvanum(){
        
        cy.get(salesProductData.productSalesDashboard).then((url) => {            
            cy.origin("http://192.168.150.222:5055/", { args: { locators: salesProductData, info: salesProductInfo} }, ({locators, info}) => {
                cy.visit('http://192.168.150.222:5055/');
                //Positive Test
                cy.wait(7000);
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);         
                cy.get(locators.anvanum).type(info.anvanum);
                cy.get(locators.submitBtn).click();
                cy.wait(10000);
                cy.log('🔹 ASSERTION: NEGATIVE CASE');
                cy.get(locators.amenatank).should('exist');  
                cy.get(locators.amenavacharvac).should('exist');
                cy.get(locators.map).should('exist');
                cy.get(locators.productTable).should('exist');

                //Negative Test
                cy.get(locators.cancellBtn).click();
                cy.wait(7000);
                cy.get(locators.startDate).type(info.startDate);
                cy.get(locators.endDate).type(info.endDate);         
                cy.get(locators.anvanum).type(info.wrongAnvanum);
                cy.get(locators.submitBtn).click();
                cy.wait(10000);
                cy.log('🔹 ASSERTION: NEGATIVE CASE');
                cy.get('div:nth-child(1) > p').should('contain', 'Սխալ:');
                cy.get('div:nth-child(2) > p').should('contain', 'Սխալ: Սխալ գրաֆիկների տվյալները բեռնելիս');
                cy.get('div[style = "color: red;"]').should('contain', 'Քարտեզի սխալ: Քարտեզի սխալ հարցում: Internal Server Error');
                   
            }); 
        }); 
    }; 

}

export {dataRegion, productData};
