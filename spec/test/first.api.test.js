const request = require("supertest");
const assert = require('chai').assert
// https://pokeapi.co/docs/v2

describe('First simple api test-suite', function(){

    it('first api test-case', async function(){
    
        const response = await request('https://pokeapi.co')  
            .get('/api/v2/ability')
            .query({
                limit: 20,
                offset: 20
                })
        
        assert.equal(response.statusCode, 200, 'Ошибка статус кода')
             
    })
})
