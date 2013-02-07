
fl.outputPanel.clear();

var doc = fl.getDocumentDOM();
var timeline = doc.getTimeline();
var layers = timeline.layers;
var frame = layers[0].frames[0];
var element = frame.elements[0];

if(element.elementType == "instance" && element.instanceType == "symbol" && element.