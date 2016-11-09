function Isogram(words) {

    Isogram.prototype.isIsogram = function () {

        var hasDuplicates = (/([a-z\u00E0-\u00FC]).*?\1(\w)/i).test(words);
        if (!hasDuplicates) {
            return true;
        }
        return false;
        

    }

};

module.exports = Isogram;