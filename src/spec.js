const { sum } = require ('../sum.js')

describe('My Test Suite', () => {
    it('My Test Case', () => {
      expect(true).toEqual(true);
    });
    it('My Test Case 1', () => {
        expect(true).toEqual(true);
      });
  });

  describe('Calculator Test Case', () =>{
    it('sum of two numbers case 1', ()=>{
        expect(sum(2, 6)).toEqual(8)
    })
    // it('sum of two numbers case 2', ()=>{
    //     expect(sum(2, 6)).toEqual(4)
    // })
    it('sum of two numbers case 3', ()=>{
        expect(sum(1, 6)).toEqual(7)
    })
    it('sum of two numbers case 4', ()=>{
        expect(sum(1, 2)).toEqual(3)
    })
    it('sum of two numbers case 5', ()=>{
        expect(sum(5, 5)).toEqual(10)
    })
    // it('sum of two numbers case 6', ()=>{
    //     expect(sum(5, 5)).toEqual(11)
    // })
    it('sum of two numbers case 7', ()=>{
        expect(sum(5, 6)).toEqual(11)
    })
    it('sum of two numbers case 8', ()=>{
        expect(sum(5, 7)).toEqual(13)
    })
  })