/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start

/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (costs) => {
  const { length } = costs
  const floors = length + 1
  const minCosts = [0, 0]

  // treat the last item as the top of the floor
  for (let i = 2; i < floors; i++) {
    const takeOneStep = costs[i - 1] + minCosts[i - 1]
    const takeTwoSteps = costs[i - 2] + minCosts[i - 2]
    minCosts[i] = Math.min(takeOneStep, takeTwoSteps)
  }

  return minCosts[floors - 1]
}

// @lc code=end
