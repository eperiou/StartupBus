'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './project.events';

var ProjectSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  createrId: Number,
  buyer: Number,
  price: Number,
  category: String,
  description: String,
  steps: []
});

registerEvents(ProjectSchema);
export default mongoose.model('Project', ProjectSchema);
