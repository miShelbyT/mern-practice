const asyncHandler = require('express-async-handler')

// @desc  get goals
// @route GET /api/goals
// @access Private (after we have auth)
const getGoals = asyncHandler(async (req, resp) => {
  resp.status(200).json({ message: 'Get goals!' })
})

// @desc  add (or set) a goal
// @route POST /api/goals
// @access Private (after we have auth)
const setGoal = asyncHandler(async (req, resp) => {
  if (!req.body.text) {
    resp.status(400)
    throw new Error('Please add a text field')
  }
  resp.status(200).json({ message: 'Goal set' })
})

// @desc  update goal
// @route PUT /api/goals/:id
// @access Private (after we have auth)
const updateGoal = asyncHandler(async (req, resp) => {
  resp.status(200).json({ message: `Updated goal #${req.params.id}!` })
  //we can't just pass id. we have to get it from the request object.
})

// @desc  delete goal
// @route DELETE /api/goals/:id
// @access Private (after we have auth)
const deleteGoal = asyncHandler(async (req, resp) => {
  resp.status(200).json({ message: `Bye bye #${req.params.id}!` })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
