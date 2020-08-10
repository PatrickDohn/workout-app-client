const store = require('../store')
const workoutDisplayTemplate = require('../templates/workouts.handlebars')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed')
}

const signInSuccess = function (response) {
  $('#message').text('Welcome back!')
  store.user = response.user
  console.log(store.user)
  $('.authenticated').show()
  $('.unauthenticated').hide()
}
const signInFail = function () {
  $('#message').text('Sign in failed')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password!')
}

const changePasswordFail = function () {
  $('#message').text('Password change failed')
}

const signOutSuccess = function () {
  $('#message').text('Signed out success!')
  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const signOutFail = function () {
  $('#message').text('Signed out fail')
}

const saveWorkoutSuccess = function (response) {
  $('#msg').text('Workout added')
  store.workout = response.workout
  console.log(store.workout)
  console.log(store.workout)
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}

const showWorkoutsSuccess = (response) => {
  console.log(response)
  const showAllWorkouts = workoutDisplayTemplate({ workouts: response.workouts })
  $('.content').empty()
  $('.content').append(showAllWorkouts)
  $('.content').show()
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFail: signInFail,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFail: changePasswordFail,
  signOutSuccess: signOutSuccess,
  signOutFail: signOutFail,
  saveWorkoutSuccess: saveWorkoutSuccess,
  showWorkoutsSuccess: showWorkoutsSuccess
}
