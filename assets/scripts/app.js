'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.heading-img').attr('draggable', false)

  // workouts
  $(function () {
    $('#newWorkout').on('click', authEvents.onNewWorkout, function () {
      $('#saveWorkout').slideToggle(300)
      $('.workoutForm').show()
      $('.content').empty()
    })
  })
  $('#saveWorkout').on('submit', authEvents.onSaveWorkout)
  $('#showWorkouts').on('click', authEvents.onShowWorkouts)
  $('.content').on('click', '.delete-btn', authEvents.onDeleteWorkout)
  $('.content').on('submit', '.updateWorkout', authEvents.onUpdateWorkouts)
})
