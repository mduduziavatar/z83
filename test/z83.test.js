describe("The Z83 function", function() {
    it("should be able to accept more then one input", function() {
        var item = ApplicationFactory()
        assert.equal("Siphiwemduduzi", item.getNameFromInput("Siphiwe Mduduzi"));
    });
    it("should also accept one input", function() {
        var item = ApplicationFactory()
        assert.equal("Dumela", item.getNameFromInput("Dumela"));
    });
    it("should be able to select different radio buttons without hassle", function() {
        var item = ApplicationFactory()
        assert.equal("African", item.setUser("African"));
    });
    it("should also accept one input", function() {
        var item = ApplicationFactory()
        assert.equal("White", item.setUser("White"));
    });
});