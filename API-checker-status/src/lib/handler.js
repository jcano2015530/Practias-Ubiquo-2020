
var DataBaseValidator = {
    validateCarrier: (carrier) => {
        if (
            carrier != 'clarogt'
            && carrier != 'clarocr'
            && carrier != 'claroni'
            && carrier != 'clarosv'
            && carrier != 'clarohn'
            && carrier != 'tigogtv3'
            && carrier != 'tigohnv3'
            && carrier != 'tigogtv4'
            && carrier != 'reach'
        ) {
            console.log('invalid carrier', carrier)
            return false
        } else {
            console.log('valid carrier: ', carrier)
            return true
        }
    },
    dbSelector: (carrier) => {
        if (carrier == 'clarogt') {
            var db = dbclarogt;
        }
        if (carrier == 'clarocr') {
            var db = dbclarocr;
        }
        if (carrier == 'claroni') {
            var db = dbclaroni;
        }
        if (carrier == 'clarohn') {
            var db = dbclarohn;
        }
        if (carrier == 'clarosv') {
            var db = dbclarosv;
        }
        if (carrier == 'tigogtv3') {
            var db = dbtigogtv3;
        }
        if (carrier == 'tigohnv3') {
            var db = dbtigohnv3;
        }
        if (carrier == 'tigogtv4') {
            var db = dbtigogtv4;
        }
        if (carrier == 'reach') {
            var db = dbreach;
        }
        console.log(carrier)
        return db
    }
}

module.exports = DataBaseValidator