const chai = require('chai')
const expect = chai.expect
const ShineDemo = require('../lib/shine-demo')

var demo = new ShineDemo()

describe('ShineDemo',function(){
    it('给汽车引擎加水是不能接受的事情',function(){
        expect(function(){
            demo.engine('water')
        }).to.throw('not accept')
    })

    // it('加载豆瓣API返回的内容里应该包含subjects属性',function(done){
    //     demo.fetchData('top250',function(data){
    //         expect(data).to.have.property('subjects')
    //         done()
    //     })
    // })

    // this.timeout(5000)

    // it('一段时间以后返回数据',function(done){
    //     demo.waitTwoSecond('hello',function(data){
    //         expect(data).to.equal('您好')
    //         done()
    //     })
    // })

    // it('单价是10块钱的3件商品小计金额应该是30块',function(){
    //     var subtotal = demo.subtotal(10,3)
    //     expect(subtotal).to.equal(30)
    // })
})