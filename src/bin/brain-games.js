#!/usr/bin/env node
import { questWhatYourName , start} from '../index.js';
import brainEven from './games/brain-even.js';


// выбор игры с возвратом результата
start(brainEven);
