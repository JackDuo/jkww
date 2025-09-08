gdjs.StartMenuCode = {};
gdjs.StartMenuCode.localVariables = [];
gdjs.StartMenuCode.GDTitelObjects1= [];
gdjs.StartMenuCode.GDTitelObjects2= [];
gdjs.StartMenuCode.GDTitelObjects3= [];
gdjs.StartMenuCode.GDTitelObjects4= [];
gdjs.StartMenuCode.GDTitel2Objects1= [];
gdjs.StartMenuCode.GDTitel2Objects2= [];
gdjs.StartMenuCode.GDTitel2Objects3= [];
gdjs.StartMenuCode.GDTitel2Objects4= [];
gdjs.StartMenuCode.GDStartButtonObjects1= [];
gdjs.StartMenuCode.GDStartButtonObjects2= [];
gdjs.StartMenuCode.GDStartButtonObjects3= [];
gdjs.StartMenuCode.GDStartButtonObjects4= [];
gdjs.StartMenuCode.GDUI_9595ViewObjects1= [];
gdjs.StartMenuCode.GDUI_9595ViewObjects2= [];
gdjs.StartMenuCode.GDUI_9595ViewObjects3= [];
gdjs.StartMenuCode.GDUI_9595ViewObjects4= [];
gdjs.StartMenuCode.GDControllsObjects1= [];
gdjs.StartMenuCode.GDControllsObjects2= [];
gdjs.StartMenuCode.GDControllsObjects3= [];
gdjs.StartMenuCode.GDControllsObjects4= [];
gdjs.StartMenuCode.GDPlayerObjects1= [];
gdjs.StartMenuCode.GDPlayerObjects2= [];
gdjs.StartMenuCode.GDPlayerObjects3= [];
gdjs.StartMenuCode.GDPlayerObjects4= [];
gdjs.StartMenuCode.GDKeysObjects1= [];
gdjs.StartMenuCode.GDKeysObjects2= [];
gdjs.StartMenuCode.GDKeysObjects3= [];
gdjs.StartMenuCode.GDKeysObjects4= [];
gdjs.StartMenuCode.GDDescSpaceObjects1= [];
gdjs.StartMenuCode.GDDescSpaceObjects2= [];
gdjs.StartMenuCode.GDDescSpaceObjects3= [];
gdjs.StartMenuCode.GDDescSpaceObjects4= [];
gdjs.StartMenuCode.GDDescEObjects1= [];
gdjs.StartMenuCode.GDDescEObjects2= [];
gdjs.StartMenuCode.GDDescEObjects3= [];
gdjs.StartMenuCode.GDDescEObjects4= [];
gdjs.StartMenuCode.GDEObjects1= [];
gdjs.StartMenuCode.GDEObjects2= [];
gdjs.StartMenuCode.GDEObjects3= [];
gdjs.StartMenuCode.GDEObjects4= [];
gdjs.StartMenuCode.GDDescFObjects1= [];
gdjs.StartMenuCode.GDDescFObjects2= [];
gdjs.StartMenuCode.GDDescFObjects3= [];
gdjs.StartMenuCode.GDDescFObjects4= [];
gdjs.StartMenuCode.GDDescF2Objects1= [];
gdjs.StartMenuCode.GDDescF2Objects2= [];
gdjs.StartMenuCode.GDDescF2Objects3= [];
gdjs.StartMenuCode.GDDescF2Objects4= [];
gdjs.StartMenuCode.GDWeiterButtonObjects1= [];
gdjs.StartMenuCode.GDWeiterButtonObjects2= [];
gdjs.StartMenuCode.GDWeiterButtonObjects3= [];
gdjs.StartMenuCode.GDWeiterButtonObjects4= [];
gdjs.StartMenuCode.GDWeiterIntroButtonObjects1= [];
gdjs.StartMenuCode.GDWeiterIntroButtonObjects2= [];
gdjs.StartMenuCode.GDWeiterIntroButtonObjects3= [];
gdjs.StartMenuCode.GDWeiterIntroButtonObjects4= [];
gdjs.StartMenuCode.GDIntroHeadlineObjects1= [];
gdjs.StartMenuCode.GDIntroHeadlineObjects2= [];
gdjs.StartMenuCode.GDIntroHeadlineObjects3= [];
gdjs.StartMenuCode.GDIntroHeadlineObjects4= [];
gdjs.StartMenuCode.GDIntroTextObjects1= [];
gdjs.StartMenuCode.GDIntroTextObjects2= [];
gdjs.StartMenuCode.GDIntroTextObjects3= [];
gdjs.StartMenuCode.GDIntroTextObjects4= [];
gdjs.StartMenuCode.GDSpaceKeyObjects1= [];
gdjs.StartMenuCode.GDSpaceKeyObjects2= [];
gdjs.StartMenuCode.GDSpaceKeyObjects3= [];
gdjs.StartMenuCode.GDSpaceKeyObjects4= [];
gdjs.StartMenuCode.GDTransitionObjects1= [];
gdjs.StartMenuCode.GDTransitionObjects2= [];
gdjs.StartMenuCode.GDTransitionObjects3= [];
gdjs.StartMenuCode.GDTransitionObjects4= [];


