describe('/GET colors', () => {
  it('it should GET all the colors', (done) => {
    chai.request(server)
      .get('/colors').end((errs, res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body.data).to.be.an('array')
        expect(res.body.data[0]).to.have.any.keys(['names'])
        done()
      })
  })
})
