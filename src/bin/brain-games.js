#!/usr/bin/env node
import { questWhatYourName , start} from '../index.js';
import brainEven from './games/brain-even.js';
import brainCalc from './games/brain-calc.js';

// выбор игры с возвратом результата
start(brainEven);
start(brainCalc);
