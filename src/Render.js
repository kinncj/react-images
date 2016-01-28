let Render = function(){};

try {
    Render = require('react-dom').render;
} catch(err) {
    Render = require('react').render;
}

export default Render;