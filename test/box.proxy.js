const { expect } = require('chai');

let Box
let box

//start test block
describe('Box (proxy)', function() {

    beforeEach(async function () {
        Box = await ethers.getContractFactory("Box")
        box = await upgrades.deployProxy(Box, [42],{ initializer: 'store' })
    }) 

    it('retrieve returns a value previously initialized', async function (){
        //test is the returned value is thesame one
        //note that we need to use strings to compare the 256 bit integers
        expect((await box.retrieve()).toString()).to.equal('42')

    })

})