gdjs.StartMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(1)) - 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartMenuCode.GDIntroTextObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}{for(var i = 0, len = gdjs.StartMenuCode.GDIntroTextObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDIntroTextObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getAsString());
}
}}

}


};gdjs.StartMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("IntroText"), gdjs.StartMenuCode.GDIntroTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDIntroTextObjects3.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDIntroTextObjects3[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDIntroTextObjects3[k] = gdjs.StartMenuCode.GDIntroTextObjects3[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDIntroTextObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IntroText"), gdjs.StartMenuCode.GDIntroTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDIntroTextObjects2.length;i<l;++i) {
    if ( !(gdjs.StartMenuCode.GDIntroTextObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDIntroTextObjects2[k] = gdjs.StartMenuCode.GDIntroTextObjects2[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDIntroTextObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartMenuCode.GDIntroTextObjects2 */
{for(var i = 0, len = gdjs.StartMenuCode.GDIntroTextObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDIntroTextObjects2[i].getBehavior("AutoTyping").ShowFullText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.StartMenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(1)) - 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpaceKey"), gdjs.StartMenuCode.GDSpaceKeyObjects3);
{for(var i = 0, len = gdjs.StartMenuCode.GDSpaceKeyObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDSpaceKeyObjects3[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(1)) - 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpaceKey"), gdjs.StartMenuCode.GDSpaceKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("WeiterButton"), gdjs.StartMenuCode.GDWeiterButtonObjects2);
{for(var i = 0, len = gdjs.StartMenuCode.GDSpaceKeyObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDSpaceKeyObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDWeiterButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDWeiterButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDWeiterButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDWeiterButtonObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.StartMenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28556468);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IntroText"), gdjs.StartMenuCode.GDIntroTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDIntroTextObjects2.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDIntroTextObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDIntroTextObjects2[k] = gdjs.StartMenuCode.GDIntroTextObjects2[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDIntroTextObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29119340);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IntroText"), gdjs.StartMenuCode.GDIntroTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDIntroTextObjects1.length;i<l;++i) {
    if ( !(gdjs.StartMenuCode.GDIntroTextObjects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDIntroTextObjects1[k] = gdjs.StartMenuCode.GDIntroTextObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDIntroTextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpaceKey"), gdjs.StartMenuCode.GDSpaceKeyObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDSpaceKeyObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDSpaceKeyObjects1[i].hide();
}
}}

}


};gdjs.StartMenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.StartMenuCode.GDEObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpaceKey"), gdjs.StartMenuCode.GDSpaceKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titel2"), gdjs.StartMenuCode.GDTitel2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WeiterButton"), gdjs.StartMenuCode.GDWeiterButtonObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDEObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDEObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 0, 1, 10, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Overworld");
}{for(var i = 0, len = gdjs.StartMenuCode.GDWeiterButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDWeiterButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDTitel2Objects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDTitel2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDTitel2Objects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDTitel2Objects1[i].activateBehavior("AutoTyping", false);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDSpaceKeyObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDSpaceKeyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDWeiterButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDWeiterButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Titel"), gdjs.StartMenuCode.GDTitelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDTitelObjects1.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDTitelObjects1[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDTitelObjects1[k] = gdjs.StartMenuCode.GDTitelObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDTitelObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Titel2"), gdjs.StartMenuCode.GDTitel2Objects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDTitel2Objects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDTitel2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDTitel2Objects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDTitel2Objects1[i].activateBehavior("AutoTyping", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartMenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDStartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDStartButtonObjects1[k] = gdjs.StartMenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28559916);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (1280), "", 0);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WeiterIntroButton"), gdjs.StartMenuCode.GDWeiterIntroButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDWeiterIntroButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDWeiterIntroButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDWeiterIntroButtonObjects1[k] = gdjs.StartMenuCode.GDWeiterIntroButtonObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDWeiterIntroButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28557260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroText"), gdjs.StartMenuCode.GDIntroTextObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (1280), "", 0);
}{for(var i = 0, len = gdjs.StartMenuCode.GDIntroTextObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDIntroTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(3);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 3);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WeiterButton"), gdjs.StartMenuCode.GDWeiterButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDWeiterButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDWeiterButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDWeiterButtonObjects1[k] = gdjs.StartMenuCode.GDWeiterButtonObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDWeiterButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29122140);
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
gdjs.StartMenuCode.GDTitelObjects3.length = 0;
gdjs.StartMenuCode.GDTitelObjects4.length = 0;
gdjs.StartMenuCode.GDTitel2Objects1.length = 0;
gdjs.StartMenuCode.GDTitel2Objects2.length = 0;
gdjs.StartMenuCode.GDTitel2Objects3.length = 0;
gdjs.StartMenuCode.GDTitel2Objects4.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects1.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects2.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects3.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects4.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects1.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects2.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects3.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects4.length = 0;
gdjs.StartMenuCode.GDControllsObjects1.length = 0;
gdjs.StartMenuCode.GDControllsObjects2.length = 0;
gdjs.StartMenuCode.GDControllsObjects3.length = 0;
gdjs.StartMenuCode.GDControllsObjects4.length = 0;
gdjs.StartMenuCode.GDPlayerObjects1.length = 0;
gdjs.StartMenuCode.GDPlayerObjects2.length = 0;
gdjs.StartMenuCode.GDPlayerObjects3.length = 0;
gdjs.StartMenuCode.GDPlayerObjects4.length = 0;
gdjs.StartMenuCode.GDKeysObjects1.length = 0;
gdjs.StartMenuCode.GDKeysObjects2.length = 0;
gdjs.StartMenuCode.GDKeysObjects3.length = 0;
gdjs.StartMenuCode.GDKeysObjects4.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects1.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects2.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects3.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects4.length = 0;
gdjs.StartMenuCode.GDDescEObjects1.length = 0;
gdjs.StartMenuCode.GDDescEObjects2.length = 0;
gdjs.StartMenuCode.GDDescEObjects3.length = 0;
gdjs.StartMenuCode.GDDescEObjects4.length = 0;
gdjs.StartMenuCode.GDEObjects1.length = 0;
gdjs.StartMenuCode.GDEObjects2.length = 0;
gdjs.StartMenuCode.GDEObjects3.length = 0;
gdjs.StartMenuCode.GDEObjects4.length = 0;
gdjs.StartMenuCode.GDDescFObjects1.length = 0;
gdjs.StartMenuCode.GDDescFObjects2.length = 0;
gdjs.StartMenuCode.GDDescFObjects3.length = 0;
gdjs.StartMenuCode.GDDescFObjects4.length = 0;
gdjs.StartMenuCode.GDDescF2Objects1.length = 0;
gdjs.StartMenuCode.GDDescF2Objects2.length = 0;
gdjs.StartMenuCode.GDDescF2Objects3.length = 0;
gdjs.StartMenuCode.GDDescF2Objects4.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects1.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects2.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects3.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects4.length = 0;
gdjs.StartMenuCode.GDWeiterIntroButtonObjects1.length = 0;
gdjs.StartMenuCode.GDWeiterIntroButtonObjects2.length = 0;
gdjs.StartMenuCode.GDWeiterIntroButtonObjects3.length = 0;
gdjs.StartMenuCode.GDWeiterIntroButtonObjects4.length = 0;
gdjs.StartMenuCode.GDIntroHeadlineObjects1.length = 0;
gdjs.StartMenuCode.GDIntroHeadlineObjects2.length = 0;
gdjs.StartMenuCode.GDIntroHeadlineObjects3.length = 0;
gdjs.StartMenuCode.GDIntroHeadlineObjects4.length = 0;
gdjs.StartMenuCode.GDIntroTextObjects1.length = 0;
gdjs.StartMenuCode.GDIntroTextObjects2.length = 0;
gdjs.StartMenuCode.GDIntroTextObjects3.length = 0;
gdjs.StartMenuCode.GDIntroTextObjects4.length = 0;
gdjs.StartMenuCode.GDSpaceKeyObjects1.length = 0;
gdjs.StartMenuCode.GDSpaceKeyObjects2.length = 0;
gdjs.StartMenuCode.GDSpaceKeyObjects3.length = 0;
gdjs.StartMenuCode.GDSpaceKeyObjects4.length = 0;
gdjs.StartMenuCode.GDTransitionObjects1.length = 0;
gdjs.StartMenuCode.GDTransitionObjects2.length = 0;
gdjs.StartMenuCode.GDTransitionObjects3.length = 0;
gdjs.StartMenuCode.GDTransitionObjects4.length = 0;

gdjs.StartMenuCode.eventsList4(runtimeScene);
gdjs.StartMenuCode.GDTitelObjects1.length = 0;
gdjs.StartMenuCode.GDTitelObjects2.length = 0;
gdjs.StartMenuCode.GDTitelObjects3.length = 0;
gdjs.StartMenuCode.GDTitelObjects4.length = 0;
gdjs.StartMenuCode.GDTitel2Objects1.length = 0;
gdjs.StartMenuCode.GDTitel2Objects2.length = 0;
gdjs.StartMenuCode.GDTitel2Objects3.length = 0;
gdjs.StartMenuCode.GDTitel2Objects4.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects1.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects2.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects3.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects4.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects1.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects2.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects3.length = 0;
gdjs.StartMenuCode.GDUI_9595ViewObjects4.length = 0;
gdjs.StartMenuCode.GDControllsObjects1.length = 0;
gdjs.StartMenuCode.GDControllsObjects2.length = 0;
gdjs.StartMenuCode.GDControllsObjects3.length = 0;
gdjs.StartMenuCode.GDControllsObjects4.length = 0;
gdjs.StartMenuCode.GDPlayerObjects1.length = 0;
gdjs.StartMenuCode.GDPlayerObjects2.length = 0;
gdjs.StartMenuCode.GDPlayerObjects3.length = 0;
gdjs.StartMenuCode.GDPlayerObjects4.length = 0;
gdjs.StartMenuCode.GDKeysObjects1.length = 0;
gdjs.StartMenuCode.GDKeysObjects2.length = 0;
gdjs.StartMenuCode.GDKeysObjects3.length = 0;
gdjs.StartMenuCode.GDKeysObjects4.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects1.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects2.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects3.length = 0;
gdjs.StartMenuCode.GDDescSpaceObjects4.length = 0;
gdjs.StartMenuCode.GDDescEObjects1.length = 0;
gdjs.StartMenuCode.GDDescEObjects2.length = 0;
gdjs.StartMenuCode.GDDescEObjects3.length = 0;
gdjs.StartMenuCode.GDDescEObjects4.length = 0;
gdjs.StartMenuCode.GDEObjects1.length = 0;
gdjs.StartMenuCode.GDEObjects2.length = 0;
gdjs.StartMenuCode.GDEObjects3.length = 0;
gdjs.StartMenuCode.GDEObjects4.length = 0;
gdjs.StartMenuCode.GDDescFObjects1.length = 0;
gdjs.StartMenuCode.GDDescFObjects2.length = 0;
gdjs.StartMenuCode.GDDescFObjects3.length = 0;
gdjs.StartMenuCode.GDDescFObjects4.length = 0;
gdjs.StartMenuCode.GDDescF2Objects1.length = 0;
gdjs.StartMenuCode.GDDescF2Objects2.length = 0;
gdjs.StartMenuCode.GDDescF2Objects3.length = 0;
gdjs.StartMenuCode.GDDescF2Objects4.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects1.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects2.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects3.length = 0;
gdjs.StartMenuCode.GDWeiterButtonObjects4.length = 0;
gdjs.StartMenuCode.GDWeiterIntroButtonObjects1.length = 0;
gdjs.StartMenuCode.GDWeiterIntroButtonObjects2.length = 0;
gdjs.StartMenuCode.GDWeiterIntroButtonObjects3.length = 0;
gdjs.StartMenuCode.GDWeiterIntroButtonObjects4.length = 0;
gdjs.StartMenuCode.GDIntroHeadlineObjects1.length = 0;
gdjs.StartMenuCode.GDIntroHeadlineObjects2.length = 0;
gdjs.StartMenuCode.GDIntroHeadlineObjects3.length = 0;
gdjs.StartMenuCode.GDIntroHeadlineObjects4.length = 0;
gdjs.StartMenuCode.GDIntroTextObjects1.length = 0;
gdjs.StartMenuCode.GDIntroTextObjects2.length = 0;
gdjs.StartMenuCode.GDIntroTextObjects3.length = 0;
gdjs.StartMenuCode.GDIntroTextObjects4.length = 0;
gdjs.StartMenuCode.GDSpaceKeyObjects1.length = 0;
gdjs.StartMenuCode.GDSpaceKeyObjects2.length = 0;
gdjs.StartMenuCode.GDSpaceKeyObjects3.length = 0;
gdjs.StartMenuCode.GDSpaceKeyObjects4.length = 0;
gdjs.StartMenuCode.GDTransitionObjects1.length = 0;
gdjs.StartMenuCode.GDTransitionObjects2.length = 0;
gdjs.StartMenuCode.GDTransitionObjects3.length = 0;
gdjs.StartMenuCode.GDTransitionObjects4.length = 0;


return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
