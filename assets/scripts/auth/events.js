
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  $('form').trigger('reset')
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  $('form').trigger('reset')
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  $('form').trigger('reset')
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  $('form').trigger('reset')
  $('.content').empty()
  $('.btnText').hide()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const onSaveWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  $('form').trigger('reset')
  api.saveWorkout(formData)
    .then(ui.saveWorkoutSuccess)
    .catch(ui.saveWorkoutFailure)
}
const onShowWorkouts = function (event) {
  event.preventDefault()
  $('.workoutForm').hide()
  api.showWorkouts()
    .then(ui.showWorkoutsSuccess)
    .catch(ui.showWorkoutsFailure)
}
const onNewWorkout = function (event) {
  $('.workoutForm').show()
  $('.content').empty()
}
const onDeleteWorkout = (event) => {
  event.preventDefault()
  const workoutId = $(event.target).data('id')
  api.deleteWorkout(workoutId)
    .then(() => onShowWorkouts(event))
    .catch(ui.showWorkoutFailure)
}

const onUpdateWorkouts = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).closest('section').data('id')
  api.updateWorkout(id, formData)
    .then(() => onShowWorkouts(event))
    .catch(ui.updateWorkoutFailure)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onSaveWorkout: onSaveWorkout,
  onShowWorkouts: onShowWorkouts,
  onNewWorkout: onNewWorkout,
  onDeleteWorkout: onDeleteWorkout,
  onUpdateWorkouts: onUpdateWorkouts
}
