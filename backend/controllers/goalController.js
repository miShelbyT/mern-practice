const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc  get goals
// @route GET /api/goals
// @access Private (after we have auth)
const getGoals = asyncHandler(async (req, resp) => {
  const goals = await Goal.find()
  resp.status(200).json(goals)
})

// @desc  add (or set) a goal
// @route POST /api/goals
// @access Private (after we have auth)
const setGoal = asyncHandler(async (req, resp) => {
  if (!req.body.text) {
    resp.status(400)
    throw new Error('Please add a text field')
  }
  const goal = await Goal.create({
    text: req.body.text
  })
  resp.status(200).json(goal)
})

// @desc  update goal
// @route PUT /api/goals/:id
// @access Private (after we have auth)
const updateGoal = asyncHandler(async (req, resp) => {
  const goal = await Goal.findById(req.params.id)
  if(!goal) {
    resp.status(400)
    throw new Error('Goal not found')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
  resp.status(200).json(updatedGoal)
  //we can't just pass id. we have to get it from the request object.
})

// @desc  delete goal
// @route DELETE /api/goals/:id
// @access Private (after we have auth)
const deleteGoal = asyncHandler(async (req, resp) => {
  const goal = await Goal.findById(req.params.id)
  if(!goal) {
    resp.status(400)
    throw new Error('OOPS Goal not found')
  }
  await goal.remove()
  resp.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
