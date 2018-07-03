var assert = require('chai').should();
const {contacts} = require('../app/models/');



describe('test BD', function(){

    before(async function() {
        await contacts.create({id:10,tel:111, user_id: 2})
    });


    it('it should find inserted row', async function(){

        let res = await contacts.findAll({raw:true, where:{tel:111}});

        res.should.have.length(1);

        // delete raw.id;

        //assert.equal(JSON.stringify(raw), JSON.stringify({tel:"111", user_id:2}))
    })
});
