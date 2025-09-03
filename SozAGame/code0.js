gdjs.StartMenuCode = {};
gdjs.StartMenuCode.localVariables = [];
gdjs.StartMenuCode.GDTitelObjects1= [];
gdjs.StartMenuCode.GDTitelObjects2= [];
gdjs.StartMenuCode.GDTitel2Objects1= [];
gdjs.StartMenuCode.GDTitel2Objects2= [];
gdjs.StartMenuCode.GDStartButtonObjects1= [];
gdjs.StartMenuCode.GDStartButtonObjects2= [];
gdjs.StartMenuCode.GDUI_9595ViewObjects1= [];
gdjs.StartMenuCode.GDUI_9595ViewObjects2= [];
gdjs.StartMenuCode.GDControllsObjects1= [];
gdjs.StartMenuCode.GDControllsObjects2= [];
gdjs.StartMenuCode.GDPlayerObjects1= [];
gdjs.StartMenuCode.GDPlayerObjects2= [];
gdjs.StartMenuCode.GDKeysObjects1= [];
gdjs.StartMenuCode.GDKeysObjects2= [];
gdjs.StartMenuCode.GDDescSpaceObjects1= [];
gdjs.StartMenuCode.GDDescSpaceObjects2= [];
gdjs.StartMenuCode.GDDescEObjects1= [];
gdjs.StartMenuCode.GDDescEObjects2= [];
gdjs.StartMenuCode.GDEObjects1= [];
gdjs.StartMenuCode.GDEObjects2= [];
gdjs.StartMenuCode.GDDescFObjects1= [];
gdjs.StartMenuCode.GDDescFObjects2= [];
gdjs.StartMenuCode.GDDescF2Objects1= [];
gdjs.StartMenuCode.GDDescF2Objects2= [];
gdjs.StartMenuCode.GDWeiterButtonObjects1= [];
gdjs.StartMenuCode.GDWeiterButtonObjects2= [];
gdjs.StartMenuCode.GDTransitionObjects1= [];
gdjs.StartMenuCode.GDTransitionObjects2= [];


gdjs.StartMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.StartMenuCode.GDEObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDEObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDEObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 0, 1, 10, 1, true, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartMenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDStartButtonObjects1[k] = gdjs.StartMenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27609668);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (1280), "", 0);
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Overworld");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WeiterButton"), gdjs.StartMenuCode.GDWeiterButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDWeiterButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDWeiterButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDWeiterButtonObjects1[k] = gdjs.StartMenuCode.GDWeiterButtonObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDWeiterButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27605108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartMenuCode.GDStartButtonObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Talk.wav", false, 50, 1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Overworld");
}{for(var i = 0, len = gdjs.StartMenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDStartButtonObjects1[i].removeTimer("StartButtonDelay");
}
}}

}


};

gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenuCode.GDTitelObjects1.length = 0;
gdjs.StartMenuCode.GDTitelObjects2.length = 0;
gdjs.StartMenuCode.GDTitel2Objects1.length = 0;
gdjs.StartMenuCode.GDTitel2Objects2.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects1.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects2.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects1.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects2.length = 0;
gdjs.StartMenuCode.GDControllsObjects1.length = 0;
gdjs.StartMenuCode.GDControllsObjects2.length = 0;
gdjs.StartMenuCode.GDPlayerObjects1.length = 0;
gdjs.StartMenuCode.GDPlayerObjects2.length = 0;
gdjs.StartMenuCode.GDKeysObjects1.length = 0;
gdjs.StartMenuCode.GDKeysObjects2.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects1.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects2.length = 0;
gdjs.StartMenuCode.GDDescEObjects1.length = 0;
gdjs.StartMenuCode.GDDescEObjects2.length = 0;
gdjs.StartMenuCode.GDEObjects1.length = 0;
gdjs.StartMenuCode.GDEObjects2.length = 0;
gdjs.StartMenuCode.GDDescFObjects1.length = 0;
gdjs.StartMenuCode.GDDescFObjects2.length = 0;
gdjs.StartMenuCode.GDDescF2Objects1.length = 0;
gdjs.StartMenuCode.GDDescF2Objects2.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects1.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects2.length = 0;
gdjs.StartMenuCode.GDTransitionObjects1.length = 0;
gdjs.StartMenuCode.GDTransitionObjects2.length = 0;

gdjs.StartMenuCode.eventsList0(runtimeScene);
gdjs.StartMenuCode.GDTitelObjects1.length = 0;
gdjs.StartMenuCode.GDTitelObjects2.length = 0;
gdjs.StartMenuCode.GDTitel2Objects1.length = 0;
gdjs.StartMenuCode.GDTitel2Objects2.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects1.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects2.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects1.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects2.length = 0;
gdjs.StartMenuCode.GDControllsObjects1.length = 0;
gdjs.StartMenuCode.GDControllsObjects2.length = 0;
gdjs.StartMenuCode.GDPlayerObjects1.length = 0;
gdjs.StartMenuCode.GDPlayerObjects2.length = 0;
gdjs.StartMenuCode.GDKeysObjects1.length = 0;
gdjs.StartMenuCode.GDKeysObjects2.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects1.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects2.length = 0;
gdjs.StartMenuCode.GDDescEObjects1.length = 0;
gdjs.StartMenuCode.GDDescEObjects2.length = 0;
gdjs.StartMenuCode.GDEObjects1.length = 0;
gdjs.StartMenuCode.GDEObjects2.length = 0;
gdjs.StartMenuCode.GDDescFObjects1.length = 0;
gdjs.StartMenuCode.GDDescFObjects2.length = 0;
gdjs.StartMenuCode.GDDescF2Objects1.length = 0;
gdjs.StartMenuCode.GDDescF2Objects2.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects1.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects2.length = 0;
gdjs.StartMenuCode.GDTransitionObjects1.length = 0;
gdjs.StartMenuCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
