gdjs.InterviewCode = {};
gdjs.InterviewCode.localVariables = [];
gdjs.InterviewCode.GDDialogueObjects1_2final = [];

gdjs.InterviewCode.GDRunObjects1_2final = [];

gdjs.InterviewCode.GDDialogueObjects1= [];
gdjs.InterviewCode.GDDialogueObjects2= [];
gdjs.InterviewCode.GDDialogueObjects3= [];
gdjs.InterviewCode.GDDialogueObjects4= [];
gdjs.InterviewCode.GDGrassObjects1= [];
gdjs.InterviewCode.GDGrassObjects2= [];
gdjs.InterviewCode.GDGrassObjects3= [];
gdjs.InterviewCode.GDGrassObjects4= [];
gdjs.InterviewCode.GDAttack1Objects1= [];
gdjs.InterviewCode.GDAttack1Objects2= [];
gdjs.InterviewCode.GDAttack1Objects3= [];
gdjs.InterviewCode.GDAttack1Objects4= [];
gdjs.InterviewCode.GDAttack2Objects1= [];
gdjs.InterviewCode.GDAttack2Objects2= [];
gdjs.InterviewCode.GDAttack2Objects3= [];
gdjs.InterviewCode.GDAttack2Objects4= [];
gdjs.InterviewCode.GDRunObjects1= [];
gdjs.InterviewCode.GDRunObjects2= [];
gdjs.InterviewCode.GDRunObjects3= [];
gdjs.InterviewCode.GDRunObjects4= [];
gdjs.InterviewCode.GDBackgroundObjects1= [];
gdjs.InterviewCode.GDBackgroundObjects2= [];
gdjs.InterviewCode.GDBackgroundObjects3= [];
gdjs.InterviewCode.GDBackgroundObjects4= [];
gdjs.InterviewCode.GDTextBorderObjects1= [];
gdjs.InterviewCode.GDTextBorderObjects2= [];
gdjs.InterviewCode.GDTextBorderObjects3= [];
gdjs.InterviewCode.GDTextBorderObjects4= [];
gdjs.InterviewCode.GDInterviewObjects1= [];
gdjs.InterviewCode.GDInterviewObjects2= [];
gdjs.InterviewCode.GDInterviewObjects3= [];
gdjs.InterviewCode.GDInterviewObjects4= [];
gdjs.InterviewCode.GDInterview2Objects1= [];
gdjs.InterviewCode.GDInterview2Objects2= [];
gdjs.InterviewCode.GDInterview2Objects3= [];
gdjs.InterviewCode.GDInterview2Objects4= [];
gdjs.InterviewCode.GDSpaceKeyObjects1= [];
gdjs.InterviewCode.GDSpaceKeyObjects2= [];
gdjs.InterviewCode.GDSpaceKeyObjects3= [];
gdjs.InterviewCode.GDSpaceKeyObjects4= [];
gdjs.InterviewCode.GDNewSpriteObjects1= [];
gdjs.InterviewCode.GDNewSpriteObjects2= [];
gdjs.InterviewCode.GDNewSpriteObjects3= [];
gdjs.InterviewCode.GDNewSpriteObjects4= [];
gdjs.InterviewCode.GDTransitionObjects1= [];
gdjs.InterviewCode.GDTransitionObjects2= [];
gdjs.InterviewCode.GDTransitionObjects3= [];
gdjs.InterviewCode.GDTransitionObjects4= [];


