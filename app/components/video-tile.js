import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['rating:desc'],
  sortedVideos: Ember.computed.sort('model.videos','sortBy'),

  model(params) {
    return this.store.findRecord('video', params.video_id);
  },
  actions: {
    thumbupClicked(video){
      var rating = video.get ('rating');
      console.log (typeof (rating) );

      if (typeof (rating) === 'string') {
      var n = parseInt(video.get('rating'));
      n = n + 1;
      video.set('rating', n); //force rating to number now
    }

      else {
      var m = video.get('rating');
      m = m+1;
      video.set('rating', m);
      }

      video.save();

    },
    delete(video) {
        if (confirm('Are you sure you want to delete this challenge?')){
          video.destroyRecord();
            this.transitionTo('/challenge/:challenge_id');
        }
      }

  }
});
