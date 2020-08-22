const store = require('../store')
const workoutDisplayTemplate = require('../templates/workouts.handlebars')

const signUpSuccess = function () {
  $('.signUpMsg').text('Sign up successful!').fadeIn(3000, function () {
    $('.signUpMsg').fadeOut(3000)
  })
}

const signUpFailure = function () {
  $('#message').text('Sign up failed')
}

const signInSuccess = function (response) {
  $('#userMessage').text('Welcome back!').fadeIn(30, function () {
    $('#userMessage').fadeOut(3000)
  })
  $('.btnText').show()
  store.user = response.user
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.collapse').collapse('hide')
}
const signInFail = function () {
  $('#userMessage').text('Username or password was invalid').fadeIn(300, function () {
    $('#userMessage').fadeOut(3000)
  })
}

const changePasswordSuccess = function () {
  $('#authMessage').text('Successfully changed password').fadeIn(30, function () {
    $('#authMessage').fadeOut(3000)
  })
}

const changePasswordFail = function () {
  $('#authMessage').text('Something went wrong').fadeIn(30, function () {
    $('#authMessage').fadeOut(3000)
  })
}

const signOutSuccess = function () {
  $('#userMessage').text('See ya later!').fadeIn(30, function () {
    $('#userMessage').fadeOut(3000)
  })
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.collapse').collapse('hide')
}

const signOutFail = function () {
  $('#userMessage').text('Signed out fail')
}

const saveWorkoutSuccess = function (response) {
  store.workout = response.workout
  $('.workoutCreated').text('Workout has been saved!').fadeIn(30, function () {
    $('.workoutCreated').fadeOut(3000)
  })
}

const showWorkoutsSuccess = (response) => {
  const showAllWorkouts = workoutDisplayTemplate({ workouts: response.workouts })
  $('.content').empty()
  $('.content').append(showAllWorkouts)
  $('.content').show()
  if (response.workouts.length === 0) {
    $('.logMessage').text('No workouts yet, lets get lifting!').fadeIn(30, function () {
      $('.logMessage').fadeOut(3000)
    })
  }
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