gdjs.InterviewCode.asyncCallback29225644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InterviewCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.InterviewCode.GDGrassObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.InterviewCode.GDGrassObjects2.length !== 0 ? gdjs.InterviewCode.GDGrassObjects2[0] : null), true, "Background", 0);
}gdjs.InterviewCode.localVariables.length = 0;
}
gdjs.InterviewCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.InterviewCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.InterviewCode.asyncCallback29225644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InterviewCode.eventsList1 = function(runtimeScene) {

};gdjs.InterviewCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.InterviewCode.GDDialogueObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InterviewCode.GDDialogueObjects3.length;i<l;++i) {
    if ( gdjs.InterviewCode.GDDialogueObjects3[i].getBehavior("AutoTyping").IsFinished(null) ) {
        isConditionTrue_0 = true;
        gdjs.InterviewCode.GDDialogueObjects3[k] = gdjs.InterviewCode.GDDialogueObjects3[i];
        ++k;
    }
}
gdjs.InterviewCode.GDDialogueObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29234060);
}
}
if (isConditionTrue_0) {
{gdjs.InterviewCode.localVariables[0].getFromIndex(0).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = gdjs.InterviewCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() - 1);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29228388);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.InterviewCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("SpaceKey"), gdjs.InterviewCode.GDSpaceKeyObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.InterviewCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.InterviewCode.GDDialogueObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString());
}
}{for(var i = 0, len = gdjs.InterviewCode.GDSpaceKeyObjects3.length ;i < len;++i) {
    gdjs.InterviewCode.GDSpaceKeyObjects3[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.InterviewCode.GDDialogueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !gdjs.InterviewCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InterviewCode.GDDialogueObjects2.length;i<l;++i) {
    if ( gdjs.InterviewCode.GDDialogueObjects2[i].getBehavior("AutoTyping").HasJustTyped(null) ) {
        isConditionTrue_0 = true;
        gdjs.InterviewCode.GDDialogueObjects2[k] = gdjs.InterviewCode.GDDialogueObjects2[i];
        ++k;
    }
}
gdjs.InterviewCode.GDDialogueObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29242612);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.InterviewCode.GDDialogueObjects2 */
{for(var i = 0, len = gdjs.InterviewCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.InterviewCode.GDDialogueObjects2[i].getBehavior("AutoTyping").ShowFullText(null);
}
}{gdjs.evtTools.debuggerTools.log("2", "info", "1");
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}}

}


};gdjs.InterviewCode.asyncCallback29249916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InterviewCode.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}gdjs.InterviewCode.localVariables.length = 0;
}
gdjs.InterviewCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.InterviewCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.InterviewCode.asyncCallback29249916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InterviewCode.eventsList4 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("UpdateState_Allowed", variable);
}
gdjs.InterviewCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29243524);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.InterviewCode.eventsList2(runtimeScene);} //End of subevents
}
gdjs.InterviewCode.localVariables.pop();

}


