var stock = angular.module('stock',["ngSanitize", "ngCsv"]);


stock.controller('StockCtrl', function($scope, $http){
 
    
   
    
    $scope.stock1    = "";
    $scope.getArray  = [];
    $scope.getArray2 = [];
    $scope.getArray3 = [];
    $scope.mySubmit  = function(){
 
     
        $http.get("http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in('"+ $scope.stock1+"')&env=http://datatables.org/alltables.env&format=json")
            .success(function(response){
                $scope.data = response;
                 
//                for(var object in response.query.results.quote){
//                    $scope.getArray.push([object,response.query.results.quote[object]]);}
            
      $scope.getArray.push(['Previous Close',response.query.results.quote.PreviousClose]);
      $scope.getArray.push(['Open',response.query.results.quote.Open]);
      $scope.getArray.push(['Bid',response.query.results.quote.Bid]);
      $scope.getArray.push(['Ask',response.query.results.quote.Ask]);
      $scope.getArray.push(['1 Year Target Estimate',response.query.results.quote.OneyrTargetPrice]);
      $scope.getArray.push(['Beta',response.query.results.quote.EBITDA]);
      $scope.getArray.push(['Earnings Date',response.query.results.quote.ExDividendDate]);
      $scope.getArray.push(['Days Range',response.query.results.quote.DaysRange]);
      $scope.getArray.push(['52 Week Range',response.query.results.quote.YearRange]);
      $scope.getArray.push(['Volume',response.query.results.quote.Volume]);
      $scope.getArray.push(['Average Volume',response.query.results.quote.AverageDailyVolume]);
      $scope.getArray.push(['Market Cap',response.query.results.quote.MarketCapitalization]);
      $scope.getArray.push(['P/E',response.query.results.quote.PERatio]);
      $scope.getArray.push(['EPS',response.query.results.quote.PriceEPSEstimateNextYear]);
      $scope.getArray.push(['Dividend & Yield',response.query.results.quote.DividendYield]); 
                    });
    };
    $scope.mySubmit2 = function(){
        
      
    }
     $scope.mySubmit3 = function(){
        
        alert('No Data Available ! ')
    }
    
    
     
    });