 // variables
 let my_currency = {
    toDollar: function(repees)
    {
        let dollar = repees/92;
        return dollar;
    },

    toEuro : function(repees)
    {
        let euro = repees/100;
        return euro;
    },

    toPound : function(repees)
    {
        let pound = repees/120;
        return pound;
    }
}

// export the module
module.exports = my_currency;