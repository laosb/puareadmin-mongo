Meteor.publish('_pa.Mongo.collection', function (collectionName) {
  if(PureAdmin.isAdmin(this.userId) === false) {
    return [];
  }
  return Mongo.Collection.get(collectionName).find();
});

Meteor.publish('_pa.Mongo.document', function (info) {
  if(PureAdmin.isAdmin(this.userId) === false) {
    return [];
  }
  return Mongo.Collection.get(info.collection).find({_id: info.id});
});
