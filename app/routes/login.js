import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      var controller = this.get('controller');
      var email = controller.get('userEmail');
      var password = controller.get('userPassword');
        this.get('session').open('firebase', {
             provider: 'password',
             email: email,
             password: password
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      }).then(function() {
            this.transitionTo('index');
        }.bind(this));
    }
  }
});
