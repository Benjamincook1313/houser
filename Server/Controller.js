
module.exports = {
  getAllHouses: async (req, res) => {
    const houses = await req.app.get('db').get_all_houses()
       res.status(200).send(houses)
  },

  createHouse: async (req, res) => {
    const { name, address, city, state, zip} = req.body
    const newHouse = await req.app.get('db').create_house(name, address, city, state, zip)
    res.status(200).send(newHouse)
  },

  deleteHouse: async (req, res) => {
    const { id } = req.params
    const deleteHouse = await req.app.get('db').delete_house(id)
      res.status(200).send('House has been deleted')
  }
}