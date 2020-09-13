const upload = async (req, res) => {
  const img = req.file
  const name = img.originalname
  const path = '/photos/' + name
  try {
    res.status(201).send({ imageUrl: path })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

module.exports = {
  upload
}