{

gdjs.InterviewCode.GDDialogueObjects1.length = 0;

gdjs.InterviewCode.GDRunObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{gdjs.InterviewCode.GDDialogueObjects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.InterviewCode.GDDialogueObjects2);
for (var i = 0, k = 0, l = gdjs.InterviewCode.GDDialogueObjects2.length;i<l;++i) {
    if ( gdjs.InterviewCode.GDDialogueObjects2[i].getBehavior("AutoTyping").IsFinished(null) ) {
        isConditionTrue_2 = true;
        gdjs.InterviewCode.GDDialogueObjects2[k] = gdjs.InterviewCode.GDDialogueObjects2[i];
        ++k;
    }
}
gdjs.InterviewCode.GDDialogueObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.InterviewCode.GDDialogueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.InterviewCode.GDDialogueObjects1_2final.indexOf(gdjs.InterviewCode.GDDialogueObjects2[j]) === -1 )
            gdjs.InterviewCode.GDDialogueObjects1_2final.push(gdjs.InterviewCode.GDDialogueObjects2[j]);
    }
}
}
{
{isConditionTrue_2 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
gdjs.copyArray(gdjs.InterviewCode.GDDialogueObjects1_2final, gdjs.InterviewCode.GDDialogueObjects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.InterviewCode.GDRunObjects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Run"), gdjs.InterviewCode.GDRunObjects2);
for (var i = 0, k = 0, l = gdjs.InterviewCode.GDRunObjects2.length;i<l;++i) {
    if ( gdjs.InterviewCode.GDRunObjects2[i].IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.InterviewCode.GDRunObjects2[k] = gdjs.InterviewCode.GDRunObjects2[i];
        ++k;
    }
}
gdjs.InterviewCode.GDRunObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.InterviewCode.GDRunObjects2.length; j < jLen ; ++j) {
        if ( gdjs.InterviewCode.GDRunObjects1_2final.indexOf(gdjs.InterviewCode.GDRunObjects2[j]) === -1 )
            gdjs.InterviewCode.GDRunObjects1_2final.push(gdjs.InterviewCode.GDRunObjects2[j]);
    }
}
}
{
isConditionTrue_2 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
gdjs.copyArray(gdjs.InterviewCode.GDRunObjects1_2final, gdjs.InterviewCode.GDRunObjects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.InterviewCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.InterviewCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.InterviewCode.GDTransitionObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.InterviewCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.InterviewCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 255, null);
}
}
{ //Subevents
gdjs.InterviewCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.InterviewCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.InterviewCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.InterviewCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.InterviewCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Backward", 255, null);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 6.5, "Background", 0);
}
{ //Subevents
gdjs.InterviewCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


gdjs.InterviewCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.InterviewCode.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpaceKey"), gdjs.InterviewCode.GDSpaceKeyObjects1);
{gdjs.evtTools.debuggerTools.log(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), "info", "1");
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.InterviewCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.InterviewCode.GDDialogueObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString()).getChild(0).getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString())));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{for(var i = 0, len = gdjs.InterviewCode.GDSpaceKeyObjects1.length ;i < len;++i) {
    gdjs.InterviewCode.GDSpaceKeyObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.InterviewCode.GDDialogueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InterviewCode.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs.InterviewCode.GDDialogueObjects1[i].getBehavior("AutoTyping").IsFinished(null) ) {
        isConditionTrue_0 = true;
        gdjs.InterviewCode.GDDialogueObjects1[k] = gdjs.InterviewCode.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs.InterviewCode.GDDialogueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() - 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29226620);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpaceKey"), gdjs.InterviewCode.GDSpaceKeyObjects1);
{for(var i = 0, len = gdjs.InterviewCode.GDSpaceKeyObjects1.length ;i < len;++i) {
    gdjs.InterviewCode.GDSpaceKeyObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextBorder"), gdjs.InterviewCode.GDTextBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InterviewCode.GDTextBorderObjects1.length;i<l;++i) {
    if ( gdjs.InterviewCode.GDTextBorderObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InterviewCode.GDTextBorderObjects1[k] = gdjs.InterviewCode.GDTextBorderObjects1[i];
        ++k;
    }
}
gdjs.InterviewCode.GDTextBorderObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.InterviewCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.InterviewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InterviewCode.GDDialogueObjects1.length = 0;
gdjs.InterviewCode.GDDialogueObjects2.length = 0;
gdjs.InterviewCode.GDDialogueObjects3.length = 0;
gdjs.InterviewCode.GDDialogueObjects4.length = 0;
gdjs.InterviewCode.GDGrassObjects1.length = 0;
gdjs.InterviewCode.GDGrassObjects2.length = 0;
gdjs.InterviewCode.GDGrassObjects3.length = 0;
gdjs.InterviewCode.GDGrassObjects4.length = 0;
gdjs.InterviewCode.GDAttack1Objects1.length = 0;
gdjs.InterviewCode.GDAttack1Objects2.length = 0;
gdjs.InterviewCode.GDAttack1Objects3.length = 0;
gdjs.InterviewCode.GDAttack1Objects4.length = 0;
gdjs.InterviewCode.GDAttack2Objects1.length = 0;
gdjs.InterviewCode.GDAttack2Objects2.length = 0;
gdjs.InterviewCode.GDAttack2Objects3.length = 0;
gdjs.InterviewCode.GDAttack2Objects4.length = 0;
gdjs.InterviewCode.GDRunObjects1.length = 0;
gdjs.InterviewCode.GDRunObjects2.length = 0;
gdjs.InterviewCode.GDRunObjects3.length = 0;
gdjs.InterviewCode.GDRunObjects4.length = 0;
gdjs.InterviewCode.GDBackgroundObjects1.length = 0;
gdjs.InterviewCode.GDBackgroundObjects2.length = 0;
gdjs.InterviewCode.GDBackgroundObjects3.length = 0;
gdjs.InterviewCode.GDBackgroundObjects4.length = 0;
gdjs.InterviewCode.GDTextBorderObjects1.length = 0;
gdjs.InterviewCode.GDTextBorderObjects2.length = 0;
gdjs.InterviewCode.GDTextBorderObjects3.length = 0;
gdjs.InterviewCode.GDTextBorderObjects4.length = 0;
gdjs.InterviewCode.GDInterviewObjects1.length = 0;
gdjs.InterviewCode.GDInterviewObjects2.length = 0;
gdjs.InterviewCode.GDInterviewObjects3.length = 0;
gdjs.InterviewCode.GDInterviewObjects4.length = 0;
gdjs.InterviewCode.GDInterview2Objects1.length = 0;
gdjs.InterviewCode.GDInterview2Objects2.length = 0;
gdjs.InterviewCode.GDInterview2Objects3.length = 0;
gdjs.InterviewCode.GDInterview2Objects4.length = 0;
gdjs.InterviewCode.GDSpaceKeyObjects1.length = 0;
gdjs.InterviewCode.GDSpaceKeyObjects2.length = 0;
gdjs.InterviewCode.GDSpaceKeyObjects3.length = 0;
gdjs.InterviewCode.GDSpaceKeyObjects4.length = 0;
gdjs.InterviewCode.GDNewSpriteObjects1.length = 0;
gdjs.InterviewCode.GDNewSpriteObjects2.length = 0;
gdjs.InterviewCode.GDNewSpriteObjects3.length = 0;
gdjs.InterviewCode.GDNewSpriteObjects4.length = 0;
gdjs.InterviewCode.GDTransitionObjects1.length = 0;
gdjs.InterviewCode.GDTransitionObjects2.length = 0;
gdjs.InterviewCode.GDTransitionObjects3.length = 0;
gdjs.InterviewCode.GDTransitionObjects4.length = 0;

gdjs.InterviewCode.eventsList5(runtimeScene);
gdjs.InterviewCode.GDDialogueObjects1.length = 0;
gdjs.InterviewCode.GDDialogueObjects2.length = 0;
gdjs.InterviewCode.GDDialogueObjects3.length = 0;
gdjs.InterviewCode.GDDialogueObjects4.length = 0;
gdjs.InterviewCode.GDGrassObjects1.length = 0;
gdjs.InterviewCode.GDGrassObjects2.length = 0;
gdjs.InterviewCode.GDGrassObjects3.length = 0;
gdjs.InterviewCode.GDGrassObjects4.length = 0;
gdjs.InterviewCode.GDAttack1Objects1.length = 0;
gdjs.InterviewCode.GDAttack1Objects2.length = 0;
gdjs.InterviewCode.GDAttack1Objects3.length = 0;
gdjs.InterviewCode.GDAttack1Objects4.length = 0;
gdjs.InterviewCode.GDAttack2Objects1.length = 0;
gdjs.InterviewCode.GDAttack2Objects2.length = 0;
gdjs.InterviewCode.GDAttack2Objects3.length = 0;
gdjs.InterviewCode.GDAttack2Objects4.length = 0;
gdjs.InterviewCode.GDRunObjects1.length = 0;
gdjs.InterviewCode.GDRunObjects2.length = 0;
gdjs.InterviewCode.GDRunObjects3.length = 0;
gdjs.InterviewCode.GDRunObjects4.length = 0;
gdjs.InterviewCode.GDBackgroundObjects1.length = 0;
gdjs.InterviewCode.GDBackgroundObjects2.length = 0;
gdjs.InterviewCode.GDBackgroundObjects3.length = 0;
gdjs.InterviewCode.GDBackgroundObjects4.length = 0;
gdjs.InterviewCode.GDTextBorderObjects1.length = 0;
gdjs.InterviewCode.GDTextBorderObjects2.length = 0;
gdjs.InterviewCode.GDTextBorderObjects3.length = 0;
gdjs.InterviewCode.GDTextBorderObjects4.length = 0;
gdjs.InterviewCode.GDInterviewObjects1.length = 0;
gdjs.InterviewCode.GDInterviewObjects2.length = 0;
gdjs.InterviewCode.GDInterviewObjects3.length = 0;
gdjs.InterviewCode.GDInterviewObjects4.length = 0;
gdjs.InterviewCode.GDInterview2Objects1.length = 0;
gdjs.InterviewCode.GDInterview2Objects2.length = 0;
gdjs.InterviewCode.GDInterview2Objects3.length = 0;
gdjs.InterviewCode.GDInterview2Objects4.length = 0;
gdjs.InterviewCode.GDSpaceKeyObjects1.length = 0;
gdjs.InterviewCode.GDSpaceKeyObjects2.length = 0;
gdjs.InterviewCode.GDSpaceKeyObjects3.length = 0;
gdjs.InterviewCode.GDSpaceKeyObjects4.length = 0;
gdjs.InterviewCode.GDNewSpriteObjects1.length = 0;
gdjs.InterviewCode.GDNewSpriteObjects2.length = 0;
gdjs.InterviewCode.GDNewSpriteObjects3.length = 0;
gdjs.InterviewCode.GDNewSpriteObjects4.length = 0;
gdjs.InterviewCode.GDTransitionObjects1.length = 0;
gdjs.InterviewCode.GDTransitionObjects2.length = 0;
gdjs.InterviewCode.GDTransitionObjects3.length = 0;
gdjs.InterviewCode.GDTransitionObjects4.length = 0;


return;

}

gdjs['InterviewCode'] = gdjs.InterviewCode;
