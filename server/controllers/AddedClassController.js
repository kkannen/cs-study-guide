let AddedClass = require("../models/AddedClassModel");

module.exports.read = (request, response) => {
    AddedClass.find({}).exec()
    .then(addedclasses => response.send(addedclasses))
}

module.exports.create = (request, response) => {
    console.log(request.body)
    const newAddedClass = new AddedClass({

        "title": request.body.title,
        "reading": request.body.reading,
        "playlist": request.body.playlist,

    })
    newAddedClass.save()
    .then(savedAddedClass => response.json(savedAddedClass))
}
