const express = require('express');
var { Event } = require('../models/event');

exports.getProfiles = async (req, res) => {
  const events = await Event.find();
  res.send(events);
};

exports.postProfile = async (req, res) => {
  console.log("request",req.body);
  const name = req.body.name;
  const place= req.body.place;
  const organizer=req.body.organizer;
  const contact= req.body.contact;
  const picker=req.body.picker;
  const poster = 'http://localhost:3000/images/' + req.file.filename; // Note: set path dynamically
  const event = new Event({
    name,
    place,
    organizer,
    contact,
    poster,
    picker
  });
  const createdEvent = await event.save();
  res.status(201).json({
    event: {
      ...createdEvent._doc,
    },
  });
};
